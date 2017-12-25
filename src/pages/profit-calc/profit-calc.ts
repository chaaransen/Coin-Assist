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
  public profitLoss: number;
  public finalValue: number;

  constructor(public navCtrl: NavController) {
    this.quantity = 0;
    this.fromValue = 0;
    this.toValue = 0;
    this.profitLoss = 0;
  }

  ngOnInit() {

  }

  calcProfitLoss(type?: string) {
    console.log(type);

  }

}
