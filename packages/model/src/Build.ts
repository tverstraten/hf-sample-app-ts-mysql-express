import { IsBeforeToday } from '@tverstraten/hf-validators'
import { IsDate, IsInt, IsNotEmpty, IsOptional, Validate } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { Organization } from './Organization'
import { SystemDescription } from './SystemDescription'
import { User } from './User'
/**
 * One invocation of a builder.
 */
export class Build extends AbstractMutable {
	/**
	 * The organization it is for.
	 *
	 * @see Organization
	 */
	@IsInt()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * The organization it is for.
	 */
	withinOrganization?: Organization

	/**
	 * The system the build is for.
	 *
	 * @see SystemDescription
	 */
	@IsInt()
	@IsNotEmpty()
	forSystemId?: number

	/**
	 * The system the build is for.
	 */
	forSystem?: SystemDescription

	/**
	 * The point in time the build was started.
	 */
	@IsDate()
	@IsNotEmpty()
	@Validate(IsBeforeToday)
	startedOn?: Date = new Date()

	/**
	 * The point in time the build was completed.
	 */
	@IsOptional()
	@IsDate()
	finishedOn?: Date

	/**
	 * The id of the user that built it.
	 *
	 * @see User
	 */
	@IsOptional()
	@IsInt()
	builtById?: number

	/**
	 * The id of the user that built it.
	 */
	builtBy?: User

	/**
	 * The user that triggered the build.
	 *
	 * @see User
	 */
	@IsOptional()
	@IsInt()
	triggeredById?: number

	/**
	 * The user that triggered the build.
	 */
	triggeredBy?: User
}
