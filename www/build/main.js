webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return KOINEX_DATA; });
/* unused harmony export COIN_LIST_TEMPLATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return XRP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ETH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LTC; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ZEBPAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return KOINEX; });
/* unused harmony export LIGHT */
/* unused harmony export DARK */
/* unused harmony export INR */
/* unused harmony export USD */
/* unused harmony export ALL */
//Payloads
var API_URL = { "exchange": { "koinex": { "api": "https://koinex.in/api/ticker", "fees": { "buy": "0.0025", "sell": "0.002" }, "referral": "https://koinex.in/?ref=a2fae6", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] }, "zebpay": { "api": "https://www.zebapi.com/api/v1/market/ticker-new/", "fees": { "buy": "0.0059", "sell": "0.0059" }, "referral": "http://link.zebpay.com/ref/REF97131420", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] } }, "global": { "coindesk": { "api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json" }, "coinmarketcap": { "api": "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=", "coin_limit": "8", "coin": { "BTC": "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=INR", "ETH": "https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=INR", "XPR": "https://api.coinmarketcap.com/v1/ticker/ripple/?convert=INR", "BCH": "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=INR", "LTC": "https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=INR" } } }, "version": "1.0.0" };
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
//Exchanges
var ZEBPAY = "zebpay";
var KOINEX = "koinex";
//Generic
var LIGHT = "light";
var DARK = "dark";
var INR = "INR";
var USD = "USD";
var ALL = "ALL";
//# sourceMappingURL=api-constants.js.map

/***/ }),

/***/ 110:
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coin_detail__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_value_detail__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_utilities_utilities__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__ = __webpack_require__(109);
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
        this.amount = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.actualAmount = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.buyerFees = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.amountFlag = false;
        this.quantity = new __WEBPACK_IMPORTED_MODULE_5__models_value_detail__["a" /* ValueDetail */]();
        this.percent = 0.05;
        this.pageName = "quantity-calc page";
        // console.log("1 qty constructor called");
        this.selExchange = navParam.get("exchange");
        this.selCoin.coinName = navParam.get("coin");
        // console.log(this.selCoin, " sel coin qty");
        // console.log(this.selExchange, " sel Exchange qty");
        this.apis = this.api.apiUrls.exchange;
        this.exchanges = Object.keys(this.apis);
        this.points = this.api.fetchService("points");
        // console.log(this.apis, "api list fetched back");
    }
    QuantityCalcPage.prototype.ngOnInit = function () {
        // console.log("2 ng oninit called");
        if (this.selExchange == undefined) {
            this.selExchange = __WEBPACK_IMPORTED_MODULE_7__constants_api_constants__["e" /* KOINEX */];
        }
        if (this.selCoin.coinName == undefined) {
            this.selCoin.coinName = this.api.apiUrls.coins.BTC;
        }
        this.populateView();
        this.api.logAnalytics(this.pageName);
        this.api.instructionToast(this.pageName, 2000);
        this.presentGetPoints();
    };
    QuantityCalcPage.prototype.presentGetPoints = function () {
        var alert = this.alertCtrl.create({
            title: 'Insufficient Points to use',
            message: 'Get 5 points by viewing Video Ad to use',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Watch Ad',
                    handler: function () {
                        console.log('Watch Ad clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    QuantityCalcPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // console.log(this.selCoin.coinName, "sel Coin Name - Refresh");
        this.populateView();
        setTimeout(function () {
            _this.api.priceUpdateToast();
            refresher.complete();
        }, 800);
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
        this.selCoin.coinName = this.api.apiUrls.coins.BTC;
        this.populateView();
    };
    QuantityCalcPage.prototype.populateCoins = function (exchange) {
        var _this = this;
        // console.log("4 populate coins", exchange);
        this.api.getExchangeData(exchange, true).subscribe(function (res) {
            // console.log("Exchange data", res);
            _this.coins = _this.api.processExchangeData(exchange, res, undefined, undefined);
            // console.log(this.coins, "coins in qty");
            if (_this.selCoin.coinName == undefined) {
                _this.selCoin.coinName = _this.api.apiUrls.coins.BTC;
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
        this.api.showVideoAd();
    };
    QuantityCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quantity-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Quantity / Amount Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <div>\n\n    <ion-card-header class="weight500 size1rem8">\n\n      <ion-icon name="add"></ion-icon>\n\n      {{remainingUseCount}} - remaining points\n\n      <button class="padding2rem" (click)="showAd()" ion-button color="light">Get Points</button>\n\n    </ion-card-header>\n\n\n\n  </div>\n\n  <ion-card-header class="weight500 size1rem8">\n\n    Enter Coin Detail\n\n  </ion-card-header>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Exchange</ion-label>\n\n      <ion-select [(ngModel)]="selExchange" *ngIf="selExchange" interface="popover" (ngModelChange)="exchangeChanged(selExchange)">\n\n        <ion-option *ngFor=" let exchange of exchanges ">{{exchange}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Crypto-Coin</ion-label>\n\n      <ion-select [(ngModel)]="selCoin.coinName" interface="popover" (ngModelChange)="populateView()">\n\n        <ion-option *ngFor=" let coin of coins" [value]="coin.coinName">{{coin.coinName}} ({{coin.coinCode}})</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Coin Rate</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 3000" [(ngModel)]="selCoin.range.rate.no" clearInput="true" (ngModelChange)="coinRateChanged($event)"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      &#177;20% : ({{selCoin.range.minusPercent.formatted}} - {{selCoin.range.plusPercent.formatted}})\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-range [min]="selCoin.range.minusPercent.no" [max]="selCoin.range.plusPercent.no" step="selCoin.step" snaps="true" [(ngModel)]="rangeValue"\n\n        (ionChange)="rangeChanged($event)">\n\n        <ion-label range-left>{{selCoin.range.minusPercent.formatted}}</ion-label>\n\n        <ion-label range-right>{{selCoin.range.plusPercent.formatted}}</ion-label>\n\n      </ion-range>\n\n    </ion-item> -->\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Amount &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 1000" clearInput="true" [(ngModel)]="amount.no" max="9" (ngModelChange)="amountChanged($event)"></ion-input>\n\n    </ion-item>\n\n    <!-- <div *ngIf="amountFlag">*Amount exceeding Limit</div> -->\n\n    <ion-item>\n\n      <ion-label fixed>Quantity</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 0.0001" clearInput="true" [(ngModel)]="quantity.no" (ngModelChange)="calcAmount($event)"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-card-header class="weight500 size1rem8">\n\n    Summary\n\n  </ion-card-header>\n\n  <ion-card>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 class="center">\n\n          <ion-row>\n\n            <ion-col col-12 class="weight500 size2rem8">\n\n              {{quantity.formatted}}\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              {{selCoin.coinName}}(s) ({{selCoin.coinCode}})\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <img class="center" src="assets/imgs/{{selCoin.coinCode}}.png">\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Coin Rate:\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          {{selCoin.range.rate.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Amount:\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          {{actualAmount.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Buy Fees:({{buyerFeesPercent}}%)\n\n        </ion-col>\n\n        <ion-col col-6 class="redColor">\n\n          {{buyerFees.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Total Amount:\n\n        </ion-col>\n\n        <ion-col col-6 class="weight500">\n\n          {{amount.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\quantity-calc\quantity-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coin_detail_coin_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeWhile__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_IntervalObservable__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_IntervalObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_IntervalObservable__);
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
        // console.log("Constructor - Home page");
        this.navCtrl = navCtrl;
        this.api = api;
        this.storage = storage;
        this.navParam = navParam;
        this.pageName = "home page";
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
            var refresher = __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_IntervalObservable__["IntervalObservable"].create(20000);
            refresher.takeWhile(function () { return _this.alive; }) // only fires when component is alive
                .subscribe(function () {
                _this.populateView();
            });
        });
        this.api.logAnalytics(this.pageName);
        this.api.instructionToast(this.pageName, 0);
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
        var _this = this;
        this.populateView();
        setTimeout(function () {
            _this.api.priceUpdateToast();
            refresher.complete();
        }, 800);
    };
    HomePage.prototype.populateView = function () {
        // console.log(this.apiUrls.exchange);
        // console.log("Populating Home page");
        if (this.selExchange == undefined && this.apiUrls != undefined) {
            this.exchanges = Object.keys(this.apiUrls.exchange);
            this.selExchange = this.exchanges[0];
        }
        this.selectedExchange(this.selExchange);
    };
    HomePage.prototype.selectedExchange = function (sel) {
        var _this = this;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__coin_detail_coin_detail__["a" /* CoinDetailPage */], { "coin": coin, "exchange": this.selExchange });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button type="button" ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Market View</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content padding pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-item>\n\n    <ion-label>Exchange:</ion-label>\n\n    <ion-select [(ngModel)]="selExchange" interface="popover" (ngModelChange)="selectedExchange(selExchange)">\n\n      <ion-option *ngFor="let exchange of exchanges">{{exchange}}</ion-option>\n\n    </ion-select>\n\n\n\n  </ion-item>\n\n\n\n  <ion-list>\n\n    <!-- <ion-card>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>Cryptos</ion-col>\n\n          <ion-col col-4>\n\n            Market Price\n\n          </ion-col>\n\n          <ion-col col-2>Change\n\n            <br>%</ion-col>\n\n          <ion-col col-2>Price Index</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card> -->\n\n    <ion-card *ngFor="let coin of coins" (click)="navCoinDetailPage(coin)">\n\n      <ion-item detail-push>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-3>\n\n              <ion-thumbnail item-start>\n\n                <img src="{{coin.coinImage}}">\n\n                <div class="coinName weight500">{{coin.coinName}}\n\n                  <br> ({{coin.coinCode}})\n\n                </div>\n\n              </ion-thumbnail>\n\n            </ion-col>\n\n            <ion-col col-8>\n\n              <ion-row>\n\n                <ion-col col-8>\n\n                  <ion-row class="price">\n\n                    {{coin.market.formatted}}\n\n                  </ion-row>\n\n                </ion-col>\n\n                <ion-col col-4 class="boldTextValue">\n\n                  <div *ngIf="coin.change.day >= 0" class="greenColor weight500">\n\n                    <span class="size1rem7">&#9650;</span>+{{coin.change.day}}%\n\n                  </div>\n\n                  <div *ngIf="coin.change.day < 0" class="redColor weight500">\n\n                    <span class="size1rem7">&#9660;</span>{{coin.change.day}}%\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-6 *ngIf="coin.volatility">\n\n                  <span class="riseFallSymbol weight500 size1rem9">&#8645;</span>\n\n                  <span class="weight500"> {{coin.volatility}}% </span>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                  Price:\n\n                  <span [ngClass]="coin.price_index">{{coin.price_index}}</span>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row *ngIf="coin.min.no">\n\n                <ion-col col-12>\n\n                  <span>Low: </span>\n\n                  <span class="redColor weight500">{{coin.min.formatted}}</span>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row *ngIf="coin.max.no">\n\n                <ion-col col-12>\n\n                  <span>High: </span>\n\n                  <span class="greenColor weight500">{{coin.max.formatted}}</span>\n\n                </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                <ion-col col-12>\n\n                  <div *ngIf="coin.globalDiff.percent >= 0">\n\n                    Global.Diff(%):\n\n                    <span class="greenColor weight500">{{coin.globalDiff.percent}}%</span>\n\n                  </div>\n\n                  <div *ngIf="coin.globalDiff.percent < 0">\n\n                    Global.Diff(%):\n\n                    <span class="redColor weight500">{{coin.globalDiff.percent}}%</span>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-col>\n\n            <ion-col col-1 class="vertical-align-content">\n\n              <span class="weight500 nextButton">></span>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n      </ion-item>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_data_api_data__["a" /* ApiDataProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetail; });
/* unused harmony export GlobalDiff */
/* unused harmony export Change */
/* unused harmony export Global */
/* unused harmony export RangeValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_detail__ = __webpack_require__(110);

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

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quantity_calc_quantity_calc__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_IntervalObservable__ = __webpack_require__(214);
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
    function CoinDetailPage(navCtrl, navParam, api) {
        this.navCtrl = navCtrl;
        this.navParam = navParam;
        this.api = api;
        this.pageName = "coin-detail page";
        var coin = this.navParam.get("coin");
        this.exchange = this.navParam.get("exchange");
        // console.log(coin);
        this.alive = true;
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
        this.api.instructionToast(this.pageName, 1500);
        this.api.logAnalytics(this.pageName);
    };
    CoinDetailPage.prototype.ionViewDidLeave = function () {
        this.alive = false;
        // console.log("Detail  page - left", this.alive);
    };
    CoinDetailPage.prototype.ionViewWillEnter = function () {
        this.alive = true;
        this.populateView();
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
        var _this = this;
        this.populateView();
        setTimeout(function () {
            _this.api.priceUpdateToast();
            refresher.complete();
        }, 800);
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
            selector: 'page-coin-detail',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Coin Detail</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="size1rem7 weight500">\n\n      <span class="greyColor size1rem7">Exchange -</span>\n\n      {{exchange}}\n\n    </ion-card-header>\n\n    <hr class="hrBottomMargin">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n\n\n          <img src="{{coinDetail.coinImage}}">\n\n\n\n        </ion-col>\n\n        <ion-col col-7 class="vertical-align-content">\n\n\n\n          <div class=" weight500 size2rem">{{coinDetail.coinName}}\n\n            <br>({{coinDetail.coinCode}})</div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-8 class="priceDetail center">\n\n          {{coinDetail.market.formatted}}\n\n        </ion-col>\n\n        <ion-col col-4 class="boldTextValue left size1rem6 center" *ngIf="coinDetail.change">\n\n          <div *ngIf="coinDetail.change.day >= 0" class="greenColor weight500">\n\n            <span class="size1rem7">&#9650;</span>+{{coinDetail.change.day}}%\n\n          </div>\n\n          <div *ngIf="coinDetail.change.day < 0" class="redColor weight500">\n\n            <span class="size1rem7">&#9660;</span>{{coinDetail.change.day}}%\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="marginBotton0rem5">\n\n        <ion-col col-6 class="center">Buy:\n\n          <span class="boldTextValue price">{{coinDetail.buy.formatted}}</span>\n\n        </ion-col>\n\n        <ion-col col-6 class="center">Sell:\n\n          <span class="boldTextValue price">{{coinDetail.sell.formatted}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row class="marginBottom0">\n\n        <hr>\n\n        <ion-col col-4 class="center marginBottom0 padding1">\n\n          (1h):\n\n        </ion-col>\n\n        <ion-col col-4 class="center marginBottom0 padding1">\n\n          (24h):\n\n        </ion-col>\n\n        <ion-col col-4 class="center marginBottom0 padding1">\n\n          (1w):\n\n        </ion-col>\n\n        <hr>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-4 class="center padding0" *ngIf="coinDetail.change">\n\n          <span class="boldTextValue">\n\n            <span *ngIf="coinDetail.change.hour >= 0" class="greenColor weight500">\n\n              <span class="size1rem7">&#9650;</span>+{{coinDetail.change.hour}}%\n\n            </span>\n\n            <span *ngIf="coinDetail.change.hour < 0" class="redColor weight500">\n\n              <span class="size1rem7">&#9660;</span>{{coinDetail.change.hour}}%\n\n            </span>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col col-4 class="center padding0 marginBotton0rem5" *ngIf="coinDetail.change">\n\n          <span class="boldTextValue">\n\n            <span *ngIf="coinDetail.change.day >= 0" class="greenColor weight500">\n\n              <span class="size1rem7">&#9650;</span>+{{coinDetail.change.day}}%\n\n            </span>\n\n            <span *ngIf="coinDetail.change.day < 0" class="redColor weight500">\n\n              <span class="size1rem7">&#9660;</span>{{coinDetail.change.day}}%\n\n            </span>\n\n          </span>\n\n        </ion-col>\n\n        <ion-col col-4 class="center padding0" *ngIf="coinDetail.change">\n\n          <span class="boldTextValue">\n\n            <span *ngIf="coinDetail.change.week >= 0" class="greenColor weight500">\n\n              <span class="size1rem7">&#9650;</span>+{{coinDetail.change.week}}%\n\n            </span>\n\n            <span *ngIf="coinDetail.change.week < 0" class="redColor weight500">\n\n              <span class="size1rem7">&#9660;</span>{{coinDetail.change.week}}%\n\n            </span>\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row *ngIf="coinDetail.volatility">\n\n        <ion-col col-6 class="center paddingBottom0">\n\n          <span>Low: </span>\n\n          <span class="redColor weight500">{{coinDetail.min.formatted}}</span>\n\n        </ion-col>\n\n        <ion-col col-6 class="center">\n\n          Price Index:\n\n          <span [ngClass]="coinDetail.price_index">{{coinDetail.price_index}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row *ngIf="coinDetail.volatility">\n\n        <ion-col col-6 class="center paddingBottom0">\n\n          <span>High: </span>\n\n          <span class="greenColor weight500">{{coinDetail.max.formatted}}</span>\n\n        </ion-col>\n\n        <ion-col col-6 class="center">\n\n          Volatility:\n\n          <span class="riseFallSymbol weight500 size1rem9"> &#8645;</span>\n\n          <span class="weight500"> {{coinDetail.volatility}}% </span>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </ion-grid>\n\n    <hr>\n\n    <ion-grid>\n\n      <ion-card-header class="size1rem7 greyColor padding1rem">Global price -\n\n      </ion-card-header>\n\n      <ion-row>\n\n        <ion-col col-6 class="right">\n\n          <span class="price">{{coinDetail.global.INR.formatted}} </span>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 class="left">\n\n          <span class="price">({{coinDetail.global.USD.formatted}})</span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <br>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Global Diff(%):\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div *ngIf="coinDetail.globalDiff.percent >= 0">\n\n            <span class="greenColor weight500">{{coinDetail.globalDiff.percent}}%</span>\n\n          </div>\n\n          <div *ngIf="coinDetail.globalDiff.percent < 0">\n\n            <span class="redColor weight500">{{coinDetail.globalDiff.percent}}%</span>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          Global Price Diff:\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <div *ngIf="coinDetail.globalDiff.val.no >= 0">\n\n            <span class="greenColor weight500">{{coinDetail.globalDiff.val.formatted}}</span>\n\n          </div>\n\n          <div *ngIf="coinDetail.globalDiff.val.no < 0">\n\n            <span class="redColor weight500">{{coinDetail.globalDiff.val.formatted}}</span>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button (click)="gotoCalcQuantityPage()" ion-button small class="boldTextValue center width100" color="dark"> Calculate Quantity</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button (click)="openReferralLink()" ion-button small class="boldTextValue center width100" color="dark">Buy / Sell</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<!-- Rage for setting price alert -->\n\n\n\n<!-- <ion-item>\n\n        <h2> From : {{rangeRegion.lower}}</h2>\n\n        <h2> To: {{rangeRegion.upper}}</h2>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-range dualKnobs="true" pin="true" snaps="true" [step]="coinDetail.step" (ionChange)="change()" steps [(ngModel)]="rangeRegion"\n\n          [min]="coinDetail.minus20.no" [max]="coinDetail.plus20.no">\n\n          <ion-label range-left>{{coinDetail.minus20.formatted}}</ion-label>\n\n          <ion-label range-right>{{coinDetail.plus20.formatted}}</ion-label>\n\n        </ion-range>\n\n      </ion-item> -->\n\n\n\n<!-- Alert Button -->\n\n\n\n<!-- <ion-item>\n\n        <button ion-button large>Set Alert</button>\n\n\n\n      </ion-item> -->'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\coin-detail\coin-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], CoinDetailPage);
    return CoinDetailPage;
}());

//# sourceMappingURL=coin-detail.js.map

/***/ }),

/***/ 215:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], RemindersPage);
    return RemindersPage;
}());

//# sourceMappingURL=reminders.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_profit_calc__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_data_api_data__ = __webpack_require__(33);
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
    function ProfitCalcPage(navCtrl, utilities, formBuilder, api) {
        this.navCtrl = navCtrl;
        this.utilities = utilities;
        this.formBuilder = formBuilder;
        this.api = api;
        this.profitCalc = new __WEBPACK_IMPORTED_MODULE_4__models_profit_calc__["a" /* ProfitCalc */]();
        this.pageName = "profit-calc page";
        this.profitCalcForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            description: [''],
        });
    }
    ProfitCalcPage.prototype.ngOnInit = function () {
        this.api.logAnalytics(this.pageName);
    };
    ProfitCalcPage.prototype.checkRequiredFields = function () {
        // console.log("Check Required fields", this.quantity.no.no, this.amount);
        // console.log("Quantity" + this.profitCalc.quantity.no);
        if (this.profitCalc.quantity.no != 0) {
            // console.log("inside quantity");
            this.profitCalc.quantity.no = this.utilities.trimToDecimal(+this.profitCalc.quantity.no, 4);
            this.calcAmount();
            if (this.checkMandatoryFields()) {
                // console.log("Manadatory passed");
                this.calcProfit();
            }
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
    ProfitCalcPage.prototype.updateSellPrice = function () {
        if (this.profitCalc.profitLoss.no != 0) {
            this.profitCalc.profitLoss.no = this.utilities.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
            this.profitCalc.toValue.no = (this.profitCalc.profitLoss.no * this.profitCalc.fromValue.no + this.profitCalc.fromValue.no * this.profitCalc.fromValue.no) / this.profitCalc.amount.no;
            this.profitCalc.toValue.no = this.utilities.trimToDecimal(+this.profitCalc.toValue.no, 2);
            // console.log("Sell Value" + this.toValue.no.no);
            // console.log("before", this.profitLoss.no.no);
            this.calcFinalvalue();
            this.profitCalc.profitLoss.no = this.utilities.trimToDecimal(+this.profitCalc.profitLoss.no, 2);
            // console.log("after", this.profitLoss.no.no);
        }
        this.formatDataValues();
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
            selector: 'page-profit-calc',template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profit / Loss Calculator</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card-header class="weight500 size1rem8">\n\n    Enter Buy/Sell Detail:\n\n  </ion-card-header>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label fixed>Quantity</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 0.0123" [(ngModel)]="profitCalc.quantity.no" clearInput="true" (ngModelChange)="checkRequiredFields()"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Buy Price &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 1000" [(ngModel)]="profitCalc.fromValue.no" clearInput="true" (ngModelChange)="buySellPriceChanged(\'buy\')"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Sell Price &#8377;</ion-label>\n\n      <ion-input type="number" placeholder=" (e.g) 2000" [(ngModel)]="profitCalc.toValue.no" clearInput="true" (ngModelChange)="buySellPriceChanged(\'sell\')"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Profit / Loss &#8377;</ion-label>\n\n      <ion-input type="number" placeholder="(e.g) 3000" [(ngModel)]="profitCalc.profitLoss.no" clearInput="true" (ngModelChange)="updateSellPrice()"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <button class="padding2rem" (click)="clearAll()" ion-button color="light">Clear All</button>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-card-header class="weight500 size1rem8">\n\n    Summary\n\n  </ion-card-header>\n\n  <ion-card>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Quantity:\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          {{this.profitCalc.quantity.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Investment:\n\n        </ion-col>\n\n        <ion-col col-7 class="weight500 blueColor">\n\n          {{this.profitCalc.amount.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Buy Price:\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          {{this.profitCalc.fromValue.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Sell Price:\n\n        </ion-col>\n\n        <ion-col col-7>\n\n          {{this.profitCalc.toValue.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Profit / Loss:\n\n        </ion-col>\n\n        <ion-col col-7 class="weight500" [ngClass]="{\'greenColor\': this.profitCalc.profitLoss.no>0, \'redColor\': this.profitCalc.profitLoss.no<0}">\n\n          {{this.profitCalc.profitLoss.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-5>\n\n          Net Amount:\n\n        </ion-col>\n\n        <ion-col col-7 class="weight500 size2rem" [ngClass]="{\'greenColor\': this.profitCalc.profitLoss.no>0, \'redColor\': this.profitCalc.profitLoss.no<0}">\n\n          {{this.profitCalc.finalValue.formatted}}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="alignCenter" *ngIf="this.profitCalc.profitLoss.no != 0 && this.profitCalc.profitLoss.no">\n\n        <ion-col col-12>\n\n          <span>\n\n            [{{this.profitCalc.amount.formatted}}\n\n            <span *ngIf="this.profitCalc.profitLoss.no > 0"> + </span>\n\n            <span [ngClass]="{\'greenColor\': this.profitCalc.profitLoss.no>0, \'redColor\': this.profitCalc.profitLoss.no<0}" class="weight500">{{this.profitCalc.profitLoss.formatted}}</span>]\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\pages\profit-calc\profit-calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], ProfitCalcPage);
    return ProfitCalcPage;
}());

//# sourceMappingURL=profit-calc.js.map

/***/ }),

/***/ 217:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_coin_detail_coin_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_buy_sell_buy_sell__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favourites_favourites__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_reminders_reminders__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profit_calc_profit_calc__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_quantity_calc_quantity_calc__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_utilities_utilities__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_analytics__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_admob_free__ = __webpack_require__(212);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_api_data_api_data__["a" /* ApiDataProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_utilities_utilities__["a" /* Utilities */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_admob_free__["b" /* AdMobFreeRewardVideo */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reminders_reminders__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profit_calc_profit_calc__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_data_api_data__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_news_news__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quantity_calc_quantity_calc__ = __webpack_require__(111);
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
        var _this = this;
        // console.log("GET - api urls from app component");
        this.api.fetchApiUrl().subscribe(function (res) {
            // console.log("fetched in app component");
            // console.log(res);
            _this.api.generateZebpayApis(res).subscribe(function (generated) {
                // console.log("generated urls passed for store", generated);
                _this.api.storeApiUrl(generated);
            });
        }, function (err) {
            console.log("App component - error fetching data", err);
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            console.log("Platform ready");
            _this.api.prepareVideoAd();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Settings</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-content>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Market View" tabIcon="logo-bitcoin"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Quantity Calc" tabIcon="bookmark"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Profit Calc" tabIcon="logo-usd"></ion-tab>\n\n  </ion-tabs>\n\n</ion-content>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<!-- <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav> -->'/*ion-inline-end:"C:\Users\i342664\Documents\private\dev\coin-assist\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_api_data_api_data__["a" /* ApiDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitCalc; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value_detail__ = __webpack_require__(110);

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

/***/ 316:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BuySellPage);
    return BuySellPage;
}());

//# sourceMappingURL=buy-sell.js.map

/***/ }),

/***/ 317:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FavouritesPage);
    return FavouritesPage;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utilities_utilities__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase_analytics__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__ = __webpack_require__(212);
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
    // add your config here
    // for the sake of this example we will just use the test config
    id: "ca-app-pub-4512084985073909/8834823940",
    isTesting: true,
    autoShow: false
};
var ApiDataProvider = (function () {
    // private coinAssistApis = "http://localhost:3000/apis";
    function ApiDataProvider(http, storage, utility, toastCtrl, firebaseAnalytics, admobFree) {
        this.http = http;
        this.storage = storage;
        this.utility = utility;
        this.toastCtrl = toastCtrl;
        this.firebaseAnalytics = firebaseAnalytics;
        this.admobFree = admobFree;
        this.apiUrls = {};
        this.apiUrlStore = "apiUrls";
        this.koinexData = {};
        this.zebpayData = {};
        this.coins = {};
        // ******************************************************************************
        this.coinAssistApis = "https://coin-assist-api.herokuapp.com/apis";
        this.koinexTest = false;
    }
    ApiDataProvider.prototype.ngOnInit = function () {
    };
    ApiDataProvider.prototype.prepareVideoAd = function () {
        this.admobFree.rewardVideo.config(videoConfig);
        this.admobFree.rewardVideo.prepare().then(function (res) {
            console.log("Reward Video Prepared", res);
        }).catch(function (err) {
            console.log("Unable to prepare", err);
        });
    };
    ApiDataProvider.prototype.showVideoAd = function () {
        var _this = this;
        this.admobFree.rewardVideo.isReady().then(function (res) {
            console.log("Video Ad is Ready", res);
            if (res) {
                _this.admobFree.rewardVideo.show().then(function (res) {
                    console.log("Video Ad is Showing", res);
                    _this.prepareVideoAd();
                }).catch(function (err) {
                    console.log("Unable to show Video Ad", err);
                    _this.prepareVideoAd();
                });
            }
            else {
                console.log("Video ad not ready calling prepare");
                _this.prepareVideoAd();
            }
        }).catch(function (err) {
            console.log("Video Ad ready exception", err);
            _this.prepareVideoAd();
        });
    };
    ApiDataProvider.prototype.setApiUrl = function (apiUrl) {
        this.apiUrls = apiUrl;
        this.coins = this.apiUrls.coins;
    };
    ApiDataProvider.prototype.fetchApiUrl = function () {
        // console.log("GET - api urls");
        return this.http.get(this.coinAssistApis);
    };
    ApiDataProvider.prototype.priceUpdateToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Latest Price Refreshed',
            duration: 1500,
            position: 'top'
        });
        toast.present();
    };
    ApiDataProvider.prototype.logAnalytics = function (pageName) {
        this.firebaseAnalytics.logEvent(pageName, null)
            .then(function (res) { return console.log(res); })
            .catch(function (error) { return console.error(error); });
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
    ApiDataProvider.prototype.getApiUrlStorage = function () {
        var _this = this;
        // console.log("GET - api url storage");
        return this.storage.ready().then(function () {
            return _this.storage.get(_this.apiUrlStore);
        });
    };
    ApiDataProvider.prototype.getConstantApiUrl = function () {
        // console.log("GET - constant URL ");
        return __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["a" /* API_URL */];
    };
    ApiDataProvider.prototype.storeService = function (key, value) {
        this.storage.set(key, value).then(function (res) {
        }, function (err) {
            console.log("Storage Error");
            console.log(err);
        });
    };
    ApiDataProvider.prototype.fetchService = function (key) {
        var _this = this;
        return this.storage.ready().then(function () {
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
        }, function (err) {
            console.log("Storage Error");
            console.log(err);
        });
    };
    ApiDataProvider.prototype.generateZebpayApis = function (fetchedApiUrl) {
        // console.log("passed for store", fetchedApiUrl);
        var zebpayCoinUrls = {};
        var coinList = fetchedApiUrl.exchange.zebpay.coinList;
        // console.log(coinList);
        for (var coin in coinList) {
            // console.log(coin, "coin");
            // console.log(coinList[coin]);
            zebpayCoinUrls[coinList[coin]] = fetchedApiUrl.exchange.zebpay.api + coinList[coin] + "/inr";
        }
        fetchedApiUrl.exchange.zebpay.coinUrls = {};
        fetchedApiUrl.exchange.zebpay.coinUrls = zebpayCoinUrls;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(fetchedApiUrl);
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
        if (this.koinexTest) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.koinexData = __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["f" /* KOINEX_DATA */]);
        }
        else {
            if (this.koinexData.lock == false || this.koinexData.lock == undefined) {
                this.koinexData.lock = true;
                return this.http.get(this.apiUrls.exchange.koinex.api).map(function (res) {
                    // console.log(res);
                    // console.log("FETCHED - koinex data", res);
                    _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* KOINEX */], res);
                    return res;
                }).catch(function (error) {
                    _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* KOINEX */]);
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
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* KOINEX */]: {
                this.koinexData.lock = true;
                // console.log("LOCK SET", this.koinexData);
                var releaseLockKoinex = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].timer(15000);
                releaseLockKoinex.subscribe(function (res) {
                    _this.koinexData.lock = false;
                    // console.log("LOCK RELEASED", this.koinexData);
                });
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* ZEBPAY */]:
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
            for (var coinUrl in this.apiUrls.exchange.zebpay.coinUrls) {
                coinRequests.push(this.http.get(this.apiUrls.exchange.zebpay.coinUrls[coinUrl]));
            }
            // console.log("coinRequests", coinRequests);
            return Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__["forkJoin"])(coinRequests).map(function (res) {
                // console.log(res);
                // console.log("FETCHED - zebpay data", res);
                _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* ZEBPAY */], res);
                return res;
            }).catch(function (error) {
                _this.updateRecentExchangeData(__WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["i" /* ZEBPAY */]);
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
        // console.log("find coin for symbol", coin);
        // console.log("coinsList", this.coins);
        return this.coins[coin.toUpperCase()].name;
    };
    // TO BE TESTED
    ApiDataProvider.prototype.koinexProcessor = function (exchangeData, coinMarketCapData, coinDeskData) {
        // console.log("Koinex Exchange data", exchangeData);
        var processedKoinexData = [];
        var coinList = this.apiUrls.exchange.koinex.coinList;
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
        for (var coin in coinList) {
            // var processedCoin: any = {};
            // console.log(coinList[coin], "coin value");
            var processedCoin = new __WEBPACK_IMPORTED_MODULE_10__models_coin_detail__["a" /* CoinDetail */]();
            var coinCode = coinList[coin].toUpperCase();
            // console.log("Coin Code", coinCode);
            processedCoin.coinCode = coinCode;
            processedCoin.coinName = this.getCoinName(coinCode);
            // console.log("processed coin before", processedCoin);
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
    };
    ApiDataProvider.prototype.coinDetailFormatter = function (processedCoin) {
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
            console.log(e);
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
    };
    ApiDataProvider.prototype.injectCoinImage = function (processedCoin) {
        // console.log("processedCoin inside", processedCoin);
        processedCoin.coinImage = this.coins[processedCoin.coinCode].imageUrl;
        return processedCoin;
    };
    ApiDataProvider.prototype.injectGlobalStats = function (coinCode, processedCoin, coinMarketCapData, coinDeskData) {
        try {
            var coinGlobalStats = this.getCoinGlobalStats(coinCode, coinMarketCapData, coinDeskData);
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
        return this.http.get(this.apiUrls.global.coindesk.api);
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
    };
    // TO BE TESTED
    ApiDataProvider.prototype.processExchangeData = function (exchange, exchangeData, coinMarketCapData, coinDeskData) {
        // console.log(coinMarketCapData, " inside process Exchange data - SWITCH");
        try {
            switch (exchange) {
                case __WEBPACK_IMPORTED_MODULE_5__constants_api_constants__["e" /* KOINEX */]:
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
    ApiDataProvider.prototype.getMarketOverviewData = function (sel, coin, dataFlag) {
        if (dataFlag === void 0) { dataFlag = true; }
        try {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([this.getExchangeData(sel, dataFlag), this.getCoinMarketCapData(coin), this.getCoindeskData()]);
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
                    break;
                }
            case "zebpay":
                {
                    // console.log("SET - zebpay exchange data");
                    this.zebpayData = exchangeData;
                    break;
                }
        }
    };
    ApiDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__utilities_utilities__["a" /* Utilities */], __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_firebase_analytics__["a" /* FirebaseAnalytics */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], ApiDataProvider);
    return ApiDataProvider;
}());

//# sourceMappingURL=api-data.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utilities; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__ = __webpack_require__(109);
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
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["d" /* ETH */]:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["h" /* XRP */]:
                {
                    return trimmedQty = +quantity.toFixed(0);
                }
            case __WEBPACK_IMPORTED_MODULE_1__constants_api_constants__["g" /* LTC */]:
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

},[218]);
//# sourceMappingURL=main.js.map