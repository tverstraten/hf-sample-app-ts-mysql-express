import { AbstractMutable } from './AbstractMutable';
import { IdentityProvider } from './IdentityProvider';
/**
 * one single persona that may use the system.
 */
export declare class User extends AbstractMutable {
    /**
     * the id of the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * the name the user uses within their family to be identified. often called surname
     */
    givenName: string;
    /**
     * the name of the persons family, often presented as their "last" name
     */
    familyName: string;
    /**
     * the email address that they indicate should be used to contact them at
     */
    contactEmail: string;
    /**
     * a url to the image the users makes use of as an avatar
     */
    avatarUrl?: string;
    /**
     * the role that the user performs for the organization
     *
     * @see OrganizationalRole
     */
    performsId?: number;
    /**
     * the identity provider that this account is based off of
     */
    primaryIdentityProvider: IdentityProvider;
    /**
     * if true, the user is currently able to log into the system ad perform operations
     * NOTE: access may also be restricted if the account is not currently enabled
     */
    enabled: boolean;
    /**
     * the last date an invitation was sent to this user. previosuly invitations are not recorded
     */
    lastInvitationSentOn?: Date;
    /**
     * the date an invitation was accepted by this user which would be the date they created an account
     */
    invitationAcceptedOn?: Date;
    /**
     * get the users name
     *
     * @returns the users full name
     */
    get name(): string;
    /**
     * get the current state of the user
     *
     * @returns a textual description of the state of the user
     */
    get status(): string;
    /**
     * get the users full name
     *
     * @returns the users full name
     */
    get identityProvider(): string;
}
