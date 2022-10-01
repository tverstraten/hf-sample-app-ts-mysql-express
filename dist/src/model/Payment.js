"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const Transaction_1 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
class Payment extends Transaction_1.Transaction {
    constructor() {
        super();
        this.transactionType = TransactionType_1.TransactionType.payment;
    }
}
exports.Payment = Payment;
