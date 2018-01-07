import { ValueDetail } from "./value-detail";

export class CoinDetail {
    coinName: string;
    coinCode: string;
    market: ValueDetail;
    buy: ValueDetail;
    sell: ValueDetail;
    min: ValueDetail;
    max: ValueDetail;
    price_index: string;
    global: Global;
    range: RangeValue;
    change: Change;
    step: number;
    volatility: number;
    globalDiff: GlobalDiff;

    constructor() {
        this.market = new ValueDetail();
        this.buy = new ValueDetail();
        this.sell = new ValueDetail();
        this.min = new ValueDetail();
        this.max = new ValueDetail();
        this.global = new Global();
        this.range = new RangeValue();
        this.change = new Change();
        this.globalDiff = new GlobalDiff();
    }
}
export class GlobalDiff {
    val: ValueDetail;
    percent: number;
    constructor() {
        this.val = new ValueDetail();
    }
}

export class Change {
    hour: number;
    day: number;
    week: number;
}

export class Global {
    INR: ValueDetail;
    USD: ValueDetail;
    constructor() {
        this.INR = new ValueDetail();
        this.USD = new ValueDetail();
    }
}

export class RangeValue {
    rate: ValueDetail;
    plusPercent: ValueDetail;
    minusPercent: ValueDetail;

    constructor() {
        this.rate = new ValueDetail();
        this.plusPercent = new ValueDetail();
        this.minusPercent = new ValueDetail();
    }
}