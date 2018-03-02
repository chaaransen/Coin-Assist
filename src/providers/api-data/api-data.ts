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
import { Utilities } from '../utilities/utilities';
import { forkJoin } from 'rxjs/observable/forkJoin';

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

  constructor(private http: HttpClient, private storage: Storage, private utility: Utilities) {
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
    return Constants.API_URL;
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

  generateZebpayApis(fetchedApiUrl: any) {
    // console.log("passed for store", fetchedApiUrl);

    let zebpayCoinUrls: any = {};
    var coinList = fetchedApiUrl.exchange.zebpay.coinList;
    console.log(coinList);

    for (let coin in coinList) {
      console.log(coin, "coin");
      console.log(coinList[coin]);

      zebpayCoinUrls[coinList[coin]] = fetchedApiUrl.exchange.zebpay.api + coinList[coin] + "/inr";
    }
    fetchedApiUrl.exchange.zebpay.coinUrls = {};
    fetchedApiUrl.exchange.zebpay.coinUrls = zebpayCoinUrls;

    return Observable.of(fetchedApiUrl);
  }

  getCurrentApis(): any {
    return this.storage.get(this.apiUrlStore);
  }

  // ************************************************************************
  getKoinexData(): any {
    // console.log("GET - koinex data");
    // console.log(this.apiUrls.exchange.koinex);
    // console.log(this.koinexData, "before");


    return Observable.of(this.koinexData = Constants.KOINEX_DATA);

    // if (this.koinexData.lock == false || this.koinexData.lock == undefined) {
    //   this.koinexData.lock = true;
    //   return this.http.get(this.apiUrls.exchange.koinex.api).map(res => {
    //     // console.log(res);
    //     // console.log("FETCHED - koinex data", res);

    //     this.updateRecentExchangeData(Constants.KOINEX, res);
    //     return res;
    //   }).catch(error => {
    //     this.updateRecentExchangeData(Constants.KOINEX);
    //     return Observable.of(this.koinexData)
    //   });

    // } else if (this.koinexData.lock == true) {
    //   // console.log("STATIC - koinex data", this.koinexData);
    //   return Observable.of(this.koinexData);
    // }
  }

  updateRecentExchangeData(exchange: string, exchangeData?: any) {
    if (exchangeData != undefined) {
      this.setExchangeData(exchange, exchangeData);
    }
    this.lockExchange(exchange);
  }

  lockExchange(exchange: string): any {

    switch (exchange) {
      case Constants.KOINEX: {
        this.koinexData.lock = true;
        // console.log("LOCK SET", this.koinexData);

        var releaseLockKoinex = Observable.timer(15000);
        releaseLockKoinex.subscribe(res => {
          this.koinexData.lock = false;
          // console.log("LOCK RELEASED", this.koinexData);
        });
        break;
      }
      case Constants.ZEBPAY:
        {
          this.zebpayData.lock = true;
          // console.log("LOCK SET", this.zebpayData);

          var releaseLockZebpay = Observable.timer(15000);
          releaseLockZebpay.subscribe(res => {
            this.zebpayData.lock = false;
            // console.log("LOCK RELEASED", this.zebpayData);
          });
          break;
        }
    }
  }

  // TO BE TESTED
  getZebpayData(): any {
    // console.log("GET - zebpay data", this.zebpayData);

    if (this.zebpayData.lock == false || this.zebpayData.lock == undefined) {
      this.zebpayData.lock = true;
      let coinRequests: Array<Observable<Object>> = new Array<Observable<Object>>();
      for (let coinUrl in this.apiUrls.exchange.zebpay.coinUrls) {
        coinRequests.push(this.http.get(this.apiUrls.exchange.zebpay.coinUrls[coinUrl]));
      }
      // console.log("coinRequests", coinRequests);

      return forkJoin(coinRequests).map(res => {
        // console.log(res);
        // console.log("FETCHED - zebpay data", res);
        this.updateRecentExchangeData(Constants.ZEBPAY, res);
        return res;
      }).catch(error => {
        this.updateRecentExchangeData(Constants.ZEBPAY);
        return Observable.of(this.zebpayData)
      });

    } else if (this.zebpayData.lock == true) {
      // console.log("STATIC - zebpay data", this.zebpayData);
      return Observable.of(this.zebpayData);
    }
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
      case "BTC" || 'btc':
        return Constants.BTC;
      case "ETH" || 'eth':
        return Constants.ETH;
      case "XRP" || 'xrp':
        return Constants.XRP;
      case "BCH" || 'bch':
        return Constants.BCH;
      case "LTC" || 'ltc':
        return Constants.LTC;
    }
  }

  // TO BE TESTED
  koinexProcessor(exchangeData: any, coinMarketCapData: any, coinDeskData: any): any {
    // console.log("Koinex Exchange data", exchangeData);

    var processedKoinexData = [];
    var coinList = this.apiUrls.exchange.zebpay.coinList;
    var tempKoinexData = exchangeData.stats;
    // console.log(coinMarketCapData, "coinmarket cap data- processor");
    // console.log("temp koinex data full", tempKoinexData);

    // console.log(coinList, "before");
    if (coinMarketCapData != undefined) {
      if (coinMarketCapData.length == 1) {
        // console.log(coinMarketCapData);

        // console.log(coinList[coinMarketCapData[0].symbol]);


        coinList = [coinMarketCapData[0].symbol];
        // console.log(coinList, "after");

      }
    }
    for (let coin in coinList) {

      // var processedCoin: any = {};
      // console.log(coinList[coin], "coin value");

      var processedCoin: CoinDetail = new CoinDetail();
      var coinCode = coinList[coin].toUpperCase();
      // console.log("Coin Code", coinCode);

      processedCoin.coinCode = coinCode;
      processedCoin.coinName = this.getCoinName(coinCode);
      // console.log("temp koinex data", tempKoinexData[coinCode]);

      processedCoin.market.no = +tempKoinexData[coinCode].last_traded_price;
      processedCoin.buy.no = +tempKoinexData[coinCode].lowest_ask;
      processedCoin.sell.no = +tempKoinexData[coinCode].highest_bid;
      processedCoin.min.no = +tempKoinexData[coinCode].min_24hrs;
      processedCoin.max.no = +tempKoinexData[coinCode].max_24hrs;
      let diff = processedCoin.max.no - processedCoin.min.no;
      let average = diff / 2;
      processedCoin.volatility = this.utility.trimToDecimal((average / processedCoin.market.no) * 100, 2);

      processedCoin.price_index = this.getPriceIndex(processedCoin.min.no, processedCoin.max.no, processedCoin.market.no);

      // console.log(coinMarketCapData, "coin market data null check");
      if (coinMarketCapData != undefined) {
        processedCoin = this.injectGlobalStats(coinCode, processedCoin, coinMarketCapData, coinDeskData);
      }

      processedCoin = this.coinDetailFormatter(processedCoin);
      // console.log(processedCoin);
      processedKoinexData.push(processedCoin);
    }
    return processedKoinexData;
  }

  coinDetailFormatter(processedCoin: any) {
    processedCoin.market.formatted = this.utility.currencyFormatter(processedCoin.market.no);
    processedCoin.buy.formatted = this.utility.currencyFormatter(processedCoin.buy.no);
    processedCoin.sell.formatted = this.utility.currencyFormatter(processedCoin.sell.no);
    if (processedCoin.min.no != undefined) {
      processedCoin.min.formatted = this.utility.currencyFormatter(processedCoin.min.no);
      processedCoin.max.formatted = this.utility.currencyFormatter(processedCoin.max.no);
    }
    if (processedCoin.global.INR.no != undefined) {
      processedCoin.global.INR.formatted = this.utility.currencyFormatter(processedCoin.global.INR.no);
      processedCoin.global.USD.formatted = this.utility.currencyFormatter(processedCoin.global.USD.no, 'en-US', 'USD');
      processedCoin.globalDiff.val.formatted = this.utility.currencyFormatter(processedCoin.globalDiff.val.no);
    }
    return processedCoin;
  }

  plusMinusPercent(ObjectTarget = undefined, market, percent: number): any {
    let marketPrice = +market;
    var percentage: any = {};
    percentage.percentValue = (marketPrice * percent);
    percentage.plusPercent = marketPrice + percentage.percentValue;
    percentage.minusPercent = marketPrice - percentage.percentValue;

    if (ObjectTarget != undefined) {
      try {
        ObjectTarget.range.plusPercent.no = percentage.plusPercent;
        ObjectTarget.range.minusPercent.no = percentage.minusPercent;

        ObjectTarget.range.plusPercent.formatted = this.utility.currencyFormatter(ObjectTarget.range.plusPercent.no);
        ObjectTarget.range.minusPercent.formatted = this.utility.currencyFormatter(ObjectTarget.range.minusPercent.no);

        return ObjectTarget;
      }
      catch (e) {
        console.log(e);

      }
    }
    else {
      return percentage;
    }
  }

  rangeStepCalculator(min, max): number {
    let diff = max - min;
    let step = diff / 10;
    // console.log("Steps ", step);

    return step;
  }

  // TO BE TESTED
  getCoinGlobalStats(coinCode, coinMarketCapData, coinDeskData): any {
    try {
      var coinGlobalStats: any = {};
      // console.log(coinCode, "symbol required");

      for (let coin in coinMarketCapData) {
        if (coinMarketCapData[coin].symbol == coinCode || coinMarketCapData[coin].symbol.toLowerCase() == coinCode) {

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
          // console.log("Coin global stats", coinGlobalStats);

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

    if (current <= lowRegionHigh && current > min || current < min) {
      return "Low"
    } else if (current <= mediumRegionHigh && current > lowRegionHigh) {
      return "Medium";
    } else if (current <= max && current > mediumRegionHigh || current > max) {
      return "High";
    }

  }

  zebpayObjectCreator(exchangeData: any) {
    var zebpayData = {};
    for (let coin in exchangeData) {
      if (exchangeData[coin].virtualCurrency != undefined) {
        zebpayData[exchangeData[coin].virtualCurrency] = exchangeData[coin];
      }
    }
    return zebpayData;
  }

  // TO BE TESTED
  zebpayProcessor(exchangeData: any, coinMarketCapData: any, coinDeskData: any): any {
    var processedZebpayData = [];
    var zebpayData = {};
    zebpayData = this.zebpayObjectCreator(exchangeData);
    // console.log("unprocessed", zebpayData);

    if (coinMarketCapData != undefined) {
      if (coinMarketCapData.length == 1) {
        var singleCoin = {}
        // console.log("Coin market cap data", coinMarketCapData);

        singleCoin[coinMarketCapData[0].symbol] = zebpayData[coinMarketCapData[0].symbol.toLowerCase()];
        zebpayData = singleCoin;
        // console.log(zebpayData, "after");

      }
    }

    for (let coin in zebpayData) {
      var processedCoin: CoinDetail = new CoinDetail();
      // console.log("Data inside zebpay data", zebpayData[coin]);

      // console.log("inside processer assigner");



      processedCoin.coinCode = zebpayData[coin].virtualCurrency;
      processedCoin.coinCode = processedCoin.coinCode.toUpperCase();
      processedCoin.coinName = this.getCoinName(processedCoin.coinCode);
      // console.log("Coin name is", processedCoin.coinName);
      // console.log("Coin code is", processedCoin.coinCode);
      processedCoin.market.no = +zebpayData[coin].market;
      processedCoin.buy.no = +zebpayData[coin].buy;
      processedCoin.sell.no = +zebpayData[coin].sell;
      processedCoin.min.no = undefined;
      processedCoin.max.no = undefined;

      processedCoin.price_index = this.getPriceIndexZebpay(processedCoin.buy.no, processedCoin.sell.no);

      if (coinMarketCapData != undefined) {
        processedCoin = this.injectGlobalStats(processedCoin.coinCode, processedCoin, coinMarketCapData, coinDeskData);
      }
      processedCoin = this.coinDetailFormatter(processedCoin);
      // console.log("processed coin", processedCoin);
      processedZebpayData.push(processedCoin);

    }
    return processedZebpayData;
  }

  injectGlobalStats(coinCode: string, processedCoin: CoinDetail, coinMarketCapData, coinDeskData): any {
    try {
      let coinGlobalStats: any = this.getCoinGlobalStats(coinCode, coinMarketCapData, coinDeskData);

      processedCoin.global.INR.no = +coinGlobalStats.globalINR;
      processedCoin.global.USD.no = +coinGlobalStats.globalUSD;

      processedCoin.change.hour = +coinGlobalStats.changeHour;
      processedCoin.change.day = +coinGlobalStats.changeDay;
      processedCoin.change.week = +coinGlobalStats.changeWeek;
      processedCoin.globalDiff.val.no = processedCoin.market.no - processedCoin.global.INR.no;
      processedCoin.globalDiff.percent = this.utility.trimToDecimal((processedCoin.globalDiff.val.no / processedCoin.market.no) * 100, 2);
      // console.log(processedCoin.globalDiff.percent);

      return processedCoin;
    }
    catch (e) {
      console.log(e);

    }
  }

  getPriceIndexZebpay(buy, sell) {
    let diff = buy - sell;

    if (diff < 10000) { return "Low" }
    else if (diff < 20000 && diff >= 10000) {
      return "Medium";
    } else if (diff >= 20000) {
      return "High";
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
        return this.http.get(this.apiUrls.global.coinmarketcap.coin.XRP);
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
          break;
        }
      case "zebpay":
        {
          // console.log("SET - zebpay exchange data");
          this.zebpayData = exchangeData;
          break;
        }
    }
  }
}
