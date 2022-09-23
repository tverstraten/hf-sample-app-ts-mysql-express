import { AbstractMutable } from './AbstractMutable';
/**
 * a complete meta data description of an application system
 */
export declare class SystemDescription extends AbstractMutable {
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * a word that is a human readable identifier for the component
     */
    name: string;
    /**
     * a sentence or phrase that fully describes the table
     */
    description: string;
    /**
     * the builder configuration to produce the system
     *
     * @see PersistentBuilderConfiguration
     */
    configurationId?: number;
    /**
     * an instance of System converted to json with recursion disconnected
     */
    systemAsJson?: string;
}
