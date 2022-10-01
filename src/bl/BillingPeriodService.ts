import { BillingPeriodDa } from '../da/BillingPeriodDa'
import { AbstractService } from './AbstractService.generated'
import { BillingPeriod } from '../model/BillingPeriod'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class BillingPeriodService extends AbstractService<BillingPeriod> {
	constructor() {
		super(new BillingPeriodDa())
	}
}
