import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { Traceable } from './Traceable'

/**
 * A point of inheritance for classes that can be traced.
 */
export abstract class AbstractTraceable implements Traceable {
	/**
	 * The identifier.
	 */
	@IsNumber()
	@IsNotEmpty()
	id = 0

	/**
	 * The id of the user that created this.
	 *
	 * @see User
	 */
	@IsOptional()
	@IsNumber()
	createdById?: number

	/**
	 * The point in time that this object was first created in persistent storage.
	 */
	@IsOptional()
	@IsDate()
	createdOn?: Date
}
