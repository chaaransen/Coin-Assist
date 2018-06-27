//Payloads
export const API_URL: any = { "exchange": { "Koinex": { "api": "https://koinex.in/api/ticker", "fees": { "buy": "0.0025", "sell": "0.002" }, "referral": "https://koinex.in/?ref=a2fae6", "coinList": ["btc", "ltc", "xrp", "bch", "eth", "omg", "req", "zrx", "gnt", "bat", "ae", "trx", "xlm", "neo", "gas", "aion", "ncash", "xrb", "eos", "ont", "zil", "iost", "zco", "poly", "elf"] }, "Zebpay": { "api": "https://www.zebapi.com/api/v1/market/ticker-new/", "fees": { "buy": "0.0059", "sell": "0.0059" }, "referral": "http://link.zebpay.com/ref/REF97131420", "coinList": ["btc", "ltc", "xrp", "bch", "eth", "eos", "omg", "trx", "gnt", "zrx", "rep", "bat", "ven", "ae"] } }, "global": { "coindesk": { "api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json" }, "coinmarketcap": { "api": "https://api.coinmarketcap.com/v1/ticker/COINNAME/?convert=INR" } }, "coins": { "BTC": { "name": "Bitcoin", "imageUrl": "https://i.imgur.com/PRysm7E.png" }, "XRP": { "name": "Ripple", "imageUrl": "https://i.imgur.com/jzCyWct.png" }, "ETH": { "name": "Ethereum", "imageUrl": "https://i.imgur.com/gmGSzVJ.png" }, "LTC": { "name": "Litecoin", "imageUrl": "https://i.imgur.com/Ov9h1ZT.png" }, "BCH": { "name": "Bitcoin Cash", "imageUrl": "https://i.imgur.com/gUtu5Eo.png" }, "OMG": { "name": "OmiseGo", "imageUrl": "https://i.imgur.com/p0Phr0Y.png" }, "REQ": { "name": "Request Network", "imageUrl": "https://i.imgur.com/6909idR.png" }, "ZRX": { "name": "0x", "imageUrl": "https://i.imgur.com/ESIyWUE.png" }, "GNT": { "name": "Golem", "imageUrl": "https://i.imgur.com/5ryFDz5.png" }, "BAT": { "name": "Basic Attention Token", "imageUrl": "https://i.imgur.com/c5ADvNs.png" }, "AE": { "name": "Aeternity", "imageUrl": "https://i.imgur.com/Hn4v2q1.png" }, "TRX": { "name": "Tron", "imageUrl": "https://i.imgur.com/A39UF1i.png" }, "MIOTA": { "name": "IOTA", "imageUrl": "https://i.imgur.com/u5slvez.png" }, "EOS": { "name": "Eos", "imageUrl": "https://i.imgur.com/8MPSsON.png" }, "KNC": { "name": "Kyber Network", "imageUrl": "https://i.imgur.com/hn2onbS.png" }, "XRB": { "name": "Nano", "imageUrl": "https://i.imgur.com/tp5wt6g.png" }, "XLM": { "name": "Stellar", "imageUrl": "https://i.imgur.com/7sbDVmq.png" }, "GAS": { "name": "Gas", "imageUrl": "https://i.imgur.com/KuKbCfk.png" }, "NEO": { "name": "Neo", "imageUrl": "https://i.imgur.com/KuKbCfk.png" }, "AION": { "name": "Aion", "imageUrl": "https://i.imgur.com/7BPKN5h.png" }, "NCASH": { "name": "Nucleus Vision", "imageUrl": "https://i.imgur.com/BNMkOVY.jpg" }, "ONT": { "name": "Ontology", "imageUrl": "https://i.imgur.com/sAmdk8w.png" }, "ZIL": { "name": "Zilliqa", "imageUrl": "https://i.imgur.com/wMERZVq.png" }, "IOST": { "name": "IosToken", "imageUrl": "https://i.imgur.com/39N3aWl.png" }, "ZCO": { "name": "Zebi", "imageUrl": "https://i.imgur.com/fRgfUci.png" }, "POLY": { "name": "Polymath network", "imageUrl": "https://i.imgur.com/65T4QnL.png" }, "ELF": { "name": "Aelf", "imageUrl": "https://i.imgur.com/1ZLtWEM.png" }, "REP": { "name": "augur", "imageUrl": "https://i.imgur.com/l5OcnMf.png" }, "VEN": { "name": "vechain", "imageUrl": "https://i.imgur.com/6Iq92BR.png" } }, "version": "1.0.0" };
export const KOINEX_DATA: any = { "prices": { "BTC": "660000.0", "ETH": "49550.0", "XRP": "55.32", "BCH": "75700.0", "LTC": "12845.99", "MIOTA": 91.07, "TRX": "2.63", "OMG": "976.0", "AE": "126.5", "ZRX": "46.12", "BAT": "18.9", "GNT": "21.53", "REQ": "14.74", "XLM": "20.68" }, "stats": { "ETH": { "last_traded_price": 49550.0, "lowest_ask": "49800.0", "highest_bid": "49550.0", "min_24hrs": "48800.0", "max_24hrs": "50300.0", "vol_24hrs": 310 }, "BTC": { "last_traded_price": 660000.0, "lowest_ask": "660000.0", "highest_bid": "658050.0", "min_24hrs": "620000.0", "max_24hrs": "660000.0", "vol_24hrs": 88 }, "LTC": { "last_traded_price": 12845.99, "lowest_ask": "12849.0", "highest_bid": "12820.0", "min_24hrs": "12650.0", "max_24hrs": "13150.0", "vol_24hrs": 1208 }, "XRP": { "last_traded_price": 55.32, "lowest_ask": "55.4", "highest_bid": "55.32", "min_24hrs": "54.56", "max_24hrs": "56.61", "vol_24hrs": 815919 }, "BCH": { "last_traded_price": 75700.0, "lowest_ask": "75800.0", "highest_bid": "75600.0", "min_24hrs": "72002.0", "max_24hrs": "77500.0", "vol_24hrs": 118 }, "OMG": { "last_traded_price": 976.0, "lowest_ask": "984.99", "highest_bid": "976.0", "min_24hrs": "960.0", "max_24hrs": "1010.0", "vol_24hrs": 5790 }, "REQ": { "last_traded_price": 14.74, "lowest_ask": "14.74", "highest_bid": "14.72", "min_24hrs": "14.26", "max_24hrs": "15.06", "vol_24hrs": 443076 }, "ZRX": { "last_traded_price": 46.12, "lowest_ask": "46.3", "highest_bid": "46.2", "min_24hrs": "44.2", "max_24hrs": "47.98", "vol_24hrs": 67665 }, "GNT": { "last_traded_price": 21.53, "lowest_ask": "21.98", "highest_bid": "21.58", "min_24hrs": "21.03", "max_24hrs": "22.24", "vol_24hrs": 81813 }, "BAT": { "last_traded_price": 18.9, "lowest_ask": "19.0", "highest_bid": "18.9", "min_24hrs": "18.6", "max_24hrs": "19.34", "vol_24hrs": 64093 }, "AE": { "last_traded_price": 126.5, "lowest_ask": "126.5", "highest_bid": "125.03", "min_24hrs": "125.0", "max_24hrs": "131.0", "vol_24hrs": 2566 }, "TRX": { "last_traded_price": 2.63, "lowest_ask": "2.63", "highest_bid": "2.62", "min_24hrs": "2.52", "max_24hrs": "2.69", "vol_24hrs": 9286780 }, "XLM": { "last_traded_price": 20.68, "lowest_ask": "20.69", "highest_bid": "20.6", "min_24hrs": "20.11", "max_24hrs": "20.68", "vol_24hrs": 242816 } } };
export const COIN_LIST_TEMPLATE: string = "{\r\n  \"coin\": \"bitcoin\",\r\n  \"market\": \"5000\",\r\n  \"buy\": \"6000\",\r\n  \"sell\": \"4000\",\r\n  \"price_index\": \"high\",\r\n  \"change\": \"7\"\r\n}";

//Coin names
export const BTC: string = "Bitcoin";
export const XRP: string = "Ripple";
export const ETH: string = "Ethereum";
export const LTC: string = "Litecoin";
export const BCH: string = "Bitcoin Cash";
export const OMG: string = "OmiseGo";
export const REQ: string = "Request Network";
export const ZRX: string = "0x";
export const GNT: string = "Golem";
export const BAT: string = "Basic Attention Token";
export const AE: string = "Aeternity";
export const TRX: string = "Tron";
export const MIOTA: string = "IOTA";
export const EOS: string = "Eos";
export const KNC: string = "Kyber Network";
export const NANO: string = "Nano";
export const XLM: string = "Stellar";

//Pages
export const HOME_PAGE: string = "home page";
export const QUANTITY_PAGE: string = "quantity-calc page";
export const PROFIT_PAGE: string = "profit-calc page";
export const COIN_DETAIL_PAGE: string = "coin-detail page";

//Messages
export const PRICE_REFRESH: string = "Latest Price Refreshed";
export const PRICE_REFRESH_FAIL: string = "Failed to Refresh - No Network Connection";
export const REWARD_POINTS: string = "Reward points Added!";
export const SWIPE_GESTURE: string = "Swipe screen Left to switch tab";
export const SWIPE_GESTURE_REV: string = "Swipe screen Right to switch tab";
export const PULL_GESTURE: string = "Pull down to refresh";
export const TOP: string = "top";
export const BOTTOM: string = "bottom";
export const DEFAULT: string = "default";

//Quantity Page
export const INSUF_POINTS_MSG: string = "Insufficient Use Points";
export const INSUF_POINTS_DESC: string = "Get Use Points by watching Video Ad";

export const LAST_POINT_MSG: string = " Use Point remaining!";
export const LAST_POINT_DESC: string = "Watch Video Ad to refill Use points";

export const POINTS_MSG: string = "Info - Refill Uses:";
export const POINTS_DESC: string = "Continue using by tapping 'Refill Points' button and watching a Video AD";

export const NO_VIDEO_AD: string = "Video Ad unavailable, Showing Image AD.";

export const REFILL_INFO: string = "refillInfo";

//Exchanges
export const ZEBPAY: string = "Zebpay";
export const KOINEX: string = "Koinex";

export const POINTS: string = "points";
export const DEFAULT_POINT: number = 15;

//Generic
export const LIGHT: string = "light";
export const DARK: string = "dark";
export const INR: string = "INR";
export const USD: string = "USD";
export const ALL: string = "ALL";

//Rating Dialog
export const LIKE_DIALOG_HEAD: string = "Like?";
export const LIKE_DIALOG_DESC: string = "Do you Like the App?";
export const RATE_DIALOG_HEAD: string = "Rate & Get 5 Refill Points!";
export const RATE_DIALOG_DESC: string = "Give us a 5 start rating if you like the app! :)";
export const RATE_USES_UNTIL: string = "rateUsesLeft";
export const RATE_REWARD_MSG: string = "Thank you for your Support! Reward Points added";
export const DEFAULT_USES_UNTIL: number = 15;
export const RATE_LINK: string = "market://details?id=in.extendsapk.coinassist";
export const DONT_LIKE: number = 10;
export const LATER_LIKE: number = 5;
export const RATE_REWARD: number = 5;
export const GRACE_POINTS: number = 1;
export const RATED: string = "rated";
export const INTERSTITIAL_AD_REWARD: number = 2;

export const NO_INTERNET: string = "Network not Connected. Try Again.";
export const SHOWING_ADS: string = "Loading Ads...";








