import { Traceable } from './Traceable'

export class SubscriptionTypeMetrics implements Traceable {
	id = 0

	name = ''

	description = ''

	numberOfUsersAllowed?: number

	numberOfBuildsAllowed?: number
}
