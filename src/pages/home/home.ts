import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { CoinDetailPage } from '../coin-detail/coin-detail';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeWhile';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
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
  pageName: string = Constants.HOME_PAGE;
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
      // console.log("Network flag - Home page ", this.networkFlag);

      this.networkFlag = val;
      if (this.networkFlag) {
        // console.log("network present - fetching api");

        this.api.logAnalytics(this.pageName);
        this.setApiUrl();
        this.api.instructionToast(this.pageName, 0);
        if (this.api.rateNotif == true) {
          this.api.showToast(Constants.RATE_REWARD_MSG, Constants.TOP);
        }
      } else {
        this.api.showToast(Constants.NO_INTERNET, Constants.TOP);
      }
    });
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

  setApiUrl() {
    // console.log("Setting api urls");

    this.api.getApiUrl().then(apiUrl => {
      // console.log("Response API url ", apiUrl);

      this.apiUrls = apiUrl;
      this.populateView();

      //Automatic fetching of new data every 20 seconds
      var refresher = IntervalObservable.create(20000);
      refresher.takeWhile(() => this.alive) // only fires when component is alive
        .subscribe(() => {
          this.networkFlag = this.api.networkFlag;
          // console.log("Auto Refresh Network Flag " + this.networkFlag);
          if (this.networkFlag) {
            this.apiUrls = this.api.apiUrls;
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
    // console.log("ion view will enter");

    this.alive = true;
    this.networkFlag = this.api.networkFlag;
    if (!this.firstEntryFlag && this.networkFlag && this.apiUrls == undefined) {
      this.ngOnInit();
    }
    // console.log("Home page -View Entered", this.alive);
    // console.log("Home page view will enter ", this.networkFlag);

  }

  doRefresh(refresher) {
    //update flag - if api fetched from constants file
    this.networkFlag = this.api.networkFlag;
    // console.log("Refresh Network Flag " + this.networkFlag);
    if (this.networkFlag) {
      this.apiUrls = this.api.apiUrls;
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
    this.populateForExchange(this.selExchange);
  }

  public selectedExchange(sel: any) {
    this.coins = undefined;
    this.populateForExchange(sel);
  }


  public populateForExchange(sel: any) {
    // console.log("Coin List", this.apiUrls.exchange[sel].coinList);
    this.api.getMarketOverviewData(sel, this.apiUrls.exchange[sel].coinList).subscribe(res => {
      // console.log("first data - exchange data", res[0]);
      // console.log("second data - coin market Cap data", res[1]);
      // console.log("third data - coindesk data", res[2]);

      let rawCoinList: Array<any> = this.api.processExchangeData(sel, res[0], res[1], res[2]);

      function compare(a, b) {
        if (a.coinName < b.coinName || a.coinName == "Bitcoin")
          return -1;
        if (a.coinName > b.coinName)
          return 1;
        return 0;
      }

      if (rawCoinList != undefined) {
        rawCoinList.sort(compare);
      }
      else {
        this.coins = rawCoinList;
      }

      this.coins = rawCoinList
      // console.log("processed exchange data");
      console.log(this.coins);

    },
      err => {
        console.log(err);

      });
  }

  navCoinDetailPage(coin: any) {
    this.navCtrl.push(CoinDetailPage, { "coin": coin, "exchange": this.selExchange });
  }
}
