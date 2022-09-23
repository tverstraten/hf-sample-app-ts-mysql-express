import { AbstractMutable } from './AbstractMutable';
import { PersistentBuilderType } from './PersistentBuilderType';
import { ReleaseLevel } from './ReleaseLevel';
/**
 * one set of details that configure a builder
 */
export declare class PersistentBuilder extends AbstractMutable {
    /**
     * the derivation of this class
     */
    type: PersistentBuilderType;
    /**
     * the organization it is for
     *
     * @see Organization
     */
    withinOrganizationId?: number;
    /**
     * its human readable identifier
     */
    name: string;
    /**
     * the degree to which it has been released. this controls who gets to see it
     */
    releaseLevel: ReleaseLevel;
    /**
     * the current version in use
     *
     * @see PersistentBuilderVersion
     */
    mostCurrentVersionId?: number;
}
