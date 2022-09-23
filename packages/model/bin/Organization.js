"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const SubscriptionType_1 = require("./SubscriptionType");
/**
 * a real or sybolic entity that has one or more systems that they maintain/develop
 */
class Organization extends AbstractMutable_1.AbstractMutable {
    /**
     * the human readable identifier for the organization
     */
    name = '';
    /**
     * the email address to use as a primary point of contact for the organization
     */
    primaryContactEmail = '';
    /**
     * the email address to use as a primary contact for billing
     */
    billingContactEmail = '';
    /**
     * the current amount that the organization owes for usage
     */
    balance = 0;
    /**
     * the plan the account currently makes use of for making use of the system
     */
    currentSubscription = SubscriptionType_1.SubscriptionType.free;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(1024)
], Organization.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(128)
], Organization.prototype, "primaryContactEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(128)
], Organization.prototype, "billingContactEmail", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Organization.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(SubscriptionType_1.SubscriptionType),
    (0, class_validator_1.IsNotEmpty)()
], Organization.prototype, "currentSubscription", void 0);
exports.Organization = Organization;
//# sourceMappingURL=Organization.js.map