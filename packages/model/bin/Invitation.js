"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invitation = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
const IsBeforeToday_1 = require("./validators/IsBeforeToday");
/**
 * one user extending the ability for another user to join the systems as a member of an organization
 */
class Invitation extends AbstractMutable_1.AbstractMutable {
    /**
     * the email address that the invitation was sent to
     */
    toEmail = '';
    /**
     * the user that extended the invitation
     *
     * @see User
     */
    invitedById;
    /**
     * the user that has been invited. when the invitation is created a user is also created to mark them as a placeholder
     *
     * @see User
     */
    invitedUserId;
    /**
     * the point in time the most recent reminder was sent
     */
    lastReminderSentOn;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(128)
], Invitation.prototype, "toEmail", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Invitation.prototype, "invitedById", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Invitation.prototype, "invitedUserId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.Validate)(IsBeforeToday_1.IsBeforeToday)
], Invitation.prototype, "lastReminderSentOn", void 0);
exports.Invitation = Invitation;
//# sourceMappingURL=Invitation.js.map