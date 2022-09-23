import { IsNumber } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'

/**
 * a point of inheritence for classes that can be traced
 */
export class PersistentBuilderDependency extends AbstractTraceable {
	/**
	 * the id of the builder that is dependent
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsNumber()
	builderId?: number = 0

	/**
	 * the id of the builder that provides the required functionality
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsNumber()
	dependentOnId?: number = 0
}
