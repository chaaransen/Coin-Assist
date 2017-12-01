import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import 'rxjs/Rx';
import { ApiUrls } from '../../models/api-urls';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import * as Constants from '../../constants/api-constants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exchanges: any;
  exchange: string;
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
    this.api.getExchangeData(sel).subscribe(res => {
      console.log("this is Exchange data");
      console.log(res);
      this.api.processExchangeData(sel, res).subscribe(res => {
        console.log("Processed data");
        console.log(res);

      });
    },
      err => {
        console.log(err);

      });
  }
}
