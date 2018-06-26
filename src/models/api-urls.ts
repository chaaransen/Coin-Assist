export class ApiUrls {
    exchange: any;
    global: any;
    version: any;
}

export class RateStatus {
    rated: boolean;
    notify: boolean;
}

export class Notif {
    pullGesture: boolean;
    swipeGesture: number;
}

export class QuantityValid {
    rateValid: boolean = true;
    amountValid: boolean = true;
    quantityValid: boolean = true;
}

export class ProfitValid {
    quantityValid: boolean = true;
    buyValid: boolean = true;
    sellValid: boolean = true;
}