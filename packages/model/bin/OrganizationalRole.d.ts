import { AbstractMutable } from './AbstractMutable';
/**
 * a categorization of the types of actions and ensuing responsibilities that a user may perform for an organization
 */
export declare class OrganizationalRole extends AbstractMutable {
    /**
     * the human readable identifier for the role
     */
    name: string;
    /**
     * a sentence or phrase that describe the role
     */
    description: string;
    /**
     * well known names
     */
    static operator: string;
    static user: string;
    static administrator: string;
    static administratorWithBilling: string;
    static internalAdministrator: string;
    static internalSupport: string;
    static internalBilling: string;
}
