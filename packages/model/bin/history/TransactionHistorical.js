"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionHistorical = void 0;
const class_validator_1 = require("class-validator");
const Transaction_1 = require("../Transaction");
/**
 * an change of the amount of funds an accounts owes or is owed
 */
class TransactionHistorical extends Transaction_1.Transaction {
    /**
     * is the object deleted
     */
    isDeleted = false;
}
__decorate([
    (0, class_validator_1.IsBoolean)()
], TransactionHistorical.prototype, "isDeleted", void 0);
exports.TransactionHistorical = TransactionHistorical;
//# sourceMappingURL=TransactionHistorical.js.map