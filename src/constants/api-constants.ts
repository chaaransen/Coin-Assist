
export const API_URL: string = "{\r\n  \"exchange\": {\r\n    \"koinex\": \"https:\/\/koinex.in\/api\/ticker\",\r\n    \"zebpay\": \"https:\/\/www.zebapi.com\/api\/v1\/market\/ticker\/btc\/inr\"\r\n  },\r\n  \"global\": {\r\n    \"coindesk\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice.json\",\r\n        \"INR\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice\/inr.json\"\r\n      }\r\n    },\r\n    \"coinmarketcap\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?limit=6\",\r\n        \"INR\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?convert=INR&limit=6\"\r\n      },\r\n      \"coin\": {\r\n        \"bitcoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin\",\r\n        \"ether\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ethereum\",\r\n        \"ripple\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ripple\",\r\n        \"btc-cash\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin-cash\",\r\n        \"litecoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/litecoin\"\r\n      }\r\n    }\r\n  },\r\n  \"version\": \"1.0.0\"\r\n}";
export const KOINEX_DATA: string = "{\"prices\":{\"BTC\":\"795000.0\",\"ETH\":\"34700.0\",\"BCH\":\"107499.0\",\"XRP\":\"19.25\",\"LTC\":\"6889.0\",\"MIOTA\":79.55,\"OMG\":547.62,\"GNT\":18.09},\"stats\":{\"ETH\":{\"last_traded_price\":\"34700.0\",\"lowest_ask\":\"34700.0\",\"highest_bid\":\"34601.0\",\"min_24hrs\":\"29800.0\",\"max_24hrs\":\"39000.0\",\"vol_24hrs\":\"3276.286\"},\"BTC\":{\"last_traded_price\":\"795000.0\",\"lowest_ask\":\"794990.0\",\"highest_bid\":\"792102.0\",\"min_24hrs\":\"700000.0\",\"max_24hrs\":\"932503.0\",\"vol_24hrs\":\"358.3514\"},\"LTC\":{\"last_traded_price\":\"6889.0\",\"lowest_ask\":\"6889.0\",\"highest_bid\":\"6888.0\",\"min_24hrs\":\"5998.0\",\"max_24hrs\":\"7678.0\",\"vol_24hrs\":\"8476.121\"},\"XRP\":{\"last_traded_price\":\"19.25\",\"lowest_ask\":\"19.35\",\"highest_bid\":\"19.25\",\"min_24hrs\":\"17.0\",\"max_24hrs\":\"21.05\",\"vol_24hrs\":\"2025861.7\"},\"BCH\":{\"last_traded_price\":\"107499.0\",\"lowest_ask\":\"107499.0\",\"highest_bid\":\"106800.0\",\"min_24hrs\":\"90000.0\",\"max_24hrs\":\"119900.0\",\"vol_24hrs\":\"650.083\"}}}"
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


