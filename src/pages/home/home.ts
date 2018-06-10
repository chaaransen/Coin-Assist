import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { CoinDetailPage } from '../coin-detail/coin-detail';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeWhile';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { PRICE_REFRESH, TOP, PRICE_REFRESH_FAIL } from '../../constants/api-constants';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exchanges: any;
  coins: any;
  apiUrls: any;
  selExchange: any;
  alive: boolean;
  pageName: string = "home page";
  updateFlag: boolean = false;
  networkFlag: boolean;

  constructor(public navCtrl: NavController, public api: ApiDataProvider, public platform: Platform) {
    // console.log("Constructor - Home page");

    this.alive = true;
  }

  ngOnInit() {
    console.log("ngOnInit - home called");
    this.api.checkNetworkConnection().then(val => {
      this.networkFlag = val;
      if (val) {
        this.api.logAnalytics(this.pageName);
        this.setApiUrl();
        this.api.instructionToast(this.pageName, 0);
      }
    });
  }

  setApiUrl() {
    this.api.getApiUrlStorage().then(res => {
      // console.log("Stored Url value");
      // console.log(res);
      if (res != null) {
        this.apiUrls = res;
      }
      else {
        // console.log("constant Api urls called");
        this.updateFlag = true;
        this.apiUrls = this.api.getConstantApiUrl();
      }
      // console.log("Home Compo Value return");

      // console.log(this.apiUrls);

      this.api.setApiUrl(this.apiUrls);

      this.populateView();

      //Automatic fetching of new data every 20 seconds
      var refresher = IntervalObservable.create(20000);
      refresher.takeWhile(() => this.alive) // only fires when component is alive
        .subscribe(() => {

          this.networkFlag = this.api.networkFlag;
          console.log("Auto Refresh Network Flag " + this.networkFlag);
          if (this.networkFlag) {
            this.populateView();
          }
        });
    });
  }

  ionViewDidLeave() {

    this.alive = false;
    // console.log("Home page - left", this.alive);
  }

  ionViewWillEnter() {
    this.alive = true;
    // console.log("Home page -View Entered", this.alive);

  }

  doRefresh(refresher) {
    //update flag - if api fetched from constants file
    this.networkFlag = this.api.networkFlag;
    console.log("Refresh Network Flag " + this.networkFlag);
    if (this.networkFlag) {
      if (this.updateFlag) {
        this.setApiUrl();
        this.updateFlag = false;
      }
      this.populateView();
      setTimeout(() => {
        this.api.showToast(PRICE_REFRESH, TOP);
        refresher.complete();
      }, 800);
    } else {
      this.api.showToast(PRICE_REFRESH_FAIL, TOP);
    }
  }

  populateView() {
    // console.log(this.apiUrls.exchange);
    // console.log("Populating Home page");
    if (this.selExchange == undefined && this.apiUrls != undefined) {
      this.exchanges = Object.keys(this.apiUrls.exchange);
      this.selExchange = this.exchanges[0];
      // console.log("Selected Exchange", this.selExchange);

    }
    this.selectedExchange(this.selExchange);
  }

  public selectedExchange(sel: any) {
    // console.log("Coin List", this.apiUrls.exchange[sel].coinList);

    this.api.getMarketOverviewData(sel, this.apiUrls.exchange[sel].coinList).subscribe(res => {
      // console.log("first data - exchange data", res[0]);
      // console.log("second data - coin market Cap data", res[1]);
      // console.log("third data - coindesk data", res[2]);
      this.coins = this.api.processExchangeData(sel, res[0], res[1], res[2]);
      // console.log("processed exchange data");
      // console.log(this.coins);

    },
      err => {
        console.log(err);

      });
  }

  navCoinDetailPage(coin: any) {
    this.navCtrl.push(CoinDetailPage, { "coin": coin, "exchange": this.selExchange });
  }
}
