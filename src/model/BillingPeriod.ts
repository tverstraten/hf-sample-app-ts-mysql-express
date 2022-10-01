import { AbstractMutable } from './AbstractMutable'

export class BillingPeriod extends AbstractMutable {
	name = ''

	start?: Date

	end?: Date
}
