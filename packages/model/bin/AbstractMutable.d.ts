import { AbstractTraceable } from './AbstractTraceable';
/**
 * a point of inheritence for classes that can be traced
 */
export declare abstract class AbstractMutable extends AbstractTraceable {
    /**
     * the historical version of the object. this does represent a designator of a single state that the object has been in,
     * in conjunction with id it represents one state of one unique object. the current state is always denoted by an objectVersion
     * of 0 and each new state is added with the value increased by 1.
     */
    objectVersion: number;
    /**
     * the id of the user that last update this
     *
     * @see User
     */
    lastUpdatedById?: number;
    /**
     * the point in time that this object was last updated
     */
    lastUpdatedOn: Date;
}
