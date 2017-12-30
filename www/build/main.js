webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utilities_utilities__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__ = __webpack_require__(53);
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
    function QuantityCalcPage(navCtrl, navParam, api, util, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.api = api;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.selCoin = new __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__["a" /* CoinDetail */]();
        this.apis = {};
        this.amount = undefined;
        this.amountFlag = false;
        this.percent = 0.05;
        // console.log("1 qty constructor called");
        this.selExchange = navParam.get("exchange");
        this.selCoin.coinName = navParam.get("coin");
        // console.log(this.selCoin, " sel coin qty");
        // console.log(this.selExchange, " sel Exchange qty");
        this.apis = this.api.apiUrls.exchange;
        this.exchanges = Object.keys(this.apis);
        // console.log(this.apis, "api list fetched back");
    }
    QuantityCalcPage.prototype.ngOnInit = function () {
        // console.log("2 ng oninit called");
        if (this.selExchange == undefined) {
            this.selExchange = __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["f" /* KOINEX */];
        }
        if (this.selCoin.coinName == undefined) {
            this.selCoin.coinName = __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["d" /* BTC */];
        }
        this.populateView();
    };
    QuantityCalcPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Latest Price Refreshed',
            duration: 1500,
            position: 'top'
        });
        toast.present();
    };
    QuantityCalcPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // console.log(this.selCoin.coinName, "sel Coin Name - Refresh");
        this.populateView();
        setTimeout(function () {
            _this.presentToast();
            refresher.complete();
        }, 800);
    };
    QuantityCalcPage.prototype.populateView = function () {
        // console.log("3 populate view called");
        this.populateCoins(this.selExchange);
    };
    QuantityCalcPage.prototype.populateCoins = function (exchange) {
        var _this = this;
        // console.log("4 populate coins");
        this.api.getExchangeData(exchange, true).subscribe(function (res) {
            _this.coins = _this.api.processExchangeData(exchange, res, undefined, undefined);
            // console.log(this.coins, "coins in qty");
            _this.populateCoinValues(_this.selCoin.coinName);
        });
    };
    QuantityCalcPage.prototype.populateCoinValues = function (selCoin) {
        var _this = this;
        // console.log("5 populate coin values called");
        // console.log(this.selCoin.coinName, "sel Coin Name - Refresh Populate");
        this.selCoin = this.coins.find(function (coin) { return _this.selCoin.coinName == coin.coinName; });
        // console.log(this.selCoin, "selected coin - QTY");
        this.selCoin.range.rate.no = this.selCoin.market.no;
        this.updateRange();
        // console.log(this.selCoin, " coin selected");
        // console.log(this.coins, "all coins");
    };
    QuantityCalcPage.prototype.updateRange = function () {
        // console.log(this.selCoin.range.rate.no);
        this.formateRate();
        this.selCoin = this.api.plusMinusPercent(this.selCoin, this.selCoin.range.rate.no, this.percent);
        // console.log("8 plus minus percent called");
        this.selCoin.step = this.api.rangeStepCalculator(this.selCoin.min.no, this.selCoin.max.no);
        // console.log("9 Range step called");
        // console.log(this.selCoin);
        this.calcQuantity();
        // console.log(this.selCoin);
    };
    QuantityCalcPage.prototype.formateRate = function () {
        // console.log("7 format rate");
        // console.log(this.range.rate.no, 'nubmer');
        this.selCoin.range.rate.formatted = this.api.numberFormatter(+this.selCoin.range.rate.no);
        // console.log(this.range.rate.formatted);
    };
    QuantityCalcPage.prototype.calcQuantity = function () {
        // console.log("quantity calculated");
        if (this.amount != undefined) {
            this.exchange = this.apis[this.selExchange];
            // console.log("Exchange details", this.exchanges, this.exchange.fees.buy);
            this.buyerFees = this.util.trimToDecimal(this.amount * this.exchange.fees.buy, 2);
            // console.log("Buyers fees", this.buyerFees);
            this.actualAmount = this.util.trimToDecimal(this.amount - this.buyerFees, 2);
            // console.log("Actual Amount", this.actualAmount);
            var qty = this.actualAmount / this.selCoin.range.rate.no;
            // console.log(qty);
            this.quantity = +this.util.trimQuantity(this.selCoin.coinName, qty);
            // console.log(this.quantity);
        }
    };
    QuantityCalcPage.prototype.rangeChanged = function (rangePointer) {
        this.selCoin.range.rate.no = rangePointer;
        this.formateRate();
        this.calcQuantity();
    };
    QuantityCalcPage.prototype.calcAmount = function () {
        this.amount = this.quantity * this.selCoin.range.rate.no;
    };
    QuantityCalcPage.prototype.amountChanged = function (amount) {
        // console.log(this.amountFlag);
        this.amount = amount.length > 9 ? this.trimAmount(amount) : this.clearAmountFlag(amount);
        // console.log("new amount value", this.amount);
        this.calcQuantity();
    };
    QuantityCalcPage.prototype.clearAmountFlag = function (amount) {
        // console.log("flag cleared");
        this.amountFlag = false;
        return amount;
    };
    QuantityCalcPage.prototype.trimAmount = function (amount) {
        // console.log("flag set");
        this.amountFlag = true;
        return amount = amount.substring(0, 9);
    };
    QuantityCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quantity-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Quantity / Amount Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Exchange</ion-label>\n\n      <ion-select [(ngModel)]="selExchange" *ngIf="selExchange" interface="popover" (ngModelChange)="populateCoins(selExchange)">\n\n        <ion-option *ngFor=" let exchange of exchanges ">{{exchange}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Crypto-Coin</ion-label>\n\n      <ion-select [(ngModel)]="selCoin.coinName" interface="popover" (ngModelChange)="populateView()">\n\n        <ion-option *ngFor=" let coin of coins" [value]="coin.coinName">{{coin.coinName}} ({{coin.coinCode}})</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Coin Rate</ion-label>\n\n      <ion-input type="number" placeholder="Rate" [(ngModel)]="selCoin.range.rate.no" clearInput="true" (ngModelChange)="updateRange($event)"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      {{selCoin.range.rate.formatted}}\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-range [min]="selCoin.range.minusPercent.no" [max]="selCoin.range.plusPercent.no" step="selCoin.step" snaps="true" [(ngModel)]="rangeValue"\n\n        (ionChange)="rangeChanged($event)">\n\n        <ion-label range-left>{{selCoin.range.minusPercent.formatted}}</ion-label>\n\n        <ion-label range-right>{{selCoin.range.plusPercent.formatted}}</ion-label>\n\n      </ion-range>\n\n    </ion-item> -->\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Amount &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="1000" clearInput="true" [(ngModel)]="amount" max="9" (ngModelChange)="amountChanged($event)"></ion-input>\n\n    </ion-item>\n\n    <!-- <div *ngIf="amountFlag">*Amount exceeding Limit</div> -->\n\n    <ion-item>\n\n      <ion-label fixed>Quantity</ion-label>\n\n      <ion-input type="number" placeholder="0.0001" clearInput="true" [(ngModel)]="quantity" (ngModelChange)="calcAmount()"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      {{buyerFees}} + {{actualAmount}}\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], QuantityCalcPage);
    return QuantityCalcPage;
}());

//# sourceMappingURL=quantity-calc.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
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
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coin_detail_coin_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_IntervalObservable__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_IntervalObservable__);
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
    function HomePage(navCtrl, api, storage, navParam, toastCtrl) {
        // console.log("Constructor - Home page");
        this.navCtrl = navCtrl;
        this.api = api;
        this.storage = storage;
        this.navParam = navParam;
        this.toastCtrl = toastCtrl;
        this.alive = true;
    }
    HomePage.prototype.ngOnInit = function () {
        // console.log("Home component ngOninit Called");
        var _this = this;
        this.api.getApiUrlStorage().then(function (res) {
            if (res != null) {
                _this.apiUrls = res;
            }
            else {
                // console.log("constant Api urls called");
                _this.apiUrls = _this.api.getConstantApiUrl();
            }
            // console.log("Home Compo Value return");
            // console.log(this.apiUrls);
            _this.api.setApiUrl(_this.apiUrls);
            _this.populateView();
            var refresher = __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_IntervalObservable__["IntervalObservable"].create(20000);
            refresher.takeWhile(function () { return _this.alive; }) // only fires when component is alive
                .subscribe(function () {
                _this.populateView();
            });
        });
    };
    HomePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Latest Price Refreshed',
            duration: 1500,
            position: 'top'
        });
        toast.present();
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.alive = false;
        // console.log("Home page - left", this.alive);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.alive = true;
        // console.log("Home page -View Entered", this.alive);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.populateView();
        setTimeout(function () {
            refresher.complete();
        }, 800);
    };
    HomePage.prototype.populateView = function () {
        // console.log(this.apiUrls.exchange);
        // console.log("Populating Home page");
        this.exchanges = Object.keys(this.apiUrls.exchange);
        this.selExchange = this.exchanges[0];
        this.selectedExchange(this.selExchange);
        this.presentToast();
    };
    HomePage.prototype.selectedExchange = function (sel) {
        var _this = this;
        this.api.getMarketOverviewData(sel, __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["a" /* ALL */]).subscribe(function (res) {
            // console.log("first data - exchange data", res[0]);
            // console.log("second data - coin market Cap data", res[1]);
            // console.log("third data - coindesk data", res[2]);
            _this.coins = _this.api.processExchangeData(sel, res[0], res[1], res[2]);
            // console.log("processed exchange data");
            // console.log(this.coins);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.navCoinDetailPage = function (coin) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__coin_detail_coin_detail__["a" /* CoinDetailPage */], { "coin": coin, "exchange": this.selExchange });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button type="button" ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Market View</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)" padding>\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-item>\n\n    <ion-label>Exchange:</ion-label>\n\n    <ion-select [(ngModel)]="selExchange" interface="popover" (ngModelChange)="selectedExchange(selExchange)">\n\n      <ion-option *ngFor="let exchange of exchanges">{{exchange}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3>Cryptos</ion-col>\n\n          <ion-col col-4>\n\n            Market Price\n\n          </ion-col>\n\n          <ion-col col-2>Change\n\n            <br>%</ion-col>\n\n          <ion-col col-2>Price Index</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n    <ion-card *ngFor="let coin of coins" (click)="navCoinDetailPage(coin)">\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="assets/imgs/{{coin.coinCode}}.png">\n\n          <h2>{{coin.coinName}}</h2>\n\n          <h2>({{coin.coinCode}})</h2>\n\n        </ion-thumbnail>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <ion-row>\n\n                {{coin.market.formatted}}\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n              {{coin.change.hour}}\n\n            </ion-col>\n\n            <ion-col col-4>\n\n              {{coin.price_index}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="coin.min.no">\n\n            <ion-col col-12>\n\n              Low: {{coin.min.formatted}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              High: {{coin.max.formatted}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <button type="button" ion-button clear item-end>></button>\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetail; });
/* unused harmony export Change */
/* unused harmony export Global */
/* unused harmony export RangeValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_detail__ = __webpack_require__(308);

var CoinDetail = (function () {
    function CoinDetail() {
        this.market = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.buy = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.sell = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.min = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.max = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.global = new Global();
        this.range = new RangeValue();
        this.change = new Change();
        this.globalDiff = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
    }
    return CoinDetail;
}());

var Change = (function () {
    function Change() {
    }
    return Change;
}());

var Global = (function () {
    function Global() {
        this.INR = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.USD = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
    }
    return Global;
}());

var RangeValue = (function () {
    function RangeValue() {
        this.rate = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.plusPercent = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.minusPercent = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
    }
    return RangeValue;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quantity_calc_quantity_calc__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
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
    function CoinDetailPage(navCtrl, navParam, api, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.api = api;
        this.toastCtrl = toastCtrl;
        var coin = this.navParam.get("coin");
        this.exchange = this.navParam.get("exchange");
        // console.log(coin);
        this.initRange(coin);
    }
    CoinDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.referralLink = this.api.apiUrls.exchange[this.exchange].referral;
        // console.log("referral Link", this.referralLink);
        this.populateView();
        var refresher = __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(20000);
        refresher.takeWhile(function () { return _this.alive; }) // only fires when component is alive
            .subscribe(function () {
            _this.populateView();
        });
    };
    CoinDetailPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Latest Price Refreshed',
            duration: 1500,
            position: 'top'
        });
        toast.present();
    };
    CoinDetailPage.prototype.ionViewDidLeave = function () {
        this.alive = false;
        // console.log("Detail  page - left", this.alive);
    };
    CoinDetailPage.prototype.ionViewWillEnter = function () {
        this.alive = true;
        // console.log("Detail page -View Entered", this.alive);
    };
    CoinDetailPage.prototype.openReferralLink = function () {
        window.open(this.referralLink, '_system', 'location=yes');
    };
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
        console.log("Detail Populating");
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
            // console.log(this.coinDetail, "coinDetail Processed Detail");
            _this.presentToast();
        }, function (err) {
            console.log(err);
        });
    };
    CoinDetailPage.prototype.gotoCalcQuantityPage = function () {
        // console.log("Quantity button clicked");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__quantity_calc_quantity_calc__["a" /* QuantityCalcPage */], { "coin": this.coinDetail.coinName, "exchange": this.exchange });
    };
    CoinDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coin-detail',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Coin Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-grid>\n\n          <ion-row>\n\n            {{exchange}}\n\n            <ion-col col-5>\n\n              <ion-thumbnail item-start>\n\n                <img src="assets/imgs/{{coinDetail.coinCode}}.png">\n\n              </ion-thumbnail>\n\n            </ion-col>\n\n            <ion-col col-7>\n\n              <h1>{{coinDetail.coinName}} ( {{coinDetail.coinCode}} )</h1>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <h1>{{coinDetail.market.formatted}}</h1>\n\n        <h2>{{coinDetail.change.hour}} {{coinDetail.change.day}} {{coinDetail.change.week}}\n\n        </h2>\n\n\n\n        <h2> [ global: {{coinDetail.global.INR.formatted}} ] ( {{coinDetail.global.USD.formatted}} ) </h2>\n\n        <h3>Global Difference: {{coinDetail.globalDiff.formatted}}</h3>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button (click)="gotoCalcQuantityPage()" ion-button>Calculate Quantity / Amount</button>\n\n      </ion-item>\n\n      <ion-item>\n\n        Buy: {{coinDetail.buy.formatted}} Sell: {{coinDetail.sell.formatted}}\n\n      </ion-item>\n\n      <ion-item>\n\n        <button (click)="openReferralLink()" ion-button>Invest in {{exchange}}</button>\n\n      </ion-item>\n\n\n\n      <!-- Rage for setting price alert -->\n\n\n\n      <!-- <ion-item>\n\n        <h2> From : {{rangeRegion.lower}}</h2>\n\n        <h2> To: {{rangeRegion.upper}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-range dualKnobs="true" pin="true" snaps="true" [step]="coinDetail.step" (ionChange)="change()" steps [(ngModel)]="rangeRegion"\n\n          [min]="coinDetail.minus20.no" [max]="coinDetail.plus20.no">\n\n          <ion-label range-left>{{coinDetail.minus20.formatted}}</ion-label>\n\n          <ion-label range-right>{{coinDetail.plus20.formatted}}</ion-label>\n\n        </ion-range>\n\n      </ion-item> -->\n\n\n\n      <!-- Alert Button -->\n\n\n\n      <!-- <ion-item>\n\n        <button ion-button large>Set Alert</button>\n\n\n\n      </ion-item> -->\n\n\n\n    </ion-card>\n\n\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], CoinDetailPage);
    return CoinDetailPage;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Utilities = (function () {
    function Utilities() {
    }
    Utilities.prototype.trimQuantity = function (coinName, quantity) {
        if (coinName === void 0) { coinName = "default"; }
        var trimmedQty;
        switch (coinName) {
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["d" /* BTC */]: {
                return trimmedQty = +quantity.toFixed(4);
            }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["e" /* ETH */]: {
                return trimmedQty = +quantity.toFixed(3);
            }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["h" /* XRP */]: {
                return trimmedQty = +quantity.toFixed(0);
            }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["g" /* LTC */]: {
                return trimmedQty = +quantity.toFixed(3);
            }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["c" /* BCH */]: {
                return trimmedQty = +quantity.toFixed(3);
            }
            default: {
                return trimmedQty = +quantity.toFixed(2);
            }
        }
    };
    Utilities.prototype.trimToDecimal = function (value, decimal) {
        return +value.toFixed(decimal);
    };
    Utilities = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Utilities);
    return Utilities;
}());

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    ProfitCalcPage.prototype.ngOnInit = function () {
        // console.log("profit calc page ng oninit");
    };
    ProfitCalcPage.prototype.checkRequiredFields = function () {
        console.log("Check Required fields", this.quantity, this.amount);
        if (this.quantity != undefined) {
            console.log("Quantity");
            this.calcAmount();
            if (this.checkMandatoryFields()) {
                console.log("Manadatory passed");
                this.calcProfit();
            }
        }
        else if (this.amount != undefined) {
            console.log("Amount");
            this.calcQty();
            if (this.checkMandatoryFields()) {
                this.calcProfit();
            }
        }
        console.log("Exited");
    };
    ProfitCalcPage.prototype.checkMandatoryFields = function () {
        console.log(this.fromValue, this.toValue);
        if (this.fromValue != undefined && this.toValue != undefined) {
            console.log("mandatory true");
            return true;
        }
        else {
            console.log("mandatory false");
            return false;
        }
    };
    ProfitCalcPage.prototype.calcQty = function () {
        this.quantity = this.amount / this.fromValue;
        console.log("Qty calc", this.quantity);
    };
    ProfitCalcPage.prototype.calcAmount = function () {
        this.amount = this.quantity * this.fromValue;
        console.log("Amount calc", this.amount);
    };
    ProfitCalcPage.prototype.calcProfit = function () {
        this.calcChangePercent();
        this.profitLoss = (this.amount * this.changePercent) - this.amount;
        console.log("Profit loss", this.profitLoss);
        this.calcFinalvalue();
    };
    ProfitCalcPage.prototype.calcChangePercent = function () {
        this.changePercent = this.toValue / this.fromValue;
        console.log("Change percent", this.changePercent);
    };
    ProfitCalcPage.prototype.calcFinalvalue = function () {
        this.finalValue = this.amount + this.profitLoss;
        if (Number.isNaN(this.finalValue)) {
            this.finalValue = 0;
        }
        console.log("Final value", this.finalValue);
    };
    ProfitCalcPage.prototype.updateSellPrice = function () {
        this.toValue = (this.profitLoss * this.fromValue + this.fromValue * this.fromValue) / this.amount;
        console.log("Sell Value" + this.toValue);
        this.calcProfit();
    };
    ProfitCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profit-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profit Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Quantity</ion-label>\n\n      <ion-input type="number" placeholder="0.0123" [(ngModel)]="quantity" clearInput="true" (ngModelChange)="checkRequiredFields()"></ion-input>\n\n    </ion-item>\n\n\n\n    OR\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Investment &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="3000" [(ngModel)]="amount" clearInput="true" (ngModelChange)="checkRequiredFields()"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Buy Price &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="1000" [(ngModel)]="fromValue" clearInput="true" (ngModelChange)="checkRequiredFields()"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Sell Price &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="2000" [(ngModel)]="toValue" clearInput="true" (ngModelChange)="checkRequiredFields()"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Profit / Loss &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="3000" [(ngModel)]="profitLoss" clearInput="true" (ngModelChange)="updateSellPrice()"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      Total Amount = {{finalValue}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfitCalcPage);
    return ProfitCalcPage;
}());

//# sourceMappingURL=profit-calc.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quantity_calc_quantity_calc__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_utilities_utilities__ = __webpack_require__(209);
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
                __WEBPACK_IMPORTED_MODULE_18__providers_utilities_utilities__["a" /* Utilities */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reminders_reminders__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profit_calc_profit_calc__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_data_api_data__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_news__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quantity_calc_quantity_calc__ = __webpack_require__(107);
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
        // rootPage: any = HomePage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_9__pages_quantity_calc_quantity_calc__["a" /* QuantityCalcPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__pages_reminders_reminders__["a" /* RemindersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__pages_profit_calc_profit_calc__["a" /* ProfitCalcPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_8__pages_news_news__["a" /* NewsPage */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Settings</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-content>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Market View" tabIcon="logo-bitcoin"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Quantity Calc" tabIcon="bookmark"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Profit Calc" tabIcon="logo-usd"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueDetail; });
var ValueDetail = (function () {
    function ValueDetail() {
        this.no = 0;
        this.formatted = "";
    }
    return ValueDetail;
}());

//# sourceMappingURL=value-detail.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__ = __webpack_require__(207);
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
        // console.log(this.koinexData, "before");
        var _this = this;
        // return Observable.of(this.koinexData = JSON.parse(Constants.KOINEX_DATA));
        if (this.koinexData.lock == false || this.koinexData.lock == undefined) {
            this.koinexData.lock = true;
            // console.log("FETCHING - koinex data");
            return this.http.get(this.apiUrls.exchange.koinex.api).map(function (res) {
                // console.log(res);
                _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX */], res);
                return res;
            }).catch(function (error) {
                _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX */]);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.koinexData);
            });
        }
        else if (this.koinexData.lock == true) {
            // console.log("STATIC - koinex data", this.koinexData);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.koinexData);
        }
    };
    ApiDataProvider.prototype.updateRecentExchangeData = function (exchange, exchangeData) {
        if (exchangeData != undefined) {
            this.setExchangeData(exchange, exchangeData);
        }
        this.lockExchange(exchange);
    };
    ApiDataProvider.prototype.lockExchange = function (exchange) {
        var _this = this;
        switch (exchange) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX */]:
                this.koinexData.lock = true;
                // console.log("LOCK SET", this.koinexData);
                var releaseLock = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(15000);
                releaseLock.subscribe(function (res) {
                    _this.koinexData.lock = false;
                    // console.log("LOCK RELEASED", this.koinexData);
                });
                break;
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* ZEBPAY */]:
                break;
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getZebpayData = function () {
        // console.log("GET - zebpay data");
        return this.http.get(this.apiUrls.exchange.zebpay.api);
    };
    ApiDataProvider.prototype.getExchangeData = function (exchange, data) {
        if (data === void 0) { data = true; }
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
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["h" /* XRP */];
            case "BCH":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["c" /* BCH */];
            case "LTC":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["g" /* LTC */];
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
            // var processedCoin: any = {};
            var processedCoin = new __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__["a" /* CoinDetail */]();
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
    };
    ApiDataProvider.prototype.coinDetailFormatter = function (processedCoin) {
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
    };
    ApiDataProvider.prototype.plusMinusPercent = function (ObjectTarget, market, percent) {
        try {
            var marketPrice = +market;
            var percentValue = (marketPrice * percent);
            var plusPercent = marketPrice + percentValue;
            var minusPercent = marketPrice - percentValue;
            ObjectTarget.range.plusPercent.no = plusPercent;
            ObjectTarget.range.minusPercent.no = minusPercent;
            ObjectTarget.range.plusPercent.formatted = this.numberFormatter(ObjectTarget.range.plusPercent.no);
            ObjectTarget.range.minusPercent.formatted = this.numberFormatter(ObjectTarget.range.minusPercent.no);
            return ObjectTarget;
        }
        catch (e) {
            console.log(e);
        }
    };
    ApiDataProvider.prototype.numberFormatter = function (number, locale, currency) {
        if (locale === void 0) { locale = 'hi-IN'; }
        if (currency === void 0) { currency = 'INR'; }
        return number.toLocaleString(locale, { style: 'currency', currency: currency });
    };
    ApiDataProvider.prototype.rangeStepCalculator = function (min, max) {
        var diff = max - min;
        var step = diff / 10;
        // console.log("Steps ", step);
        return step;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoinGlobalStats = function (coinSymbol, coinMarketCapData, coinDeskData) {
        try {
            var coinGlobalStats = {};
            for (var coin in coinMarketCapData) {
                if (coinMarketCapData[coin].symbol == coinSymbol) {
                    coinGlobalStats.changeHour = coinMarketCapData[coin].percent_change_1h;
                    coinGlobalStats.changeDay = coinMarketCapData[coin].percent_change_24h;
                    coinGlobalStats.changeWeek = coinMarketCapData[coin].percent_change_7d;
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
        }
        catch (e) {
            console.log(e);
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
        var processedCoin = new __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__["a" /* CoinDetail */]();
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
    ApiDataProvider.prototype.injectGlobalStats = function (coin, processedCoin, coinMarketCapData, coinDeskData) {
        try {
            var coinGlobalStats = this.getCoinGlobalStats(coin, coinMarketCapData, coinDeskData);
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
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["g" /* LTC */]: {
                return this.http.get(this.apiUrls.global.coinmarketcap.coin.LTC);
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["h" /* XRP */]: {
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
        try {
            switch (exchange) {
                case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX */]:
                    {
                        // console.log("switch case koinex");
                        return this.koinexProcessor(exchangeData, coinMarketCapData, coinDeskData);
                    }
                case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* ZEBPAY */]:
                    {
                        // console.log("switch case zebpay");
                        return this.zebpayProcessor(exchangeData, coinMarketCapData, coinDeskData);
                    }
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getMarketOverviewData = function (sel, coin, data) {
        if (data === void 0) { data = true; }
        try {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([this.getExchangeData(sel, data), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
        }
        catch (e) {
            console.log(e);
        }
    };
    ApiDataProvider.prototype.setExchangeData = function (exchange, exchangeData) {
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
    };
    ApiDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ApiDataProvider);
    return ApiDataProvider;
}());

//# sourceMappingURL=api-data.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return API_URL; });
/* unused harmony export KOINEX_DATA */
/* unused harmony export COIN_LIST_TEMPLATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return XRP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ETH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BCH; });
/* unused harmony export INR */
/* unused harmony export USD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ZEBPAY; });
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

/***/ })

},[214]);
//# sourceMappingURL=main.js.map