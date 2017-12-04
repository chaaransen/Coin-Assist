import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ApiDataProvider } from '../../providers/api-data/api-data';

@Component({
  selector: 'page-coin-detail',
  templateUrl: 'coin-detail.html'
})
export class CoinDetailPage {

  coinDetail: any;
  rangeRegion: any;

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider) {
    let coin = this.navParam.get("coin");
    console.log(coin);

    this.initRange(coin);
  }

  initRange(coin: any) {
    this.rangeRegion = {
      upper: coin.max.no,
      lower: coin.min.no
    }
    console.log(this.rangeRegion);
    coin.step = this.api.rangeStepCalculator(coin.min.no, coin.max.no);
    coin = this.api.plusMinus30Percent(coin, coin.market.no);
    this.coinDetail = coin;

    console.log("coin detail");
    console.log(this.coinDetail);

  }

  change() {
    console.log(this.rangeRegion);
  }
}
