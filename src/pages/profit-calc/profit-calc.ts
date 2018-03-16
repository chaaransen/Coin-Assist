import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utilities } from '../../providers/utilities/utilities';
import { ProfitCalc } from '../../models/profit-calc';
import { ApiDataProvider } from '../../providers/api-data/api-data';

@Component({
  selector: 'page-profit-calc',
  templateUrl: 'profit-calc.html'
})
export class ProfitCalcPage {
  public profitCalc: ProfitCalc = new ProfitCalc();
  pageName: string = "profit-calc page";

  constructor(public navCtrl: NavController, public utilities: Utilities, public api: ApiDataProvider) {
  }

  ngOnInit() {
    this.api.logAnalytics(this.pageName);
  }

  public checkRequiredFields() {
    // console.log("Check Required fields", this.quantity.no.no, this.amount);

    // console.log("Quantity" + this.profitCalc.quantity.no);
    if (this.profitCalc.quantity.no != 0) {
      // console.log("inside quantity");
      this.profitCalc.quantity.no = this.utilities.trimToDecimal(+this.profitCalc.quantity.no, 4);
      this.calcAmount();
      if (this.checkMandatoryFields()) {
        // console.log("Manadatory passed");
        this.calcProfit();
      }
    }
    this.formatDataValues();
    // console.log("Exited");
  }

  public buySellPriceChanged(priceType: string) {
    switch (priceType) {
      case "buy": {
        if (this.profitCalc.fromValue.no != 0) {
          this.profitCalc.fromValue.no = this.utilities.trimToDecimal(+this.profitCalc.fromValue.no, 2);
        }
        break;
      }
      case "sell": {
        if (this.profitCalc.toValue.no != 0) {
          this.profitCalc.toValue.no = this.utilities.trimToDecimal(+this.profitCalc.toValue.no, 2);
        }
        break;
      }
    }
    this.checkRequiredFields();
    this.formatDataValues();
  }

  checkMandatoryFields() {
    // console.log(this.fromValue.no, this.toValue.no);

    if (this.profitCalc.fromValue.no != undefined && this.profitCalc.toValue.no != undefined) {
      // console.log("mandatory true");

      return true;
    }
    else {
      // console.log("mandatory false");

      return false;
    }
  }

  calcQty() {
    if (this.profitCalc.fromValue.no != undefined) {
      this.profitCalc.quantity.no = this.profitCalc.amount.no / this.profitCalc.fromValue.no;
      this.profitCalc.quantity.no = this.utilities.trimToDecimal(this.profitCalc.quantity.no, 4);
    }
    // console.log("Qty calc", this.quantity.no);
  }

  calcAmount() {
    if (this.profitCalc.fromValue.no != undefined) {
      this.profitCalc.amount.no = this.profitCalc.quantity.no * this.profitCalc.fromValue.no;
      this.profitCalc.amount.no = this.utilities.trimToDecimal(this.profitCalc.amount.no, 2);
    }
    // console.log("Amount calc", this.amount.no);
  }

  calcProfit() {
    this.profitCalc.profitLoss.no = (this.profitCalc.toValue.no - this.profitCalc.fromValue.no) * this.profitCalc.quantity.no;
    this.profitCalc.profitLoss.no = this.utilities.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
    // console.log("Profit loss", this.profitLoss.no);

    this.calcFinalvalue();
  }

  calcFinalvalue() {
    this.profitCalc.finalValue.no = this.profitCalc.amount.no + this.profitCalc.profitLoss.no;
    if (Number.isNaN(this.profitCalc.finalValue.no)) {
      this.profitCalc.finalValue.no = 0;
    } else {
      this.profitCalc.finalValue.no = this.utilities.trimToDecimal(+this.profitCalc.finalValue.no, 2);
    }
    // console.log("Final value", this.finalValue.no);

  }

  updateSellPrice() {

    if (this.profitCalc.profitLoss.no != 0) {
      this.profitCalc.profitLoss.no = this.utilities.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
      this.profitCalc.toValue.no = (this.profitCalc.profitLoss.no * this.profitCalc.fromValue.no + this.profitCalc.fromValue.no * this.profitCalc.fromValue.no) / this.profitCalc.amount.no;
      this.profitCalc.toValue.no = this.utilities.trimToDecimal(+this.profitCalc.toValue.no, 2);
      // console.log("Sell Value" + this.toValue.no.no);
      // console.log("before", this.profitLoss.no.no);
      this.calcFinalvalue();
      this.profitCalc.profitLoss.no = this.utilities.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
      // console.log("after", this.profitLoss.no.no);
    }
    this.formatDataValues();
  }

  formatDataValues() {
    // console.log("Formatting values");

    this.profitCalc.quantity.formatted = this.utilities.numberFormatter(this.profitCalc.quantity.no);
    this.profitCalc.amount.formatted = this.utilities.currencyFormatter(this.profitCalc.amount.no);
    this.profitCalc.fromValue.formatted = this.utilities.currencyFormatter(this.profitCalc.fromValue.no);
    this.profitCalc.toValue.formatted = this.utilities.currencyFormatter(this.profitCalc.toValue.no);
    this.profitCalc.profitLoss.formatted = this.utilities.currencyFormatter(this.profitCalc.profitLoss.no);
    this.profitCalc.finalValue.formatted = this.utilities.currencyFormatter(this.profitCalc.finalValue.no);
  }

  public clearAll() {
    this.profitCalc.quantity.no = null;
    this.profitCalc.amount.no = null;
    this.profitCalc.fromValue.no = null;
    this.profitCalc.toValue.no = null;
    this.profitCalc.profitLoss.no = null;
    this.profitCalc.finalValue.no = null;
    this.formatDataValues();
  }
}
