"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
const IdentityProvider_1 = require("./IdentityProvider");
class Identity extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.providedBy = IdentityProvider_1.IdentityProvider.github;
        this.socialIdentifier = "";
        this.enabled = false;
    }
}
exports.Identity = Identity;
