"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const IdentityProvider_1 = require("./IdentityProvider");
const IsBeforeToday_1 = require("./validators/IsBeforeToday");
/**
 * one single persona that may use the system.
 */
class User extends AbstractMutable_1.AbstractMutable {
    /**
     * the id of the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId;
    /**
     * the name the user uses within their family to be identified. often called surname
     */
    givenName = '';
    /**
     * the name of the persons family, often presented as their "last" name
     */
    familyName = '';
    /**
     * the email address that they indicate should be used to contact them at
     */
    contactEmail = '';
    /**
     * a url to the image the users makes use of as an avatar
     */
    avatarUrl;
    /**
     * the role that the user performs for the organization
     *
     * @see OrganizationalRole
     */
    performsId;
    /**
     * the identity provider that this account is based off of
     */
    primaryIdentityProvider = IdentityProvider_1.IdentityProvider.github;
    /**
     * if true, the user is currently able to log into the system ad perform operations
     * NOTE: access may also be restricted if the account is not currently enabled
     */
    enabled = true;
    /**
     * the last date an invitation was sent to this user. previosuly invitations are not recorded
     */
    lastInvitationSentOn;
    /**
     * the date an invitation was accepted by this user which would be the date they created an account
     */
    invitationAcceptedOn;
    /**
     * get the users name
     *
     * @returns the users full name
     */
    get name() {
        return `${this.givenName} ${this.familyName}`.trim();
    }
    /**
     * get the current state of the user
     *
     * @returns a textual description of the state of the user
     */
    get status() {
        if (!this.enabled)
            return 'Disabled';
        if (this.lastInvitationSentOn) {
            if (!this.invitationAcceptedOn)
                return `Last Invited ${this.lastInvitationSentOn}`;
        }
        return 'Enabled';
    }
    /**
     * get the users full name
     *
     * @returns the users full name
     */
    get identityProvider() {
        const fname = this.givenName ? this.givenName : '';
        const lname = this.familyName ? this.familyName : '';
        let fullName = `${fname} ${lname}`.trim();
        fullName = fullName === '' ? '-' : fullName;
        return fullName;
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], User.prototype, "withinOrganizationId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(128)
], User.prototype, "givenName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128)
], User.prototype, "familyName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(128)
], User.prototype, "contactEmail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(1024)
], User.prototype, "avatarUrl", void 0);
__decorate([
    (0, class_validator_1.IsNumber)()
], User.prototype, "performsId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(128)
], User.prototype, "primaryIdentityProvider", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)()
], User.prototype, "enabled", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Validate)(IsBeforeToday_1.IsBeforeToday)
], User.prototype, "lastInvitationSentOn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Validate)(IsBeforeToday_1.IsBeforeToday)
], User.prototype, "invitationAcceptedOn", void 0);
exports.User = User;
//# sourceMappingURL=User.js.map