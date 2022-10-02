"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identity = void 0;
const IdentityProvider_1 = require("./IdentityProvider");
class Identity {
    constructor() {
        this.id = 0;
        this.providedBy = IdentityProvider_1.IdentityProvider.github;
        this.socialIdentifier = '';
        this.enabled = false;
    }
}
exports.Identity = Identity;
