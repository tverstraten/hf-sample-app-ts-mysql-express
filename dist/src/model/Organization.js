"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
const SubscriptionType_1 = require("./SubscriptionType");
class Organization extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.name = "";
        this.primaryContactEmail = "";
        this.billingContactEmail = "";
        this.balance = 0;
        this.currentSubscription = SubscriptionType_1.SubscriptionType.free;
    }
}
exports.Organization = Organization;
