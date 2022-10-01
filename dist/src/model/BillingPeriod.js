"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingPeriod = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class BillingPeriod extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.name = "";
    }
}
exports.BillingPeriod = BillingPeriod;
