import { AbstractMutable } from './AbstractMutable';
/**
 * one user extending the ability for another user to join the systems as a member of an organization
 */
export declare class Invitation extends AbstractMutable {
    /**
     * the email address that the invitation was sent to
     */
    toEmail: string;
    /**
     * the user that extended the invitation
     *
     * @see User
     */
    invitedById?: number;
    /**
     * the user that has been invited. when the invitation is created a user is also created to mark them as a placeholder
     *
     * @see User
     */
    invitedUserId?: number;
    /**
     * the point in time the most recent reminder was sent
     */
    lastReminderSentOn?: Date;
}
