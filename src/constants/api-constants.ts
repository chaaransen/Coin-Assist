//Payloads
export const API_URL: any = { "exchange": { "koinex": { "api": "https://koinex.in/api/ticker", "fees": { "buy": "0.0025", "sell": "0.002" }, "referral": "https://koinex.in/?ref=a2fae6", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] }, "zebpay": { "api": "https://www.zebapi.com/api/v1/market/ticker-new/", "fees": { "buy": "0.0059", "sell": "0.0059" }, "referral": "http://link.zebpay.com/ref/REF97131420", "coinList": ["btc", "ltc", "xpr", "bch", "eth"] } }, "global": { "coindesk": { "api": "https://api.coindesk.com/v1/bpi/currentprice/inr.json" }, "coinmarketcap": { "api": "https://api.coinmarketcap.com/v1/ticker/?convert=INR&limit=", "coin_limit": "8", "coin": { "BTC": "https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=INR", "ETH": "https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=INR", "XPR": "https://api.coinmarketcap.com/v1/ticker/ripple/?convert=INR", "BCH": "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/?convert=INR", "LTC": "https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=INR" } } }, "version": "1.0.0" };
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



//Exchanges
export const ZEBPAY: string = "zebpay";
export const KOINEX: string = "koinex";

//Generic
export const LIGHT: string = "light";
export const DARK: string = "dark";
export const INR: string = "INR";
export const USD: string = "USD";
export const ALL: string = "ALL";




