"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilder = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const PersistentBuilderType_1 = require("./PersistentBuilderType");
const ReleaseLevel_1 = require("./ReleaseLevel");
/**
 * one set of details that configure a builder
 */
class PersistentBuilder extends AbstractMutable_1.AbstractMutable {
    /**
     * the derivation of this class
     */
    type = PersistentBuilderType_1.PersistentBuilderType.configuration;
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * its human readable identifier
     */
    name = '';
    /**
     * the degree to which it has been released. this controls who gets to see it
     */
    releaseLevel = ReleaseLevel_1.ReleaseLevel.community;
    /**
     * the current version in use
     *
     * @see PersistentBuilderVersion
     */
    mostCurrentVersionId;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], PersistentBuilder.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128)
], PersistentBuilder.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(ReleaseLevel_1.ReleaseLevel)
], PersistentBuilder.prototype, "releaseLevel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], PersistentBuilder.prototype, "mostCurrentVersionId", void 0);
exports.PersistentBuilder = PersistentBuilder;
//# sourceMappingURL=PersistentBuilder.js.map