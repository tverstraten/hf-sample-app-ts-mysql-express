"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailCsv = exports.emailCsv = void 0;
const class_validator_1 = require("class-validator");
const IsEmailArray_1 = require("./IsEmailArray");
/**
 * check if the string is a csv list of email addresses
 *
 * @param csv - the csv lst of emails to parse
 * @returns true if all items in the csv are emails (strings)
 */
function emailCsv(csv) {
    if (typeof csv !== 'string')
        return false;
    const array = csv.split(',');
    return (0, IsEmailArray_1.emailArray)(array);
}
exports.emailCsv = emailCsv;
/**
 * validator to check if the string is a csv list of email addresses
 */
let IsEmailCsv = class IsEmailCsv {
    validate(object, __args) {
        return emailCsv(object);
    }
    defaultMessage(__args) {
        // here you can provide default error message if validation failed
        return 'The value ($value) is not all valid email addresses';
    }
};
IsEmailCsv = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsEmailCsv', async: false })
], IsEmailCsv);
exports.IsEmailCsv = IsEmailCsv;
//# sourceMappingURL=IsEmailCsv.js.map