"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailArray = exports.emailArray = void 0;
const class_validator_1 = require("class-validator");
function emailArray(array) {
    if (!(array instanceof Array))
        return false;
    for (let index = 0; index < array.length; index++) {
        const arrayItem = array[index].trim();
        if (typeof arrayItem !== 'string')
            return false;
        if (arrayItem !== '' && !(0, class_validator_1.isEmail)(arrayItem))
            return false;
    }
    return true;
}
exports.emailArray = emailArray;
let IsEmailArray = class IsEmailArray {
    validate(object, __args) {
        return emailArray(object);
    }
    defaultMessage(__args) {
        return 'The value ($value) is not all valid email addresses';
    }
};
IsEmailArray = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsEmailArray', async: false })
], IsEmailArray);
exports.IsEmailArray = IsEmailArray;
