import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import 'rxjs/Rx';
import { ApiUrls } from '../../models/api-urls';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import * as Constants from '../../constants/api-constants';
import { forkJoin } from "rxjs/observable/forkJoin";
import { CoinDetailPage } from '../coin-detail/coin-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exchanges: any;
  coins: string;
  apiUrls: any;
  selExchange: any;

  constructor(public navCtrl: NavController, public api: ApiDataProvider, private storage: Storage, private navParam: NavParams) {

  }

  ngOnInit() {
    // console.log("Home component - get urls");

    this.api.getApiUrlStorage().then(res => {
      if (res != null) {
        this.apiUrls = res;
      }
      else {
        this.apiUrls = this.api.getConstantApiUrl();
      }
      // console.log("Home Compo Value return");

      // console.log(this.apiUrls);
      this.api.setApiUrl(this.apiUrls);
      this.populateView();
    });
  }

  doRefresh(refresher) {
    this.populateView();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  populateView() {
    this.exchanges = Object.keys(this.apiUrls.exchange);
    this.selExchange = this.exchanges[0];
    this.selectedExchange(this.selExchange);
  }

  public selectedExchange(sel: any) {

    this.api.getMarketOverviewData(sel, Constants.ALL).subscribe(res => {
      // console.log("first data - exchange data");
      // console.log(res[0]);
      // console.log("second data - coin market Cap data");
      // console.log(res[1]);
      // console.log("third data - coindesk data");
      // console.log(res[2]);

      this.coins = this.api.processExchangeData(sel, res[0], res[1], res[2]);
      // console.log("processed exchange data");
      // console.log(this.coins);

    },
      err => {
        console.log(err);

      });
  }

  navCoinDetailPage(coin: any) {
    this.navCtrl.push(CoinDetailPage, { "coin": coin, "exchange": this.selExchange });
  }
}
