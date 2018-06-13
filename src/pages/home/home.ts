import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { CoinDetailPage } from '../coin-detail/coin-detail';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeWhile';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Network } from '@ionic-native/network';
import * as Constants from '../../constants/api-constants'

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
  networkFlag: boolean = true;
  firstEntryFlag: boolean = true;

  constructor(public navCtrl: NavController, public api: ApiDataProvider, public platform: Platform) {
    // console.log("Constructor - Home page");
    this.alive = true;
  }

  ngOnInit() {
    // console.log("ngOnInit - home called");
    this.firstEntryFlag = false;
    this.api.checkNetworkConnection().then(val => {
      this.networkFlag = val;
      if (this.networkFlag) {
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
        this.api.fetchApiUrl().then(res => {
          // console.log("fetching Api urls called", res);
          this.apiUrls = res;
          this.api.storeApiUrl(this.apiUrls);
        }).catch(err => {
          // console.log("constant Api urls called", err);
          this.apiUrls = this.api.getConstantApiUrl();
        });
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
          // console.log("Auto Refresh Network Flag " + this.networkFlag);
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
    this.networkFlag = this.api.networkFlag;
    if (!this.firstEntryFlag && this.networkFlag && this.apiUrls == undefined) {
      this.ngOnInit();
    }
    // console.log("Home page -View Entered", this.alive);
  }

  doRefresh(refresher) {
    //update flag - if api fetched from constants file
    this.networkFlag = this.api.networkFlag;
    // console.log("Refresh Network Flag " + this.networkFlag);
    if (this.networkFlag) {
      this.populateView();
      setTimeout(() => {
        this.api.showToast(Constants.PRICE_REFRESH, Constants.TOP);
        refresher.complete();
      }, 800);
    } else {
      refresher.complete();
      this.api.showToast(Constants.PRICE_REFRESH_FAIL, Constants.TOP);
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
