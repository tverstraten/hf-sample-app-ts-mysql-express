import { Traceable } from './Traceable';
/**
 * a point of inheritence for classes that can be traced
 */
export declare abstract class AbstractTraceable implements Traceable {
    /**
     * the identifier
     */
    id: number;
    /**
     * the id of the user that created this
     *
     * @see User
     */
    createdById?: number;
    /**
     * the point in time that this object was first created
     */
    createdOn: Date;
}
