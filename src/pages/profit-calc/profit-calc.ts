import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profit-calc',
  templateUrl: 'profit-calc.html'
})
export class ProfitCalcPage {

  public quantity: number;
  public amount: number;
  public toggle: boolean;
  public fromValue: number;
  public toValue: number;
  public profitLoss: number;
  public finalValue: number;
  public changePercent: number;
  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    console.log("profit calc page ng oninit");

  }

  calcProfitLoss(type?: string) {
    switch (type) {
      case 'amt':
        break;

      case 'qty':
        break;
    }

  }
}
