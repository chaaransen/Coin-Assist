import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { ApiUrls } from '../../models/api-urls';
import * as Constants from '../../constants/api-constants'

@Injectable()
export class ApiDataProvider {

  apiUrls: any;
  apiUrlStore = "apiUrls";
  coinListTemplate: any;
  koinexData: any;
  zebpayData: any;

  // private coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";

  private coinAssistApis = "http://localhost:3000/apis";

  constructor(private http: HttpClient, private storage: Storage) {
  }

  setApiUrl(apiUrl: any): any {
    this.apiUrls = apiUrl;
  }

  fetchApiUrl(): any {
    // console.log("GET - api urls");
    return this.http.get(this.coinAssistApis);
  }

  getApiUrlStorage(): any {
    // console.log("GET - api url storage");
    return this.storage.ready().then(() => {
      return this.storage.get(this.apiUrlStore);
    });
  }

  getConstantApiUrl(): any {
    // console.log("GET - constant URL ");
    return JSON.parse(Constants.API_URL);
  }

  storeApiUrl(fetchedApiUrl: any) {

    this.apiUrls = fetchedApiUrl;

    // console.log("STORE - store api url");
    this.storage.set(this.apiUrlStore, fetchedApiUrl).then(res => {
      // console.log("Stored Successfully");
    },
      err => {
        console.log("Storage Error");
        console.log(err);
      });
  }

  getCurrentApis(): any {
    return this.storage.get(this.apiUrlStore);
  }

  getKoinexData(): any {
    // console.log("GET - koinex data");
    // console.log(this.apiUrls.exchange.koinex);

    // return this.http.get(this.apiUrls.exchange.koinex);
    return Observable.of(JSON.parse(Constants.KOINEX_DATA));
  }

  getZebpayData(): any {
    // console.log("GET - zebpay data");
    return this.http.get(this.apiUrls.exchange.zebpay);
  }

  getExchangeData(exchange: string): any {

    switch (exchange) {
      case "koinex":
        {
          // console.log("switch case koinex");

          return this.getKoinexData();
        }
      case "zebpay":
        {
          // console.log("switch case zebpay");
          return this.getZebpayData();
        }
    }

  }

  getCoinName(coin: any) {
    switch (coin) {
      case "BTC":
        return Constants.BTC;
      case "ETH":
        return Constants.ETH;
      case "XPR":
        return Constants.XPR;
      case "BCH":
        return Constants.BCH;
      case "LTC":
        return Constants.LTC;
    }
  }

  koinexProcessor(data: any): any {

    var coinList = data.stats;
    for (let coin in coinList) {

      let template = this.coinListTemplate;
      template.coin = this.getCoinName(coin);
      template.market = coinList[coin].last_traded_price;
      template.buy = coinList[coin].lowest_ask;
      template.sell = coinList[coin].highest_bid;

      let min = +coinList[coin].min_24hrs;
      let max = +coinList[coin].max_24hrs;

      template.price_index = this.getPriceIndex(min, max, template.market);

    }

    return "koinex Processed";
  }

  // TO BE TESTED
  getPriceIndex(min: any, max: any, current: any) {

    let total = max - min;
    let diff = total / 3;
    let lowRegionHigh = min + diff
    let mediumRegionHigh = (min + (2 * diff));

    if (current <= min) {
      return "VERY LOW"
    } else if (current <= lowRegionHigh && current > min) {
      return "LOW"
    } else if (current <= mediumRegionHigh && current > lowRegionHigh) {
      return "MEDIUM";
    } else if (current <= max && current > mediumRegionHigh) {
      return "HIGH";
    } else if (current > max) {
      return "VERY HIGH";
    }

  }

  zebpayProcessor(): any {

  }

  // TO BE TESTED
  getCoindeskData(currencyType: string): any {
    switch (currencyType) {
      case "INR": {
        return this.http.get(this.apiUrls.global.coindesk.api.INR);
      }
      case "USD": {
        return this.http.get(this.apiUrls.global.coindesk.api.USD);
      }
    }
  }

  // TO BE TESTED
  getCoinMarketCapDataCurrency(currencyType: string): any {
    switch (currencyType) {
      case "INR": {
        return this.http.get(this.apiUrls.global.coinmarketcap.api.INR);
      }
      case "USD": {
        return this.http.get(this.apiUrls.global.coinmarketcap.api.USD);
      }
    }
  }

  // TO BE TESTED
  getCoinMarketCapDataCoin(coin: string): any {
    switch (coin) {
      case "BTC": {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.BTC);
      }
      case "ETH": {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.ETH);
      }
      case "BCH": {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.BCH);
      }
      case "LTC": {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.LTC);
      }
      case "XPR": {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.XPR);
      }
    }
  }

  
  processExchangeData(exchange: any, exchangeData: any): Observable<any> {
    this.coinListTemplate = JSON.parse(Constants.COIN_LIST_TEMPLATE);
    switch (exchange) {
      case "koinex":
        {
          // console.log("switch case koinex");

          return Observable.of(this.koinexProcessor(exchangeData));
        }
      case "zebpay":
        {
          // console.log("switch case zebpay");
          return Observable.of(this.zebpayProcessor());
        }
    }
  }

}
