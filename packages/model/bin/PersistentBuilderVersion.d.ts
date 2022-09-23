import { AbstractMutable } from './AbstractMutable';
import { PersistentBuilderType } from './PersistentBuilderType';
/**
 * one set of details that configure a builder
 */
export declare abstract class PersistentBuilderVersion extends AbstractMutable {
    /**
     * the derivation of this class
     */
    type: PersistentBuilderType;
    /**
     * the id it is a version for
     *
     * @see PersistentBuilder
     */
    persistentBuilderId?: number;
    /**
     * an identifier of its version
     */
    version: string;
    /**
     * if true, this version is released for use
     */
    released: boolean;
    /**
     * a csv list of tags associated with this version of this builder, all are soft coded from the list of tags
     */
    tags: string;
    /**
     * the textual body of the builder
     */
    text: string;
    /**
     * if true, this version should not be used any more
     */
    deprecated: boolean;
    /**
     * the id of a builder version that should be used instead of this if its deprecated
     *
     * @see PersistentBuilderVersion
     */
    suggestedAlternateId?: number;
}
