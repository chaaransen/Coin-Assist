import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import { CoinDetailPage } from '../coin-detail/coin-detail';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeWhile';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { PRICE_REFRESH, TOP } from '../../constants/api-constants';

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
  pageName: string = "home page";

  constructor(public navCtrl: NavController, public api: ApiDataProvider) {
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

    this.api.logAnalytics(this.pageName);

    this.api.instructionToast(this.pageName, 0);
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
      this.api.showToast(PRICE_REFRESH, TOP);
      refresher.complete();
    }, 800);
  }

  populateView() {
    // console.log(this.apiUrls.exchange);
    // console.log("Populating Home page");
    if (this.selExchange == undefined && this.apiUrls != undefined) {
      this.exchanges = Object.keys(this.apiUrls.exchange);
      this.selExchange = this.exchanges[0];
      // console.log("Selected Exchange", this.selExchange);

    }
    this.selectedExchange(this.selExchange);
  }

  public selectedExchange(sel: any) {
    // console.log("Coin List", this.apiUrls.exchange[sel].coinList);

    this.api.getMarketOverviewData(sel, this.apiUrls.exchange[sel].coinList).subscribe(res => {
      // console.log("first data - exchange data", res[0]);
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
