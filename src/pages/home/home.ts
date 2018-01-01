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
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exchanges: any;
  coins: any;
  apiUrls: any;
  selExchange: any;
  alive: boolean;

  constructor(public navCtrl: NavController, public api: ApiDataProvider, private storage: Storage, private navParam: NavParams, private toastCtrl: ToastController) {
    // console.log("Constructor - Home page");

    this.alive = true;
  }

  ngOnInit() {
    // console.log("Home component ngOninit Called");


    this.api.getApiUrlStorage().then(res => {
      if (res != null) {
        this.apiUrls = res;
      }
      else {
        // console.log("constant Api urls called");

        this.apiUrls = this.api.getConstantApiUrl();
      }
      // console.log("Home Compo Value return");

      // console.log(this.apiUrls);

      this.api.setApiUrl(this.apiUrls);
      this.populateView();
      var refresher = IntervalObservable.create(20000);
      refresher.takeWhile(() => this.alive) // only fires when component is alive
        .subscribe(() => {
          this.populateView();
        });
    });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Latest Price Refreshed',
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  ionViewDidLeave() {

    this.alive = false;
    // console.log("Home page - left", this.alive);
  }

  ionViewWillEnter() {
    this.alive = true;

    // console.log("Home page -View Entered", this.alive);
  }

  doRefresh(refresher) {
    this.populateView();
    setTimeout(() => {
      this.presentToast();
      refresher.complete();
    }, 800);
  }

  populateView() {
    // console.log(this.apiUrls.exchange);
    // console.log("Populating Home page");
    if (this.selExchange == undefined) {
      this.exchanges = Object.keys(this.apiUrls.exchange);
      this.selExchange = this.exchanges[0];
    }
    this.selectedExchange(this.selExchange);
  }

  public selectedExchange(sel: any) {

    this.api.getMarketOverviewData(sel, Constants.ALL).subscribe(res => {
      console.log("first data - exchange data", res[0]);
      // console.log("second data - coin market Cap data", res[1]);
      // console.log("third data - coindesk data", res[2]);
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
