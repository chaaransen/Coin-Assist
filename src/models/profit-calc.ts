import { ValueDetail } from "./value-detail";

export class ProfitCalc {
    public quantity: ValueDetail;
    public amount: ValueDetail;
    public fromValue: ValueDetail;
    public toValue: ValueDetail;
    public profitLoss: ValueDetail;
    public finalValue: ValueDetail;

    constructor() {
        this.quantity = new ValueDetail();
        this.amount = new ValueDetail();
        this.fromValue = new ValueDetail();
        this.toValue = new ValueDetail();
        this.profitLoss = new ValueDetail();
        this.finalValue = new ValueDetail();
    }
}