import { ValueDetail } from "./value-detail";

export class CoinDetail {
    coinName: any;
    coinCode: any;
    market: ValueDetail;
    buy: ValueDetail
    sell: ValueDetail
    min: ValueDetail
    max: ValueDetail
    price_index: string;
    globalINR: ValueDetail
    globalUSD: ValueDetail
}