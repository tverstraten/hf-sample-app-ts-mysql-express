import { Traceable } from './Traceable';
export declare class Invitation implements Traceable {
    id: number;
    toEmail: string;
    invitedById?: number;
    invitedUserId?: number;
    lastReminderSentOn?: Date;
}
//# sourceMappingURL=Invitation.d.ts.map