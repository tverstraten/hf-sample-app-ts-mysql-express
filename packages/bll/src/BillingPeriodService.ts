/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { BillingPeriodDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { BillingPeriod } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class BillingPeriod.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class BillingPeriodService extends AbstractMutableService<BillingPeriod> {
	constructor() {
		super(new BillingPeriodDac())
	}
}
