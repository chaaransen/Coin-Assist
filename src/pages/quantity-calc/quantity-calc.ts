import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { CoinDetail } from '../../models/coin-detail';
import { ValueDetail } from '../../models/value-detail';
import { RangeValue } from '../../models/range-value';

@Component({
  selector: 'page-quantity-calc',
  templateUrl: 'quantity-calc.html'
})
export class QuantityCalcPage {

  exchanges: any;
  coins: CoinDetail[];;
  selExchange: any;
  public selCoin: CoinDetail = new CoinDetail();
  apis: any = {};
  public range: RangeValue;
  amount: number = undefined;
  public quantity: number;

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider) {
    // console.log("qty constructor called");

    this.initializeObjects();
    this.selExchange = navParam.get("exchange");
    this.selCoin.coinName = navParam.get("coin");

    // console.log(this.selCoin, " sel coin qty");
    // console.log(this.selExchange, " sel Exchange qty");

    this.apis = this.api.apiUrls.exchange;
    this.exchanges = Object.keys(this.apis);

  }

  initializeObjects() {
    this.range = new RangeValue();
    this.range.minus20 = new ValueDetail();
    this.range.plus20 = new ValueDetail();
    this.range.rate = new ValueDetail();
  }

  ngOnInit() {
    // console.log("ng oninit called");

    this.populateView();
  }

  doRefresh(refresher) {
    console.log(this.selCoin.coinName,"sel Coin Name - Refresh");
    this.populateView();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  populateView() {
    // console.log("populate view called");

    this.populateCoins(this.selExchange);
  }

  populateCoins(exchange: any) {
    this.api.getExchangeData(exchange, true).subscribe(res => {
      this.coins = this.api.processExchangeData(exchange, res, undefined, undefined);
      // console.log(this.coins, "coins in qty");
      this.populateCoinValues(this.selCoin.coinName);

    });
  }

  public populateCoinValues(selCoin: any) {
    console.log(this.selCoin.coinName,"sel Coin Name - Refresh Populate");
    
    this.selCoin = this.coins.find(coin => this.selCoin.coinName == coin.coinName);
    console.log(this.selCoin, "selected coin - QTY");
    this.updateRange(this.selCoin.buy.no);

    // console.log(this.selCoin, " coin selected");
    // console.log(this.coins, "all coins");


  }

  public updateRange(rate: number) {
    this.range.rate.no = rate;
    this.formateRate();
    this.range = this.api.plusMinus20Percent(this.range, this.range.rate.no);

  }

  formateRate() {
    // console.log(this.range.rate.no, 'nubmer');

    this.range.rate.formatted = this.api.numberFormatter(+this.range.rate.no);
    // console.log(this.range.rate.formatted);

  }

  public calcQuantity() {
    if (this.amount != undefined) {
      this.quantity = this.amount / this.range.rate.no;
    }
  }

  public rangeChanged() {
    this.formateRate();
    this.calcQuantity();
  }

  public calcAmount() {
    this.amount = this.quantity * this.range.rate.no;
  }
}
