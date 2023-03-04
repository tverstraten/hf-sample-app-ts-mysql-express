import { IsDate, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { Traceable } from './Traceable'
import { User } from './User'

/**
 * A point of inheritance for classes that can be traced.
 */
export abstract class AbstractTraceable implements Traceable {
	/**
	 * The identifier.
	 */
	@IsInt()
	@IsNotEmpty()
	id = 0

	/**
	 * The id of the user that created this.
	 *
	 * @see User
	 */
	@IsOptional()
	@IsInt()
	createdById?: number

	/**
	 * The user that created this.
	 */
	createdBy?: User

	/**
	 * The point in time that this object was first created in persistent storage.
	 */
	@IsOptional()
	@IsDate()
	createdOn?: Date
}
