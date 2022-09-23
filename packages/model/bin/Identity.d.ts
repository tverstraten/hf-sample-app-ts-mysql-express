import { AbstractMutable } from './AbstractMutable';
import { IdentityProvider } from './IdentityProvider';
/**
 * the definition of a way in which a user is identified to the system this can be an access token or a social account
 * github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws)
 */
export declare class Identity extends AbstractMutable {
    /**
     * the system that provides the identification
     */
    providedBy: IdentityProvider;
    /**
     * the identifer used by the social system defined by providedBy
     */
    socialIdentifier: string;
    /**
     * the user this belongs to
     *
     * @see User
     */
    forId?: number;
    /**
     * is the identity currently valid?
     */
    enabled: boolean;
    /**
     * the point in time which the token is no longer valid
     */
    expiresOn?: Date;
}
