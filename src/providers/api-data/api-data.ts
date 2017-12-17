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

  apiUrls: any = {};
  apiUrlStore = "apiUrls";
  koinexData: any = {};
  zebpayData: any = {};
  LOCAL: boolean = true;
  // ******************************************************************************
  private coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";

  // private coinAssistApis = "http://localhost:3000/apis";

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

    if (this.LOCAL) {
      return Observable.of(JSON.parse(Constants.KOINEX_DATA));
    }

    if (this.koinexData.lock != true) {
      this.koinexData.lock = true;
      setTimeout(this.releaseExhangeLock(Constants.KOINEX), 10000);
      return this.http.get(this.apiUrls.exchange.koinex);
    }
    else {
      console.log("Koinex Data call LOCKED");

      return this.koinexData;
    }


  }

  releaseExhangeLock(exchange: any) {
    switch (exchange) {
      case Constants.ZEBPAY:
        this.koinexData.lock = false;
        console.log(this.koinexData.lock, " LOCK released");

        break;
      case Constants.KOINEX:
        this.zebpayData.lock = false;
        break;
    }
  }

  // TO BE TESTED
  getZebpayData(): any {
    // console.log("GET - zebpay data");
    return this.http.get(this.apiUrls.exchange.zebpay);
  }

  getExchangeData(exchange: string, data: boolean): any {

    switch (exchange) {
      case "koinex":
        {
          // console.log("switch case koinex");
          if (data) {
            return this.getKoinexData();
          }
          return this.getKoinexTemplate();

        }
      case "zebpay":
        {
          if (data) {
            return this.getZebpayData();
          }
          return this.getZebpayTemplate();
          // console.log("switch case zebpay");


        }
    }

  }

  getKoinexTemplate() {
    var coins = [];
    // console.log(this.koinexData, "Koinex Template Data");

    var exchangeCoins = this.koinexData.stats;
    for (let coin in exchangeCoins) {
      coins.push(this.getCoinName(coin));
    }
    return coins;
  }

  getZebpayTemplate() {
    var coins = []
    coins.push(this.getCoinName("BTC"));
    return coins;
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

    // console.log(coinMarketCapData, "coinmarket cap data- processor");

    // console.log(coinList, "before");
    if (coinMarketCapData != undefined) {
      if (coinMarketCapData.length == 1) {
        var singleCoin = {}
        // console.log(coinMarketCapData);

        // console.log(coinList[coinMarketCapData[0].symbol]);

        singleCoin[coinMarketCapData[0].symbol] = coinList[coinMarketCapData[0].symbol];
        coinList = singleCoin;
        // console.log(coinList, "after");

      }
    }
    for (let coin in coinList) {

      var processedCoin: any = {};

      processedCoin = this.processedCoinInitializer(processedCoin);

      processedCoin.coinName = this.getCoinName(coin);
      processedCoin.coinCode = coin;

      processedCoin.market.no = +coinList[coin].last_traded_price;
      processedCoin.buy.no = +coinList[coin].lowest_ask;
      processedCoin.sell.no = +coinList[coin].highest_bid;
      processedCoin.min.no = +coinList[coin].min_24hrs;
      processedCoin.max.no = +coinList[coin].max_24hrs;

      processedCoin.price_index = this.getPriceIndex(processedCoin.min.no, processedCoin.max.no, processedCoin.market.no);

      processedCoin = this.plusMinus20Percent(processedCoin, processedCoin.market.no);
      // console.log(coinMarketCapData, "coin market data null check");
      if (coinMarketCapData != undefined) {
        processedCoin = this.injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData);
      }

      processedCoin = this.coinDetailFormatter(processedCoin);
      // console.log(processedCoin);
      processedKoinexData.push(processedCoin);
    }
    return processedKoinexData;
  }

  coinDetailFormatter(processedCoin: any) {
    processedCoin.market.formatted = this.numberFormatter(processedCoin.market.no);
    processedCoin.buy.formatted = this.numberFormatter(processedCoin.buy.no);
    processedCoin.sell.formatted = this.numberFormatter(processedCoin.sell.no);
    if (processedCoin.min.no != undefined) {
      processedCoin.min.formatted = this.numberFormatter(processedCoin.min.no);
      processedCoin.max.formatted = this.numberFormatter(processedCoin.max.no);
    }
    if (processedCoin.globalINR.no != undefined) {
      processedCoin.globalINR.formatted = this.numberFormatter(processedCoin.globalINR.no);
      processedCoin.globalUSD.formatted = this.numberFormatter(processedCoin.globalUSD.no, 'en-US', 'USD');
    }
    return processedCoin;
  }

  plusMinus20Percent(ObjectTarget, market): any {
    let marketPrice = +market;
    let percent20 = (marketPrice * 0.2);
    let plus20 = marketPrice + percent20;
    let minus20 = marketPrice - percent20;

    ObjectTarget.plus20 = {};
    ObjectTarget.minus20 = {};

    ObjectTarget.plus20.no = plus20;
    ObjectTarget.minus20.no = minus20;

    ObjectTarget.plus20.formatted = this.numberFormatter(ObjectTarget.plus20.no);
    ObjectTarget.minus20.formatted = this.numberFormatter(ObjectTarget.minus20.no);

    return ObjectTarget;
  }

  numberFormatter(number: any, locale: any = 'hi-IN', currency: any = 'INR'): any {
    return number.toLocaleString(locale, { style: 'currency', currency: currency });
  }

  rangeStepCalculator(min, max): any {
    let diff = max - min;
    let step = diff / 50;
    // console.log("Steps ", step);

    return step;
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

    var processedCoin: any = {};
    processedCoin = this.processedCoinInitializer(processedCoin);

    processedCoin.coinName = this.getCoinName(coin);
    processedCoin.coinCode = coin;
    processedCoin.market.no = +zebpayData.market;
    processedCoin.buy.no = +zebpayData.buy;
    processedCoin.sell.no = +zebpayData.sell;
    processedCoin.min.no = undefined;
    processedCoin.max.no = undefined;

    processedCoin.price_index = this.getPriceIndexZebpay(processedCoin.buy.no, processedCoin.sell.no);

    if (coinMarketCapData != undefined) {
      processedCoin = this.injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData);
    }
    processedCoin = this.coinDetailFormatter(processedCoin);
    // console.log(processedCoin);
    processedZebpayData.push(processedCoin);
    return processedZebpayData;
  }

  processedCoinInitializer(processedCoin) {
    processedCoin.market = {};
    processedCoin.buy = {};
    processedCoin.sell = {};
    processedCoin.min = {};
    processedCoin.max = {};
    processedCoin.globalINR = {};
    processedCoin.globalUSD = {};
    return processedCoin;
  }

  injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData): any {
    let coinGlobalStats = this.getCoinGlobalStats(coin, coinMarketCapData, coinDeskData);
    processedCoin.globalINR.no = +coinGlobalStats.globalINR;
    processedCoin.globalUSD.no = +coinGlobalStats.globalUSD;
    processedCoin.change = +coinGlobalStats.change;
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
  processExchangeData(exchange: any, exchangeData: any, coinMarketCapData?: any, coinDeskData?: any): any {
    // console.log(coinMarketCapData, " inside process Exchange data - SWITCH");

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
  getMarketOverviewData(sel: string, coin: string, data: boolean = true): any {

    return Observable.forkJoin([this.getExchangeData(sel, data), this.getCoinMarketCapData(coin), this.getCoindeskData()]);

  }

  setExchangeData(exchange: any, exchangeData: any) {
    switch (exchange) {
      case "koinex":
        {
          // console.log("SET - koinex exchange data");

          return this.koinexData = exchangeData;
        }
      case "zebpay":
        {
          // console.log("SET - zebpay exchange data");
          return this.zebpayData = exchangeData;
        }
    }
  }
}
