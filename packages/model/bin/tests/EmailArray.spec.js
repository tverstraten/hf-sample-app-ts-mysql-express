"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsEmailArray_1 = require("../validators/IsEmailArray");
describe('EmailCsv', () => {
    it('empty', async () => {
        expect((0, IsEmailArray_1.emailArray)([])).toBeTruthy();
    });
    it('space', async () => {
        expect((0, IsEmailArray_1.emailArray)([' '])).toBeTruthy();
    });
    it('spaces', async () => {
        expect((0, IsEmailArray_1.emailArray)(['   '])).toBeTruthy();
    });
    it('one word', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi'])).toBeFalsy();
    });
    it('one word leading spaces', async () => {
        expect((0, IsEmailArray_1.emailArray)(['  hi'])).toBeFalsy();
    });
    it('one word trailing spaces', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi   '])).toBeFalsy();
    });
    it('one word spaced', async () => {
        expect((0, IsEmailArray_1.emailArray)(['  hi   '])).toBeFalsy();
    });
    it('two words', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi', 'there'])).toBeFalsy();
    });
    it('one legit email', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi@gmail.com'])).toBeTruthy();
    });
    it('one legit email leading spaces', async () => {
        expect((0, IsEmailArray_1.emailArray)(['  hi@gmail.com'])).toBeTruthy();
    });
    it('one legit email trailing spaces', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi@gmail.com  '])).toBeTruthy();
    });
    it('one legit email spaced', async () => {
        expect((0, IsEmailArray_1.emailArray)(['  hi@gmail.com  '])).toBeTruthy();
    });
    it('two legit emails', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi@gmail.com', 'yeah@hotmail.com  '])).toBeTruthy();
    });
    it('one legit emails and one word', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi@gmail.com', 'yeah'])).toBeFalsy();
    });
    it('three legit emails', async () => {
        expect((0, IsEmailArray_1.emailArray)(['hi@gmail.com', 'yeah@hotmail.com  ', 'my@email.com'])).toBeTruthy();
    });
    it('three legit emails one entry empty', async () => {
        expect((0, IsEmailArray_1.emailArray)(['  hi@gmail.com', 'yeah@hotmail.com  ', 'my@email.com  '])).toBeTruthy();
    });
});
//# sourceMappingURL=EmailArray.spec.js.map