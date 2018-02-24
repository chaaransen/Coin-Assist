
export const API_URL: any = { "exchange": { "koinex": { "api": "https://koinex.in/api/ticker", "fees": { "buy": "0.0025", "sell": "0.002" }, "referral": "https://koinex.in/?ref=a2fae6", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] }, "zebpay": { "api": "https://www.zebapi.com/api/v1/market/ticker-new/", "fees": { "buy": "0.0059", "sell": "0.0059" }, "referral": "http://link.zebpay.com/ref/REF97131420", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] } }, "global": { "coindesk": { "api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json" }, "coinmarketcap": { "api": "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=", "coin_limit": "8", "coin": { "BTC": "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=INR", "ETH": "https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=INR", "XPR": "https://api.coinmarketcap.com/v1/ticker/ripple/?convert=INR", "BCH": "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=INR", "LTC": "https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=INR" } } }, "version": "1.0.0" };
export const KOINEX_DATA: any = { "prices": { "BTC": "709000.0", "ETH": "59649.0", "XRP": "65.07", "BCH": "86890.0", "LTC": "14500.0", "MIOTA": 112.16, "OMG": "1225.0", "GNT": 20.77, "REQ": "21.7" }, "stats": { "ETH": { "last_traded_price": 59649, "lowest_ask": "59649.0", "highest_bid": "59501.0", "min_24hrs": "58000.0", "max_24hrs": "63502.0", "vol_24hrs": 3278 }, "BTC": { "last_traded_price": 709000, "lowest_ask": "709997.0", "highest_bid": "709000.0", "min_24hrs": "683001.0", "max_24hrs": "720000.0", "vol_24hrs": 122 }, "LTC": { "last_traded_price": 14500, "lowest_ask": "14505.0", "highest_bid": "14502.0", "min_24hrs": "13601.01", "max_24hrs": "14980.0", "vol_24hrs": 7407 }, "XRP": { "last_traded_price": 65, "lowest_ask": "65.12", "highest_bid": "65.08", "min_24hrs": "64.01", "max_24hrs": "67.75", "vol_24hrs": 4871015 }, "BCH": { "last_traded_price": 86890, "lowest_ask": "86890.0", "highest_bid": "86500.0", "min_24hrs": "85002.0", "max_24hrs": "89000.0", "vol_24hrs": 254 }, "OMG": { "last_traded_price": 1225, "lowest_ask": "1229.0", "highest_bid": "1220.0", "min_24hrs": "1143.51", "max_24hrs": "1350.0", "vol_24hrs": 16323 }, "REQ": { "last_traded_price": 21, "lowest_ask": "21.7", "highest_bid": "21.69", "min_24hrs": "21.34", "max_24hrs": "23.99", "vol_24hrs": 10251100 } } };
export const COIN_LIST_TEMPLATE: string = "{\r\n  \"coin\": \"bitcoin\",\r\n  \"market\": \"5000\",\r\n  \"buy\": \"6000\",\r\n  \"sell\": \"4000\",\r\n  \"price_index\": \"high\",\r\n  \"change\": \"7\"\r\n}";
export const BTC: string = "Bitcoin";
export const XRP: string = "Ripple";
export const ETH: string = "Ethereum";
export const LTC: string = "Litecoin";
export const BCH: string = "Bitcoin Cash";
export const INR: string = "INR";
export const USD: string = "USD";
export const ALL: string = "ALL";
export const ZEBPAY: string = "zebpay";
export const KOINEX: string = "koinex";
export const LIGHT: string = "light";
export const DARK: string = "dark";
export const zebpayCoins: Array<string> = ["btc", "bch", "ltc", "xrp"];



