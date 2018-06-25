import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import * as Constants from '../../constants/api-constants'
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import { CoinDetail } from '../../models/coin-detail';
import { Utilities } from '../utilities/utilities';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { ToastController, AlertController, Platform } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
import { AdMobFree, AdMobFreeRewardVideoConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { Network } from '@ionic-native/network';
import { Notif } from '../../models/api-urls';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

const videoConfig: AdMobFreeRewardVideoConfig = {
  id: "ca-app-pub-4512084985073909/4639923138",
  isTesting: false,
  autoShow: false
};

const interstitialConfig: AdMobFreeInterstitialConfig = {
  id: "ca-app-pub-4512084985073909/1939390564",
  isTesting: false,
  autoShow: false
};

@Injectable()
export class ApiDataProvider {

  apiUrls: any = {};
  apiUrlStore = "apiUrls";
  koinexData: any = {};
  zebpayData: any = {};
  networkFlag: boolean;
  usedFlag = false;
  // ******************************************************************************
  private coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";
  koinexTest = false;
  rewardNotif: boolean = false;
  rateNotif: boolean = false;

  // private coinAssistApis = "http://localhost:3000/apis";

  constructor(private http: HttpClient, private storage: Storage, private utility: Utilities, private toastCtrl: ToastController, public admobFree: AdMobFree, private alertCtrl: AlertController, private firebaseAnalytics: FirebaseAnalytics, private platform: Platform, private network: Network, private nativePageTransitions: NativePageTransitions) {

  }

  ngOnInit() {
  }

  getApiUrl(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getApiUrlStorage().then(res => {
        // console.log("Fetching api urls from storage ", res);

        if (res != null) {
          // console.log("Setting fetched from storage");
          this.apiUrls = res;
          resolve(this.apiUrls);
        }
        else {
          // console.log("Api url null so fetching from cloud");

          this.fetchApiUrl().then(res => {
            // console.log("Fetched api urls", res);
            this.generateZebpayApis(res).subscribe(generated => {
              // console.log("generated urls passed for store", generated);
              this.apiUrls = generated
              this.storeApiUrl(this.apiUrls);
            });
          }).catch(err => {
            console.log("Error Fetching API Urls ", err);
          });

          this.generateZebpayApis(this.getConstantApiUrl()).subscribe(generated => {
            // console.log("Constant API Urls Used");

            this.apiUrls = generated
            resolve(this.apiUrls);
          });

        }
      });
    });
  }

  checkNetworkConnection(): Promise<any> {

    return this.platform.ready().then(() => {
      // console.log("platform ready - api data");
      return new Promise((resolve, reject) => {
        if (this.network.type != 'none') {
          // console.log(this.network.type);
          // console.log("network flag set as true");
          this.networkFlag = true;
          resolve(this.networkFlag);
        } else {
          this.networkFlag = false;
          resolve(this.networkFlag);
        }
        // console.log("checking network connection");

        let connectSubscription = this.network.onConnect().subscribe(() => {
          // console.log('network connected!');
          this.networkFlag = true;
        });

        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
          // console.log('network was disconnected :-(');
          this.networkFlag = false;
        });

      });

    });
  }

  addGracePoints() {
    this.fetchService(Constants.POINTS).then(points => {
      // console.log("Fetch service old points before ", points);
      if (points <= 0) {
        // console.log("points less or equals 0 so adding grace points");
        let newPoints: number = points;
        newPoints += Constants.GRACE_POINTS;
        this.storeService(Constants.POINTS, newPoints);
        // console.log("Added Grace Points", newPoints);
      }
    });
  }

  prepareVideoAd(show: boolean = false) {
    // console.log("show value ", show);

    this.admobFree.rewardVideo.config(videoConfig);
    this.admobFree.rewardVideo.isReady().then(res => {
      if (res) {
        if (show) {
          // console.log("Video Ad Already Ready - calling Show!");
          // console.log("prepared Video ad - ready response", res);
          this.showVideoAd();
          show = false;
        }
      } else {
        // console.log("AD not ready - Preparing...");

        this.admobFree.rewardVideo.prepare().then(res => {
          // console.log("Reward Video Prepared", res);
          if (show) {
            this.showVideoAd();
            show = false;
          }
        }).catch(err => {
          console.log("Unable to prepare", err);
          if (show) {
            this.prepareInterstitialAd(true);
            show = false;
          }
        });
        this.admobFree.on("admob.rewardvideo.events.LOAD_FAIL").subscribe(res => {
          // console.log("AD failed to Load - new", res);
          if (show) {
            this.prepareInterstitialAd(true);
            show = false;
          }
        });

        this.admobFree.on("admob.rewardvideo.events.LOAD").subscribe(res => {
          // console.log("AD loadded - new", res);
          if (show) {
            this.showVideoAd();
            show = false;
          }
        });

      }
    });
  }

  showVideoAd() {
    this.admobFree.rewardVideo.isReady().then(res => {
      if (res) {
        this.admobFree.rewardVideo.show().then(res => {
          // console.log("Video Ad is Showing", res);

          this.admobFree.on("admob.rewardvideo.events.REWARD").subscribe(res => {
            // console.log("Reward Video value return ", res);
            // console.log(res.rewardAmount);
            var refillPoints = res.rewardAmount;
            this.fetchService(Constants.POINTS).then(points => {

              let newPoints: number = points;
              newPoints += refillPoints;
              this.storeService(Constants.POINTS, newPoints);
              // console.log("Earned New points", newPoints);
            });
            // console.log("Successful view - reward", res);

          });

          this.admobFree.on("admob.rewardvideo.events.CLOSE").subscribe(res => {
            this.prepareVideoAd();
            // console.log("AD closed", res);
          });

        }).catch(err => {
          // console.log("Unable to show Video Ad", err);
          this.prepareInterstitialAd(true);
        });
      }
    }).catch(err => {
      // console.log("Exception thrown - ready", err);
      this.prepareInterstitialAd(true);
    });

  }



  prepareInterstitialAd(show: boolean = false) {
    // console.log("show value - interstitial ", show);

    this.admobFree.interstitial.config(interstitialConfig);
    this.admobFree.interstitial.isReady().then(res => {
      // console.log("Interstitial Ready status", res);

      if (res) {
        if (show) {
          // console.log("Interstitial Ad Already Ready - calling Show!");
          this.showInterstitialAd();
          show = false;
        }
      } else {
        // console.log("Interstitial AD not ready - Preparing...");
        this.admobFree.interstitial.prepare().then(res => {
          // console.log("interstitial Ad Prepared", res);
          if (show) {
            this.showInterstitialAd();
            show = false;
          }
        }).catch(err => {
          this.addGracePoints();
          console.log("Unable to prepare interstitial Ad", err);
          // console.log("Giving 1 free point showing toast try later no ADs");
        });

        this.admobFree.on("admob.interstitial.events.LOAD_FAIL").subscribe(res => {
          // console.log("Interstitial AD failed to Load - new ", res);
          if (show) {
            this.addGracePoints();
            show = false;
            // console.log("Unable to prepare interstitial Ad ", res);
            // console.log("Giving 1 free point showing toast try later no ADs");
          }
        });

        this.admobFree.on("admob.interstitial.events.LOAD").subscribe(res => {
          // console.log("Interstitial AD loaded - new ", res);
          // console.log("Interstitial show value Outside ", show);
          if (show) {
            // console.log("Interstitial show value ", show);
            this.showInterstitialAd();
            show = false;
          }
        });
      }
    });
  }

  showInterstitialAd() {
    // console.log("Showing interstitial");
    this.admobFree.interstitial.isReady().then(res => {
      // console.log("Interstitial ready status ", res);

      if (res) {
        this.admobFree.interstitial.show().then(res => {
          // console.log("Interstitial Ad show status ", res);
          this.fetchService(Constants.POINTS).then(points => {
            // console.log("Fetch service old points before ", points);

            let newPoints: number = points;
            newPoints += Constants.INTERSTITIAL_AD_REWARD;
            this.storeService(Constants.POINTS, newPoints);
            // console.log("Earned New points (interstitial Ads) ", newPoints);
          }).catch(err => {
            console.log("Error Fetching old points ", err);
          });
        }).catch(err => {
          console.log("Error showing interstitial Ads - Adding grace points ", err);
          this.addGracePoints();
        });
      }

    }).catch(err => {
      console.log("Exception thrown Ready ", err);
      this.addGracePoints();
    });
  }

  setApiUrl(apiUrl: any): any {
    this.apiUrls = apiUrl;
  }

  fetchApiUrl(): any {
    // console.log("GET - api urls");

    return this.http.get(this.coinAssistApis).toPromise();

  }

  showToast(message: string, position: string, duration: number = 1500) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present();
  }

  logAnalytics(pageName: string) {
    // console.log("Logging page: " + pageName);
    this.platform.ready().then(() => {
      this.firebaseAnalytics.logEvent(pageName, null)
        .then((res: any) => {
          // console.log("Analytics logging ", res);
        })
        .catch((error: any) => console.error(error));
    })

  }

  instructionToast(page: string, duration: number) {
    this.fetchService(page).then(notifLocks => {
      // console.log("instruction toast ", page, notifLocks);
      var notifs = new Notif();
      if (notifLocks != null) {
        notifs.swipeGesture = notifLocks.swipeGesture;
        notifs.pullGesture = notifLocks.pullGesture;
      }
      else {
        notifs.swipeGesture = false;
        notifs.pullGesture = false;
      }
      // console.log("Model notifs value ", notifs);

      if (notifs.pullGesture == false) {
        // console.log("Gesture notifs");

        let pullToast = this.toastCtrl.create({
          message: Constants.PULL_GESTURE,
          position: 'top',
          duration: duration,
          showCloseButton: true,
          closeButtonText: 'GOT IT!'
        });
        pullToast.onDidDismiss(() => {
          notifs.pullGesture = true;
          this.storeService(page, notifs);
        });
        pullToast.present();
      }

      if (notifs.swipeGesture == false) {
        // console.log("Swipe Notifs");

        let swipeToast = this.toastCtrl.create({
          message: Constants.SWIPE_GESTURE,
          position: 'top',
          duration: duration,
          showCloseButton: true,
          closeButtonText: 'GOT IT!'
        });
        swipeToast.onDidDismiss(() => {
          notifs.swipeGesture = true;
          this.storeService(page, notifs);
        });
        swipeToast.present();
      }

    });

  }

  infoAlert() {

    let alert = this.alertCtrl.create({
      title: '',
      message: '',
      buttons: [
        {
          text: 'Got it!',
          handler: () => {
          }
        }
      ]
    });
    alert.present();

  }

  getApiUrlStorage(): any {
    // console.log("GET - api url storage");
    return this.storage.ready().then(() => {

      return this.storage.get(this.apiUrlStore).then(res => {
        this.apiUrls = res;
        return this.apiUrls;
      });
    });
  }

  getConstantApiUrl(): any {
    // console.log("GET - constant URL ");
    return Constants.API_URL;
  }

  storeService(key: string, value: any) {
    // console.log("value", value);

    this.storage.set(key, value).then(res => {
    },
      err => {
        // console.log("Storage Error");
        console.log(err);
      });
  }

  fetchService(key: string): any {
    return this.storage.ready().then(res => {
      // console.log("Storage Ready response ", res);

      return this.storage.get(key).catch(err => {
        console.log("Error fetching data from storage");

      });
    });
  }

  storeApiUrl(fetchedApiUrl: any) {
    this.apiUrls = fetchedApiUrl;
    // console.log("STORE - store api url");
    this.storage.set(this.apiUrlStore, fetchedApiUrl).then(res => {
      // console.log("Stored Successfully");
      // console.log(res);

    },
      err => {
        // console.log("Storage Error");
        console.log(err);
      });
  }

  generateZebpayApis(fetchedApiUrl: any) {
    // console.log("passed for store", fetchedApiUrl);

    let zebpayCoinUrls: any = {};
    var coinList = fetchedApiUrl.exchange.Zebpay.coinList;
    // console.log(coinList);

    for (let coin in coinList) {
      // console.log(coin, "coin");
      // console.log(coinList[coin]);

      zebpayCoinUrls[coinList[coin]] = fetchedApiUrl.exchange.Zebpay.api + coinList[coin] + "/inr";
    }
    fetchedApiUrl.exchange.Zebpay.coinUrls = {};
    fetchedApiUrl.exchange.Zebpay.coinUrls = zebpayCoinUrls;

    return Observable.of(fetchedApiUrl);
  }

  getCurrentApis(): any {
    return this.storage.get(this.apiUrlStore);
  }

  // ************************************************************************
  getKoinexData(): any {
    // console.log("GET - koinex data");
    // console.log(this.apiUrls.exchange.Koinex);
    // console.log(this.koinexData, "before");

    if (this.koinexTest) {
      return Observable.of(this.koinexData = Constants.KOINEX_DATA);
    }
    else {
      if (this.koinexData.lock == false || this.koinexData.lock == undefined) {
        this.koinexData.lock = true;
        // console.log("koinex api urls", this.apiUrls);

        return this.http.get(this.apiUrls.exchange.Koinex.api).map(res => {
          // console.log(res);
          // console.log("FETCHED - koinex data", res);

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
      for (let coinUrl in this.apiUrls.exchange.Zebpay.coinUrls) {
        coinRequests.push(this.http.get(this.apiUrls.exchange.Zebpay.coinUrls[coinUrl]));
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
      case Constants.KOINEX:
        {
          // console.log("switch case koinex");
          if (data) {
            return this.getKoinexData();
          }
          return this.getKoinexTemplate();
        }
      case Constants.ZEBPAY:
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
  getCoinName(coin: string) {
    // console.log("find coin for symbol", coin);
    // console.log("coinsList", this.coins);

    return this.apiUrls.coins[coin.toUpperCase()].name;
  }

  // TO BE TESTED
  koinexProcessor(exchangeData: any, coinMarketCapData: any, coinDeskData: any): any {
    // console.log("Koinex Exchange data", exchangeData);
    try {
      var processedKoinexData = [];
      var coinList = this.apiUrls.exchange.Koinex.coinList;
      var tempKoinexData = exchangeData.stats.inr;

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
        // console.log("processed coin before", processedCoin);
        // console.log("Coin name", processedCoin.coinName);

        processedCoin = this.injectCoinImage(processedCoin);
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
    catch (e) {
      console.log("Koinex Processor Exception", e);
      return undefined;
    }
  }

  coinDetailFormatter(processedCoin: any) {
    try {
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
    catch (e) {
      console.log("Error Formatting Coin Details", e);
      return processedCoin;

    }
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
      console.log("Coin Global Stats Exception", e);
      return false;

    }
  }

  // TO BE TESTED
  getPriceIndex(min: any, max: any, current: any) {

    let total = max - min;
    let diff = total / 3;
    let lowRegionHigh = min + diff
    let mediumRegionHigh = (min + (2 * diff));

    if (current < lowRegionHigh && current >= min || current < min) {
      return "Low"
    } else if (current < mediumRegionHigh && current >= lowRegionHigh) {
      return "Medium";
    } else if (current <= max && current >= mediumRegionHigh || current > max) {
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
    try {
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
        processedCoin = this.injectCoinImage(processedCoin);
        // console.log("coin image url", processedCoin.coinImage);

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
    catch (e) {
      console.log("Zebpay Processor Exception", e);

    }
  }

  injectCoinImage(processedCoin: CoinDetail): CoinDetail {
    // console.log("processedCoin inside", processedCoin);
    try {
      processedCoin.coinImage = this.apiUrls.coins[processedCoin.coinCode].imageUrl;
      return processedCoin;
    }
    catch (e) {
      console.log("Error injecting Coin Image", e);

    }
  }

  injectGlobalStats(coinCode: string, processedCoin: CoinDetail, coinMarketCapData, coinDeskData): any {
    try {
      if (coinCode == "XRB") {
        coinCode = "NANO";
      }
      processedCoin.coinCode = coinCode;
      let coinGlobalStats: any = this.getCoinGlobalStats(coinCode, coinMarketCapData, coinDeskData);

      if (coinGlobalStats != false) {
        processedCoin.global.INR.no = +coinGlobalStats.globalINR;
        processedCoin.global.USD.no = +coinGlobalStats.globalUSD;

        processedCoin.change.hour = +coinGlobalStats.changeHour;
        processedCoin.change.day = +coinGlobalStats.changeDay;
        processedCoin.change.week = +coinGlobalStats.changeWeek;
        processedCoin.globalDiff.val.no = processedCoin.market.no - processedCoin.global.INR.no;
        processedCoin.globalDiff.percent = this.utility.trimToDecimal((processedCoin.globalDiff.val.no / processedCoin.market.no) * 100, 2);
        // console.log(processedCoin.globalDiff.percent);
      }
      return processedCoin;
    }
    catch (e) {
      console.log("Injecting Global Stats Exception", e);

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
    try {
      return this.http.get(this.apiUrls.global.coindesk.api);
    }
    catch (e) {
      console.log("Error Getting CoinDesk data", e);

    }
  }

  // TO BE TESTED
  getCoinMarketCapData(coinList: Array<string>): any {
    let coinRequests: Array<Observable<Object>> = this.generateCoinMarketCapURL(coinList);
    var coinMarketCapData: Array<Object> = new Array<Object>();
    return forkJoin(coinRequests).map(res => {
      // console.log(res);
      // console.log("FETCHED - coin market cap data", res);
      for (let index in res) {
        let inArray = res[index];
        coinMarketCapData.push(inArray[0]);
      }
      // console.log("coin market cap data final", coinMarketCapData);

      return coinMarketCapData;
    }).catch(error => {
      console.log("Error fetching coinmarket cap data", error);
      return Observable.of(error);
    });
  }

  generateCoinMarketCapURL(coinList: Array<string>): any {
    try {
      let coinRequestUrls: Array<Observable<Object>> = new Array<Observable<Object>>();
      var coinHolder = "COINNAME";
      // console.log("Coin list to fetch - coin Market cap", coinList);

      for (let coin in coinList) {
        // console.log("Coin CMC", coinList[coin]);

        let coinName = this.getCoinName(coinList[coin].toUpperCase()).replace(/\s/g, "-").toLowerCase();
        // console.log("coin name", coinName);

        let url = this.apiUrls.global.coinmarketcap.api.replace(coinHolder, coinName);
        // console.log("URL CMC", url);

        coinRequestUrls.push(this.http.get(url));
      }

      return coinRequestUrls;
    }
    catch (e) {
      console.log("Error Generating CoinMarketcap URL", e);

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
      console.log("Processing Exchange Data Error", e);

    }
  }

  // TO BE TESTED
  getMarketOverviewData(sel: string, coin: Array<string>, dataFlag: boolean = true): Observable<any> {
    try {
      return Observable.forkJoin([this.getExchangeData(sel, dataFlag), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
    }
    catch (e) {
      console.log("Error Getting market overview", e);

    }

  }

  setExchangeData(exchange: any, exchangeData: any) {
    switch (exchange) {
      case Constants.KOINEX:
        {
          this.koinexData = exchangeData;
          // console.log("SET - koinex exchange data", this.koinexData);
          break;
        }
      case Constants.ZEBPAY:
        {
          // console.log("SET - zebpay exchange data");
          this.zebpayData = exchangeData;
          break;
        }
    }
  }
}
