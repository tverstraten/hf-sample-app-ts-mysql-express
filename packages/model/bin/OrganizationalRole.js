"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationalRole = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
/**
 * a categorization of the types of actions and ensuing responsibilities that a user may perform for an organization
 */
class OrganizationalRole extends AbstractMutable_1.AbstractMutable {
    /**
     * the human readable identifier for the role
     */
    name = '';
    /**
     * a sentence or phrase that describe the role
     */
    description = '';
    /**
     * well known names
     */
    static operator = 'operator';
    static user = 'user';
    static administrator = 'administrator';
    static administratorWithBilling = 'administratorWithBilling';
    static internalAdministrator = 'internalAdministrator';
    static internalSupport = 'internalSupport';
    static internalBilling = 'internalBilling';
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], OrganizationalRole.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(1024)
], OrganizationalRole.prototype, "description", void 0);
exports.OrganizationalRole = OrganizationalRole;
//# sourceMappingURL=OrganizationalRole.js.map