import { Describable, Nameable } from '@hfadmin/runtime'

export class SubscriptionTypeMetrics implements Nameable, Describable {
	name: string

	description: string

	numberOfUsersAllowed: number

	numberOfBuildsAllowed: number

	static free = new SubscriptionTypeMetrics('Free', 'The entry level tier', 1, 25)
	static pro = new SubscriptionTypeMetrics('Pro', 'A single active user', 1, 500)
	static team = new SubscriptionTypeMetrics('Enterprise', 'A small team of users', 10, 5000)
	static enterprise = new SubscriptionTypeMetrics('Enterprise', 'An organization with more than a few users', 1, 50)

	private constructor(name: string, description: string, numberOfUsersAllowed: number, numberOfBuildsAllowed: number) {
		this.name = name
		this.description = description
		this.numberOfUsersAllowed = numberOfUsersAllowed
		this.numberOfBuildsAllowed = numberOfBuildsAllowed
	}

	static types = [SubscriptionTypeMetrics.free, SubscriptionTypeMetrics.pro, SubscriptionTypeMetrics.team, SubscriptionTypeMetrics.enterprise]
}
