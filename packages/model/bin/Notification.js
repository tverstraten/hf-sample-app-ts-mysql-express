"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const class_validator_1 = require("class-validator");
const AbstractMutable_1 = require("./AbstractMutable");
/**
 * a single notice sent out to a user
 */
class Notification extends AbstractMutable_1.AbstractMutable {
    /**
     * the user the notification is for
     *
     * @see User
     */
    userId;
    /**
     * the text of the message
     */
    text = '';
    /**
     * when the notification was read
     */
    readOn;
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)()
], Notification.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(8192)
], Notification.prototype, "text", void 0);
__decorate([
    (0, class_validator_1.IsDate)()
], Notification.prototype, "readOn", void 0);
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map