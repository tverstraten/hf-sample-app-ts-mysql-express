"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsEmailCsv_1 = require("../validators/IsEmailCsv");
describe('EmailCsv', () => {
    it('undefined', async () => {
        expect((0, IsEmailCsv_1.emailCsv)(undefined)).toBeFalsy();
    });
    it('null', async () => {
        expect((0, IsEmailCsv_1.emailCsv)(null)).toBeFalsy();
    });
    it('empty', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('')).toBeTruthy();
    });
    it('space', async () => {
        expect((0, IsEmailCsv_1.emailCsv)(' ')).toBeTruthy();
    });
    it('spaces', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('   ')).toBeTruthy();
    });
    it('one word', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi')).toBeFalsy();
    });
    it('one word leading spaces', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('  hi')).toBeFalsy();
    });
    it('one word trailing spaces', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi   ')).toBeFalsy();
    });
    it('one word spaced', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('  hi   ')).toBeFalsy();
    });
    it('two words', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi,there')).toBeFalsy();
    });
    it('one legit email', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com')).toBeTruthy();
    });
    it('one legit email leading spaces', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('  hi@gmail.com')).toBeTruthy();
    });
    it('one legit email trailing spaces', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com  ')).toBeTruthy();
    });
    it('one legit email spaced', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('  hi@gmail.com  ')).toBeTruthy();
    });
    it('two legit emails', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com,yeah@hotmail.com  ')).toBeTruthy();
    });
    it('one legit emails and one word', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com,yeah')).toBeFalsy();
    });
    it('three legit emails spacing 1', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com,yeah@hotmail.com  ,my@email.com')).toBeTruthy();
    });
    it('three legit emails spacing 2', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('  hi@gmail.com,yeah@hotmail.com  ,my@email.com  ')).toBeTruthy();
    });
    it('three legit emails spacing 3', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com,  yeah@hotmail.com  ,my@email.com  ')).toBeTruthy();
    });
    it('leading comma', async () => {
        expect((0, IsEmailCsv_1.emailCsv)(',hi@gmail.com,yeah@hotmail.com')).toBeTruthy();
    });
    it('trailing comma', async () => {
        expect((0, IsEmailCsv_1.emailCsv)('hi@gmail.com,yeah@hotmail.com,')).toBeTruthy();
    });
});
//# sourceMappingURL=EmailCsv.spec.js.map