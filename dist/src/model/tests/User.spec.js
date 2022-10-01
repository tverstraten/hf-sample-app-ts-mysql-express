"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const IdentityProvider_1 = require("../src/model/IdentityProvider");
const User_1 = require("../src/model/User");
function getValid() {
    const obj = new User_1.User();
    obj.avatarUrl = "https://some.place.com/pic.jpg";
    obj.contactEmail = "fred@bad.com";
    obj.createdOn = new Date();
    obj.enabled = true;
    obj.familyName = "family";
    obj.givenName = "given";
    obj.invitationAcceptedOn = new Date();
    obj.lastInvitationSentOn = new Date();
    obj.lastUpdatedOn = new Date();
    obj.performsId = 1;
    obj.primaryIdentityProvider = IdentityProvider_1.IdentityProvider.google;
    obj.withinOrganizationId = 1;
    return obj;
}
describe("Rules", () => {
    it("all values pass", async () => {
        const obj = getValid();
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(0);
    });
    it("bad avatar 1", async () => {
        const obj = getValid();
        obj.avatarUrl = "https:/some.place.com/pic.jpg";
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(1);
    });
    it("empty avatar", async () => {
        const obj = getValid();
        obj.avatarUrl = undefined;
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(0);
    });
    it("bad contact", async () => {
        const obj = getValid();
        obj.contactEmail = "fred@badcom";
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(1);
    });
    it("bad invitationAcceptedOn", async () => {
        const obj = getValid();
        obj.invitationAcceptedOn = new Date(new Date().getTime() + 5000);
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(1);
    });
    it("bad lastInvitationSentOn", async () => {
        const obj = getValid();
        obj.lastInvitationSentOn = new Date(new Date().getTime() + 5000);
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(1);
    });
});
