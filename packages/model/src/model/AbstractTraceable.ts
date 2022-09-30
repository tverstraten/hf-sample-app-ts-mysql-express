import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { Traceable } from './Traceable'

/**
 * a point of inheritance for classes that can be traced
 */
export abstract class AbstractTraceable implements Traceable {
	/**
	 * the identifier
	 */
	@IsNumber()
	@IsNotEmpty()
	id = 0

	/**
	 * the id of the user that created this
	 *
	 * @see User
	 */
	@IsNumber()
	createdById?: number = 0

	/**
	 * the point in time that this object was first created
	 */
	@IsOptional()
	@IsDate()
	createdOn: Date = new Date()
}
