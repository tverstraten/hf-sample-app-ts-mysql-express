"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBuilderHistorical = void 0;
const class_validator_1 = require("class-validator");
const CodeBuilder_1 = require("../CodeBuilder");
/**
 * one version of a code builder
 */
class CodeBuilderHistorical extends CodeBuilder_1.CodeBuilder {
    /**
     * is the object deleted
     */
    isDeleted = false;
}
__decorate([
    (0, class_validator_1.IsBoolean)()
], CodeBuilderHistorical.prototype, "isDeleted", void 0);
exports.CodeBuilderHistorical = CodeBuilderHistorical;
//# sourceMappingURL=CodeBuilderHistorical.js.map