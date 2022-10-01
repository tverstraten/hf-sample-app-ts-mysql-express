"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const Email_1 = require("../model/Email");
function getValid() {
    const obj = new Email_1.Email();
    obj.createdOn = new Date();
    obj.lastUpdatedOn = new Date();
    obj.withinOrganizationId = 1;
    obj.bccd = undefined;
    obj.subject = 'its about';
    obj.body = 'this is the content';
    obj.ccd = undefined;
    obj.firstRead = undefined;
    obj.from = 'me@myplace.com';
    obj.userSentToId = 1;
    obj.sentTo = 'one@recipient.com';
    return obj;
}
describe('Rules', () => {
    it('all values pass', async () => {
        const obj = getValid();
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(0);
    });
    it('bad cc ', async () => {
        const obj = getValid();
        obj.ccd = 'ok@fine.com, bad@email';
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(1);
    });
    it('bad bcc ', async () => {
        const obj = getValid();
        obj.bccd = 'ok@fine.com, bad@email';
        const errors = await (0, class_validator_1.validate)(obj);
        expect(errors).not.toBeNull();
        expect(errors.length).toBe(1);
    });
});
