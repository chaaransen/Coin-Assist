import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-coin-detail',
  templateUrl: 'coin-detail.html'
})
export class CoinDetailPage {

  constructor(public navCtrl: NavController) {
    console.log("coin detail component");

  }

}
