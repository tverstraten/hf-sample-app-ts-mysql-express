import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'
import { User } from './User'

/**
 * A point of inheritance for classes that can be traced.
 */
export abstract class AbstractMutable extends AbstractTraceable {
	/**
	 * The historical version of the object. This does represent a designator of a single state that the object has been in,
	 * in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
	 * of 0 and each new state is added with the value increased by 1.
	 */
	@IsInt()
	@IsNotEmpty()
	objectVersion = 1

	/**
	 * The id of the user that last update this.
	 *
	 * @see User
	 */
	@IsOptional()
	@IsInt()
	lastUpdatedById?: number

	/**
	 * The user that last update this.
	 */
	lastUpdatedBy?: User

	/**
	 * The point in time that this object was last updated.
	 */
	@IsOptional()
	@IsDate()
	lastUpdatedOn?: Date

	/**
	 * Is the object deleted.
	 */
	@IsNotEmpty()
	@IsBoolean()
	isDeleted = false
}
