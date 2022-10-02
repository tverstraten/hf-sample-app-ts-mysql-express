import { SubscriptionType } from './SubscriptionType'
import { Traceable } from './Traceable'

export class Organization implements Traceable {
	id = 0

	name = ''

	primaryContactEmail = ''

	billingContactEmail = ''

	balance = 0

	currentSubscription: SubscriptionType = SubscriptionType.free
}
