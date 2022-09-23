"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const IdentityProvider_1 = require("./IdentityProvider");
/**
 * the definition of a way in which a user is identified to the system this can be an access token or a social account
 * github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws)
 */
class Identity extends AbstractMutable_1.AbstractMutable {
    /**
     * the system that provides the identification
     */
    providedBy = IdentityProvider_1.IdentityProvider.github;
    /**
     * the identifer used by the social system defined by providedBy
     */
    socialIdentifier = '';
    /**
     * the user this belongs to
     *
     * @see User
     */
    forId;
    /**
     * is the identity currently valid?
     */
    enabled = false;
    /**
     * the point in time which the token is no longer valid
     */
    expiresOn;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], Identity.prototype, "providedBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], Identity.prototype, "socialIdentifier", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Identity.prototype, "forId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)()
], Identity.prototype, "enabled", void 0);
__decorate([
    (0, class_validator_1.IsDate)()
], Identity.prototype, "expiresOn", void 0);
exports.Identity = Identity;
//# sourceMappingURL=Identity.js.map