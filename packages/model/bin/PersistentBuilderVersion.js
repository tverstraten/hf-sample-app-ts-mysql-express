"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentBuilderVersion = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const PersistentBuilderType_1 = require("./PersistentBuilderType");
/**
 * one set of details that configure a builder
 */
class PersistentBuilderVersion extends AbstractMutable_1.AbstractMutable {
    /**
     * the derivation of this class
     */
    type = PersistentBuilderType_1.PersistentBuilderType.configuration;
    /**
     * the id it is a version for
     *
     * @see PersistentBuilder
     */
    persistentBuilderId;
    /**
     * an identifier of its version
     */
    version = '';
    /**
     * if true, this version is released for use
     */
    released = false;
    /**
     * a csv list of tags associated with this version of this builder, all are soft coded from the list of tags
     */
    tags = '';
    /**
     * the textual body of the builder
     */
    text = '';
    /**
     * if true, this version should not be used any more
     */
    deprecated = false;
    /**
     * the id of a builder version that should be used instead of this if its deprecated
     *
     * @see PersistentBuilderVersion
     */
    suggestedAlternateId;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], PersistentBuilderVersion.prototype, "persistentBuilderId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128)
], PersistentBuilderVersion.prototype, "version", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)()
], PersistentBuilderVersion.prototype, "released", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1024)
], PersistentBuilderVersion.prototype, "tags", void 0);
__decorate([
    (0, class_validator_1.IsString)()
], PersistentBuilderVersion.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)()
], PersistentBuilderVersion.prototype, "deprecated", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], PersistentBuilderVersion.prototype, "suggestedAlternateId", void 0);
exports.PersistentBuilderVersion = PersistentBuilderVersion;
//# sourceMappingURL=PersistentBuilderVersion.js.map