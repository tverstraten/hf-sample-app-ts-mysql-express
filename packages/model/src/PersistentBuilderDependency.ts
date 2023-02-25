import { IsNumber } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'

/**
 * An indication of one builder being dependent upon another.
 */
export class PersistentBuilderDependency extends AbstractTraceable {
	/**
	 * The id of the builder that is dependent.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsNumber()
	builderId?: number = 0

	/**
	 * The id of the builder that provides the required functionality.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsNumber()
	dependentOnId?: number = 0
}
