import { BillingPeriod } from '../model/BillingPeriod'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class BillingPeriodDa extends AbstractDa<BillingPeriod> {
	protected getTableName(): string {
		return 'BillingPeriod'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
