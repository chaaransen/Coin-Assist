import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { ApiUrls } from '../../models/api-urls';
import * as Constants from '../../constants/api-constants'
import { forkJoin } from "rxjs/observable/forkJoin";

@Injectable()
export class ApiDataProvider {

  apiUrls: any;
  apiUrlStore = "apiUrls";
  koinexData: any[];
  zebpayData: any[];

  // ******************************************************************************
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

  // ************************************************************************
  getKoinexData(): any {
    // console.log("GET - koinex data");
    // console.log(this.apiUrls.exchange.koinex);

    // return this.http.get(this.apiUrls.exchange.koinex);
    return Observable.of(JSON.parse(Constants.KOINEX_DATA));
  }

  // TO BE TESTED
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

  // TO BE TESTED
  getCoinName(coin: any) {
    switch (coin) {
      case "BTC":
        return Constants.BTC;
      case "ETH":
        return Constants.ETH;
      case "XRP":
        return Constants.XRP;
      case "BCH":
        return Constants.BCH;
      case "LTC":
        return Constants.LTC;
    }
  }

  // TO BE TESTED
  koinexProcessor(exchangeData: any, coinMarketCapData: any, coinDeskData: any): any {
    var processedKoinexData = [];
    var coinList = exchangeData.stats;
    for (let coin in coinList) {

      let processedCoin: any = {};
      processedCoin.coinName = this.getCoinName(coin);
      processedCoin.coinCode = coin;
      processedCoin.market = coinList[coin].last_traded_price;
      processedCoin.buy = coinList[coin].lowest_ask;
      processedCoin.sell = coinList[coin].highest_bid;
      let min = +coinList[coin].min_24hrs;
      let max = +coinList[coin].max_24hrs;

      processedCoin.price_index = this.getPriceIndex(min, max, processedCoin.market);
      processedCoin = this.injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData);
      // console.log(processedCoin);
      processedKoinexData.push(processedCoin);
    }

    return processedKoinexData;
  }

  // TO BE TESTED
  getCoinGlobalStats(coinSymbol, coinMarketCapData, coinDeskData): any {
    var coinGlobalStats: any = {};

    for (let coin in coinMarketCapData) {
      if (coinMarketCapData[coin].symbol == coinSymbol) {
        coinGlobalStats.change = coinMarketCapData[coin].percent_change_24h;
        if (coinMarketCapData[coin].symbol == "BTC") {
          coinGlobalStats.globalINR = coinDeskData.bpi.INR.rate_float;
          coinGlobalStats.globalUSD = coinDeskData.bpi.USD.rate_float;
        } else {
          coinGlobalStats.globalINR = coinMarketCapData[coin].price_inr;
          coinGlobalStats.globalUSD = coinMarketCapData[coin].price_usd;
        }
        return coinGlobalStats;
      }
    }
  }

  // TO BE TESTED
  getPriceIndex(min: any, max: any, current: any) {

    let total = max - min;
    let diff = total / 3;
    let lowRegionHigh = min + diff
    let mediumRegionHigh = (min + (2 * diff));

    if (current <= lowRegionHigh && current > min) {
      return "LOW"
    } else if (current <= mediumRegionHigh && current > lowRegionHigh) {
      return "MEDIUM";
    } else if (current <= max && current > mediumRegionHigh) {
      return "HIGH";
    }

  }

  // TO BE TESTED
  zebpayProcessor(exchangeData: any, coinMarketCapData: any, coinDeskData: any): any {
    var processedZebpayData = [];
    let coin = "BTC";
    let zebpayData = exchangeData;

    let processedCoin: any = {};
    processedCoin.coinName = this.getCoinName(coin);
    processedCoin.coinCode = coin;
    processedCoin.market = zebpayData.market;
    processedCoin.buy = zebpayData.buy;
    processedCoin.sell = zebpayData.sell;
    processedCoin.price_index = this.getPriceIndexZebpay(+processedCoin.buy, +processedCoin.sell);

    processedCoin = this.injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData);
    console.log(processedCoin);
    processedZebpayData.push(processedCoin);
    return processedZebpayData;
  }

  injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData): any {
    let coinGlobalStats = this.getCoinGlobalStats(coin, coinMarketCapData, coinDeskData);
    processedCoin.globalINR = coinGlobalStats.globalINR;
    processedCoin.globalUSD = coinGlobalStats.globalUSD;
    processedCoin.change = coinGlobalStats.change;
    return processedCoin;
  }

  getPriceIndexZebpay(buy, sell) {
    let diff = buy - sell;

    if (diff < 10000) { return "LOW" }
    else if (diff < 20000 && diff >= 10000) {
      return "MEDIUM";
    } else if (diff >= 20000) {
      return "HIGH";
    }
  }

  // TO BE TESTED
  getCoindeskData(): any {
    return this.http.get(this.apiUrls.global.coindesk.api);
  }

  // TO BE TESTED
  getCoinMarketCapData(coin: string): any {
    switch (coin) {
      case Constants.BTC: {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.BTC);
      }
      case Constants.ETH: {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.ETH);
      }
      case Constants.BCH: {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.BCH);
      }
      case Constants.LTC: {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.LTC);
      }
      case Constants.XRP: {
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.XPR);
      }
      case Constants.ALL: {
        let coinMarketCapApi = this.apiUrls.global.coinmarketcap.api + this.apiUrls.global.coinmarketcap.coin_limit;
        return this.http.get(coinMarketCapApi);
      }
    }
  }

  // TO BE TESTED
  processExchangeData(exchange: any, exchangeData: any, coinMarketCapData: any, coinDeskData: any): any {

    switch (exchange) {
      case "koinex":
        {
          // console.log("switch case koinex");

          return this.koinexProcessor(exchangeData, coinMarketCapData, coinDeskData);
        }
      case "zebpay":
        {
          // console.log("switch case zebpay");
          return this.zebpayProcessor(exchangeData, coinMarketCapData, coinDeskData);
        }
    }
  }

  // TO BE TESTED
  getMarketOverviewData(sel: string, coin: string): any {
    return Observable.forkJoin([this.getExchangeData(sel), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
  }
}
