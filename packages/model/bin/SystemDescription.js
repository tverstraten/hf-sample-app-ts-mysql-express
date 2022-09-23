"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemDescription = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
/**
 * a complete meta data description of an application system
 */
class SystemDescription extends AbstractMutable_1.AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * a word that is a human readable identifier for the component
     */
    name = '';
    /**
     * a sentence or phrase that fully describes the table
     */
    description = '';
    /**
     * the builder configuration to produce the system
     *
     * @see PersistentBuilderConfiguration
     */
    configurationId;
    /**
     * an instance of System converted to json with recursion disconnected
     */
    systemAsJson;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], SystemDescription.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], SystemDescription.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1024)
], SystemDescription.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)()
], SystemDescription.prototype, "configurationId", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], SystemDescription.prototype, "systemAsJson", void 0);
exports.SystemDescription = SystemDescription;
//# sourceMappingURL=SystemDescription.js.map