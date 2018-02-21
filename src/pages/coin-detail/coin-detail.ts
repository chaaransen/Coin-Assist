import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import * as Constants from '../../constants/api-constants';
import { QuantityCalcPage } from '../quantity-calc/quantity-calc';
import { CoinDetail } from '../../models/coin-detail';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider, private toastCtrl: ToastController) {
    let coin = this.navParam.get("coin");
    this.exchange = this.navParam.get("exchange");
    // console.log(coin);

    this.initRange(coin);
  }

  ngOnInit() {
    this.referralLink = this.api.apiUrls.exchange[this.exchange].referral;
    // console.log("referral Link", this.referralLink);
    this.populateView();
    var refresher = IntervalObservable.create(20000);
    refresher.takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.populateView();
      });

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Latest Price Refreshed',
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  ionViewDidLeave() {

    this.alive = false;
    // console.log("Detail  page - left", this.alive);
  }

  ionViewWillEnter() {
    this.alive = true;
    this.populateView();
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

  change() {
    // console.log(this.rangeRegion);
  }

  doRefresh(refresher) {
    this.populateView();
    setTimeout(() => {
      this.presentToast();
      refresher.complete();
    }, 800);
  }

  populateView() {
    // console.log("Detail Populating");

    this.selectedExchange(this.exchange);
  }

  public selectedExchange(sel: any) {

    let coinName = this.api.getCoinName(this.coinDetail.coinCode);
    this.api.getMarketOverviewData(sel, coinName).subscribe(res => {
      // console.log("COIN DETAIL");
      // console.log("first data - exchange data");
      // console.log(res[0]);
      // console.log("second data - coin market Cap data");
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
