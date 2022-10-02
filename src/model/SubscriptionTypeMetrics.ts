import { Describable, Nameable } from '@hfadmin/runtime'
import { Traceable } from './Traceable'

export class SubscriptionTypeMetrics implements Nameable, Describable, Traceable {
	id = 0

	name = ''

	description = ''

	numberOfUsersAllowed?: number

	numberOfBuildsAllowed?: number
}
