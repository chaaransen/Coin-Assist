import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import * as Constants from '../../constants/api-constants';
import { QuantityCalcPage } from '../quantity-calc/quantity-calc';
import { CoinDetail } from '../../models/coin-detail';

@Component({
  selector: 'page-coin-detail',
  templateUrl: 'coin-detail.html'
})
export class CoinDetailPage {

  exchange: any;
  coinDetail: CoinDetail;
  rangeRegion: any;

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider) {
    let coin = this.navParam.get("coin");
    this.exchange = this.navParam.get("exchange");
    // console.log(coin);

    this.initRange(coin);
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
      refresher.complete();
    }, 800);
  }

  populateView() {
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
      var coinArray = this.api.processExchangeData(sel, res[0], res[1], res[2]);
      this.coinDetail = coinArray[0];
      this.initRange(this.coinDetail);
      console.log(this.coinDetail, "coinDetail Processed Detail");

    },
      err => {
        console.log(err);

      });
  }

  public gotoCalcQuantityPage() {
    this.navCtrl.push(QuantityCalcPage, { "coin": this.coinDetail.coinName, "exchange": this.exchange });
  }
}
