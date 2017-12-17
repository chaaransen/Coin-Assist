import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { CoinDetail } from '../../models/coin-detail';
import { ValueDetail } from '../../models/value-detail';
import { Utilities } from '../../providers/utilities/utilities';

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
  amount: number = undefined;
  amountFlag: boolean = false;
  public quantity: number;
  percent: number = 0.05;

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider, public util: Utilities) {
    console.log("1 qty constructor called");


    this.selExchange = navParam.get("exchange");
    this.selCoin.coinName = navParam.get("coin");

    // console.log(this.selCoin, " sel coin qty");
    // console.log(this.selExchange, " sel Exchange qty");

    this.apis = this.api.apiUrls.exchange;
    this.exchanges = Object.keys(this.apis);

  }

  ngOnInit() {
    console.log("2 ng oninit called");

    this.populateView();
  }

  doRefresh(refresher) {
    console.log(this.selCoin.coinName, "sel Coin Name - Refresh");
    this.populateView();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  populateView() {
    console.log("3 populate view called");

    this.populateCoins(this.selExchange);
  }

  populateCoins(exchange: any) {
    console.log("4 populate coins");

    this.api.getExchangeData(exchange, true).subscribe(res => {
      this.coins = this.api.processExchangeData(exchange, res, undefined, undefined);
      // console.log(this.coins, "coins in qty");
      this.populateCoinValues(this.selCoin.coinName);

    });
  }

  public populateCoinValues(selCoin: any) {
    console.log("5 populate coin values called");

    // console.log(this.selCoin.coinName, "sel Coin Name - Refresh Populate");

    this.selCoin = this.coins.find(coin => this.selCoin.coinName == coin.coinName);

    // console.log(this.selCoin, "selected coin - QTY");

    this.updateRange(this.selCoin.market.no);

    // console.log(this.selCoin, " coin selected");
    // console.log(this.coins, "all coins");


  }

  public updateRange(rate: number) {
    console.log("6 update range");

    this.selCoin.range.rate.no = rate;

    // console.log(this.selCoin.range.rate.no);
    this.formateRate();
    this.selCoin = this.api.plusMinusPercent(this.selCoin, this.selCoin.range.rate.no, this.percent);
    console.log("8 plus minus percent called");

    this.selCoin.step = this.api.rangeStepCalculator(this.selCoin.min.no, this.selCoin.max.no);
    console.log("9 Range step called");
    // console.log(this.selCoin);

  }

  formateRate() {
    console.log("7 format rate");

    // console.log(this.range.rate.no, 'nubmer');

    this.selCoin.range.rate.formatted = this.api.numberFormatter(+this.selCoin.range.rate.no);
    // console.log(this.range.rate.formatted);

  }

  public calcQuantity() {
    // console.log("quantity calculated");

    if (this.amount != undefined) {
      let qty = this.amount / this.selCoin.range.rate.no;
      // console.log(qty);

      this.quantity = +this.util.trimQuantity(this.selCoin.coinName, qty);
      // console.log(this.quantity);

    }
  }

  public rangeChanged() {
    this.formateRate();
    this.calcQuantity();
  }

  public calcAmount() {
    this.amount = this.quantity * this.selCoin.range.rate.no;
  }

  public amountChanged(amount: string) {
    // console.log(this.amountFlag);

    this.amount = amount.length > 9 ? this.trimAmount(amount) : this.clearAmountFlag(amount);
    // console.log("new amount value", this.amount);

    this.calcQuantity();
  }

  public clearAmountFlag(amount) {
    // console.log("flag cleared");

    this.amountFlag = false;
    return amount;
  }

  public trimAmount(amount) {

    // console.log("flag set");
    this.amountFlag = true;
    return amount = amount.substring(0, 9);
  }
}
