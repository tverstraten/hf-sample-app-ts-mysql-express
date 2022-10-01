"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
const TransactionType_1 = require("./TransactionType");
class Transaction extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.transactionType = TransactionType_1.TransactionType.invoice;
        this.amount = 0;
    }
}
exports.Transaction = Transaction;
