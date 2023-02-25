import { IsBeforeToday } from '@tverstraten/hf-validators'
import { IsDate, IsNotEmpty, IsNumber, IsOptional, Validate } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
/**
 * One invocation of a builder.
 */
export class Build extends AbstractMutable {
	/**
	 * The organization it is for.
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * The system the build is for.
	 *
	 * @see SystemDescription
	 */
	@IsNumber()
	@IsNotEmpty()
	forSystemId?: number

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
	@IsNumber()
	builtById?: number

	/**
	 * The user that triggered the build.
	 *
	 * @see User
	 */
	@IsOptional()
	@IsNumber()
	triggeredById?: number
}
