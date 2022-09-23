import { AbstractMutable } from './AbstractMutable';
/**
 * an email that was sent
 */
export declare class Email extends AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * the email address that sent it
     */
    from: string;
    /**
     * the email addresses it was sent to
     */
    sentTo: string;
    /**
     * the the users the sentTo email addresses represent
     *
     * @see Organization
     */
    userSentToId?: number;
    /**
     * a csv list of the email addresses that were cc'd
     */
    ccd?: string;
    /**
     * get the list of cc'd as an array of email addresses
     *
     * @returns the cc text converted into an array with email address as one entry in the array
     */
    get ccdArray(): string[];
    /**
     * a csv ist of the email addresses that were bcc'd
     */
    bccd?: string;
    /**
     * get the list of bcc'd as an array of email addresses
     *
     * @returns the bcc text converted into an array with email address as one entry in the array
     */
    get bccdArray(): string[];
    /**
     * to the best of our knowledge, when was it first read?
     */
    firstRead?: Date;
    /**
     * the subject of the email
     */
    subject: string;
    /**
     * the contents of the email, html encoded
     */
    body: string;
}
