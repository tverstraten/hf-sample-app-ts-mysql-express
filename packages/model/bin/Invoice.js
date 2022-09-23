"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const class_validator_1 = require("class-validator");
const Transaction_1 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
/**
 * one amount charged to an account for a given billing period
 */
class Invoice extends Transaction_1.Transaction {
    /**
     * the human readable identifier
     */
    invoiceNumber;
    /**
     * the period the invoice is for
     *
     * @see BillingPeriod
     */
    coveringId;
    /**
     * create a new instance of the object
     */
    constructor() {
        super();
        this.invoiceNumber = '';
        this.transactionType = TransactionType_1.TransactionType.invoice;
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128)
], Invoice.prototype, "invoiceNumber", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], Invoice.prototype, "coveringId", void 0);
exports.Invoice = Invoice;
//# sourceMappingURL=Invoice.js.map