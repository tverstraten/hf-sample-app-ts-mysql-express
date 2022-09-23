"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const Transaction_1 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
/**
 * a single remittence of funds for an account
 */
class Payment extends Transaction_1.Transaction {
    /**
     * create a new instance of the object
     */
    constructor() {
        super();
        this.transactionType = TransactionType_1.TransactionType.payment;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=Payment.js.map