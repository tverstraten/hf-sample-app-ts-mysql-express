import { Traceable } from './Traceable'

export class BillingPeriod implements Traceable {
	id = 0

	name = ''

	start?: Date

	end?: Date
}
