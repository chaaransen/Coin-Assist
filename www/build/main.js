webpackJsonp([0],{

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__coin_detail_coin_detail__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, api, storage, navParam) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.storage = storage;
        this.navParam = navParam;
    }
    HomePage.prototype.ngOnInit = function () {
        // console.log("Home component - get urls");
        var _this = this;
        this.api.getApiUrlStorage().then(function (res) {
            if (res != null) {
                _this.apiUrls = res;
            }
            else {
                console.log("constant Api urls called");
                _this.apiUrls = _this.api.getConstantApiUrl();
            }
            // console.log("Home Compo Value return");
            // console.log(this.apiUrls);
            _this.api.setApiUrl(_this.apiUrls);
            _this.populateView();
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.populateView();
        setTimeout(function () {
            refresher.complete();
        }, 800);
    };
    HomePage.prototype.populateView = function () {
        // console.log(this.apiUrls.exchange);
        this.exchanges = Object.keys(this.apiUrls.exchange);
        this.selExchange = this.exchanges[0];
        this.selectedExchange(this.selExchange);
    };
    HomePage.prototype.selectedExchange = function (sel) {
        var _this = this;
        this.api.getMarketOverviewData(sel, __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["a" /* ALL */]).subscribe(function (res) {
            // console.log("first data - exchange data");
            // console.log(res[0]);
            // console.log("second data - coin market Cap data");
            // console.log(res[1]);
            // console.log("third data - coindesk data");
            // console.log(res[2]);
            _this.api.setExchangeData(sel, res[0]);
            _this.coins = _this.api.processExchangeData(sel, res[0], res[1], res[2]);
            // console.log("processed exchange data");
            // console.log(this.coins);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.navCoinDetailPage = function (coin) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__coin_detail_coin_detail__["a" /* CoinDetailPage */], { "coin": coin, "exchange": this.selExchange });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Market View</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-item>\n\n    <ion-label>Exchange:</ion-label>\n\n    <ion-select [(ngModel)]="selExchange" *ngIf="exchanges" interface="popover" (ngModelChange)="selectedExchange(selExchange)">\n\n      <ion-option *ngFor=" let exchange of exchanges ">{{exchange}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>Cryptos</ion-col>\n\n          <ion-col col-4>\n\n            Market Price\n\n          </ion-col>\n\n          <ion-col col-2>Change\n\n            <br>%</ion-col>\n\n          <ion-col col-2>Price Index</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n    <ion-card *ngFor="let coin of coins" (click)="navCoinDetailPage(coin)">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/{{coin.coinCode}}.png">\n\n          <h2>{{coin.coinName}}</h2>\n\n          <h2>({{coin.coinCode}})</h2>\n\n        </ion-thumbnail>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-row>\n\n                {{coin.market.formatted}}\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              {{coin.change}}\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              {{coin.price_index}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="coin.min.no">\n\n            <ion-col col-12>\n\n              Low: {{coin.min.formatted}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              High: {{coin.max.formatted}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button ion-button clear item-end>></button>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return KOINEX_DATA; });
/* unused harmony export COIN_LIST_TEMPLATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return XRP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ETH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BCH; });
/* unused harmony export INR */
/* unused harmony export USD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ZEBPAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return KOINEX; });
var API_URL = "{\r\n  \"exchange\": {\r\n    \"koinex\": \"https:\/\/koinex.in\/api\/ticker\",\r\n    \"zebpay\": \"https:\/\/www.zebapi.com\/api\/v1\/market\/ticker\/btc\/inr\"\r\n  },\r\n  \"global\": {\r\n    \"coindesk\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice.json\",\r\n        \"INR\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice\/inr.json\"\r\n      }\r\n    },\r\n    \"coinmarketcap\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?limit=6\",\r\n        \"INR\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?convert=INR&limit=6\"\r\n      },\r\n      \"coin\": {\r\n        \"bitcoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin\",\r\n        \"ether\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ethereum\",\r\n        \"ripple\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ripple\",\r\n        \"btc-cash\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin-cash\",\r\n        \"litecoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/litecoin\"\r\n      }\r\n    }\r\n  },\r\n  \"version\": \"1.0.0\"\r\n}";
var KOINEX_DATA = "{\"prices\":{\"BTC\":\"795000.0\",\"ETH\":\"34700.0\",\"BCH\":\"107499.0\",\"XRP\":\"19.25\",\"LTC\":\"6889.0\",\"MIOTA\":79.55,\"OMG\":547.62,\"GNT\":18.09},\"stats\":{\"ETH\":{\"last_traded_price\":\"34700.0\",\"lowest_ask\":\"34700.0\",\"highest_bid\":\"34601.0\",\"min_24hrs\":\"29800.0\",\"max_24hrs\":\"39000.0\",\"vol_24hrs\":\"3276.286\"},\"BTC\":{\"last_traded_price\":\"795000.0\",\"lowest_ask\":\"794990.0\",\"highest_bid\":\"792102.0\",\"min_24hrs\":\"700000.0\",\"max_24hrs\":\"932503.0\",\"vol_24hrs\":\"358.3514\"},\"LTC\":{\"last_traded_price\":\"6889.0\",\"lowest_ask\":\"6889.0\",\"highest_bid\":\"6888.0\",\"min_24hrs\":\"5998.0\",\"max_24hrs\":\"7678.0\",\"vol_24hrs\":\"8476.121\"},\"XRP\":{\"last_traded_price\":\"19.25\",\"lowest_ask\":\"19.35\",\"highest_bid\":\"19.25\",\"min_24hrs\":\"17.0\",\"max_24hrs\":\"21.05\",\"vol_24hrs\":\"2025861.7\"},\"BCH\":{\"last_traded_price\":\"107499.0\",\"lowest_ask\":\"107499.0\",\"highest_bid\":\"106800.0\",\"min_24hrs\":\"90000.0\",\"max_24hrs\":\"119900.0\",\"vol_24hrs\":\"650.083\"}}}";
var COIN_LIST_TEMPLATE = "{\r\n  \"coin\": \"bitcoin\",\r\n  \"market\": \"5000\",\r\n  \"buy\": \"6000\",\r\n  \"sell\": \"4000\",\r\n  \"price_index\": \"high\",\r\n  \"change\": \"7\"\r\n}";
var BTC = "Bitcoin";
var XRP = "Ripple";
var ETH = "Ethereum";
var LTC = "Litecoin";
var BCH = "Bitcoin Cash";
var INR = "INR";
var USD = "USD";
var ALL = "ALL";
var ZEBPAY = "zebpay";
var KOINEX = "koinex";
//# sourceMappingURL=api-constants.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quantity_calc_quantity_calc__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoinDetailPage = (function () {
    function CoinDetailPage(navCtrl, navParam, api) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.api = api;
        var coin = this.navParam.get("coin");
        this.exchange = this.navParam.get("exchange");
        // console.log(coin);
        this.initRange(coin);
    }
    CoinDetailPage.prototype.initRange = function (coin) {
        this.rangeRegion = {
            upper: coin.max.no,
            lower: coin.min.no
        };
        // console.log(this.rangeRegion);
        coin.step = this.api.rangeStepCalculator(coin.min.no, coin.max.no);
        this.coinDetail = coin;
        // console.log("coin detail");
        // console.log(this.coinDetail);
    };
    CoinDetailPage.prototype.change = function () {
        // console.log(this.rangeRegion);
    };
    CoinDetailPage.prototype.doRefresh = function (refresher) {
        this.populateView();
        setTimeout(function () {
            refresher.complete();
        }, 800);
    };
    CoinDetailPage.prototype.populateView = function () {
        this.selectedExchange(this.exchange);
    };
    CoinDetailPage.prototype.selectedExchange = function (sel) {
        var _this = this;
        var coinName = this.api.getCoinName(this.coinDetail.coinCode);
        this.api.getMarketOverviewData(sel, coinName).subscribe(function (res) {
            // console.log("COIN DETAIL");
            // console.log("first data - exchange data");
            // console.log(res[0]);
            // console.log("second data - coin market Cap data");
            // console.log(res[1]);
            // console.log("third data - coindesk data");
            // console.log(res[2]);
            var coinArray = _this.api.processExchangeData(sel, res[0], res[1], res[2]);
            _this.coinDetail = coinArray[0];
            _this.initRange(_this.coinDetail);
            console.log(_this.coinDetail, "coinDetail Processed Detail");
        }, function (err) {
            console.log(err);
        });
    };
    CoinDetailPage.prototype.gotoCalcQuantityPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__quantity_calc_quantity_calc__["a" /* QuantityCalcPage */], { "coin": this.coinDetail.coinName, "exchange": this.exchange });
    };
    CoinDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coin-detail',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Coin Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            {{exchange}}\n\n            <ion-col col-5>\n\n              <ion-thumbnail item-start>\n\n                <img src="assets/imgs/{{coinDetail.coinCode}}.png">\n\n              </ion-thumbnail>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <h1>{{coinDetail.coinName}} ( {{coinDetail.coinCode}} )</h1>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <h1>{{coinDetail.market.formatted}}</h1>\n\n        <h2>{{coinDetail.change}}</h2>\n\n\n\n        <h2> [ global: {{coinDetail.globalINR.formatted}} ] ( {{coinDetail.globalUSD.formatted}} ) </h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button (click)="gotoCalcQuantityPage()" ion-button>Calculate Quantity / Amount</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        Buy: {{coinDetail.buy.formatted}} Sell: {{coinDetail.sell.formatted}}\n\n      </ion-item>\n\n      <ion-item>\n\n        <button (click)="gotoCalcQuantityPage()" ion-button>Calculate Quantity / Amount</button>\n\n      </ion-item>\n\n\n\n      // Rage for setting price alert\n\n\n\n      <!-- <ion-item>\n\n        <h2> From : {{rangeRegion.lower}}</h2>\n\n        <h2> To: {{rangeRegion.upper}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-range dualKnobs="true" pin="true" snaps="true" [step]="coinDetail.step" (ionChange)="change()" steps [(ngModel)]="rangeRegion"\n\n          [min]="coinDetail.minus20.no" [max]="coinDetail.plus20.no">\n\n          <ion-label range-left>{{coinDetail.minus20.formatted}}</ion-label>\n\n          <ion-label range-right>{{coinDetail.plus20.formatted}}</ion-label>\n\n        </ion-range>\n\n      </ion-item> -->\n\n\n\n      // Alert Button\n\n\n\n      <!-- <ion-item>\n\n        <button ion-button large>Set Alert</button>\n\n\n\n      </ion-item> -->\n\n\n\n    </ion-card>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], CoinDetailPage);
    return CoinDetailPage;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_value_detail__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_range_value__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuantityCalcPage = (function () {
    function QuantityCalcPage(navCtrl, navParam, api) {
        // console.log("qty constructor called");
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.api = api;
        this.selCoin = new __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__["a" /* CoinDetail */]();
        this.apis = {};
        this.amount = undefined;
        this.initializeObjects();
        this.selExchange = navParam.get("exchange");
        this.selCoin.coinName = navParam.get("coin");
        // console.log(this.selCoin, " sel coin qty");
        // console.log(this.selExchange, " sel Exchange qty");
        this.apis = this.api.apiUrls.exchange;
        this.exchanges = Object.keys(this.apis);
    }
    ;
    QuantityCalcPage.prototype.initializeObjects = function () {
        this.range = new __WEBPACK_IMPORTED_MODULE_6__models_range_value__["a" /* RangeValue */]();
        this.range.minus20 = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.range.plus20 = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.range.rate = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
    };
    QuantityCalcPage.prototype.ngOnInit = function () {
        // console.log("ng oninit called");
        this.populateView();
    };
    QuantityCalcPage.prototype.doRefresh = function (refresher) {
        console.log(this.selCoin.coinName, "sel Coin Name - Refresh");
        this.populateView();
        setTimeout(function () {
            refresher.complete();
        }, 800);
    };
    QuantityCalcPage.prototype.populateView = function () {
        // console.log("populate view called");
        this.populateCoins(this.selExchange);
    };
    QuantityCalcPage.prototype.populateCoins = function (exchange) {
        var _this = this;
        this.api.getExchangeData(exchange, true).subscribe(function (res) {
            _this.coins = _this.api.processExchangeData(exchange, res, undefined, undefined);
            // console.log(this.coins, "coins in qty");
            _this.populateCoinValues(_this.selCoin.coinName);
        });
    };
    QuantityCalcPage.prototype.populateCoinValues = function (selCoin) {
        var _this = this;
        console.log(this.selCoin.coinName, "sel Coin Name - Refresh Populate");
        this.selCoin = this.coins.find(function (coin) { return _this.selCoin.coinName == coin.coinName; });
        console.log(this.selCoin, "selected coin - QTY");
        this.updateRange(this.selCoin.buy.no);
        // console.log(this.selCoin, " coin selected");
        // console.log(this.coins, "all coins");
    };
    QuantityCalcPage.prototype.updateRange = function (rate) {
        this.range.rate.no = rate;
        this.formateRate();
        this.range = this.api.plusMinus20Percent(this.range, this.range.rate.no);
    };
    QuantityCalcPage.prototype.formateRate = function () {
        // console.log(this.range.rate.no, 'nubmer');
        this.range.rate.formatted = this.api.numberFormatter(+this.range.rate.no);
        // console.log(this.range.rate.formatted);
    };
    QuantityCalcPage.prototype.calcQuantity = function () {
        if (this.amount != undefined) {
            this.quantity = this.amount / this.range.rate.no;
        }
    };
    QuantityCalcPage.prototype.rangeChanged = function () {
        this.formateRate();
        this.calcQuantity();
    };
    QuantityCalcPage.prototype.calcAmount = function () {
        this.amount = this.quantity * this.range.rate.no;
    };
    QuantityCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quantity-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Quantity / Amount Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Exchange</ion-label>\n\n      <ion-select [(ngModel)]="selExchange" *ngIf="selExchange" interface="popover" (ngModelChange)="populateCoins(selExchange)">\n\n        <ion-option *ngFor=" let exchange of exchanges ">{{exchange}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Crypto-Coin</ion-label>\n\n      <ion-select [(ngModel)]="selCoin" interface="popover" (ngModelChange)="populateCoinValues(selCoin)">\n\n        <ion-option *ngFor=" let coin of coins" [value]="coin">{{coin.coinName}} ({{coin.coinCode}})</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Coin Rate</ion-label>\n\n      <ion-input type="number" placeholder="Rate" [(ngModel)]="range.rate.no" clearInput="true" (ngModelChange)="updateRange($event)"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      {{range.rate.formatted}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-range [min]="range.minus20.no" [max]="range.plus20.no" [(ngModel)]="range.rate.no" (ionChange)="rangeChanged()">\n\n        <ion-label range-left>{{range.minus20.formatted}}</ion-label>\n\n        <ion-label range-right>{{range.plus20.formatted}}</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Amount in Rs</ion-label>\n\n      <ion-input type="number" placeholder="Rate" clearInput="true" [(ngModel)]="amount" (ngModelChange)="calcQuantity()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Quantity</ion-label>\n\n      <ion-input type="number" placeholder="Quantity" clearInput="true" [(ngModel)]="quantity" (ngModelChange)="calcAmount()"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], QuantityCalcPage);
    return QuantityCalcPage;
}());

//# sourceMappingURL=quantity-calc.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavouritesPage = (function () {
    function FavouritesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\favourites\favourites.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Favourites</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\favourites\favourites.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemindersPage = (function () {
    function RemindersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RemindersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reminders',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\reminders\reminders.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Reminders</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\reminders\reminders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RemindersPage);
    return RemindersPage;
}());

//# sourceMappingURL=reminders.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfitCalcPage = (function () {
    function ProfitCalcPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfitCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profit-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profit Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfitCalcPage);
    return ProfitCalcPage;
}());

//# sourceMappingURL=profit-calc.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = (function () {
    function NewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>News</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\news\news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quantity_calc_quantity_calc__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // pages
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__["a" /* CoinDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__["a" /* BuySellPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__["a" /* RemindersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__["a" /* ProfitCalcPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_quantity_calc_quantity_calc__["a" /* QuantityCalcPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // pages
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__["a" /* CoinDetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__["a" /* BuySellPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__["a" /* RemindersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__["a" /* ProfitCalcPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_quantity_calc_quantity_calc__["a" /* QuantityCalcPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__["a" /* ApiDataProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_reminders_reminders__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profit_calc_profit_calc__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_data_api_data__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_news_news__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, api) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.api = api;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__["a" /* FavouritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__pages_reminders_reminders__["a" /* RemindersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__pages_profit_calc_profit_calc__["a" /* ProfitCalcPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_9__pages_news_news__["a" /* NewsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        // console.log("GET - api urls from app component");
        var _this = this;
        this.api.fetchApiUrl().subscribe(function (res) {
            // console.log("fetched in app component");
            // console.log(res);
            _this.api.storeApiUrl(res);
        }, function (err) {
            console.log("App component - error fetching data");
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, { apiUrls: this.apiUrls });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Settings</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-content>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Market View" tabIcon="logo-bitcoin"></ion-tab>\n\n    <!-- <ion-tab [root]="tab2Root" tabTitle="Favourites" tabIcon="bookmark"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Reminders" tabIcon="megaphone"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Profit Calc" tabIcon="logo-usd"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="News" tabIcon="paper"></ion-tab> -->\n\n  </ion-tabs>\n\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiDataProvider = (function () {
    // private coinAssistApis = "http://localhost:3000/apis";
    function ApiDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrls = {};
        this.apiUrlStore = "apiUrls";
        this.koinexData = {};
        this.zebpayData = {};
        this.LOCAL = true;
        // ******************************************************************************
        this.coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";
    }
    ApiDataProvider.prototype.setApiUrl = function (apiUrl) {
        this.apiUrls = apiUrl;
    };
    ApiDataProvider.prototype.fetchApiUrl = function () {
        // console.log("GET - api urls");
        return this.http.get(this.coinAssistApis);
    };
    ApiDataProvider.prototype.getApiUrlStorage = function () {
        var _this = this;
        // console.log("GET - api url storage");
        return this.storage.ready().then(function () {
            return _this.storage.get(_this.apiUrlStore);
        });
    };
    ApiDataProvider.prototype.getConstantApiUrl = function () {
        // console.log("GET - constant URL ");
        return JSON.parse(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["b" /* API_URL */]);
    };
    ApiDataProvider.prototype.storeApiUrl = function (fetchedApiUrl) {
        this.apiUrls = fetchedApiUrl;
        // console.log("STORE - store api url");
        this.storage.set(this.apiUrlStore, fetchedApiUrl).then(function (res) {
            // console.log("Stored Successfully");
        }, function (err) {
            console.log("Storage Error");
            console.log(err);
        });
    };
    ApiDataProvider.prototype.getCurrentApis = function () {
        return this.storage.get(this.apiUrlStore);
    };
    // ************************************************************************
    ApiDataProvider.prototype.getKoinexData = function () {
        // console.log("GET - koinex data");
        // console.log(this.apiUrls.exchange.koinex);
        if (this.LOCAL) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(JSON.parse(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["g" /* KOINEX_DATA */]));
        }
        if (this.koinexData.lock != true) {
            this.koinexData.lock = true;
            setTimeout(this.releaseExhangeLock(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX */]), 10000);
            return this.http.get(this.apiUrls.exchange.koinex);
        }
        else {
            console.log("Koinex Data call LOCKED");
            return this.koinexData;
        }
    };
    ApiDataProvider.prototype.releaseExhangeLock = function (exchange) {
        switch (exchange) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["j" /* ZEBPAY */]:
                this.koinexData.lock = false;
                console.log(this.koinexData.lock, " LOCK released");
                break;
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX */]:
                this.zebpayData.lock = false;
                break;
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getZebpayData = function () {
        // console.log("GET - zebpay data");
        return this.http.get(this.apiUrls.exchange.zebpay);
    };
    ApiDataProvider.prototype.getExchangeData = function (exchange, data) {
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
    };
    ApiDataProvider.prototype.getKoinexTemplate = function () {
        var coins = [];
        // console.log(this.koinexData, "Koinex Template Data");
        var exchangeCoins = this.koinexData.stats;
        for (var coin in exchangeCoins) {
            coins.push(this.getCoinName(coin));
        }
        return coins;
    };
    ApiDataProvider.prototype.getZebpayTemplate = function () {
        var coins = [];
        coins.push(this.getCoinName("BTC"));
        return coins;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoinName = function (coin) {
        switch (coin) {
            case "BTC":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["d" /* BTC */];
            case "ETH":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* ETH */];
            case "XRP":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* XRP */];
            case "BCH":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["c" /* BCH */];
            case "LTC":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["h" /* LTC */];
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.koinexProcessor = function (exchangeData, coinMarketCapData, coinDeskData) {
        var processedKoinexData = [];
        var coinList = exchangeData.stats;
        // console.log(coinMarketCapData, "coinmarket cap data- processor");
        // console.log(coinList, "before");
        if (coinMarketCapData != undefined) {
            if (coinMarketCapData.length == 1) {
                var singleCoin = {};
                // console.log(coinMarketCapData);
                // console.log(coinList[coinMarketCapData[0].symbol]);
                singleCoin[coinMarketCapData[0].symbol] = coinList[coinMarketCapData[0].symbol];
                coinList = singleCoin;
                // console.log(coinList, "after");
            }
        }
        for (var coin in coinList) {
            var processedCoin = {};
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
    };
    ApiDataProvider.prototype.coinDetailFormatter = function (processedCoin) {
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
    };
    ApiDataProvider.prototype.plusMinus20Percent = function (ObjectTarget, market) {
        var marketPrice = +market;
        var percent20 = (marketPrice * 0.2);
        var plus20 = marketPrice + percent20;
        var minus20 = marketPrice - percent20;
        ObjectTarget.plus20 = {};
        ObjectTarget.minus20 = {};
        ObjectTarget.plus20.no = plus20;
        ObjectTarget.minus20.no = minus20;
        ObjectTarget.plus20.formatted = this.numberFormatter(ObjectTarget.plus20.no);
        ObjectTarget.minus20.formatted = this.numberFormatter(ObjectTarget.minus20.no);
        return ObjectTarget;
    };
    ApiDataProvider.prototype.numberFormatter = function (number, locale, currency) {
        if (locale === void 0) { locale = 'hi-IN'; }
        if (currency === void 0) { currency = 'INR'; }
        return number.toLocaleString(locale, { style: 'currency', currency: currency });
    };
    ApiDataProvider.prototype.rangeStepCalculator = function (min, max) {
        var diff = max - min;
        var step = diff / 50;
        // console.log("Steps ", step);
        return step;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoinGlobalStats = function (coinSymbol, coinMarketCapData, coinDeskData) {
        var coinGlobalStats = {};
        for (var coin in coinMarketCapData) {
            if (coinMarketCapData[coin].symbol == coinSymbol) {
                coinGlobalStats.change = coinMarketCapData[coin].percent_change_24h;
                if (coinMarketCapData[coin].symbol == "BTC") {
                    coinGlobalStats.globalINR = coinDeskData.bpi.INR.rate_float;
                    coinGlobalStats.globalUSD = coinDeskData.bpi.USD.rate_float;
                }
                else {
                    coinGlobalStats.globalINR = coinMarketCapData[coin].price_inr;
                    coinGlobalStats.globalUSD = coinMarketCapData[coin].price_usd;
                }
                return coinGlobalStats;
            }
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getPriceIndex = function (min, max, current) {
        var total = max - min;
        var diff = total / 3;
        var lowRegionHigh = min + diff;
        var mediumRegionHigh = (min + (2 * diff));
        if (current <= lowRegionHigh && current > min) {
            return "LOW";
        }
        else if (current <= mediumRegionHigh && current > lowRegionHigh) {
            return "MEDIUM";
        }
        else if (current <= max && current > mediumRegionHigh) {
            return "HIGH";
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.zebpayProcessor = function (exchangeData, coinMarketCapData, coinDeskData) {
        var processedZebpayData = [];
        var coin = "BTC";
        var zebpayData = exchangeData;
        var processedCoin = {};
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
    };
    ApiDataProvider.prototype.processedCoinInitializer = function (processedCoin) {
        processedCoin.market = {};
        processedCoin.buy = {};
        processedCoin.sell = {};
        processedCoin.min = {};
        processedCoin.max = {};
        processedCoin.globalINR = {};
        processedCoin.globalUSD = {};
        return processedCoin;
    };
    ApiDataProvider.prototype.injectGlobalStats = function (coin, processedCoin, coinMarketCapData, coinDeskData) {
        var coinGlobalStats = this.getCoinGlobalStats(coin, coinMarketCapData, coinDeskData);
        processedCoin.globalINR.no = +coinGlobalStats.globalINR;
        processedCoin.globalUSD.no = +coinGlobalStats.globalUSD;
        processedCoin.change = +coinGlobalStats.change;
        return processedCoin;
    };
    ApiDataProvider.prototype.getPriceIndexZebpay = function (buy, sell) {
        var diff = buy - sell;
        if (diff < 10000) {
            return "LOW";
        }
        else if (diff < 20000 && diff >= 10000) {
            return "MEDIUM";
        }
        else if (diff >= 20000) {
            return "HIGH";
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoindeskData = function () {
        return this.http.get(this.apiUrls.global.coindesk.api);
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoinMarketCapData = function (coin) {
        switch (coin) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["d" /* BTC */]: {
                return this.http.get(this.apiUrls.global.coinmarketcap.coin.BTC);
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* ETH */]: {
                return this.http.get(this.apiUrls.global.coinmarketcap.coin.ETH);
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["c" /* BCH */]: {
                return this.http.get(this.apiUrls.global.coinmarketcap.coin.BCH);
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["h" /* LTC */]: {
                return this.http.get(this.apiUrls.global.coinmarketcap.coin.LTC);
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* XRP */]: {
                return this.http.get(this.apiUrls.global.coinmarketcap.coin.XPR);
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["a" /* ALL */]: {
                var coinMarketCapApi = this.apiUrls.global.coinmarketcap.api + this.apiUrls.global.coinmarketcap.coin_limit;
                return this.http.get(coinMarketCapApi);
            }
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.processExchangeData = function (exchange, exchangeData, coinMarketCapData, coinDeskData) {
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
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getMarketOverviewData = function (sel, coin, data) {
        if (data === void 0) { data = true; }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([this.getExchangeData(sel, data), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
    };
    ApiDataProvider.prototype.setExchangeData = function (exchange, exchangeData) {
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
    };
    ApiDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], ApiDataProvider);
    return ApiDataProvider;
    var _a, _b;
}());

//# sourceMappingURL=api-data.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetail; });
var CoinDetail = (function () {
    function CoinDetail() {
    }
    return CoinDetail;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueDetail; });
var ValueDetail = (function () {
    function ValueDetail() {
    }
    return ValueDetail;
}());

//# sourceMappingURL=value-detail.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeValue; });
var RangeValue = (function () {
    function RangeValue() {
    }
    return RangeValue;
}());

//# sourceMappingURL=range-value.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuySellPage = (function () {
    function BuySellPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BuySellPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-sell',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\buy-sell\buy-sell.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Buy / Sell</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\buy-sell\buy-sell.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], BuySellPage);
    return BuySellPage;
}());

//# sourceMappingURL=buy-sell.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map