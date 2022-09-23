"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const TransactionType_1 = require("./TransactionType");
/**
 * an change of the amount of funds an accounts owes or is owed
 */
class Transaction extends AbstractMutable_1.AbstractMutable {
    /**
     * the id of the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * the kind of transaction it is
     */
    transactionType = TransactionType_1.TransactionType.invoice;
    /**
     * the point in time the transaction was effective
     */
    effective;
    /**
     * the amount to add to the balance of the account
     */
    amount = 0;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Transaction.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(TransactionType_1.TransactionType)
], Transaction.prototype, "transactionType", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)()
], Transaction.prototype, "effective", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Transaction.prototype, "amount", void 0);
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map