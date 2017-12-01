webpackJsonp([0],{

/***/ 134:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__ = __webpack_require__(402);
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
    function ApiDataProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrlStore = "apiUrls";
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
        return JSON.parse(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["a" /* API_URL */]);
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
    ApiDataProvider.prototype.getKoinexData = function () {
        // console.log("GET - koinex data");
        // console.log(this.apiUrls.exchange.koinex);
        // return this.http.get(this.apiUrls.exchange.koinex);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(JSON.parse(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX_DATA */]));
    };
    ApiDataProvider.prototype.getZebpayData = function () {
        // console.log("GET - zebpay data");
        return this.http.get(this.apiUrls.exchange.zebpay);
    };
    ApiDataProvider.prototype.getExchangeData = function (exchange) {
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
    };
    ApiDataProvider.prototype.getCoinName = function (coin) {
        switch (coin) {
            case "BTC":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["c" /* BTC */];
            case "ETH":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* ETH */];
            case "XPR":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["h" /* XPR */];
            case "BCH":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["b" /* BCH */];
            case "LTC":
                return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["g" /* LTC */];
        }
    };
    ApiDataProvider.prototype.koinexProcessor = function (data) {
        var coinList = data.stats;
        for (var coin in coinList) {
            var template = this.coinListTemplate;
            template.coin = this.getCoinName(coin);
        }
        return "koinex Processed";
    };
    ApiDataProvider.prototype.zebpayProcessor = function () {
    };
    ApiDataProvider.prototype.getCoindeskData = function () {
    };
    ApiDataProvider.prototype.getCoinMarketCapData = function () {
    };
    ApiDataProvider.prototype.processExchangeData = function (exchange, exchangeData) {
        this.coinListTemplate = JSON.parse(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["d" /* COIN_LIST_TEMPLATE */]);
        switch (exchange) {
            case "koinex":
                {
                    // console.log("switch case koinex");
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.koinexProcessor(exchangeData));
                }
            case "zebpay":
                {
                    // console.log("switch case zebpay");
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.zebpayProcessor());
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(21);
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
                _this.apiUrls = _this.api.getConstantApiUrl();
            }
            // console.log("Home Compo Value return");
            // console.log(this.apiUrls);
            _this.api.setApiUrl(_this.apiUrls);
            _this.populateView();
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 800);
    };
    HomePage.prototype.populateView = function () {
        this.exchanges = Object.keys(this.apiUrls.exchange);
        this.selExchange = this.exchanges[0];
        this.selectedExchange(this.selExchange);
    };
    HomePage.prototype.selectedExchange = function (sel) {
        var _this = this;
        this.api.getExchangeData(sel).subscribe(function (res) {
            console.log("this is Exchange data");
            console.log(res);
            _this.api.processExchangeData(sel, res).subscribe(function (res) {
                console.log("Processed data");
                console.log(res);
            });
        }, function (err) {
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Market View</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-item>\n\n    <ion-label>Exchange:</ion-label>\n\n    <ion-select [(ngModel)]="selExchange" *ngIf="exchanges" interface="popover" (ngModelChange)="selectedExchange(selExchange)">\n\n      <ion-option *ngFor=" let exchange of exchanges ">{{exchange}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(138);
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

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favourites_favourites__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_reminders_reminders__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profit_calc_profit_calc__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_data_api_data__ = __webpack_require__(134);
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Settings</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-content>\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Market View" tabIcon="logo-bitcoin"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favourites" tabIcon="bookmark"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Reminders" tabIcon="megaphone"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Profit Calc" tabIcon="logo-usd"></ion-tab>\n\n</ion-tabs>\n\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__providers_api_data_api_data__["a" /* ApiDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_api_data_api_data__["a" /* ApiDataProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return KOINEX_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COIN_LIST_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return XPR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ETH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BCH; });
var API_URL = "{\r\n  \"exchange\": {\r\n    \"koinex\": \"https:\/\/koinex.in\/api\/ticker\",\r\n    \"zebpay\": \"https:\/\/www.zebapi.com\/api\/v1\/market\/ticker\/btc\/inr\"\r\n  },\r\n  \"global\": {\r\n    \"coindesk\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice.json\",\r\n        \"INR\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice\/inr.json\"\r\n      }\r\n    },\r\n    \"coinmarketcap\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?limit=6\",\r\n        \"INR\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?convert=INR&limit=6\"\r\n      },\r\n      \"coin\": {\r\n        \"bitcoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin\",\r\n        \"ether\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ethereum\",\r\n        \"ripple\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ripple\",\r\n        \"btc-cash\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin-cash\",\r\n        \"litecoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/litecoin\"\r\n      }\r\n    }\r\n  },\r\n  \"version\": \"1.0.0\"\r\n}";
var KOINEX_DATA = "{\"prices\":{\"BTC\":\"795000.0\",\"ETH\":\"34700.0\",\"BCH\":\"107499.0\",\"XRP\":\"19.25\",\"LTC\":\"6889.0\",\"MIOTA\":79.55,\"OMG\":547.62,\"GNT\":18.09},\"stats\":{\"ETH\":{\"last_traded_price\":\"34700.0\",\"lowest_ask\":\"34700.0\",\"highest_bid\":\"34601.0\",\"min_24hrs\":\"29800.0\",\"max_24hrs\":\"39000.0\",\"vol_24hrs\":\"3276.286\"},\"BTC\":{\"last_traded_price\":\"795000.0\",\"lowest_ask\":\"794990.0\",\"highest_bid\":\"792102.0\",\"min_24hrs\":\"700000.0\",\"max_24hrs\":\"932503.0\",\"vol_24hrs\":\"358.3514\"},\"LTC\":{\"last_traded_price\":\"6889.0\",\"lowest_ask\":\"6889.0\",\"highest_bid\":\"6888.0\",\"min_24hrs\":\"5998.0\",\"max_24hrs\":\"7678.0\",\"vol_24hrs\":\"8476.121\"},\"XRP\":{\"last_traded_price\":\"19.25\",\"lowest_ask\":\"19.35\",\"highest_bid\":\"19.25\",\"min_24hrs\":\"17.0\",\"max_24hrs\":\"21.05\",\"vol_24hrs\":\"2025861.7\"},\"BCH\":{\"last_traded_price\":\"107499.0\",\"lowest_ask\":\"107499.0\",\"highest_bid\":\"106800.0\",\"min_24hrs\":\"90000.0\",\"max_24hrs\":\"119900.0\",\"vol_24hrs\":\"650.083\"}}}";
var COIN_LIST_TEMPLATE = "{\r\n  \"coin\": \"bitcoin\",\r\n  \"market\": \"5000\",\r\n  \"buy\": \"6000\",\r\n  \"sell\": \"4000\",\r\n  \"price_index\": \"high\",\r\n  \"change\": \"7\"\r\n}";
var BTC = "Bitcoin";
var XPR = "Ripple";
var ETH = "Ethereum";
var LTC = "Litecoin";
var BCH = "Bitcoin Cash";
//# sourceMappingURL=api-constants.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
    function CoinDetailPage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log("coin detail component");
    }
    CoinDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coin-detail',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Coin Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CoinDetailPage);
    return CoinDetailPage;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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

},[350]);
//# sourceMappingURL=main.js.map