"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
const IdentityProvider_1 = require("./IdentityProvider");
class User extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.givenName = "";
        this.familyName = "";
        this.contactEmail = "";
        this.primaryIdentityProvider = IdentityProvider_1.IdentityProvider.github;
        this.enabled = true;
    }
    get name() {
        return `${this.givenName} ${this.familyName}`.trim();
    }
    get status() {
        if (!this.enabled)
            return "Disabled";
        if (this.lastInvitationSentOn) {
            if (!this.invitationAcceptedOn)
                return `Last Invited ${this.lastInvitationSentOn}`;
        }
        return "Enabled";
    }
    get identityProvider() {
        const fname = this.givenName ? this.givenName : "";
        const lname = this.familyName ? this.familyName : "";
        let fullName = `${fname} ${lname}`.trim();
        fullName = fullName === "" ? "-" : fullName;
        return fullName;
    }
}
exports.User = User;
