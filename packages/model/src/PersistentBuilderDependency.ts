import { IsInt } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'
import { PersistentBuilderVersion } from './PersistentBuilderVersion'

/**
 * An indication of one builder being dependent upon another.
 */
export class PersistentBuilderDependency extends AbstractTraceable {
	/**
	 * The id of the builder that is dependent.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsInt()
	builderId?: number = 0

	/**
	 * The builder that is dependent.
	 */
	builder?: PersistentBuilderVersion

	/**
	 * The id of the builder that provides the required functionality.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsInt()
	dependentOnId?: number = 0

	/**
	 * The builder that provides the required functionality.
	 */
	dependentOn?: PersistentBuilderVersion
}
