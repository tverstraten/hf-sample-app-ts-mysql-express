"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const TransactionType_1 = require("./TransactionType");
class Transaction {
    constructor() {
        this.id = 0;
        this.transactionType = TransactionType_1.TransactionType.invoice;
        this.amount = 0;
    }
}
exports.Transaction = Transaction;
