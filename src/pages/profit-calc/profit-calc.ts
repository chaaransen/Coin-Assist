import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utilities } from '../../providers/utilities/utilities';
import { ProfitCalc } from '../../models/profit-calc';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import * as Constants from '../../constants/api-constants';
import { ProfitValid } from '../../models/api-urls';

@Component({
  selector: 'page-profit-calc',
  templateUrl: 'profit-calc.html'
})
export class ProfitCalcPage {
  public profitCalc: ProfitCalc = new ProfitCalc();
  pageName: string = Constants.PROFIT_PAGE;
  public profitValid: ProfitValid = new ProfitValid();

  constructor(public navCtrl: NavController, public util: Utilities, public api: ApiDataProvider) {
  }

  ngOnInit() {
    this.api.logAnalytics(this.pageName);
    this.api.instructionToast(this.pageName, 0, false, false)
  }

  swipe(event) {
    if (event.direction === 2) {
      this.navCtrl.parent.select(1);
    }
  }

  public checkRequiredFields() {
    // console.log("Check Required fields", this.quantity.no.no, this.amount);

    // console.log("Quantity", this.profitCalc.quantity.no);
    if (this.util.validNumberChecker(this.profitCalc.quantity.no)) {
      this.profitValid.quantityValid = true;

      // console.log("inside quantity");
      if (this.profitCalc.quantity.no != +"") {
        this.profitCalc.quantity.no = this.util.trimToDecimal(+this.profitCalc.quantity.no, 4);
        this.calcAmount();
        if (this.checkMandatoryFields()) {
          // console.log("Manadatory passed");
          this.calcProfit();
        }
        this.formatDataValues();
      }

      // console.log("Exited");
    } else {
      this.profitValid.quantityValid = false;
    }
  }

  public buySellPriceChanged(priceType: string) {
    switch (priceType) {
      case "buy": {
        if (this.util.validNumberChecker(this.profitCalc.fromValue.no)) {
          this.profitValid.buyValid = true;
          if (this.profitCalc.fromValue.no != 0) {
            this.profitCalc.fromValue.no = this.util.trimToDecimal(+this.profitCalc.fromValue.no, 2);
          }
        }
        else {
          this.profitValid.buyValid = false;
        }
        break;
      }
      case "sell": {
        if (this.util.validNumberChecker(this.profitCalc.toValue.no)) {
          this.profitValid.sellValid = true;
          if (this.profitCalc.toValue.no != 0) {
            this.profitCalc.toValue.no = this.util.trimToDecimal(+this.profitCalc.toValue.no, 2);
          }
        } else {
          this.profitValid.sellValid = false;
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
      this.profitCalc.quantity.no = this.util.trimToDecimal(this.profitCalc.quantity.no, 4);
    }
    // console.log("Qty calc", this.quantity.no);
  }

  calcAmount() {
    if (this.profitCalc.fromValue.no != undefined) {
      this.profitCalc.amount.no = this.profitCalc.quantity.no * this.profitCalc.fromValue.no;
      this.profitCalc.amount.no = this.util.trimToDecimal(this.profitCalc.amount.no, 2);
    }
    // console.log("Amount calc", this.amount.no);
  }

  calcProfit() {
    if (this.profitValid.buyValid && this.profitValid.sellValid) {
      this.profitCalc.profitLoss.no = (this.profitCalc.toValue.no - this.profitCalc.fromValue.no) * this.profitCalc.quantity.no;
      this.profitCalc.profitLoss.no = this.util.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
      // console.log("Profit loss", this.profitLoss.no);
      this.calcFinalvalue();
    }
  }

  calcFinalvalue() {
    this.profitCalc.finalValue.no = this.profitCalc.amount.no + this.profitCalc.profitLoss.no;
    this.profitCalc.finalValue.no = this.util.trimToDecimal(+this.profitCalc.finalValue.no, 2);
    // console.log("Final value", this.finalValue.no);
  }

  formatDataValues() {
    // console.log("Formatting values");

    this.profitCalc.quantity.formatted = this.util.numberFormatter(this.profitCalc.quantity.no);
    this.profitCalc.amount.formatted = this.util.currencyFormatter(this.profitCalc.amount.no);
    this.profitCalc.fromValue.formatted = this.util.currencyFormatter(this.profitCalc.fromValue.no);
    this.profitCalc.toValue.formatted = this.util.currencyFormatter(this.profitCalc.toValue.no);
    this.profitCalc.profitLoss.formatted = this.util.currencyFormatter(this.profitCalc.profitLoss.no);
    this.profitCalc.finalValue.formatted = this.util.currencyFormatter(this.profitCalc.finalValue.no);
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
