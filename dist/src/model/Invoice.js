"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const Transaction_1 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
class Invoice extends Transaction_1.Transaction {
    constructor() {
        super();
        this.invoiceNumber = '';
        this.transactionType = TransactionType_1.TransactionType.invoice;
    }
}
exports.Invoice = Invoice;
