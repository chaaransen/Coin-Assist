import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { CoinDetail } from '../../models/coin-detail';
import { ValueDetail } from '../../models/value-detail';
import { Utilities } from '../../providers/utilities/utilities';
import * as Constants from '../../constants/api-constants'
import { ToastController } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { AdMobFree, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-quantity-calc',
  templateUrl: 'quantity-calc.html'
})
export class QuantityCalcPage {
  points: number;
  exchanges: any;
  exchange: any;
  coins: CoinDetail[];
  selExchange: any;
  public selCoin: CoinDetail = new CoinDetail();
  apis: any = {};
  public amount: ValueDetail = new ValueDetail();
  public actualAmount: ValueDetail = new ValueDetail();
  public buyerFees: ValueDetail = new ValueDetail();
  public buyerFeesPercent: number;
  amountFlag: boolean = false;
  public quantity: ValueDetail = new ValueDetail();
  percent: number = 0.05;
  rangeValue: number;
  pageName: string = "quantity-calc page";

  constructor(public navCtrl: NavController, public navParam: NavParams, public api: ApiDataProvider, public util: Utilities, private alertCtrl: AlertController) {
    // console.log("1 qty constructor called");
    this.selExchange = navParam.get("exchange");
    this.selCoin.coinName = navParam.get("coin");
    // console.log(this.selCoin, " sel coin qty");
    // console.log(this.selExchange, " sel Exchange qty");
    this.apis = this.api.apiUrls.exchange;
    this.exchanges = Object.keys(this.apis);
    this.points = this.api.fetchService("points");
    // console.log(this.apis, "api list fetched back");
  }

  ngOnInit() {
    // console.log("2 ng oninit called");
    if (this.selExchange == undefined) {
      this.selExchange = Constants.KOINEX;
    }
    if (this.selCoin.coinName == undefined) {
      this.selCoin.coinName = this.api.apiUrls.coins.BTC.name;
    }
    this.populateView();

    this.api.logAnalytics(this.pageName);

    this.api.instructionToast(this.pageName, 2000);

    this.presentGetPoints();
    // console.log("Init Done");

  }

  presentGetPoints() {
    let alert = this.alertCtrl.create({
      title: 'Insufficient Points to use',
      message: 'Get 5 points by viewing Video Ad to use',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Watch Ad',
          handler: () => {
            console.log('Watch Ad clicked');
          }
        }
      ]
    });
    alert.present();
  }

  doRefresh(refresher) {
    // console.log(this.selCoin.coinName, "sel Coin Name - Refresh");
    this.populateView();
    setTimeout(() => {
      this.api.priceUpdateToast();
      refresher.complete();
    }, 800);
  }

  populateView() {
    // console.log("3 populate view called");
    this.populateCoins(this.selExchange);
    let feesPercent = +this.apis[this.selExchange].fees.buy;
    this.buyerFeesPercent = feesPercent * 100;
  }

  public exchangeChanged(exchange: any) {
    // console.log("Exchange changed", exchange);
    this.selExchange = exchange;
    // console.log("BTC test name", this.api.apiUrls.coins.BTC.name);

    this.selCoin.coinName = this.api.apiUrls.coins.BTC.name;
    this.populateView();
  }

  populateCoins(exchange: any) {
    // console.log("4 populate coins", exchange);
    this.api.getExchangeData(exchange, true).subscribe(res => {
      // console.log("Exchange data", res);

      this.coins = this.api.processExchangeData(exchange, res, undefined, undefined);
      // console.log(this.coins, "coins in qty");
      if (this.selCoin.coinName == undefined) {
        this.selCoin.coinName = this.api.apiUrls.coins.BTC.name;
        // console.log("Coiname sent", this.selCoin.coinName);

      }
      this.populateCoinValues(this.selCoin.coinName);
    });
  }

  public populateCoinValues(selCoin: any) {
    // console.log("5 populate coin values called");
    // console.log(this.selCoin.coinName, "sel Coin Name - Refresh Populate");
    this.selCoin = this.coins.find(coin => this.selCoin.coinName == coin.coinName);
    // console.log(this.selCoin, "selected coin - QTY");
    this.selCoin.range.rate.no = this.selCoin.market.no;

    this.updateRange();
    // console.log(this.selCoin, " coin selected");
    // console.log(this.coins, "all coins");
  }

  public updateRange() {

    console.log(this.selCoin.range.rate.no);
    this.formateRate();
    this.selCoin = this.api.plusMinusPercent(this.selCoin, this.selCoin.range.rate.no, this.percent);
    // console.log("8 plus minus percent called");
    this.selCoin.step = this.api.rangeStepCalculator(this.selCoin.min.no, this.selCoin.max.no);
    // console.log("9 Range step called");
    console.log(this.selCoin);
    this.calcQuantity();
    console.log(this.selCoin);
  }

  public coinRateChanged() {
    this.updateRange();
  }

  formateRate() {
    // console.log("7 format rate");
    // console.log(this.selCoin.range.rate.no, 'number');
    this.selCoin.range.rate.formatted = this.util.currencyFormatter(+this.selCoin.range.rate.no);
    // console.log(this.range.rate.formatted);
  }

  public calcQuantity() {
    // console.log("quantity calculated");
    if (this.amount.no != undefined) {
      this.calcFeesAmount();
      // console.log("Actual Amount", this.actualAmount);
      let qty = this.actualAmount.no / this.selCoin.range.rate.no;
      // console.log(qty);
      this.quantity.no = +this.util.trimQuantity(this.selCoin.coinName, qty);
      // console.log(this.quantity);
      this.quantity.formatted = this.util.numberFormatter(this.quantity.no);
    }
  }

  public calcFeesAmount(calcActual: boolean = true) {
    this.exchange = this.apis[this.selExchange];
    // console.log("Exchange details", this.exchanges, this.exchange.fees.buy);
    let feesPercent = +this.exchange.fees.buy;
    this.buyerFeesPercent = feesPercent * 100;
    // console.log(feesPercent, "fees percent");
    // console.log(this.amount.no, "amount.no");
    if (calcActual) {
      this.calcActual(feesPercent);
    }
    // console.log(this.actualAmount.no, "Actual amount.no");
    this.buyerFees.no = this.actualAmount.no * feesPercent;
    this.buyerFees.no = this.util.trimToDecimal(this.buyerFees.no, 2);
    this.buyerFees.formatted = this.util.currencyFormatter(this.buyerFees.no);
    // console.log("Buyers fees", this.buyerFees.no);
    this.actualAmount.no = this.util.trimToDecimal(this.actualAmount.no, 2);
    this.actualAmount.formatted = this.util.currencyFormatter(this.actualAmount.no);

    if (!calcActual) {
      this.amount.no = this.actualAmount.no + this.buyerFees.no;
      this.amount.formatted = this.util.currencyFormatter(this.amount.no);
    }
  }

  calcActual(feesPercent: number) {
    this.actualAmount.no = (this.amount.no / (1 + feesPercent));
  }

  public rangeChanged(rangePointer: number) {
    this.selCoin.range.rate.no = rangePointer;
    this.formateRate();
    this.calcQuantity();
  }

  public calcAmount(quantity: string) {
    // console.log("quantity changed ", quantity);
    if (quantity != "0" && quantity != '') {
      this.quantity.no = quantity.length > 10 ? this.trimAmount(quantity) : quantity;

      // console.log("Formatted quantity", this.quantity.formatted);
      this.actualAmount.no = this.quantity.no * this.selCoin.range.rate.no;
      this.calcFeesAmount(false);
    }
    this.dataFormatter();
  }

  public amountChanged(amount: string) {
    // console.log("amount changed ", amount);
    if (amount != '0' && amount != '') {
      this.amount.no = amount.length > 9 ? this.trimAmount(amount) : amount;

      // console.log("formatted amount", this.amount.formatted);
      this.calcQuantity();
    }
    this.dataFormatter();
    // console.log("new amount.no value", this.amount.no);

  }

  dataFormatter() {
    // console.log(this.quantity.no);

    this.quantity.formatted = this.util.numberFormatter(this.quantity.no);
    this.amount.formatted = this.util.currencyFormatter(+this.amount.no);
    // console.log(this.quantity.no);
  }
  public trimAmount(amount) {
    return amount.substring(0, 9);
  }

  public showAd() {
    this.api.showVideoAd();
  }
}
