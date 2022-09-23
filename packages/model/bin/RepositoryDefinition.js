"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryDefinition = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
/**
 * a statement of one repository that may be usedd by the organization and how to connect to it
 */
class RepositoryDefinition extends AbstractMutable_1.AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * the human readable identifier for the repository
     */
    name = '';
    /**
     * the human readable identifier for the repository service
     */
    providerName = '';
    /**
     * the human readable identifier for the repository
     */
    url = '';
    /**
     * the access token to use to work with the repo
     */
    pat = '';
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], RepositoryDefinition.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], RepositoryDefinition.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], RepositoryDefinition.prototype, "providerName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(1024)
], RepositoryDefinition.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], RepositoryDefinition.prototype, "pat", void 0);
exports.RepositoryDefinition = RepositoryDefinition;
//# sourceMappingURL=RepositoryDefinition.js.map