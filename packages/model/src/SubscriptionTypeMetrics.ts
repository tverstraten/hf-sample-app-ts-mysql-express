import { IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'
import { SubscriptionType } from './SubscriptionType'

/**
 * A plan for subscriptions.
 */
export class SubscriptionTypeMetrics extends AbstractTraceable {
	/**
	 * The type of subscription this is for.
	 */
	@IsNotEmpty()
	@IsEnum(SubscriptionType)
	type: SubscriptionType = SubscriptionType.free

	/**
	 * A human readable identifier for the type of subscription.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(255)
	name = ''

	/**
	 * A word or phrase used to provide basic information on the subscription.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(1024)
	description = ''

	/**
	 * The maximum number of users that can be active in the organization.
	 */
	@IsNumber()
	@IsNotEmpty()
	numberOfUsersAllowed = 0

	/**
	 * The maximum number of builds that can be performed for each billing cycle.
	 */
	@IsNumber()
	@IsNotEmpty()
	numberOfBuildsAllowed = 0

	/**
	 * The incremental cost of a user beyond what is permitted under the plan.
	 */
	@IsNumber()
	@IsNotEmpty()
	costPerUser = 0

	/**
	 * The incremental cost per build beyond what is permitted under the plan.
	 */
	@IsNumber()
	@IsNotEmpty()
	costPerBuild = 0
}
