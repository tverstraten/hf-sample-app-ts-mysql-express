import { Traceable } from './Traceable'

/**
 * A class implements this if it tracks usage data.
 */
export interface Mutable extends Traceable {
	/**
	 * The historical version of the object. This does represent a designator of a single state that the object has been in,
	 * in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
	 * of 0 and each new state is added with the value increased by 1.
	 */
	objectVersion: number

	/**
	 * The id of the user that last update this.
	 */
	lastUpdatedById?: number

	/**
	 * The point in time that this object was last updated.
	 */
	lastUpdatedOn?: Date

	/**
	 * Is the object deleted.
	 */
	isDeleted: boolean
}
