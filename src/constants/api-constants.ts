
export const API_URL: string = "{\r\n  \"exchange\": {\r\n    \"koinex\": \"https:\/\/koinex.in\/api\/ticker\",\r\n    \"zebpay\": \"https:\/\/www.zebapi.com\/api\/v1\/market\/ticker\/btc\/inr\"\r\n  },\r\n  \"global\": {\r\n    \"coindesk\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice.json\",\r\n        \"INR\": \"https:\/\/api.coindesk.com\/v1\/bpi\/currentprice\/inr.json\"\r\n      }\r\n    },\r\n    \"coinmarketcap\": {\r\n      \"api\": {\r\n        \"USD\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?limit=6\",\r\n        \"INR\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/?convert=INR&limit=6\"\r\n      },\r\n      \"coin\": {\r\n        \"bitcoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin\",\r\n        \"ether\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ethereum\",\r\n        \"ripple\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/ripple\",\r\n        \"btc-cash\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/bitcoin-cash\",\r\n        \"litecoin\": \"https:\/\/api.coinmarketcap.com\/v1\/ticker\/litecoin\"\r\n      }\r\n    }\r\n  },\r\n  \"version\": \"1.0.0\"\r\n}";
export const KOINEX_DATA: string = "{\"prices\":{\"BTC\":\"1271000.0\",\"XRP\":\"203.5\",\"ETH\":\"76989.0\",\"BCH\":\"192499.0\",\"LTC\":\"21498.99\",\"MIOTA\":253.15,\"OMG\":1282.71,\"GNT\":68.61},\"stats\":{\"ETH\":{\"last_traded_price\":\"76989.0\",\"lowest_ask\":\"76988.0\",\"highest_bid\":\"76800.0\",\"min_24hrs\":\"74000.0\",\"max_24hrs\":\"77887.0\",\"vol_24hrs\":\"2187.735\"},\"BTC\":{\"last_traded_price\":\"1271000.0\",\"lowest_ask\":\"1280000.0\",\"highest_bid\":\"1271000.0\",\"min_24hrs\":\"1218601.5\",\"max_24hrs\":\"1310000.0\",\"vol_24hrs\":\"253.7324\"},\"LTC\":{\"last_traded_price\":\"21498.99\",\"lowest_ask\":\"21498.99\",\"highest_bid\":\"21410.0\",\"min_24hrs\":\"20200.0\",\"max_24hrs\":\"23000.0\",\"vol_24hrs\":\"22545.462\"},\"XRP\":{\"last_traded_price\":\"203.5\",\"lowest_ask\":\"203.7\",\"highest_bid\":\"203.55\",\"min_24hrs\":\"165.0\",\"max_24hrs\":\"210.0\",\"vol_24hrs\":\"4739999.3\"},\"BCH\":{\"last_traded_price\":\"192499.0\",\"lowest_ask\":\"192499.0\",\"highest_bid\":\"191340.0\",\"min_24hrs\":\"182000.0\",\"max_24hrs\":\"195000.0\",\"vol_24hrs\":\"816.173\"}}}";
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



