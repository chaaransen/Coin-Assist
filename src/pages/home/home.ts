import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { ApiUrls } from '../../models/api-urls';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import * as Constants from '../../constants/api-constants';
import { forkJoin } from "rxjs/observable/forkJoin";
import { CoinDetailPage } from '../coin-detail/coin-detail';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeWhile';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exchanges: any;
  coins: string;
  apiUrls: any;
  selExchange: any;
  alive: boolean;

  constructor(public navCtrl: NavController, public api: ApiDataProvider, private storage: Storage, private navParam: NavParams) {
    this.alive = true;
  }

  ngOnInit() {
    console.log("Home component ngOninit Called");

    this.api.getApiUrlStorage().then(res => {
      if (res != null) {
        this.apiUrls = res;
      }
      else {
        console.log("constant Api urls called");

        this.apiUrls = this.api.getConstantApiUrl();
      }
      // console.log("Home Compo Value return");

      // console.log(this.apiUrls);

      this.api.setApiUrl(this.apiUrls);
      this.populateView();
      // var refresher = IntervalObservable.create(25000);
      // refresher.takeWhile(() => this.alive) // only fires when component is alive
      //   .subscribe(() => {
      //     this.populateView();
      //   });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  doRefresh(refresher) {
    this.populateView();
    setTimeout(() => {
      refresher.complete();
    }, 800);
  }

  populateView() {
    // console.log(this.apiUrls.exchange);

    this.exchanges = Object.keys(this.apiUrls.exchange);
    this.selExchange = this.exchanges[0];
    this.selectedExchange(this.selExchange);
  }

  public selectedExchange(sel: any) {

    this.api.getMarketOverviewData(sel, Constants.ALL).subscribe(res => {
      // console.log("first data - exchange data", res[0]);
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
