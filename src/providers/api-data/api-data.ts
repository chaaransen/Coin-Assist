import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { ApiUrls } from '../../models/api-urls';

@Injectable()
export class ApiDataProvider {

  apiUrls: any;
  koinexData: any;
  urlsLoaded: boolean;
  apiUrlStore = "apiUrls";

  private coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";

  constructor(private http: HttpClient, private storage: Storage) {
  }

  getApiUrl(): ApiUrls {
    console.log("GET - api urls");
    if (this.urlsLoaded != true) {
      this.http.get(this.coinAssistApis).subscribe(res => {
        console.log("GET - api urls - SUCCESS");

        this.apiUrls = res;
        this.getCurrentApis().then(res => {
          console.log("current version" + res.version);
          console.log(res);

          console.log(this.apiUrls.version);

          if (res.version != this.apiUrls.version) {
            console.log("new version set");

            this.storage.set(this.apiUrlStore, this.apiUrls);
            this.urlsLoaded = true;
          }


        });

        return this.apiUrls;
      },
        err => {
          console.log("GET - api urls -ERROR");
          console.log(err);
        });
    }
    else {
      return this.apiUrls;
    }
  }

  getCurrentApis(): any {
    return this.storage.get(this.apiUrlStore);
  }

  getKoinexData(): any {
    console.log("GET - koinex data " + this.urlsLoaded);

    if (this.urlsLoaded) {
      console.log("GET api urls called");

      return this.http.get(this.apiUrls.exchange.koinex).subscribe(res => {
        console.log("GET - koinex data - SUCCESS");
        console.log(res);

        return this.koinexData = res;
      },
        err => {
          console.log("ERROR");
          console.log(err);
        });
    }

  }

}
