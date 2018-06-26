import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { QuantityCalcPage } from '../quantity-calc/quantity-calc';
import { CoinDetail } from '../../models/coin-detail';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import * as Constants from '../../constants/api-constants'


@Component({
  selector: 'page-coin-detail',
  templateUrl: 'coin-detail.html'
})
export class CoinDetailPage {

  exchange: any;
  public coinDetail: CoinDetail;
  rangeRegion: any;
  referralLink: string;
  apis: any;
  alive: boolean;
  pageName: string = Constants.COIN_DETAIL_PAGE;
  networkFlag: boolean;

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider) {

    // console.log(coin);
    this.alive = true;

  }

  ngOnInit() {
    this.networkFlag = this.api.networkFlag;

    if (this.networkFlag) {
      let coin = this.navParam.get("coin");
      this.exchange = this.navParam.get("exchange");
      this.initRange(coin);
      // this.api.trackPage(this.pageName);
      this.api.logAnalytics(this.pageName);
      this.referralLink = this.api.apiUrls.exchange[this.exchange].referral;
      // console.log("referral Link", this.referralLink);
      this.populateView();
      var refresher = IntervalObservable.create(20000);
      refresher.takeWhile(() => this.alive) // only fires when component is alive
        .subscribe(() => {
          this.networkFlag = this.api.networkFlag;
          // console.log("Auto Refresh Network Flag - coinDetail" + this.networkFlag);
          if (this.networkFlag) {
            this.populateView();
          }
        });

      this.api.instructionToast(this.pageName, 2000, false);
    }
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
    } else
      if (event.direction === 4) {
        this.navCtrl.parent.select(0);
      }
  }


  ionViewDidLeave() {

    this.alive = false;
    // console.log("Detail  page - left", this.alive);
  }

  ionViewWillEnter() {
    this.alive = true;

    this.networkFlag = this.api.networkFlag;
    // console.log("View enter Network Flag " + this.networkFlag);
    if (this.networkFlag) {
      this.populateView();
    }
    // console.log("Detail page -View Entered", this.alive);
  }

  public openReferralLink() {
    window.open(this.referralLink, '_system', 'location=yes');
  }

  initRange(coin: any) {
    this.rangeRegion = {
      upper: coin.max.no,
      lower: coin.min.no
    }
    // console.log(this.rangeRegion);
    coin.step = this.api.rangeStepCalculator(coin.min.no, coin.max.no);
    this.coinDetail = coin;

    // console.log("coin detail");
    // console.log(this.coinDetail);

  }

  doRefresh(refresher) {

    this.networkFlag = this.api.networkFlag;

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
    // console.log("Detail Populating");

    this.selectedExchange(this.exchange);
  }

  public selectedExchange(sel: any) {

    this.api.getMarketOverviewData(sel, [this.coinDetail.coinCode]).subscribe(res => {
      // console.log("COIN DETAIL");
      // console.log("first data - exchange data");
      // console.log(res[0]);;
      // console.log("second data - coin market Cap data")
      // console.log(res[1]);
      // console.log("third data - coindesk data");
      // console.log(res[2]);
      // console.log("exchange -", sel);

      var coinArray = this.api.processExchangeData(sel, res[0], res[1], res[2]);
      // console.log("coin array detail", coinArray);
      this.coinDetail = coinArray[0];
      this.initRange(this.coinDetail);
      // console.log(this.coinDetail, "coinDetail Processed Detail");
    },
      err => {
        console.log(err);

      });
  }

  public gotoCalcQuantityPage() {
    // console.log("Quantity button clicked");

    this.navCtrl.push(QuantityCalcPage, { "coin": this.coinDetail.coinName, "exchange": this.exchange });
  }
}
