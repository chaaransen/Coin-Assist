import {
    Injectable
} from "@angular/core";
import * as Constants from '../../constants/api-constants';

@Injectable()
export class Utilities {
    constructor() {
    }

    public trimQuantity(coinName: string = "default", quantity: number): number {
        var trimmedQty: number;

        switch (coinName) {
            case Constants.BTC:
                {
                    return trimmedQty = +quantity.toFixed(4);
                }
            case Constants.ETH:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            case Constants.XRP:
                {
                    return trimmedQty = +quantity.toFixed(0);
                }
            case Constants.LTC:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            case Constants.BCH:
                {
                    return trimmedQty = +quantity.toFixed(3);
                }
            default:
                {
                    return trimmedQty = +quantity.toFixed(2);
                }
        }
    }

    public trimToDecimal(value: number, decimal: number) {
        // console.log(value, "decimal value", decimal);
        let numericValue = +value;
        let finalValue = +numericValue.toFixed(decimal);
        // console.log(finalValue, "Trimmed Quantity value");

        return finalValue;
        // return +numericValue.toFixed(decimal);
    }

    public currencyFormatter(number: any, locale: any = 'hi-IN', currency: any = 'INR'): any {
        number = +number;
        if (isNaN(number)) {
            number = 0;
        }
        return number.toLocaleString(locale, {
            style: 'currency',
            currency: currency
        });
    }

    public numberFormatter(number: any): any {
        number = +number;
        if (isNaN(number)) {
            number = 0;
        }

        var fractionDigits = this.fractionDigitsFinder(number);
        if (fractionDigits > 4) {
            fractionDigits = 4;
        }
        return number.toLocaleString('hi-IN', { minimumFractionDigits: fractionDigits });
    }

    public fractionDigitsFinder(number: any) {
        number = +number;

        var countDecimals = function (value) {
            if (Math.floor(value) === value) return 0;
            return value.toString().split(".")[1].length || 0;
        }
        return countDecimals(number);
    }

    public coinSorter(rawCoinList: Array<any>) {
        function compare(a, b) {
            if (a.coinName < b.coinName || a.coinName == "Bitcoin")
                return -1;
            if (a.coinName > b.coinName)
                return 1;
            return 0;
        }

        if (rawCoinList != undefined) {
            return rawCoinList.sort(compare);
        }
        else {
            return rawCoinList;
        }
    }

    public validNumberChecker(number) {
        number = +number;
        var validNumber = !isNaN(number - parseFloat(number));
        if (validNumber && number >= 0) {
            // console.log("VALID");

            return true;
        } else {
            // console.log("INVALID");
            return false;
        }

    }
}