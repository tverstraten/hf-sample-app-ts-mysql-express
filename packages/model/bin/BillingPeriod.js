"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingPeriod = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
/**
 * a singular interval of time used to bill accounts for
 */
class BillingPeriod extends AbstractMutable_1.AbstractMutable {
    /**
     * the human readable identifier for the period
     */
    name = '';
    /**
     * the point in time it started
     */
    start;
    /**
     * the point in time it ceased
     */
    end;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], BillingPeriod.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)()
], BillingPeriod.prototype, "start", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)()
], BillingPeriod.prototype, "end", void 0);
exports.BillingPeriod = BillingPeriod;
//# sourceMappingURL=BillingPeriod.js.map