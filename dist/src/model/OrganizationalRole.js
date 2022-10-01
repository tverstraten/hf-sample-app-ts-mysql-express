"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationalRole = void 0;
const AbstractMutable_1 = require("./AbstractMutable");
class OrganizationalRole extends AbstractMutable_1.AbstractMutable {
    constructor() {
        super(...arguments);
        this.name = "";
        this.description = "";
    }
}
exports.OrganizationalRole = OrganizationalRole;
OrganizationalRole.operator = "operator";
OrganizationalRole.user = "user";
OrganizationalRole.administrator = "administrator";
OrganizationalRole.administratorWithBilling = "administratorWithBilling";
OrganizationalRole.internalAdministrator = "internalAdministrator";
OrganizationalRole.internalSupport = "internalSupport";
OrganizationalRole.internalBilling = "internalBilling";
