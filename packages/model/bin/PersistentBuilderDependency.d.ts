import { AbstractTraceable } from './AbstractTraceable';
/**
 * a point of inheritence for classes that can be traced
 */
export declare class PersistentBuilderDependency extends AbstractTraceable {
    /**
     * the id of the builder that is dependent
     *
     * @see PersistentBuilderVersion
     */
    builderId?: number;
    /**
     * the id of the builder that provides the required functionality
     *
     * @see PersistentBuilderVersion
     */
    dependentOnId?: number;
}
