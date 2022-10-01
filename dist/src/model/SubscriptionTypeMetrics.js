"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionTypeMetrics = void 0;
class SubscriptionTypeMetrics {
    constructor(name, description, numberOfUsersAllowed, numberOfBuildsAllowed) {
        this.name = name;
        this.description = description;
        this.numberOfUsersAllowed = numberOfUsersAllowed;
        this.numberOfBuildsAllowed = numberOfBuildsAllowed;
    }
}
exports.SubscriptionTypeMetrics = SubscriptionTypeMetrics;
SubscriptionTypeMetrics.free = new SubscriptionTypeMetrics("Free", "The entry level tier", 1, 25);
SubscriptionTypeMetrics.pro = new SubscriptionTypeMetrics("Pro", "A single active user", 1, 500);
SubscriptionTypeMetrics.team = new SubscriptionTypeMetrics("Enterprise", "A small team of users", 10, 5000);
SubscriptionTypeMetrics.enterprise = new SubscriptionTypeMetrics("Enterprise", "An organization with more than a few users", 1, 50);
SubscriptionTypeMetrics.types = [
    SubscriptionTypeMetrics.free,
    SubscriptionTypeMetrics.pro,
    SubscriptionTypeMetrics.team,
    SubscriptionTypeMetrics.enterprise,
];
