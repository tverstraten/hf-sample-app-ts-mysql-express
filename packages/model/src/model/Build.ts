import { IsDate, IsNotEmpty, IsNumber, IsOptional, Validate } from 'class-validator'
import { IsBeforeToday } from '../validators/IsBeforeToday'
import { AbstractMutable } from './AbstractMutable'

/**
 * one invocation of a builder
 */
export class Build extends AbstractMutable {
	/**
	 * the organization it is for
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * the system the build is for
	 *
	 * @see SystemDescription
	 */
	@IsNumber()
	@IsNotEmpty()
	forSystemId?: number

	/**
	 * the point in time the build was started
	 */
	@IsDate()
	@IsNotEmpty()
	@Validate(IsBeforeToday)
	startedOn: Date = new Date()

	/**
	 * the point in time the build was completed
	 */
	@IsOptional()
	@IsDate()
	finishedOn?: Date

	/**
	 * the id of the user that built it
	 *
	 * @see User
	 */
	@IsOptional()
	@IsNumber()
	builtById?: number

	/**
	 * the user that triggered the build
	 *
	 * @see User
	 */
	@IsOptional()
	@IsNumber()
	triggeredById?: number
}
