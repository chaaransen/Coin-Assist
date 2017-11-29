import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiDataProvider } from '../../providers/api-data/api-data';
import 'rxjs/Rx';
import { ApiUrls } from '../../models/api-urls';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exchanges: any;
  exchange: any;
  apiUrls: any;

  constructor(public navCtrl: NavController, public api: ApiDataProvider, private storage: Storage, private navParam: NavParams) {
    this.apiUrls = this.navParam.get("apiUrls");
    console.log(this.apiUrls);
    console.log("home page");
  }

  getExchanges() {

  }

  doRefresh(refresher) {

    setTimeout(() => {
      refresher.complete();
    }, 800);
  }
}
