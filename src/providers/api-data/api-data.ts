import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { ApiUrls } from '../../models/api-urls';
import * as Constants from '../../constants/api-constants'
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import { CoinDetail } from '../../models/coin-detail';

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
    // console.log(this.koinexData, "before");


    // return Observable.of(this.koinexData = JSON.parse(Constants.KOINEX_DATA));

    if (this.koinexData.lock == false || this.koinexData.lock == undefined) {
      this.koinexData.lock = true;
      // console.log("FETCHING - koinex data");

      return this.http.get(this.apiUrls.exchange.koinex.api).map(res => {
        // console.log(res);

        this.updateRecentExchangeData(Constants.KOINEX, res);
        return res;
      }).catch(error => {
        this.updateRecentExchangeData(Constants.KOINEX);
        return Observable.of(this.koinexData)
      });

    } else if (this.koinexData.lock == true) {
      // console.log("STATIC - koinex data", this.koinexData);
      return Observable.of(this.koinexData);
    }
  }

  updateRecentExchangeData(exchange: string, exchangeData?: any) {
    if (exchangeData != undefined) {
      this.setExchangeData(exchange, exchangeData);
    }
    this.lockExchange(exchange);
  }

  lockExchange(exchange: string): any {

    switch (exchange) {
      case Constants.KOINEX:
        this.koinexData.lock = true;
        // console.log("LOCK SET", this.koinexData);

        var releaseLock = Observable.timer(15000);
        releaseLock.subscribe(res => {
          this.koinexData.lock = false;
          // console.log("LOCK RELEASED", this.koinexData);
        });
        break;

      case Constants.ZEBPAY:
        break;
    }
  }



  // TO BE TESTED
  getZebpayData(): any {
    // console.log("GET - zebpay data");
    return this.http.get(this.apiUrls.exchange.zebpay.api);
  }

  getExchangeData(exchange: string, data: boolean = true): any {

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

      // var processedCoin: any = {};

      var processedCoin: CoinDetail = new CoinDetail();

      processedCoin.coinName = this.getCoinName(coin);
      processedCoin.coinCode = coin;

      processedCoin.market.no = +coinList[coin].last_traded_price;
      processedCoin.buy.no = +coinList[coin].lowest_ask;
      processedCoin.sell.no = +coinList[coin].highest_bid;
      processedCoin.min.no = +coinList[coin].min_24hrs;
      processedCoin.max.no = +coinList[coin].max_24hrs;

      processedCoin.price_index = this.getPriceIndex(processedCoin.min.no, processedCoin.max.no, processedCoin.market.no);

      // console.log(coinMarketCapData, "coin market data null check");
      if (coinMarketCapData != undefined) {
        processedCoin = this.injectGlobalStats(coin, processedCoin, coinMarketCapData, coinDeskData);
        processedCoin.globalDiff.no = processedCoin.market.no - processedCoin.global.INR.no;
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
    if (processedCoin.global.INR.no != undefined) {
      processedCoin.global.INR.formatted = this.numberFormatter(processedCoin.global.INR.no);
      processedCoin.global.USD.formatted = this.numberFormatter(processedCoin.global.USD.no, 'en-US', 'USD');
      processedCoin.globalDiff.formatted = this.numberFormatter(processedCoin.globalDiff.no);
    }
    return processedCoin;
  }

  plusMinusPercent(ObjectTarget, market, percent: number): any {
    try {
      let marketPrice = +market;
      let percentValue = (marketPrice * percent);
      let plusPercent = marketPrice + percentValue;
      let minusPercent = marketPrice - percentValue;

      ObjectTarget.range.plusPercent.no = plusPercent;
      ObjectTarget.range.minusPercent.no = minusPercent;

      ObjectTarget.range.plusPercent.formatted = this.numberFormatter(ObjectTarget.range.plusPercent.no);
      ObjectTarget.range.minusPercent.formatted = this.numberFormatter(ObjectTarget.range.minusPercent.no);

      return ObjectTarget;
    }
    catch (e) {
      console.log(e);

    }
  }

  numberFormatter(number: any, locale: any = 'hi-IN', currency: any = 'INR'): any {
    return number.toLocaleString(locale, { style: 'currency', currency: currency });
  }

  rangeStepCalculator(min, max): number {
    let diff = max - min;
    let step = diff / 10;
    // console.log("Steps ", step);

    return step;
  }

  // TO BE TESTED
  getCoinGlobalStats(coinSymbol, coinMarketCapData, coinDeskData): any {
    try {
      var coinGlobalStats: any = {};

      for (let coin in coinMarketCapData) {
        if (coinMarketCapData[coin].symbol == coinSymbol) {

          coinGlobalStats.changeHour = coinMarketCapData[coin].percent_change_1h;
          coinGlobalStats.changeDay = coinMarketCapData[coin].percent_change_24h;
          coinGlobalStats.changeWeek = coinMarketCapData[coin].percent_change_7d;

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
    catch (e) {
      console.log(e);

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

    var processedCoin: CoinDetail = new CoinDetail();

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

  injectGlobalStats(coin, processedCoin: CoinDetail, coinMarketCapData, coinDeskData): any {
    try {
      let coinGlobalStats = this.getCoinGlobalStats(coin, coinMarketCapData, coinDeskData);

      processedCoin.global.INR.no = +coinGlobalStats.globalINR;
      processedCoin.global.USD.no = +coinGlobalStats.globalUSD;

      processedCoin.change.hour = +coinGlobalStats.changeHour;
      processedCoin.change.day = +coinGlobalStats.changeDay;
      processedCoin.change.week = +coinGlobalStats.changeWeek;
      return processedCoin;
    }
    catch (e) {
      console.log(e);

    }
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
    try {
      switch (exchange) {
        case Constants.KOINEX:
          {
            // console.log("switch case koinex");

            return this.koinexProcessor(exchangeData, coinMarketCapData, coinDeskData);
          }
        case Constants.ZEBPAY:
          {
            // console.log("switch case zebpay");
            return this.zebpayProcessor(exchangeData, coinMarketCapData, coinDeskData);
          }
      }
    }
    catch (e) {
      console.log(e);

    }
  }

  // TO BE TESTED
  getMarketOverviewData(sel: string, coin: string, data: boolean = true): Observable<any> {
    try {
      return Observable.forkJoin([this.getExchangeData(sel, data), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
    }
    catch (e) {
      console.log(e);

    }

  }

  setExchangeData(exchange: any, exchangeData: any) {
    switch (exchange) {
      case "koinex":
        {
          this.koinexData = exchangeData;
          // console.log("SET - koinex exchange data", this.koinexData);
        }
      case "zebpay":
        {
          // console.log("SET - zebpay exchange data");
          this.zebpayData = exchangeData;
        }
    }
  }
}
