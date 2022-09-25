import { Describable, Nameable } from '@harvest-forward/runtime'

/**
 * a plan for subscriptions
 */
export class SubscriptionTypeMetrics implements Nameable, Describable {
	/**
	 * a human readable identifier for the type of subscription
	 */
	name: string

	/**
	 * a word or phrase used to provide basic information on the subscription
	 */
	description: string

	/**
	 * the maximum number of users that can be active in the organization
	 */
	numberOfUsersAllowed: number

	/**
	 * the maximum number of builds that can be performed for each billing cycle
	 */
	numberOfBuildsAllowed: number

	/**
	 * the incremental cost of a user beyond what is permitted under the plan
	 */
	costPerUser: number

	/**
	 * the incremental cost per build beyond what is permitted under the plan
	 */
	costPerBuild: number

	static free = new SubscriptionTypeMetrics('Free', 'The entry level tier', 1, 25, 10, 0.25)
	static pro = new SubscriptionTypeMetrics('Pro', 'A single active user', 1, 500, 10, 0.1)
	static team = new SubscriptionTypeMetrics('Enterprise', 'A small team of users', 10, 5000, 10, 0.25)
	static enterprise = new SubscriptionTypeMetrics('Enterprise', 'An organization with more than a few users', 1, 50, 10, 0.25)

	/**
	 * create a new instance of the object
	 *
	 * @param name - the word or phrase to use to identify the subscription type
	 * @param description - the way in which to describe the subscription
	 * @param numberOfUsersAllowed - the number of concurrent users that can be enabled in a given billing period of the plan. any more are charged
	 * @param numberOfBuildsAllowed - the number the number of builds that cen be performed in a billing period without incurring additional cost
	 * @param costPerUser - the incremental cost of an enabled user in a billing period
	 * @param costPerBuild - the incremental cost of a build run during a billing period
	 */
	private constructor(
		name: string,
		description: string,
		numberOfUsersAllowed: number,
		numberOfBuildsAllowed: number,
		costPerUser: number,
		costPerBuild: number
	) {
		this.name = name
		this.description = description
		this.numberOfUsersAllowed = numberOfUsersAllowed
		this.numberOfBuildsAllowed = numberOfBuildsAllowed
		this.costPerUser = costPerUser
		this.costPerBuild = costPerBuild
	}

	/**
	 * the various types available
	 */
	static types = [SubscriptionTypeMetrics.free, SubscriptionTypeMetrics.pro, SubscriptionTypeMetrics.team, SubscriptionTypeMetrics.enterprise]
}
