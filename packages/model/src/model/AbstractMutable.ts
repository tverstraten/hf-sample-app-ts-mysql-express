import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'

/**
 * a point of inheritence for classes that can be traced
 */
export abstract class AbstractMutable extends AbstractTraceable {
	/**
	 * the historical version of the object. this does represent a designator of a single state that the object has been in,
	 * in conjunction with id it represents one state of one unique object. the current state is always denoted by an objectVersion
	 * of 0 and each new state is added with the value increased by 1.
	 */
	@IsNumber()
	@IsNotEmpty()
	objectVersion = 1

	/**
	 * the id of the user that last update this
	 *
	 * @see User
	 */
	@IsNumber()
	lastUpdatedById?: number = 0

	/**
	 * the point in time that this object was last updated
	 */
	@IsOptional()
	@IsDate()
	lastUpdatedOn: Date = new Date()
}
