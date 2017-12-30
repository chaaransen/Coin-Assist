import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profit-calc',
  templateUrl: 'profit-calc.html'
})
export class ProfitCalcPage {

  public quantity: number;
  public amount: number;

  public fromValue: number;
  public toValue: number;

  public changePercent: number;

  public profitLoss: number;
  public finalValue: number;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    // console.log("profit calc page ng oninit");

  }

  public checkRequiredFields() {
    console.log("Check Required fields", this.quantity, this.amount);

    if (this.quantity != undefined) {
      console.log("Quantity");
      this.calcAmount();
      if (this.checkMandatoryFields()) {
        console.log("Manadatory passed");
        this.calcProfit();
      }
    } else if (this.amount != undefined) {
      console.log("Amount");
      this.calcQty();
      if (this.checkMandatoryFields()) {

        this.calcProfit();
      }
    }
    console.log("Exited");

  }

  checkMandatoryFields() {
    console.log(this.fromValue, this.toValue);

    if (this.fromValue != undefined && this.toValue != undefined) {
      console.log("mandatory true");

      return true;
    }
    else {
      console.log("mandatory false");

      return false;
    }
  }

  calcQty() {
    this.quantity = this.amount / this.fromValue;
    console.log("Qty calc", this.quantity);
  }

  calcAmount() {
    this.amount = this.quantity * this.fromValue;
    console.log("Amount calc", this.amount);
  }

  calcProfit() {
    this.calcChangePercent();
    this.profitLoss = (this.amount * this.changePercent) - this.amount;
    console.log("Profit loss", this.profitLoss);

    this.calcFinalvalue();
  }

  calcChangePercent() {
    this.changePercent = this.toValue / this.fromValue;
    console.log("Change percent", this.changePercent);

  }

  calcFinalvalue() {
    this.finalValue = this.amount + this.profitLoss;
    if (Number.isNaN(this.finalValue)) {
      this.finalValue = 0;
    }
    console.log("Final value", this.finalValue);

  }

  updateSellPrice() {
    this.toValue = (this.profitLoss * this.fromValue + this.fromValue * this.fromValue) / this.amount;
    console.log("Sell Value" + this.toValue);
    this.calcProfit();
  }
}
