//Payloads
export const API_URL: any = { "exchange": { "koinex": { "api": "https://koinex.in/api/ticker", "fees": { "buy": "0.0025", "sell": "0.002" }, "referral": "https://koinex.in/?ref=a2fae6", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] }, "zebpay": { "api": "https://www.zebapi.com/api/v1/market/ticker-new/", "fees": { "buy": "0.0059", "sell": "0.0059" }, "referral": "http://link.zebpay.com/ref/REF97131420", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] } }, "global": { "coindesk": { "api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json" }, "coinmarketcap": { "api": "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=", "coin_limit": "8", "coin": { "BTC": "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=INR", "ETH": "https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=INR", "XPR": "https://api.coinmarketcap.com/v1/ticker/ripple/?convert=INR", "BCH": "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=INR", "LTC": "https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=INR" } } }, "version": "1.0.0" };
export const KOINEX_DATA: any = { "prices": { "BTC": "737350.0", "ETH": "56999.0", "XRP": "59.16", "BCH": "83713.0", "LTC": "14090.0", "MIOTA": 122.67, "TRX": 3.27, "OMG": "1209.0", "AE": "156.99", "ZRX": "62.74", "BAT": "26.11", "GNT": "28.0", "REQ": "19.79" }, "stats": { "ETH": { "last_traded_price": 56999, "lowest_ask": "56998.0", "highest_bid": "56902.0", "min_24hrs": "56767.0", "max_24hrs": "58200.0", "vol_24hrs": 223 }, "BTC": { "last_traded_price": 737350, "lowest_ask": "739000.0", "highest_bid": "737350.0", "min_24hrs": "720000.0", "max_24hrs": "747950.0", "vol_24hrs": 74 }, "LTC": { "last_traded_price": 14090, "lowest_ask": "14109.0", "highest_bid": "14085.0", "min_24hrs": "13651.0", "max_24hrs": "14389.0", "vol_24hrs": 1397 }, "XRP": { "last_traded_price": 59, "lowest_ask": "59.24", "highest_bid": "59.16", "min_24hrs": "58.91", "max_24hrs": "60.59", "vol_24hrs": 738079 }, "BCH": { "last_traded_price": 83713, "lowest_ask": "84000.0", "highest_bid": "83751.0", "min_24hrs": "83523.0", "max_24hrs": "85000.0", "vol_24hrs": 43 }, "OMG": { "last_traded_price": 1209, "lowest_ask": "1209.0", "highest_bid": "1203.05", "min_24hrs": "1180.0", "max_24hrs": "1249.99", "vol_24hrs": 7480 }, "REQ": { "last_traded_price": 19, "lowest_ask": "19.79", "highest_bid": "19.73", "min_24hrs": "19.61", "max_24hrs": "20.15", "vol_24hrs": 469074 }, "ZRX": { "last_traded_price": 62, "lowest_ask": "62.74", "highest_bid": "62.24", "min_24hrs": "62.07", "max_24hrs": "64.48", "vol_24hrs": 53824 }, "GNT": { "last_traded_price": 28, "lowest_ask": "28.0", "highest_bid": "27.96", "min_24hrs": "27.94", "max_24hrs": "29.99", "vol_24hrs": 299456 }, "BAT": { "last_traded_price": 26, "lowest_ask": "26.11", "highest_bid": "26.0", "min_24hrs": "26.0", "max_24hrs": "28.45", "vol_24hrs": 329493 }, "AE": { "last_traded_price": 156, "lowest_ask": "156.99", "highest_bid": "155.0", "min_24hrs": "151.0", "max_24hrs": "158.0", "vol_24hrs": 6945 } } };
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

//Exchanges
export const ZEBPAY: string = "zebpay";
export const KOINEX: string = "koinex";

//Generic
export const LIGHT: string = "light";
export const DARK: string = "dark";
export const INR: string = "INR";
export const USD: string = "USD";
export const ALL: string = "ALL";




