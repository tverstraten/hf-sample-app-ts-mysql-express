import { AbstractMutable } from './AbstractMutable';
/**
 * a statement of one repository that may be usedd by the organization and how to connect to it
 */
export declare class RepositoryDefinition extends AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * the human readable identifier for the repository
     */
    name: string;
    /**
     * the human readable identifier for the repository service
     */
    providerName: string;
    /**
     * the human readable identifier for the repository
     */
    url: string;
    /**
     * the access token to use to work with the repo
     */
    pat: string;
}
