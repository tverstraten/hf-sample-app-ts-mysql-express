"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const SubscriptionType_1 = require("./SubscriptionType");
class Organization {
    constructor() {
        this.id = 0;
        this.name = '';
        this.primaryContactEmail = '';
        this.billingContactEmail = '';
        this.balance = 0;
        this.currentSubscription = SubscriptionType_1.SubscriptionType.free;
    }
}
exports.Organization = Organization;
