webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValueDetail; });
var ValueDetail = (function () {
    function ValueDetail() {
        this.formatted = "--";
    }
    return ValueDetail;
}());

//# sourceMappingURL=value-detail.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_value_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utilities_utilities__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__ = __webpack_require__(35);
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
    function QuantityCalcPage(navCtrl, navParam, api, util, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.api = api;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.selCoin = new __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__["a" /* CoinDetail */]();
        this.apis = {};
        this.apiUrls = {};
        this.amount = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.actualAmount = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.buyerFees = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.amountFlag = false;
        this.quantity = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.percent = 0.05;
        this.pageName = "quantity-calc page";
        this.networkFlag = true;
        // console.log("1 qty constructor called");
        this.selExchange = this.navParam.get("exchange");
        this.selCoin.coinName = this.navParam.get("coin");
        // console.log(this.selCoin, " sel coin qty");
        // console.log(this.selExchange, " sel Exchange qty");
        // console.log(this.apis, "api list fetched back");
    }
    QuantityCalcPage.prototype.ngOnInit = function () {
        // console.log("2 ng oninit called");
        var _this = this;
        this.networkFlag = this.api.networkFlag;
        if (this.networkFlag) {
            this.api.getApiUrl().then(function (apiUrl) {
                console.log("Response API url ", apiUrl);
                _this.apiUrls = apiUrl;
                _this.apis = _this.apiUrls.exchange;
                // console.log("Exchange values", this.apis);
                _this.exchanges = Object.keys(_this.apis);
                if (_this.selExchange == undefined) {
                    _this.selExchange = __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["l" /* KOINEX */];
                }
                if (_this.selCoin.coinName == undefined) {
                    _this.selCoin.coinName = _this.apiUrls.coins.BTC.name;
                }
                _this.populateView();
                // this.api.trackPage(this.pageName);
                _this.api.logAnalytics(_this.pageName);
                _this.api.fetchService(_this.pageName).then(function (lock) {
                    if (lock != true) {
                        _this.infoAlert();
                    }
                });
                _this.api.fetchService("points").then(function (points) {
                    // console.log("QTY fetched points", points);
                    _this.points = points;
                    if (_this.points > 0) {
                        if (!_this.api.usedFlag) {
                            _this.points = _this.points - 1;
                            _this.api.usedFlag = true;
                        }
                        _this.enable = true;
                    }
                    else {
                        _this.enable = false;
                    }
                    if (_this.points == 1) {
                        _this.presentGetPoints(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["o" /* LAST_POINT_MSG */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["n" /* LAST_POINT_DESC */]);
                    }
                    // console.log("Storing new Points", this.points);
                    _this.api.storeService(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["u" /* POINTS */], _this.points);
                    if (!_this.enable) {
                        _this.presentGetPoints(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["j" /* INSUF_POINTS_MSG */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["i" /* INSUF_POINTS_DESC */]);
                    }
                    // console.log("Existing points", this.points);
                });
            });
        }
    };
    QuantityCalcPage.prototype.ionViewWillEnter = function () {
        this.networkFlag = this.api.networkFlag;
        // console.log("Home page -View Entered", this.alive);
    };
    QuantityCalcPage.prototype.ionViewDidEnter = function () {
        if (this.api.rewardNotif) {
            this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["E" /* RATE_REWARD_MSG */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */]);
            this.api.rewardNotif = false;
        }
    };
    QuantityCalcPage.prototype.infoAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["w" /* POINTS_MSG */],
            message: __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["v" /* POINTS_DESC */],
            buttons: [
                {
                    text: 'Got it!',
                    handler: function () {
                        _this.api.instructionToast(_this.pageName, 2000);
                    }
                }
            ]
        });
        alert.present();
    };
    QuantityCalcPage.prototype.presentGetPoints = function (message, description) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: message,
            message: description,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Watch Ad',
                    handler: function () {
                        // console.log('Watch Ad clicked');
                        _this.showAd();
                    }
                }
            ]
        });
        alert.present();
    };
    QuantityCalcPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // console.log(this.selCoin.coinName, "sel Coin Name - Refresh");
        this.networkFlag = this.api.networkFlag;
        if (this.networkFlag) {
            this.apiUrls = this.api.apiUrls;
            this.populateView();
            setTimeout(function () {
                _this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["x" /* PRICE_REFRESH */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */]);
                refresher.complete();
            }, 800);
        }
        else {
            refresher.complete();
            this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["y" /* PRICE_REFRESH_FAIL */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */]);
        }
    };
    QuantityCalcPage.prototype.populateView = function () {
        // console.log("3 populate view called");
        this.populateCoins(this.selExchange);
        var feesPercent = +this.apis[this.selExchange].fees.buy;
        this.buyerFeesPercent = feesPercent * 100;
    };
    QuantityCalcPage.prototype.exchangeChanged = function (exchange) {
        // console.log("Exchange changed", exchange);
        this.selExchange = exchange;
        // console.log("BTC test name", this.api.apiUrls.coins.BTC.name);
        this.selCoin.coinName = this.api.apiUrls.coins.BTC.name;
        this.networkFlag = this.api.networkFlag;
        if (this.networkFlag) {
            this.populateView();
        }
    };
    QuantityCalcPage.prototype.populateCoins = function (exchange) {
        var _this = this;
        // console.log("4 populate coins", exchange);
        this.api.getExchangeData(exchange, true).subscribe(function (res) {
            // console.log("Exchange data", res);
            _this.coins = _this.api.processExchangeData(exchange, res, undefined, undefined);
            // console.log(this.coins, "coins in qty");
            if (_this.selCoin.coinName == undefined) {
                _this.selCoin.coinName = _this.api.apiUrls.coins.BTC.name;
                // console.log("Coiname sent", this.selCoin.coinName);
            }
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
    QuantityCalcPage.prototype.coinRateChanged = function () {
        this.updateRange();
    };
    QuantityCalcPage.prototype.formateRate = function () {
        // console.log("7 format rate");
        // console.log(this.selCoin.range.rate.no, 'number');
        this.selCoin.range.rate.formatted = this.util.currencyFormatter(+this.selCoin.range.rate.no);
        // console.log(this.range.rate.formatted);
    };
    QuantityCalcPage.prototype.calcQuantity = function () {
        // console.log("quantity calculated");
        if (this.amount.no != undefined) {
            this.calcFeesAmount();
            // console.log("Actual Amount", this.actualAmount);
            var qty = this.actualAmount.no / this.selCoin.range.rate.no;
            // console.log(qty);
            this.quantity.no = +this.util.trimQuantity(this.selCoin.coinName, qty);
            // console.log(this.quantity);
            this.quantity.formatted = this.util.numberFormatter(this.quantity.no);
        }
    };
    QuantityCalcPage.prototype.calcFeesAmount = function (calcActual) {
        if (calcActual === void 0) { calcActual = true; }
        this.exchange = this.apis[this.selExchange];
        // console.log("Exchange details", this.exchanges, this.exchange.fees.buy);
        var feesPercent = +this.exchange.fees.buy;
        this.buyerFeesPercent = feesPercent * 100;
        // console.log(feesPercent, "fees percent");
        // console.log(this.amount.no, "amount.no");
        if (calcActual) {
            this.calcActual(feesPercent);
        }
        // console.log(this.actualAmount.no, "Actual amount.no");
        this.buyerFees.no = this.actualAmount.no * feesPercent;
        this.buyerFees.no = this.util.trimToDecimal(this.buyerFees.no, 2);
        this.buyerFees.formatted = this.util.currencyFormatter(this.buyerFees.no);
        // console.log("Buyers fees", this.buyerFees.no);
        this.actualAmount.no = this.util.trimToDecimal(this.actualAmount.no, 2);
        this.actualAmount.formatted = this.util.currencyFormatter(this.actualAmount.no);
        if (!calcActual) {
            this.amount.no = this.actualAmount.no + this.buyerFees.no;
            this.amount.formatted = this.util.currencyFormatter(this.amount.no);
        }
    };
    QuantityCalcPage.prototype.calcActual = function (feesPercent) {
        this.actualAmount.no = (this.amount.no / (1 + feesPercent));
    };
    QuantityCalcPage.prototype.rangeChanged = function (rangePointer) {
        this.selCoin.range.rate.no = rangePointer;
        this.formateRate();
        this.calcQuantity();
    };
    QuantityCalcPage.prototype.calcAmount = function (quantity) {
        // console.log("quantity changed ", quantity);
        if (quantity != "0" && quantity != '') {
            this.quantity.no = quantity.length > 10 ? this.trimAmount(quantity) : quantity;
            // console.log("Formatted quantity", this.quantity.formatted);
            this.actualAmount.no = this.quantity.no * this.selCoin.range.rate.no;
            this.calcFeesAmount(false);
        }
        this.dataFormatter();
    };
    QuantityCalcPage.prototype.amountChanged = function (amount) {
        // console.log("amount changed ", amount);
        if (amount != '0' && amount != '') {
            this.amount.no = amount.length > 9 ? this.trimAmount(amount) : amount;
            // console.log("formatted amount", this.amount.formatted);
            this.calcQuantity();
        }
        this.dataFormatter();
        // console.log("new amount.no value", this.amount.no);
    };
    QuantityCalcPage.prototype.dataFormatter = function () {
        // console.log(this.quantity.no);
        this.quantity.formatted = this.util.numberFormatter(this.quantity.no);
        this.amount.formatted = this.util.currencyFormatter(+this.amount.no);
        // console.log(this.quantity.no);
    };
    QuantityCalcPage.prototype.trimAmount = function (amount) {
        return amount.substring(0, 9);
    };
    QuantityCalcPage.prototype.showAd = function () {
        var _this = this;
        // this.api.showVideoAd();
        this.api.showVideoAd();
        this.api.admobFree.on("admob.rewardvideo.events.CLOSE").subscribe(function (res) {
            _this.api.fetchService("points").then(function (points) {
                console.log("Ad Closed");
                _this.points = points;
                if (_this.points > 0) {
                    _this.enable = true;
                    if (_this.reward) {
                        _this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["G" /* REWARD_POINTS */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */], 2000);
                        _this.reward = false;
                    }
                }
            });
        });
        this.api.admobFree.on("admob.interstitial.events.CLOSE").subscribe(function (res) {
            console.log("Interstitial close - Quant page");
            _this.api.fetchService(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["u" /* POINTS */]).then(function (points) {
                console.log("Interstitial Ad Closed");
                _this.points = points;
                if (_this.points > 0) {
                    _this.enable = true;
                    if (_this.reward) {
                        _this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["G" /* REWARD_POINTS */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */], 2000);
                        _this.reward = false;
                    }
                }
            });
        });
        this.api.admobFree.on("admob.interstitial.events.OPEN").subscribe(function (res) {
            console.log("Interstitial open - Quant page");
            _this.reward = true;
        });
        this.api.admobFree.on("admob.rewardvideo.events.REWARD").subscribe(function (res) {
            console.log("Quant Reward Called");
            _this.reward = true;
        });
    };
    QuantityCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quantity-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Quantity / Amount Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="centerNetwork" *ngIf="!networkFlag">\n\n    <b>Network connection unavailable.</b> Please connect to a network.\n\n    <button class="padding2rem" (click)="ngOnInit()" ion-button color="light">Retry</button>\n\n  </div>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="enable">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div *ngIf="networkFlag">\n\n    <ion-spinner *ngIf="coins == undefined" class="coinSpinner"></ion-spinner>\n\n    <div class="size2rem center" *ngIf="coins != undefined">\n\n      <span class=" size2rem3 weight500">{{points}}</span>\n\n      <span class="padding1rem">: Uses Left\n\n      </span>\n\n      <button class="padding1rem getPoints" (click)="showAd()" ion-button color="dark">Refill Use</button>\n\n    </div>\n\n\n\n  </div>\n\n  <hr>\n\n  <div *ngIf="enable && networkFlag && coins != undefined">\n\n    <ion-card-header class="weight500 size1rem8 paddingTop0 ">\n\n      Enter Coin Detail\n\n    </ion-card-header>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Exchange</ion-label>\n\n        <ion-select [(ngModel)]="selExchange" *ngIf="selExchange" interface="popover" (ngModelChange)="exchangeChanged(selExchange)">\n\n          <ion-option *ngFor=" let exchange of exchanges">{{exchange}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Crypto-Coin</ion-label>\n\n        <ion-select [(ngModel)]="selCoin.coinName" interface="popover" (ngModelChange)="populateView()">\n\n          <ion-option *ngFor=" let coin of coins" [value]="coin.coinName">{{coin.coinName}} ({{coin.coinCode}})</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Coin Rate</ion-label>\n\n        <ion-input type="number" placeholder="(e.g) 3000" [(ngModel)]="selCoin.range.rate.no" clearInput="true" (ngModelChange)="coinRateChanged($event) "></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        &#177;20% : ({{selCoin.range.minusPercent.formatted}} - {{selCoin.range.plusPercent.formatted}})\n\n      </ion-item>\n\n      <!-- <ion-item>\n\n      <ion-range [min]="selCoin.range.minusPercent.no " [max]="selCoin.range.plusPercent.no " step="selCoin.step\n\n      " snaps="true " [(ngModel)]="rangeValue "\n\n        (ionChange)="rangeChanged($event) ">\n\n        <ion-label range-left>{{selCoin.range.minusPercent.formatted}}</ion-label>\n\n        <ion-label range-right>{{selCoin.range.plusPercent.formatted}}</ion-label>\n\n      </ion-range>\n\n    </ion-item> -->\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Amount &#8377;</ion-label>\n\n        <ion-input type="number" placeholder="(e.g) 1000" clearInput="true" [(ngModel)]="amount.no" max="9" (ngModelChange)="amountChanged($event)"></ion-input>\n\n      </ion-item>\n\n      <!-- <div *ngIf="amountFlag ">*Amount exceeding Limit</div> -->\n\n      <ion-item>\n\n        <ion-label fixed>Quantity</ion-label>\n\n        <ion-input type="number" placeholder="(e.g) 0.0001" clearInput="true" [(ngModel)]="quantity.no" (ngModelChange)="calcAmount($event)"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-card-header class="weight500 size1rem8">\n\n      Summary\n\n    </ion-card-header>\n\n    <ion-card>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6 class="center">\n\n            <ion-row>\n\n              <ion-col col-12 class="weight500 size2rem8">\n\n                {{quantity.formatted}}\n\n\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-12>\n\n                {{selCoin.coinName}}(s) ({{selCoin.coinCode}})\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <img class="center" src="{{selCoin.coinImage}}">\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Coin Rate:\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            {{selCoin.range.rate.formatted}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Amount:\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            {{actualAmount.formatted}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Buy Fees:({{buyerFeesPercent}}%)\n\n          </ion-col>\n\n          <ion-col col-6 class="redColor">\n\n            {{buyerFees.formatted}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            Total Amount:\n\n          </ion-col>\n\n          <ion-col col-6 class="weight500">\n\n            {{amount.formatted}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuantityCalcPage);
    return QuantityCalcPage;
}());

//# sourceMappingURL=quantity-calc.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coin_detail_coin_detail__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_IntervalObservable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__ = __webpack_require__(35);
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
    function HomePage(navCtrl, api, platform) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.platform = platform;
        this.pageName = "home page";
        this.networkFlag = true;
        this.firstEntryFlag = true;
        // console.log("Constructor - Home page");
        this.alive = true;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("ngOnInit - home called");
        this.firstEntryFlag = false;
        this.api.checkNetworkConnection().then(function (val) {
            console.log("Network flag - Home page ", _this.networkFlag);
            _this.networkFlag = val;
            if (_this.networkFlag) {
                // console.log("network present - fetching api");
                _this.api.logAnalytics(_this.pageName);
                _this.setApiUrl();
                _this.api.instructionToast(_this.pageName, 0);
            }
        });
    };
    HomePage.prototype.setApiUrl = function () {
        // console.log("Setting api urls");
        var _this = this;
        this.api.getApiUrl().then(function (apiUrl) {
            // console.log("Response API url ", apiUrl);
            _this.apiUrls = apiUrl;
            _this.populateView();
            //Automatic fetching of new data every 20 seconds
            var refresher = __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_IntervalObservable__["IntervalObservable"].create(20000);
            refresher.takeWhile(function () { return _this.alive; }) // only fires when component is alive
                .subscribe(function () {
                _this.networkFlag = _this.api.networkFlag;
                // console.log("Auto Refresh Network Flag " + this.networkFlag);
                if (_this.networkFlag) {
                    _this.apiUrls = _this.api.apiUrls;
                    _this.populateView();
                }
            });
        });
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.alive = false;
        // console.log("Home page - left", this.alive);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.alive = true;
        this.networkFlag = this.api.networkFlag;
        if (!this.firstEntryFlag && this.networkFlag && this.apiUrls == undefined) {
            this.ngOnInit();
        }
        // console.log("Home page -View Entered", this.alive);
        console.log("Home page view will enter ", this.networkFlag);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        //update flag - if api fetched from constants file
        this.networkFlag = this.api.networkFlag;
        // console.log("Refresh Network Flag " + this.networkFlag);
        if (this.networkFlag) {
            this.apiUrls = this.api.apiUrls;
            this.populateView();
            setTimeout(function () {
                _this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["x" /* PRICE_REFRESH */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */]);
                refresher.complete();
            }, 800);
        }
        else {
            refresher.complete();
            this.api.showToast(__WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["y" /* PRICE_REFRESH_FAIL */], __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["H" /* TOP */]);
        }
    };
    HomePage.prototype.populateView = function () {
        // console.log(this.apiUrls.exchange);
        // console.log("Populating Home page");
        if (this.selExchange == undefined && this.apiUrls != undefined) {
            this.exchanges = Object.keys(this.apiUrls.exchange);
            this.selExchange = this.exchanges[0];
            // console.log("Selected Exchange", this.selExchange);
        }
        this.populateForExchange(this.selExchange);
    };
    HomePage.prototype.selectedExchange = function (sel) {
        this.coins = undefined;
        this.populateForExchange(sel);
    };
    HomePage.prototype.populateForExchange = function (sel) {
        var _this = this;
        // console.log("Coin List", this.apiUrls.exchange[sel].coinList);
        this.api.getMarketOverviewData(sel, this.apiUrls.exchange[sel].coinList).subscribe(function (res) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__coin_detail_coin_detail__["a" /* CoinDetailPage */], { "coin": coin, "exchange": this.selExchange });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button type="button" ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Market View</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="centerNetwork" *ngIf="!networkFlag">\n\n    <b>Network connection unavailable.</b> Please connect to a network.\n\n    <button class="padding2rem" (click)="ngOnInit()" ion-button color="light">Retry</button>\n\n  </div>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content padding pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-item *ngIf="networkFlag">\n\n    <ion-label>Exchange:</ion-label>\n\n    <ion-select [(ngModel)]="selExchange" interface="popover" (ngModelChange)="selectedExchange(selExchange)">\n\n      <ion-option *ngFor="let exchange of exchanges">{{exchange}}</ion-option>\n\n    </ion-select>\n\n\n\n  </ion-item>\n\n\n\n  <ion-list *ngIf="networkFlag">\n\n    <ion-spinner *ngIf="coins == undefined" class="coinSpinner"></ion-spinner>\n\n    <!-- <ion-card>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>Cryptos</ion-col>\n\n          <ion-col col-4>\n\n            Market Price\n\n          </ion-col>\n\n          <ion-col col-2>Change\n\n            <br>%</ion-col>\n\n          <ion-col col-2>Price Index</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card> -->\n\n    <ion-card *ngFor="let coin of coins" (click)="navCoinDetailPage(coin)">\n\n      <ion-item detail-push>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-3>\n\n              <ion-thumbnail item-start>\n\n                <img src="{{coin.coinImage}}">\n\n                <div class="coinName weight500">{{coin.coinName}}\n\n                  <br> ({{coin.coinCode}})\n\n                </div>\n\n              </ion-thumbnail>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n                <ion-col col-8>\n\n                  <ion-row class="price">\n\n                    {{coin.market.formatted}}\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-4 class="boldTextValue" *ngIf="coin.change != undefined">\n\n                  <div *ngIf="coin.change.day >= 0" class="greenColor weight500">\n\n                    <span class="size1rem7">&#9650;</span>+{{coin.change.day}}%\n\n                  </div>\n\n                  <div *ngIf="coin.change.day < 0" class="redColor weight500">\n\n                    <span class="size1rem7">&#9660;</span>{{coin.change.day}}%\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6 *ngIf="coin.volatility">\n\n                  <span class="riseFallSymbol weight500 size1rem9">&#8645;</span>\n\n                  <span class="weight500"> {{coin.volatility}}% </span>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  Price:\n\n                  <span [ngClass]="coin.price_index">{{coin.price_index}}</span>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row *ngIf="coin.max.no">\n\n                <ion-col col-12>\n\n                  <span>High: </span>\n\n                  <span class="greenColor weight500">{{coin.max.formatted}}</span>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row *ngIf="coin.min.no">\n\n                <ion-col col-12>\n\n                  <span>Low: </span>\n\n                  <span class="redColor weight500">{{coin.min.formatted}}</span>\n\n                </ion-col>\n\n              </ion-row>\n\n\n\n              <ion-row>\n\n                <ion-col col-12 *ngIf="coin.globalDiff != undefined">\n\n                  <div *ngIf="coin.globalDiff.percent >= 0">\n\n                    Global.Diff(%):\n\n                    <span class="greenColor weight500">{{coin.globalDiff.percent}}%</span>\n\n                  </div>\n\n                  <div *ngIf="coin.globalDiff.percent < 0">\n\n                    Global.Diff(%):\n\n                    <span class="redColor weight500">{{coin.globalDiff.percent}}%</span>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-1 class="vertical-align-content">\n\n              <span class="weight500 nextButton">></span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetail; });
/* unused harmony export GlobalDiff */
/* unused harmony export Change */
/* unused harmony export Global */
/* unused harmony export RangeValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_detail__ = __webpack_require__(109);

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
        this.globalDiff = new GlobalDiff();
    }
    return CoinDetail;
}());

var GlobalDiff = (function () {
    function GlobalDiff() {
        this.val = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
    }
    return GlobalDiff;
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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quantity_calc_quantity_calc__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__ = __webpack_require__(35);
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
        this.pageName = "coin-detail page";
        // console.log(coin);
        this.alive = true;
    }
    CoinDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.networkFlag = this.api.networkFlag;
        if (this.networkFlag) {
            var coin = this.navParam.get("coin");
            this.exchange = this.navParam.get("exchange");
            this.initRange(coin);
            // this.api.trackPage(this.pageName);
            this.api.logAnalytics(this.pageName);
            this.referralLink = this.api.apiUrls.exchange[this.exchange].referral;
            // console.log("referral Link", this.referralLink);
            this.populateView();
            var refresher = __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__["IntervalObservable"].create(20000);
            refresher.takeWhile(function () { return _this.alive; }) // only fires when component is alive
                .subscribe(function () {
                _this.networkFlag = _this.api.networkFlag;
                // console.log("Auto Refresh Network Flag - coinDetail" + this.networkFlag);
                if (_this.networkFlag) {
                    _this.populateView();
                }
            });
            this.api.instructionToast(this.pageName, 1500);
        }
    };
    CoinDetailPage.prototype.ionViewDidLeave = function () {
        this.alive = false;
        // console.log("Detail  page - left", this.alive);
    };
    CoinDetailPage.prototype.ionViewWillEnter = function () {
        this.alive = true;
        this.networkFlag = this.api.networkFlag;
        // console.log("View enter Network Flag " + this.networkFlag);
        if (this.networkFlag) {
            this.populateView();
        }
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
    CoinDetailPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.networkFlag = this.api.networkFlag;
        if (this.networkFlag) {
            this.populateView();
            setTimeout(function () {
                _this.api.showToast(__WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["x" /* PRICE_REFRESH */], __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["H" /* TOP */]);
                refresher.complete();
            }, 800);
        }
        else {
            refresher.complete();
            this.api.showToast(__WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["y" /* PRICE_REFRESH_FAIL */], __WEBPACK_IMPORTED_MODULE_6__constants_api_constants__["H" /* TOP */]);
        }
    };
    CoinDetailPage.prototype.populateView = function () {
        // console.log("Detail Populating");
        this.selectedExchange(this.exchange);
    };
    CoinDetailPage.prototype.selectedExchange = function (sel) {
        var _this = this;
        this.api.getMarketOverviewData(sel, [this.coinDetail.coinCode]).subscribe(function (res) {
            // console.log("COIN DETAIL");
            // console.log("first data - exchange data");
            // console.log(res[0]);;
            // console.log("second data - coin market Cap data")
            // console.log(res[1]);
            // console.log("third data - coindesk data");
            // console.log(res[2]);
            // console.log("exchange -", sel);
            var coinArray = _this.api.processExchangeData(sel, res[0], res[1], res[2]);
            // console.log("coin array detail", coinArray);
            _this.coinDetail = coinArray[0];
            _this.initRange(_this.coinDetail);
            // console.log(this.coinDetail, "coinDetail Processed Detail");
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
            selector: 'page-coin-detail',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Coin Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="centerNetwork" *ngIf="!networkFlag">\n\n    <b>Network connection unavailable.</b> Please connect to a network.\n\n    <button class="padding2rem" (click)="ngOnInit()" ion-button color="light">Retry</button>\n\n  </div>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-card *ngIf="networkFlag">\n\n    <ion-card-header class="size2rem weight500">\n\n      <span class="greyColor size1rem7">Exchange -</span>\n\n      {{exchange}}\n\n    </ion-card-header>\n\n    <hr class="hrBottomMargin">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n\n\n          <img src="{{coinDetail.coinImage}}">\n\n\n\n        </ion-col>\n\n        <ion-col col-7 class="vertical-align-content">\n\n\n\n          <div class="weight500 size2rem marginLeft3rem">{{coinDetail.coinName}}\n\n            <br>({{coinDetail.coinCode}})</div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-8 class="priceDetail center">\n\n          {{coinDetail.market.formatted}}\n\n        </ion-col>\n\n        <ion-col col-4 class="boldTextValue left size1rem6 center" *ngIf="coinDetail.change != undefined">\n\n          <div *ngIf="coinDetail.change.day >= 0" class="greenColor weight500">\n\n            <span class="size1rem7">&#9650;</span>+{{coinDetail.change.day}}%\n\n          </div>\n\n          <div *ngIf="coinDetail.change.day < 0" class="redColor weight500">\n\n            <span class="size1rem7">&#9660;</span>{{coinDetail.change.day}}%\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="marginBotton0rem5">\n\n        <ion-col col-6 class="center">Buy:\n\n          <span class="boldTextValue price">{{coinDetail.buy.formatted}}</span>\n\n        </ion-col>\n\n        <ion-col col-6 class="center">Sell:\n\n          <span class="boldTextValue price">{{coinDetail.sell.formatted}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row class="marginBottom0" *ngIf="coinDetail.change != undefined">\n\n        <hr>\n\n        <ion-col col-4 class="center marginBottom0 padding1">\n\n          (1h):\n\n        </ion-col>\n\n        <ion-col col-4 class="center marginBottom0 padding1">\n\n          (24h):\n\n        </ion-col>\n\n        <ion-col col-4 class="center marginBottom0 padding1">\n\n          (1w):\n\n        </ion-col>\n\n        <hr>\n\n      </ion-row>\n\n      <ion-row *ngIf="coinDetail.change != undefined">\n\n        <ion-col col-4 class="center padding0" *ngIf="coinDetail.change">\n\n          <span class="boldTextValue">\n\n            <span *ngIf="coinDetail.change.hour >= 0" class="greenColor weight500">\n\n              <span class="size1rem7">&#9650;</span>+{{coinDetail.change.hour}}%\n\n            </span>\n\n            <span *ngIf="coinDetail.change.hour < 0" class="redColor weight500">\n\n              <span class="size1rem7">&#9660;</span>{{coinDetail.change.hour}}%\n\n            </span>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col col-4 class="center padding0 marginBotton0rem5" *ngIf="coinDetail.change">\n\n          <span class="boldTextValue">\n\n            <span *ngIf="coinDetail.change.day >= 0" class="greenColor weight500">\n\n              <span class="size1rem7">&#9650;</span>+{{coinDetail.change.day}}%\n\n            </span>\n\n            <span *ngIf="coinDetail.change.day < 0" class="redColor weight500">\n\n              <span class="size1rem7">&#9660;</span>{{coinDetail.change.day}}%\n\n            </span>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col col-4 class="center padding0" *ngIf="coinDetail.change">\n\n          <span class="boldTextValue">\n\n            <span *ngIf="coinDetail.change.week >= 0" class="greenColor weight500">\n\n              <span class="size1rem7">&#9650;</span>+{{coinDetail.change.week}}%\n\n            </span>\n\n            <span *ngIf="coinDetail.change.week < 0" class="redColor weight500">\n\n              <span class="size1rem7">&#9660;</span>{{coinDetail.change.week}}%\n\n            </span>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row *ngIf="coinDetail.volatility">\n\n        <ion-col col-6 class="center paddingBottom0">\n\n          <span>High: </span>\n\n          <span class="greenColor weight500">{{coinDetail.max.formatted}}</span>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 class="center">\n\n          Price Index:\n\n          <span [ngClass]="coinDetail.price_index">{{coinDetail.price_index}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="coinDetail.volatility">\n\n        <ion-col col-6 class="center paddingBottom0">\n\n          <span>Low: </span>\n\n          <span class="redColor weight500">{{coinDetail.min.formatted}}</span>\n\n        </ion-col>\n\n        <ion-col col-6 class="center">\n\n          Volatility:\n\n          <span class="riseFallSymbol weight500 size1rem9"> &#8645;</span>\n\n          <span class="weight500"> {{coinDetail.volatility}}% </span>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n    <hr>\n\n    <ion-grid *ngIf="coinDetail.global != undefined">\n\n      <ion-card-header class="size1rem7 greyColor padding1rem">Global price -\n\n      </ion-card-header>\n\n      <ion-row>\n\n        <ion-col col-6 class="right">\n\n          <span class="price">{{coinDetail.global.INR.formatted}} </span>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 class="left">\n\n          <span class="price">({{coinDetail.global.USD.formatted}})</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Global Diff(%):\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div *ngIf="coinDetail.globalDiff.percent >= 0">\n\n            <span class="greenColor weight500">{{coinDetail.globalDiff.percent}}%</span>\n\n          </div>\n\n          <div *ngIf="coinDetail.globalDiff.percent < 0">\n\n            <span class="redColor weight500">{{coinDetail.globalDiff.percent}}%</span>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Global Price Diff:\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div *ngIf="coinDetail.globalDiff.val.no >= 0">\n\n            <span class="greenColor weight500">{{coinDetail.globalDiff.val.formatted}}</span>\n\n          </div>\n\n          <div *ngIf="coinDetail.globalDiff.val.no < 0">\n\n            <span class="redColor weight500">{{coinDetail.globalDiff.val.formatted}}</span>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button (click)="gotoCalcQuantityPage()" ion-button small class="boldTextValue center width100 padding2rem5" color="dark">\n\n            Calculate Quantity</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button (click)="openReferralLink()" ion-button small class="boldTextValue center width100 padding2rem5" color="dark">Buy / Sell</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<!-- Rage for setting price alert -->\n\n\n\n<!-- <ion-item>\n\n        <h2> From : {{rangeRegion.lower}}</h2>\n\n        <h2> To: {{rangeRegion.upper}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-range dualKnobs="true" pin="true" snaps="true" [step]="coinDetail.step" (ionChange)="change()" steps [(ngModel)]="rangeRegion"\n\n          [min]="coinDetail.minus20.no" [max]="coinDetail.plus20.no">\n\n          <ion-label range-left>{{coinDetail.minus20.formatted}}</ion-label>\n\n          <ion-label range-right>{{coinDetail.plus20.formatted}}</ion-label>\n\n        </ion-range>\n\n      </ion-item> -->\n\n\n\n<!-- Alert Button -->\n\n\n\n<!-- <ion-item>\n\n        <button ion-button large>Set Alert</button>\n\n\n\n      </ion-item> -->'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], CoinDetailPage);
    return CoinDetailPage;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profit_calc__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_data_api_data__ = __webpack_require__(34);
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
    function ProfitCalcPage(navCtrl, utilities, api) {
        this.navCtrl = navCtrl;
        this.utilities = utilities;
        this.api = api;
        this.profitCalc = new __WEBPACK_IMPORTED_MODULE_3__models_profit_calc__["a" /* ProfitCalc */]();
        this.pageName = "profit-calc page";
    }
    ProfitCalcPage.prototype.ngOnInit = function () {
        // this.api.trackPage(this.pageName);
        this.profitCalc.quantity.no = 1;
        this.api.logAnalytics(this.pageName);
    };
    ProfitCalcPage.prototype.checkRequiredFields = function () {
        // console.log("Check Required fields", this.quantity.no.no, this.amount);
        console.log("Quantity", this.profitCalc.quantity.no);
        if (this.profitCalc.quantity.no <= 0) {
            this.profitCalc.quantity.no = 1;
        }
        // console.log("inside quantity");
        this.profitCalc.quantity.no = this.utilities.trimToDecimal(+this.profitCalc.quantity.no, 4);
        this.calcAmount();
        if (this.checkMandatoryFields()) {
            // console.log("Manadatory passed");
            this.calcProfit();
        }
        this.formatDataValues();
        // console.log("Exited");
    };
    ProfitCalcPage.prototype.buySellPriceChanged = function (priceType) {
        switch (priceType) {
            case "buy": {
                if (this.profitCalc.fromValue.no != 0) {
                    this.profitCalc.fromValue.no = this.utilities.trimToDecimal(+this.profitCalc.fromValue.no, 2);
                }
                break;
            }
            case "sell": {
                if (this.profitCalc.toValue.no != 0) {
                    this.profitCalc.toValue.no = this.utilities.trimToDecimal(+this.profitCalc.toValue.no, 2);
                }
                break;
            }
        }
        this.checkRequiredFields();
        this.formatDataValues();
    };
    ProfitCalcPage.prototype.checkMandatoryFields = function () {
        // console.log(this.fromValue.no, this.toValue.no);
        if (this.profitCalc.fromValue.no != undefined && this.profitCalc.toValue.no != undefined) {
            // console.log("mandatory true");
            return true;
        }
        else {
            // console.log("mandatory false");
            return false;
        }
    };
    ProfitCalcPage.prototype.calcQty = function () {
        if (this.profitCalc.fromValue.no != undefined) {
            this.profitCalc.quantity.no = this.profitCalc.amount.no / this.profitCalc.fromValue.no;
            this.profitCalc.quantity.no = this.utilities.trimToDecimal(this.profitCalc.quantity.no, 4);
        }
        // console.log("Qty calc", this.quantity.no);
    };
    ProfitCalcPage.prototype.calcAmount = function () {
        if (this.profitCalc.fromValue.no != undefined) {
            this.profitCalc.amount.no = this.profitCalc.quantity.no * this.profitCalc.fromValue.no;
            this.profitCalc.amount.no = this.utilities.trimToDecimal(this.profitCalc.amount.no, 2);
        }
        // console.log("Amount calc", this.amount.no);
    };
    ProfitCalcPage.prototype.calcProfit = function () {
        this.profitCalc.profitLoss.no = (this.profitCalc.toValue.no - this.profitCalc.fromValue.no) * this.profitCalc.quantity.no;
        this.profitCalc.profitLoss.no = this.utilities.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
        // console.log("Profit loss", this.profitLoss.no);
        this.calcFinalvalue();
    };
    ProfitCalcPage.prototype.calcFinalvalue = function () {
        this.profitCalc.finalValue.no = this.profitCalc.amount.no + this.profitCalc.profitLoss.no;
        if (Number.isNaN(this.profitCalc.finalValue.no)) {
            this.profitCalc.finalValue.no = 0;
        }
        else {
            this.profitCalc.finalValue.no = this.utilities.trimToDecimal(+this.profitCalc.finalValue.no, 2);
        }
        // console.log("Final value", this.finalValue.no);
    };
    ProfitCalcPage.prototype.formatDataValues = function () {
        // console.log("Formatting values");
        this.profitCalc.quantity.formatted = this.utilities.numberFormatter(this.profitCalc.quantity.no);
        this.profitCalc.amount.formatted = this.utilities.currencyFormatter(this.profitCalc.amount.no);
        this.profitCalc.fromValue.formatted = this.utilities.currencyFormatter(this.profitCalc.fromValue.no);
        this.profitCalc.toValue.formatted = this.utilities.currencyFormatter(this.profitCalc.toValue.no);
        this.profitCalc.profitLoss.formatted = this.utilities.currencyFormatter(this.profitCalc.profitLoss.no);
        this.profitCalc.finalValue.formatted = this.utilities.currencyFormatter(this.profitCalc.finalValue.no);
    };
    ProfitCalcPage.prototype.clearAll = function () {
        this.profitCalc.quantity.no = null;
        this.profitCalc.amount.no = null;
        this.profitCalc.fromValue.no = null;
        this.profitCalc.toValue.no = null;
        this.profitCalc.profitLoss.no = null;
        this.profitCalc.finalValue.no = null;
        this.formatDataValues();
    };
    ProfitCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profit-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profit / Loss Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card-header class="weight500 size1rem8">\n\n    Enter Buy/Sell Detail:\n\n  </ion-card-header>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label fixed>Quantity</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 0.0123" [(ngModel)]="profitCalc.quantity.no" clearInput="true" (ngModelChange)="checkRequiredFields()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Buy Price &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 1000" [(ngModel)]="profitCalc.fromValue.no" clearInput="true" (ngModelChange)="buySellPriceChanged(\'buy\')"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Sell Price &#8377;</ion-label>\n\n      <ion-input type="number" placeholder=" (e.g) 2000" [(ngModel)]="profitCalc.toValue.no" clearInput="true" (ngModelChange)="buySellPriceChanged(\'sell\')"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <button class="padding2rem" (click)="clearAll()" ion-button color="light">Clear All</button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-card-header class="weight500 size1rem8">\n\n    Summary\n\n  </ion-card-header>\n\n  <ion-card>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Quantity:\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          {{this.profitCalc.quantity.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Investment:\n\n        </ion-col>\n\n        <ion-col col-7 class="weight500 blueColor">\n\n          {{this.profitCalc.amount.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Buy Price:\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          {{this.profitCalc.fromValue.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Sell Price:\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          {{this.profitCalc.toValue.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Profit / Loss:\n\n        </ion-col>\n\n        <ion-col col-7 class="weight500 size2rem" [ngClass]="{\'greenColor\': this.profitCalc.profitLoss.no>0, \'redColor\': this.profitCalc.profitLoss.no<0}">\n\n          {{this.profitCalc.profitLoss.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Net Amount:\n\n        </ion-col>\n\n        <ion-col col-7 class="weight500" [ngClass]="{\'greenColor\': this.profitCalc.profitLoss.no>0, \'redColor\': this.profitCalc.profitLoss.no<0}">\n\n          {{this.profitCalc.finalValue.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="alignCenter" *ngIf="this.profitCalc.profitLoss.no != 0 && this.profitCalc.profitLoss.no">\n\n        <ion-col col-12>\n\n          <span>\n\n            [{{this.profitCalc.amount.formatted}}\n\n            <span *ngIf="this.profitCalc.profitLoss.no > 0"> + </span>\n\n            <span [ngClass]="{\'greenColor\': this.profitCalc.profitLoss.no>0, \'redColor\': this.profitCalc.profitLoss.no<0}" class="weight500">{{this.profitCalc.profitLoss.formatted}}</span>]\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_4__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], ProfitCalcPage);
    return ProfitCalcPage;
}());

//# sourceMappingURL=profit-calc.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quantity_calc_quantity_calc__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_utilities_utilities__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_analytics__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_analytics__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_admob_free__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_android_permissions__ = __webpack_require__(220);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__["a" /* ApiDataProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_utilities_utilities__["a" /* Utilities */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_admob_free__["b" /* AdMobFreeRewardVideo */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_android_permissions__["a" /* AndroidPermissions */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profit_calc_profit_calc__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_data_api_data__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_news_news__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quantity_calc_quantity_calc__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__ = __webpack_require__(220);
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
    function MyApp(platform, statusBar, splashScreen, api, fcm, app, alertCtrl, androidPermissions) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.api = api;
        this.fcm = fcm;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.androidPermissions = androidPermissions;
        // rootPage: any = HomePage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_8__pages_quantity_calc_quantity_calc__["a" /* QuantityCalcPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__pages_profit_calc_profit_calc__["a" /* ProfitCalcPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__pages_news_news__["a" /* NewsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("Ng oninit Called - app component");
        this.platform.ready().then(function () {
            _this.api.fetchService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["u" /* POINTS */]).then(function (points) {
                // console.log("Points App component", points);
                if (points == null) {
                    // console.log("Points is undefined ", points);
                    _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["u" /* POINTS */], __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["d" /* DEFAULT_POINT */]);
                }
            });
            _this.api.fetchService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["z" /* RATED */]).then(function (rateFlag) {
                // console.log("Rate Flag ", rateFlag);
                if (rateFlag == null) {
                    _this.rateFlag = false;
                    _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["z" /* RATED */], _this.rateFlag);
                }
                else {
                    _this.rateFlag = rateFlag;
                }
            });
            _this.api.fetchService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["F" /* RATE_USES_UNTIL */]).then(function (rateUsesLeft) {
                // console.log("USES UNTIL LEFT", rateUsesLeft);
                if (rateUsesLeft == null) {
                    var defaultLeft = __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["e" /* DEFAULT_USES_UNTIL */];
                    _this.usesUntilPrompt = defaultLeft;
                    _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["F" /* RATE_USES_UNTIL */], _this.usesUntilPrompt);
                    // console.log("UsesUntilLeft Null so default ", this.usesUntilPrompt);
                }
                else {
                    _this.usesUntilPrompt = rateUsesLeft;
                    // console.log("Fetched Uses Until left ", this.usesUntilPrompt);
                }
            });
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // console.log("Platform ready");
            _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.INTERNET,
                _this.androidPermissions.PERMISSION.WAKE_LOCK,
                _this.androidPermissions.PERMISSION.ACCESS_WIFI_STATE,
                _this.androidPermissions.PERMISSION.CHANGE_WIFI_STATE,
                _this.androidPermissions.PERMISSION.ACCESS_NETWORK_STATE,
                _this.androidPermissions.PERMISSION.CHANGE_NETWORK_STATE,
                _this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                _this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]);
            _this.api.prepareVideoAd();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.styleBlackOpaque();
            _this.statusBar.show();
            _this.splashScreen.hide();
            _this.fcm.onNotification().subscribe(function (data) {
                if (data.wasTapped) {
                    console.log(data);
                }
                else {
                    console.log(data);
                }
                ;
            });
            _this.platform.registerBackButtonAction(function () {
                // console.log("Backbutton pressed ", this.rateFlag);
                if (!_this.rateFlag) {
                    // console.log("Not yet Rated checking rating dialog display");
                    var listNav = _this.app.getActiveNavs();
                    // console.log("Active navs", activeNav);
                    // console.log("can go back", activeNav[0].canGoBack());
                    var activeNav = listNav[0];
                    if (!activeNav.canGoBack()) {
                        if (_this.usesUntilPrompt > 0) {
                            // console.log("Uses Until prompt ", this.usesUntilPrompt);
                            _this.usesUntilPrompt -= 1;
                            _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["F" /* RATE_USES_UNTIL */], _this.usesUntilPrompt);
                            _this.platform.exitApp();
                        }
                        else if (_this.usesUntilPrompt == 0) {
                            // console.log("Showing rate dialog,Uses until prompt ", this.usesUntilPrompt);
                            _this.likeAppDialog();
                        }
                    }
                    else {
                        activeNav.pop();
                    }
                }
                else {
                    // console.log("Already Rated Exiting", this.rateFlag);
                    _this.platform.exitApp();
                }
            });
        });
    };
    MyApp.prototype.likeAppDialog = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["r" /* LIKE_DIALOG_HEAD */],
            message: __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["q" /* LIKE_DIALOG_DESC */],
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        // console.log('No dont like the App');
                        _this.usesUntilPrompt = __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["f" /* DONT_LIKE */];
                        _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["F" /* RATE_USES_UNTIL */], __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["f" /* DONT_LIKE */]);
                        _this.platform.exitApp();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        // console.log("Yes Like the App");
                        _this.rateDialog();
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.rateDialog = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["B" /* RATE_DIALOG_HEAD */],
            message: __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["A" /* RATE_DIALOG_DESC */],
            buttons: [
                {
                    text: 'Later',
                    handler: function () {
                        // console.log('Remind Later clicked');
                        _this.usesUntilPrompt = __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["p" /* LATER_LIKE */];
                        _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["F" /* RATE_USES_UNTIL */], __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["p" /* LATER_LIKE */]);
                        _this.platform.exitApp();
                    }
                },
                {
                    text: 'Rate!',
                    handler: function () {
                        // console.log('Rating and getting 5 points');
                        _this.api.rewardNotif = true;
                        window.open(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["C" /* RATE_LINK */], '_system', 'location=yes');
                        _this.usesUntilPrompt = __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["D" /* RATE_REWARD */];
                        _this.api.fetchService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["u" /* POINTS */]).then(function (points) {
                            // console.log("Points", points);
                            _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["u" /* POINTS */], points + __WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["D" /* RATE_REWARD */]);
                        });
                        _this.rateFlag = true;
                        _this.api.storeService(__WEBPACK_IMPORTED_MODULE_9__constants_api_constants__["z" /* RATED */], _this.rateFlag);
                        // console.log("Rated Flag set", this.rateFlag);
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, { apiUrls: this.apiUrls });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/'<!-- <ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Settings</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu> -->\n\n\n\n<ion-content>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Market View" tabIcon="logo-bitcoin"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Quantity Calc" tabIcon="bookmark"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Profit Calc" tabIcon="logo-usd"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_detail__ = __webpack_require__(109);

var ProfitCalc = (function () {
    function ProfitCalc() {
        this.quantity = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.amount = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.fromValue = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.toValue = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.profitLoss = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
        this.finalValue = new __WEBPACK_IMPORTED_MODULE_0__value_detail__["a" /* ValueDetail */]();
    }
    return ProfitCalc;
}());

//# sourceMappingURL=profit-calc.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BuySellPage);
    return BuySellPage;
}());

//# sourceMappingURL=buy-sell.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemindersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], RemindersPage);
    return RemindersPage;
}());

//# sourceMappingURL=reminders.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utilities_utilities__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase_analytics__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var videoConfig = {
    id: "ca-app-pub-4512084985073909/9656600655",
    isTesting: false,
    autoShow: false
};
var interstitialConfig = {
    id: "ca-app-pub-4512084985073909/3055346907",
    isTesting: false,
    autoShow: false
};
var ApiDataProvider = (function () {
    // private coinAssistApis = "http://localhost:3000/apis";
    function ApiDataProvider(http, storage, utility, toastCtrl, admobFree, alertCtrl, firebaseAnalytics, platform, network) {
        this.http = http;
        this.storage = storage;
        this.utility = utility;
        this.toastCtrl = toastCtrl;
        this.admobFree = admobFree;
        this.alertCtrl = alertCtrl;
        this.firebaseAnalytics = firebaseAnalytics;
        this.platform = platform;
        this.network = network;
        this.apiUrls = {};
        this.apiUrlStore = "apiUrls";
        this.koinexData = {};
        this.zebpayData = {};
        this.usedFlag = false;
        // ******************************************************************************
        this.coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";
        this.koinexTest = false;
        this.rewardNotif = false;
    }
    ApiDataProvider.prototype.ngOnInit = function () {
    };
    ApiDataProvider.prototype.getApiUrl = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getApiUrlStorage().then(function (res) {
                console.log("Fetching api urls from storage ", res);
                if (res != null) {
                    console.log("Setting fetched from storage");
                    _this.apiUrls = res;
                    resolve(_this.apiUrls);
                }
                else {
                    console.log("Api url null so fetching from cloud");
                    _this.fetchApiUrl().then(function (res) {
                        // console.log("Fetched api urls", res);
                        _this.generateZebpayApis(res).subscribe(function (generated) {
                            console.log("generated urls passed for store", generated);
                            _this.apiUrls = generated;
                            _this.storeApiUrl(_this.apiUrls);
                        });
                    }).catch(function (err) {
                        console.log("Error Fetching API Urls ", err);
                    });
                    _this.generateZebpayApis(_this.getConstantApiUrl()).subscribe(function (generated) {
                        console.log("Constant API Urls Used");
                        _this.apiUrls = generated;
                        resolve(_this.apiUrls);
                    });
                }
            });
        });
    };
    ApiDataProvider.prototype.checkNetworkConnection = function () {
        var _this = this;
        return this.platform.ready().then(function () {
            // console.log("platform ready - api data");
            if (_this.network.type != 'none') {
                // console.log(this.network.type);
                // console.log("network flag set as true");
                _this.networkFlag = true;
            }
            // console.log("checking network connection");
            var connectSubscription = _this.network.onConnect().subscribe(function () {
                // console.log('network connected!');
                _this.networkFlag = true;
            });
            var disconnectSubscription = _this.network.onDisconnect().subscribe(function () {
                // console.log('network was disconnected :-(');
                _this.networkFlag = false;
            });
            return _this.networkFlag;
        });
    };
    ApiDataProvider.prototype.prepareVideoAd = function (show) {
        var _this = this;
        if (show === void 0) { show = false; }
        this.admobFree.rewardVideo.config(videoConfig);
        this.admobFree.rewardVideo.isReady().then(function (res) {
            if (res) {
                if (show) {
                    console.log("Video Ad Already Ready - calling Show!");
                    console.log("prepared Video ad - ready response", res);
                    _this.showVideoAd();
                }
            }
            else {
                console.log("AD not ready - Preparing...");
                _this.admobFree.rewardVideo.prepare().then(function (res) {
                    console.log("Reward Video Prepared", res);
                    if (show) {
                        _this.showVideoAd();
                    }
                }).catch(function (err) {
                    console.log("Unable to prepare", err);
                    if (show) {
                        _this.prepareInterstitialAd(true);
                    }
                });
                _this.admobFree.on("admob.rewardvideo.events.LOAD_FAIL").subscribe(function (res) {
                    console.log("AD failed to Load - new", res);
                    if (show) {
                        _this.prepareInterstitialAd(true);
                    }
                });
                _this.admobFree.on("admob.rewardvideo.events.LOAD").subscribe(function (res) {
                    console.log("AD loadded - new", res);
                    if (show) {
                        _this.showVideoAd();
                    }
                });
            }
        });
    };
    ApiDataProvider.prototype.prepareInterstitialAd = function (show) {
        var _this = this;
        if (show === void 0) { show = false; }
        this.admobFree.interstitial.config(interstitialConfig);
        this.admobFree.interstitial.isReady().then(function (res) {
            if (res) {
                if (show) {
                    console.log("Interstitial Ad Already Ready - calling Show!");
                    _this.showInterstitialAd();
                }
            }
            else {
                console.log("Interstitial AD not ready - Preparing...");
                _this.admobFree.interstitial.prepare().then(function (res) {
                    console.log("interstitial Ad Prepared", res);
                    if (show) {
                        _this.showInterstitialAd();
                    }
                }).catch(function (err) {
                    _this.addGracePoints();
                    console.log("Unable to prepare interstitial Ad", err);
                    console.log("Giving 1 free point showing toast try later no ADs");
                });
                _this.admobFree.on("admob.interstitial.events.LOAD_FAIL").subscribe(function (res) {
                    console.log("Interstitial AD failed to Load - new", res);
                    if (show) {
                        _this.addGracePoints();
                        console.log("Unable to prepare interstitial Ad", res);
                        console.log("Giving 1 free point showing toast try later no ADs");
                    }
                });
                _this.admobFree.on("admob.interstitial.events.LOAD").subscribe(function (res) {
                    console.log("Interstitial AD loaded - new ", res);
                    console.log("Interstitial show value Outside", show);
                    if (show) {
                        console.log("Interstitial show value ", show);
                        _this.showInterstitialAd();
                    }
                });
            }
        });
    };
    ApiDataProvider.prototype.addGracePoints = function () {
        var _this = this;
        this.showToast(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["t" /* NO_VIDEO_AD */], __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["H" /* TOP */]);
        this.fetchService(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["u" /* POINTS */]).then(function (points) {
            console.log("Fetch service old points before ", points);
            var newPoints = points;
            newPoints += __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["h" /* GRACE_POINTS */];
            _this.storeService(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["u" /* POINTS */], newPoints);
            console.log("Added Grace Points", newPoints);
        });
    };
    ApiDataProvider.prototype.showInterstitialAd = function () {
        var _this = this;
        console.log("Showing interstitial");
        this.admobFree.interstitial.isReady().then(function (res) {
            if (res) {
                _this.admobFree.interstitial.show().then(function (res) {
                    console.log("Interstitial Ad showing ", res);
                    _this.fetchService(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["u" /* POINTS */]).then(function (points) {
                        console.log("Fetch service old points before ", points);
                        var newPoints = points;
                        newPoints += __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["k" /* INTERSTITIAL_AD_REWARD */];
                        _this.storeService(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["u" /* POINTS */], newPoints);
                        console.log("Earned New points (interstitial Ads) ", newPoints);
                    }).catch(function (err) {
                        console.log("Error Fetching old points ", err);
                    });
                }).catch(function (err) {
                    console.log("Error showing interstitial Ads");
                    _this.addGracePoints();
                });
            }
            else {
                console.log("Interstitial Ad not ready, preparing and showing");
                _this.prepareInterstitialAd(true);
            }
        }).catch(function (err) {
            console.log("Exception thrown Ready ", err);
            _this.addGracePoints();
        });
    };
    ApiDataProvider.prototype.showVideoAd = function () {
        var _this = this;
        this.admobFree.rewardVideo.isReady().then(function (res) {
            if (res) {
                _this.admobFree.rewardVideo.show().then(function (res) {
                    console.log("Video Ad is Showing", res);
                    _this.admobFree.on("admob.rewardvideo.events.REWARD").subscribe(function (res) {
                        console.log("Reward Video value return ", res);
                        console.log(res.rewardAmount);
                        var refillPoints = res.rewardAmount;
                        _this.fetchService(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["u" /* POINTS */]).then(function (points) {
                            var newPoints = points;
                            newPoints += refillPoints;
                            _this.storeService(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["u" /* POINTS */], newPoints);
                            console.log("Earned New points", newPoints);
                        });
                        console.log("Successful view - reward", res);
                    });
                    _this.admobFree.on("admob.rewardvideo.events.CLOSE").subscribe(function (res) {
                        _this.prepareVideoAd();
                        console.log("AD closed", res);
                    });
                }).catch(function (err) {
                    console.log("Unable to show Video Ad", err);
                    _this.showInterstitialAd();
                });
            }
            else {
                console.log("Video Ad not ready - Showing Interstitial Ads");
                _this.showInterstitialAd();
            }
        }).catch(function (err) {
            console.log("Exception thrown - ready", err);
            _this.showInterstitialAd();
        });
    };
    ApiDataProvider.prototype.setApiUrl = function (apiUrl) {
        this.apiUrls = apiUrl;
    };
    ApiDataProvider.prototype.fetchApiUrl = function () {
        // console.log("GET - api urls");
        return this.http.get(this.coinAssistApis).toPromise();
    };
    ApiDataProvider.prototype.showToast = function (message, position, duration) {
        if (duration === void 0) { duration = 1500; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    ApiDataProvider.prototype.logAnalytics = function (pageName) {
        var _this = this;
        // console.log("Logging page: " + pageName);
        this.platform.ready().then(function () {
            _this.firebaseAnalytics.logEvent(pageName, null)
                .then(function (res) {
                // console.log("Analytics logging ", res);
            })
                .catch(function (error) { return console.error(error); });
        });
    };
    ApiDataProvider.prototype.instructionToast = function (page, duration) {
        var _this = this;
        this.fetchService(page).then(function (lock) {
            // console.log("instruction toast lock", page, lock);
            if (lock != true) {
                var toast = _this.toastCtrl.create({
                    message: 'Pull down to refresh',
                    position: 'bottom',
                    duration: duration,
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.onDidDismiss(function () {
                    _this.storeService(page, true);
                });
                toast.present();
            }
        });
    };
    ApiDataProvider.prototype.infoAlert = function () {
        var alert = this.alertCtrl.create({
            title: '',
            message: '',
            buttons: [
                {
                    text: 'Got it!',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    ApiDataProvider.prototype.getApiUrlStorage = function () {
        var _this = this;
        // console.log("GET - api url storage");
        return this.storage.ready().then(function () {
            return _this.storage.get(_this.apiUrlStore).then(function (res) {
                _this.apiUrls = res;
                return _this.apiUrls;
            });
        });
    };
    ApiDataProvider.prototype.getConstantApiUrl = function () {
        // console.log("GET - constant URL ");
        return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["a" /* API_URL */];
    };
    ApiDataProvider.prototype.storeService = function (key, value) {
        // console.log("value", value);
        this.storage.set(key, value).then(function (res) {
        }, function (err) {
            // console.log("Storage Error");
            console.log(err);
        });
    };
    ApiDataProvider.prototype.fetchService = function (key) {
        var _this = this;
        return this.storage.ready().then(function (res) {
            // console.log("Storage Ready response ", res);
            return _this.storage.get(key).catch(function (err) {
                console.log("Error fetching data from storage");
            });
        });
    };
    ApiDataProvider.prototype.storeApiUrl = function (fetchedApiUrl) {
        this.apiUrls = fetchedApiUrl;
        // console.log("STORE - store api url");
        this.storage.set(this.apiUrlStore, fetchedApiUrl).then(function (res) {
            // console.log("Stored Successfully");
            // console.log(res);
        }, function (err) {
            // console.log("Storage Error");
            console.log(err);
        });
    };
    ApiDataProvider.prototype.generateZebpayApis = function (fetchedApiUrl) {
        // console.log("passed for store", fetchedApiUrl);
        var zebpayCoinUrls = {};
        var coinList = fetchedApiUrl.exchange.Zebpay.coinList;
        // console.log(coinList);
        for (var coin in coinList) {
            // console.log(coin, "coin");
            // console.log(coinList[coin]);
            zebpayCoinUrls[coinList[coin]] = fetchedApiUrl.exchange.Zebpay.api + coinList[coin] + "/inr";
        }
        fetchedApiUrl.exchange.Zebpay.coinUrls = {};
        fetchedApiUrl.exchange.Zebpay.coinUrls = zebpayCoinUrls;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(fetchedApiUrl);
    };
    ApiDataProvider.prototype.getCurrentApis = function () {
        return this.storage.get(this.apiUrlStore);
    };
    // ************************************************************************
    ApiDataProvider.prototype.getKoinexData = function () {
        // console.log("GET - koinex data");
        // console.log(this.apiUrls.exchange.Koinex);
        // console.log(this.koinexData, "before");
        var _this = this;
        if (this.koinexTest) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.koinexData = __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["m" /* KOINEX_DATA */]);
        }
        else {
            if (this.koinexData.lock == false || this.koinexData.lock == undefined) {
                this.koinexData.lock = true;
                // console.log("koinex api urls", this.apiUrls);
                return this.http.get(this.apiUrls.exchange.Koinex.api).map(function (res) {
                    // console.log(res);
                    // console.log("FETCHED - koinex data", res);
                    _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["l" /* KOINEX */], res);
                    return res;
                }).catch(function (error) {
                    _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["l" /* KOINEX */]);
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.koinexData);
                });
            }
            else if (this.koinexData.lock == true) {
                // console.log("STATIC - koinex data", this.koinexData);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.koinexData);
            }
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
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["l" /* KOINEX */]: {
                this.koinexData.lock = true;
                // console.log("LOCK SET", this.koinexData);
                var releaseLockKoinex = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(15000);
                releaseLockKoinex.subscribe(function (res) {
                    _this.koinexData.lock = false;
                    // console.log("LOCK RELEASED", this.koinexData);
                });
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["J" /* ZEBPAY */]:
                {
                    this.zebpayData.lock = true;
                    // console.log("LOCK SET", this.zebpayData);
                    var releaseLockZebpay = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(15000);
                    releaseLockZebpay.subscribe(function (res) {
                        _this.zebpayData.lock = false;
                        // console.log("LOCK RELEASED", this.zebpayData);
                    });
                    break;
                }
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getZebpayData = function () {
        // console.log("GET - zebpay data", this.zebpayData);
        var _this = this;
        if (this.zebpayData.lock == false || this.zebpayData.lock == undefined) {
            this.zebpayData.lock = true;
            var coinRequests = new Array();
            for (var coinUrl in this.apiUrls.exchange.Zebpay.coinUrls) {
                coinRequests.push(this.http.get(this.apiUrls.exchange.Zebpay.coinUrls[coinUrl]));
            }
            // console.log("coinRequests", coinRequests);
            return Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__["forkJoin"])(coinRequests).map(function (res) {
                // console.log(res);
                // console.log("FETCHED - zebpay data", res);
                _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["J" /* ZEBPAY */], res);
                return res;
            }).catch(function (error) {
                _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["J" /* ZEBPAY */]);
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.zebpayData);
            });
        }
        else if (this.zebpayData.lock == true) {
            // console.log("STATIC - zebpay data", this.zebpayData);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.zebpayData);
        }
    };
    ApiDataProvider.prototype.getExchangeData = function (exchange, data) {
        if (data === void 0) { data = true; }
        switch (exchange) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["l" /* KOINEX */]:
                {
                    // console.log("switch case koinex");
                    if (data) {
                        return this.getKoinexData();
                    }
                    return this.getKoinexTemplate();
                }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["J" /* ZEBPAY */]:
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
        // console.log("find coin for symbol", coin);
        // console.log("coinsList", this.coins);
        return this.apiUrls.coins[coin.toUpperCase()].name;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.koinexProcessor = function (exchangeData, coinMarketCapData, coinDeskData) {
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
            for (var coin in coinList) {
                // var processedCoin: any = {};
                // console.log(coinList[coin], "coin value");
                var processedCoin = new __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__["a" /* CoinDetail */]();
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
                var diff = processedCoin.max.no - processedCoin.min.no;
                var average = diff / 2;
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
        }
    };
    ApiDataProvider.prototype.coinDetailFormatter = function (processedCoin) {
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
    };
    ApiDataProvider.prototype.plusMinusPercent = function (ObjectTarget, market, percent) {
        if (ObjectTarget === void 0) { ObjectTarget = undefined; }
        var marketPrice = +market;
        var percentage = {};
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
    };
    ApiDataProvider.prototype.rangeStepCalculator = function (min, max) {
        var diff = max - min;
        var step = diff / 10;
        // console.log("Steps ", step);
        return step;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoinGlobalStats = function (coinCode, coinMarketCapData, coinDeskData) {
        try {
            var coinGlobalStats = {};
            // console.log(coinCode, "symbol required");
            for (var coin in coinMarketCapData) {
                if (coinMarketCapData[coin].symbol == coinCode || coinMarketCapData[coin].symbol.toLowerCase() == coinCode) {
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
                    // console.log("Coin global stats", coinGlobalStats);
                    return coinGlobalStats;
                }
            }
        }
        catch (e) {
            console.log("Coin Global Stats Exception", e);
            return false;
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getPriceIndex = function (min, max, current) {
        var total = max - min;
        var diff = total / 3;
        var lowRegionHigh = min + diff;
        var mediumRegionHigh = (min + (2 * diff));
        if (current < lowRegionHigh && current >= min || current < min) {
            return "Low";
        }
        else if (current < mediumRegionHigh && current >= lowRegionHigh) {
            return "Medium";
        }
        else if (current <= max && current >= mediumRegionHigh || current > max) {
            return "High";
        }
    };
    ApiDataProvider.prototype.zebpayObjectCreator = function (exchangeData) {
        var zebpayData = {};
        for (var coin in exchangeData) {
            if (exchangeData[coin].virtualCurrency != undefined) {
                zebpayData[exchangeData[coin].virtualCurrency] = exchangeData[coin];
            }
        }
        return zebpayData;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.zebpayProcessor = function (exchangeData, coinMarketCapData, coinDeskData) {
        try {
            var processedZebpayData = [];
            var zebpayData = {};
            zebpayData = this.zebpayObjectCreator(exchangeData);
            // console.log("unprocessed", zebpayData);
            if (coinMarketCapData != undefined) {
                if (coinMarketCapData.length == 1) {
                    var singleCoin = {};
                    // console.log("Coin market cap data", coinMarketCapData);
                    singleCoin[coinMarketCapData[0].symbol] = zebpayData[coinMarketCapData[0].symbol.toLowerCase()];
                    zebpayData = singleCoin;
                    // console.log(zebpayData, "after");
                }
            }
            for (var coin in zebpayData) {
                var processedCoin = new __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__["a" /* CoinDetail */]();
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
    };
    ApiDataProvider.prototype.injectCoinImage = function (processedCoin) {
        // console.log("processedCoin inside", processedCoin);
        try {
            processedCoin.coinImage = this.apiUrls.coins[processedCoin.coinCode].imageUrl;
            return processedCoin;
        }
        catch (e) {
            console.log("Error injecting Coin Image", e);
        }
    };
    ApiDataProvider.prototype.injectGlobalStats = function (coinCode, processedCoin, coinMarketCapData, coinDeskData) {
        try {
            if (coinCode == "XRB") {
                coinCode = "NANO";
            }
            processedCoin.coinCode = coinCode;
            var coinGlobalStats = this.getCoinGlobalStats(coinCode, coinMarketCapData, coinDeskData);
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
    };
    ApiDataProvider.prototype.getPriceIndexZebpay = function (buy, sell) {
        var diff = buy - sell;
        if (diff < 10000) {
            return "Low";
        }
        else if (diff < 20000 && diff >= 10000) {
            return "Medium";
        }
        else if (diff >= 20000) {
            return "High";
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoindeskData = function () {
        try {
            return this.http.get(this.apiUrls.global.coindesk.api);
        }
        catch (e) {
            console.log("Error Getting CoinDesk data", e);
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getCoinMarketCapData = function (coinList) {
        var coinRequests = this.generateCoinMarketCapURL(coinList);
        var coinMarketCapData = new Array();
        return Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__["forkJoin"])(coinRequests).map(function (res) {
            // console.log(res);
            // console.log("FETCHED - coin market cap data", res);
            for (var index in res) {
                var inArray = res[index];
                coinMarketCapData.push(inArray[0]);
            }
            // console.log("coin market cap data final", coinMarketCapData);
            return coinMarketCapData;
        }).catch(function (error) {
            console.log("Error fetching coinmarket cap data", error);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(error);
        });
    };
    ApiDataProvider.prototype.generateCoinMarketCapURL = function (coinList) {
        try {
            var coinRequestUrls = new Array();
            var coinHolder = "COINNAME";
            // console.log("Coin list to fetch - coin Market cap", coinList);
            for (var coin in coinList) {
                // console.log("Coin CMC", coinList[coin]);
                var coinName = this.getCoinName(coinList[coin].toUpperCase()).replace(/\s/g, "-").toLowerCase();
                // console.log("coin name", coinName);
                var url = this.apiUrls.global.coinmarketcap.api.replace(coinHolder, coinName);
                // console.log("URL CMC", url);
                coinRequestUrls.push(this.http.get(url));
            }
            return coinRequestUrls;
        }
        catch (e) {
            console.log("Error Generating CoinMarketcap URL", e);
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.processExchangeData = function (exchange, exchangeData, coinMarketCapData, coinDeskData) {
        // console.log(coinMarketCapData, " inside process Exchange data - SWITCH");
        try {
            switch (exchange) {
                case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["l" /* KOINEX */]:
                    {
                        // console.log("switch case koinex");
                        return this.koinexProcessor(exchangeData, coinMarketCapData, coinDeskData);
                    }
                case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["J" /* ZEBPAY */]:
                    {
                        // console.log("switch case zebpay");
                        return this.zebpayProcessor(exchangeData, coinMarketCapData, coinDeskData);
                    }
            }
        }
        catch (e) {
            console.log("Processing Exchange Data Error", e);
        }
    };
    // TO BE TESTED
    ApiDataProvider.prototype.getMarketOverviewData = function (sel, coin, dataFlag) {
        if (dataFlag === void 0) { dataFlag = true; }
        try {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([this.getExchangeData(sel, dataFlag), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
        }
        catch (e) {
            console.log("Error Getting market overview", e);
        }
    };
    ApiDataProvider.prototype.setExchangeData = function (exchange, exchangeData) {
        switch (exchange) {
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["l" /* KOINEX */]:
                {
                    this.koinexData = exchangeData;
                    // console.log("SET - koinex exchange data", this.koinexData);
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["J" /* ZEBPAY */]:
                {
                    // console.log("SET - zebpay exchange data");
                    this.zebpayData = exchangeData;
                    break;
                }
        }
    };
    ApiDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__["a" /* AdMobFree */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__["a" /* Network */]])
    ], ApiDataProvider);
    return ApiDataProvider;
}());

//# sourceMappingURL=api-data.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return KOINEX_DATA; });
/* unused harmony export COIN_LIST_TEMPLATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return XRP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ETH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BCH; });
/* unused harmony export OMG */
/* unused harmony export REQ */
/* unused harmony export ZRX */
/* unused harmony export GNT */
/* unused harmony export BAT */
/* unused harmony export AE */
/* unused harmony export TRX */
/* unused harmony export MIOTA */
/* unused harmony export EOS */
/* unused harmony export KNC */
/* unused harmony export NANO */
/* unused harmony export XLM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return PRICE_REFRESH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return PRICE_REFRESH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return REWARD_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return TOP; });
/* unused harmony export BOTTOM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return INSUF_POINTS_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return INSUF_POINTS_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LAST_POINT_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LAST_POINT_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return POINTS_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return POINTS_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return NO_VIDEO_AD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return ZEBPAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return KOINEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DEFAULT_POINT; });
/* unused harmony export LIGHT */
/* unused harmony export DARK */
/* unused harmony export INR */
/* unused harmony export USD */
/* unused harmony export ALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LIKE_DIALOG_HEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LIKE_DIALOG_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RATE_DIALOG_HEAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RATE_DIALOG_DESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return RATE_USES_UNTIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RATE_REWARD_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEFAULT_USES_UNTIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RATE_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DONT_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LATER_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RATE_REWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GRACE_POINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return INTERSTITIAL_AD_REWARD; });
//Payloads
var API_URL = { "exchange": { "Koinex": { "api": "https://koinex.in/api/ticker", "fees": { "buy": "0.0025", "sell": "0.002" }, "referral": "https://koinex.in/?ref=a2fae6", "coinList": ["btc", "ltc", "xrp", "bch", "eth", "omg", "req", "zrx", "gnt", "bat", "ae", "trx", "xlm", "neo", "gas", "aion", "ncash", "xrb", "eos", "ont", "zil", "iost", "zco", "poly", "elf"] }, "Zebpay": { "api": "https://www.zebapi.com/api/v1/market/ticker-new/", "fees": { "buy": "0.0059", "sell": "0.0059" }, "referral": "http://link.zebpay.com/ref/REF97131420", "coinList": ["btc", "ltc", "xrp", "bch", "eth", "eos", "omg", "trx", "gnt", "zrx", "rep", "bat", "ven", "ae"] } }, "global": { "coindesk": { "api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json" }, "coinmarketcap": { "api": "https://api.coinmarketcap.com/v1/ticker/COINNAME/?convert=INR" } }, "coins": { "BTC": { "name": "Bitcoin", "imageUrl": "https://i.imgur.com/PRysm7E.png" }, "XRP": { "name": "Ripple", "imageUrl": "https://i.imgur.com/jzCyWct.png" }, "ETH": { "name": "Ethereum", "imageUrl": "https://i.imgur.com/gmGSzVJ.png" }, "LTC": { "name": "Litecoin", "imageUrl": "https://i.imgur.com/Ov9h1ZT.png" }, "BCH": { "name": "Bitcoin Cash", "imageUrl": "https://i.imgur.com/gUtu5Eo.png" }, "OMG": { "name": "OmiseGo", "imageUrl": "https://i.imgur.com/p0Phr0Y.png" }, "REQ": { "name": "Request Network", "imageUrl": "https://i.imgur.com/6909idR.png" }, "ZRX": { "name": "0x", "imageUrl": "https://i.imgur.com/ESIyWUE.png" }, "GNT": { "name": "Golem", "imageUrl": "https://i.imgur.com/5ryFDz5.png" }, "BAT": { "name": "Basic Attention Token", "imageUrl": "https://i.imgur.com/c5ADvNs.png" }, "AE": { "name": "Aeternity", "imageUrl": "https://i.imgur.com/Hn4v2q1.png" }, "TRX": { "name": "Tron", "imageUrl": "https://i.imgur.com/A39UF1i.png" }, "MIOTA": { "name": "IOTA", "imageUrl": "https://i.imgur.com/u5slvez.png" }, "EOS": { "name": "Eos", "imageUrl": "https://i.imgur.com/8MPSsON.png" }, "KNC": { "name": "Kyber Network", "imageUrl": "https://i.imgur.com/hn2onbS.png" }, "XRB": { "name": "Nano", "imageUrl": "https://i.imgur.com/tp5wt6g.png" }, "XLM": { "name": "Stellar", "imageUrl": "https://i.imgur.com/7sbDVmq.png" }, "GAS": { "name": "Gas", "imageUrl": "https://i.imgur.com/KuKbCfk.png" }, "NEO": { "name": "Neo", "imageUrl": "https://i.imgur.com/KuKbCfk.png" }, "AION": { "name": "Aion", "imageUrl": "https://i.imgur.com/7BPKN5h.png" }, "NCASH": { "name": "Nucleus Vision", "imageUrl": "https://i.imgur.com/BNMkOVY.jpg" }, "ONT": { "name": "Ontology", "imageUrl": "https://i.imgur.com/sAmdk8w.png" }, "ZIL": { "name": "Zilliqa", "imageUrl": "https://i.imgur.com/wMERZVq.png" }, "IOST": { "name": "IosToken", "imageUrl": "https://i.imgur.com/39N3aWl.png" }, "ZCO": { "name": "Zebi", "imageUrl": "https://i.imgur.com/fRgfUci.png" }, "POLY": { "name": "Polymath network", "imageUrl": "https://i.imgur.com/65T4QnL.png" }, "ELF": { "name": "Aelf", "imageUrl": "https://i.imgur.com/1ZLtWEM.png" }, "REP": { "name": "augur", "imageUrl": "https://i.imgur.com/l5OcnMf.png" }, "VEN": { "name": "vechain", "imageUrl": "https://i.imgur.com/6Iq92BR.png" } }, "version": "1.0.0" };
var KOINEX_DATA = { "prices": { "BTC": "660000.0", "ETH": "49550.0", "XRP": "55.32", "BCH": "75700.0", "LTC": "12845.99", "MIOTA": 91.07, "TRX": "2.63", "OMG": "976.0", "AE": "126.5", "ZRX": "46.12", "BAT": "18.9", "GNT": "21.53", "REQ": "14.74", "XLM": "20.68" }, "stats": { "ETH": { "last_traded_price": 49550.0, "lowest_ask": "49800.0", "highest_bid": "49550.0", "min_24hrs": "48800.0", "max_24hrs": "50300.0", "vol_24hrs": 310 }, "BTC": { "last_traded_price": 660000.0, "lowest_ask": "660000.0", "highest_bid": "658050.0", "min_24hrs": "620000.0", "max_24hrs": "660000.0", "vol_24hrs": 88 }, "LTC": { "last_traded_price": 12845.99, "lowest_ask": "12849.0", "highest_bid": "12820.0", "min_24hrs": "12650.0", "max_24hrs": "13150.0", "vol_24hrs": 1208 }, "XRP": { "last_traded_price": 55.32, "lowest_ask": "55.4", "highest_bid": "55.32", "min_24hrs": "54.56", "max_24hrs": "56.61", "vol_24hrs": 815919 }, "BCH": { "last_traded_price": 75700.0, "lowest_ask": "75800.0", "highest_bid": "75600.0", "min_24hrs": "72002.0", "max_24hrs": "77500.0", "vol_24hrs": 118 }, "OMG": { "last_traded_price": 976.0, "lowest_ask": "984.99", "highest_bid": "976.0", "min_24hrs": "960.0", "max_24hrs": "1010.0", "vol_24hrs": 5790 }, "REQ": { "last_traded_price": 14.74, "lowest_ask": "14.74", "highest_bid": "14.72", "min_24hrs": "14.26", "max_24hrs": "15.06", "vol_24hrs": 443076 }, "ZRX": { "last_traded_price": 46.12, "lowest_ask": "46.3", "highest_bid": "46.2", "min_24hrs": "44.2", "max_24hrs": "47.98", "vol_24hrs": 67665 }, "GNT": { "last_traded_price": 21.53, "lowest_ask": "21.98", "highest_bid": "21.58", "min_24hrs": "21.03", "max_24hrs": "22.24", "vol_24hrs": 81813 }, "BAT": { "last_traded_price": 18.9, "lowest_ask": "19.0", "highest_bid": "18.9", "min_24hrs": "18.6", "max_24hrs": "19.34", "vol_24hrs": 64093 }, "AE": { "last_traded_price": 126.5, "lowest_ask": "126.5", "highest_bid": "125.03", "min_24hrs": "125.0", "max_24hrs": "131.0", "vol_24hrs": 2566 }, "TRX": { "last_traded_price": 2.63, "lowest_ask": "2.63", "highest_bid": "2.62", "min_24hrs": "2.52", "max_24hrs": "2.69", "vol_24hrs": 9286780 }, "XLM": { "last_traded_price": 20.68, "lowest_ask": "20.69", "highest_bid": "20.6", "min_24hrs": "20.11", "max_24hrs": "20.68", "vol_24hrs": 242816 } } };
var COIN_LIST_TEMPLATE = "{\r\n  \"coin\": \"bitcoin\",\r\n  \"market\": \"5000\",\r\n  \"buy\": \"6000\",\r\n  \"sell\": \"4000\",\r\n  \"price_index\": \"high\",\r\n  \"change\": \"7\"\r\n}";
//Coin names
var BTC = "Bitcoin";
var XRP = "Ripple";
var ETH = "Ethereum";
var LTC = "Litecoin";
var BCH = "Bitcoin Cash";
var OMG = "OmiseGo";
var REQ = "Request Network";
var ZRX = "0x";
var GNT = "Golem";
var BAT = "Basic Attention Token";
var AE = "Aeternity";
var TRX = "Tron";
var MIOTA = "IOTA";
var EOS = "Eos";
var KNC = "Kyber Network";
var NANO = "Nano";
var XLM = "Stellar";
//Messages
var PRICE_REFRESH = "Latest Price Refreshed";
var PRICE_REFRESH_FAIL = "Failed to Refresh - No Network Connection";
var REWARD_POINTS = "Reward points Added!";
var TOP = "top";
var BOTTOM = "bottom";
//Quantity Page
var INSUF_POINTS_MSG = "Insufficient Use Points";
var INSUF_POINTS_DESC = "Get Use Points by watching Video Ad";
var LAST_POINT_MSG = "1 Use Point remaining!";
var LAST_POINT_DESC = "Watch Video Ad to refill Use points";
var POINTS_MSG = "Info:";
var POINTS_DESC = "You can refill the 'Uses left' by clicking 'Refill Use' and  watch a Video Ad";
var NO_VIDEO_AD = "Try Later - Video Ad not available";
//Exchanges
var ZEBPAY = "Zebpay";
var KOINEX = "Koinex";
var POINTS = "points";
var DEFAULT_POINT = 15;
//Generic
var LIGHT = "light";
var DARK = "dark";
var INR = "INR";
var USD = "USD";
var ALL = "ALL";
//Rating Dialog
var LIKE_DIALOG_HEAD = "Like?";
var LIKE_DIALOG_DESC = "Do you Like the App?";
var RATE_DIALOG_HEAD = "Rate & Get 5 Refill Points!";
var RATE_DIALOG_DESC = "Give us a 5 start rating if you like the app! :)";
var RATE_USES_UNTIL = "rateUsesLeft";
var RATE_REWARD_MSG = "5 Reward Points added for Rating!";
var DEFAULT_USES_UNTIL = 15;
var RATE_LINK = "market://details?id=com.extendsapk.coinassist";
var DONT_LIKE = 10;
var LATER_LIKE = 5;
var RATE_REWARD = 5;
var GRACE_POINTS = 1;
var RATED = "rated";
var INTERSTITIAL_AD_REWARD = 2;
//# sourceMappingURL=api-constants.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__ = __webpack_require__(35);
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
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["c" /* BTC */]:
                {
                    return trimmedQty = +quantity.toFixed(4);
                }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["g" /* ETH */]:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["I" /* XRP */]:
                {
                    return trimmedQty = +quantity.toFixed(0);
                }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["s" /* LTC */]:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["b" /* BCH */]:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            default:
                {
                    return trimmedQty = +quantity.toFixed(2);
                }
        }
    };
    Utilities.prototype.trimToDecimal = function (value, decimal) {
        // console.log(value, "decimal value", decimal);
        var numericValue = +value;
        var finalValue = +numericValue.toFixed(decimal);
        // console.log(finalValue, "final value");
        return finalValue;
        // return +numericValue.toFixed(decimal);
    };
    Utilities.prototype.currencyFormatter = function (number, locale, currency) {
        if (locale === void 0) { locale = 'hi-IN'; }
        if (currency === void 0) { currency = 'INR'; }
        number = +number;
        if (isNaN(number)) {
            number = 0;
        }
        return number.toLocaleString(locale, {
            style: 'currency',
            currency: currency
        });
    };
    Utilities.prototype.numberFormatter = function (number) {
        number = +number;
        if (isNaN(number)) {
            number = 0;
        }
        return number.toLocaleString('hi-IN');
    };
    Utilities = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Utilities);
    return Utilities;
}());

//# sourceMappingURL=utilities.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map