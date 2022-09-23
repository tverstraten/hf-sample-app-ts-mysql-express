"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilderDependency = void 0;
const class_validator_1 = require("class-validator");
const AbstractTraceable_1 = require("./AbstractTraceable");
/**
 * a point of inheritence for classes that can be traced
 */
class PersistentBuilderDependency extends AbstractTraceable_1.AbstractTraceable {
    /**
     * the id of the builder that is dependent
     *
     * @see PersistentBuilderVersion
     */
    builderId = 0;
    /**
     * the id of the builder that provides the required functionality
     *
     * @see PersistentBuilderVersion
     */
    dependentOnId = 0;
}
__decorate([
    (0, class_validator_1.IsNumber)()
], PersistentBuilderDependency.prototype, "builderId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], PersistentBuilderDependency.prototype, "dependentOnId", void 0);
exports.PersistentBuilderDependency = PersistentBuilderDependency;
//# sourceMappingURL=PersistentBuilderDependency.js.map