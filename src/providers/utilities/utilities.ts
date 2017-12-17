import { Injectable } from "@angular/core";
import * as Constants from '../../constants/api-constants';

@Injectable()
export class Utilities {
    constructor() {

    }

    public trimQuantity(coinName: string, quantity: number): number {
        var trimmedQty: number;

        switch (coinName) {
            case Constants.BTC: {
                return trimmedQty = +quantity.toFixed(4);
            }
            case Constants.ETH: {
                return trimmedQty = +quantity.toFixed(3);
            }
            case Constants.XRP: {
                return trimmedQty = +quantity.toFixed(0);
            }
            case Constants.LTC: {
                return trimmedQty = +quantity.toFixed(3);
            }
            case Constants.BCH: {
                return trimmedQty = +quantity.toFixed(3);
            }
        }
    }
}