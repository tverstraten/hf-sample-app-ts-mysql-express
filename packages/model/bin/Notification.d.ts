import { AbstractMutable } from './AbstractMutable';
/**
 * a single notice sent out to a user
 */
export declare class Notification extends AbstractMutable {
    /**
     * the user the notification is for
     *
     * @see User
     */
    userId?: number;
    /**
     * the text of the message
     */
    text: string;
    /**
     * when the notification was read
     */
    readOn?: Date;
}
