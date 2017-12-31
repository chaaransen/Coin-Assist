import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Utilities } from '../../providers/utilities/utilities';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  private profitCalcForm: FormGroup;

  constructor(public navCtrl: NavController, public utilities: Utilities, private formBuilder: FormBuilder) {
    this.profitCalcForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    // console.log("profit calc page ng oninit");

  }

  public checkRequiredFields(type?: string) {
    // console.log("Check Required fields", this.quantity, this.amount);
    switch (type) {
      case "qty": {
        // console.log("Quantity");
        this.quantity = this.utilities.trimToDecimal(+this.quantity, 4);
        this.calcAmount();
        if (this.checkMandatoryFields()) {
          // console.log("Manadatory passed");
          this.calcProfit();
        }
        break;
      }
      case "amt": {
        // console.log("Amount");
        this.amount = this.utilities.trimToDecimal(+this.amount, 2);
        this.calcQty();
        if (this.checkMandatoryFields()) {

          this.calcProfit();
        }
        break;
      }
      default: {
        if (this.quantity != undefined && this.amount != undefined) {
          this.checkRequiredFields("qty");
        } else
          if (this.quantity != undefined) {
            this.checkRequiredFields("qty");
          } else if (this.amount != undefined) {
            this.checkRequiredFields("amt");
          }
      }

    }
    // console.log("Exited");
  }

  public buySellPriceChanged(priceType: string) {
    switch (priceType) {
      case "buy": {
        this.fromValue = this.utilities.trimToDecimal(+this.fromValue, 2);
        break;
      }
      case "sell": {
        this.toValue = this.utilities.trimToDecimal(+this.toValue, 2);
        break;
      }
    }
    this.checkRequiredFields();
  }

  public clearAll() {
    this.quantity = 0;
    this.amount = 0;
    this.toValue = 0;
    this.fromValue = 0;
    this.profitLoss = 0;
    this.changePercent = 0;
    this.finalValue = 0;
  }

  checkMandatoryFields() {
    // console.log(this.fromValue, this.toValue);

    if (this.fromValue != undefined && this.toValue != undefined) {
      // console.log("mandatory true");

      return true;
    }
    else {
      // console.log("mandatory false");

      return false;
    }
  }

  calcQty() {
    if (this.fromValue != undefined) {
      this.quantity = this.amount / this.fromValue;
      this.quantity = this.utilities.trimToDecimal(this.quantity, 4);
    }
    // console.log("Qty calc", this.quantity);
  }

  calcAmount() {
    if (this.fromValue != undefined) {
      this.amount = this.quantity * this.fromValue;
      this.amount = this.utilities.trimToDecimal(this.amount, 2);
    }
    // console.log("Amount calc", this.amount);
  }

  calcProfit() {
    this.calcChangePercent();
    this.profitLoss = (this.amount * this.changePercent) - this.amount;
    this.profitLoss = this.utilities.trimToDecimal(+this.profitLoss, 2);
    // console.log("Profit loss", this.profitLoss);

    this.calcFinalvalue();
  }

  calcChangePercent() {
    this.changePercent = this.toValue / this.fromValue;
    this.changePercent = this.utilities.trimToDecimal(+this.changePercent, 2);
    // console.log("Change percent", this.changePercent);

  }

  calcFinalvalue() {
    this.finalValue = this.amount + this.profitLoss;
    if (Number.isNaN(this.finalValue)) {
      this.finalValue = 0;
    } else {
      this.finalValue = this.utilities.trimToDecimal(+this.finalValue, 2);
    }
    // console.log("Final value", this.finalValue);

  }

  updateSellPrice() {

    this.toValue = (this.profitLoss * this.fromValue + this.fromValue * this.fromValue) / this.amount;
    this.toValue = this.utilities.trimToDecimal(+this.toValue, 2);
    // console.log("Sell Value" + this.toValue);
    // console.log("before", this.profitLoss);
    this.calcFinalvalue();
    this.profitLoss = this.utilities.trimToDecimal(+this.profitLoss, 2);
    // console.log("after", this.profitLoss);

  }
}
