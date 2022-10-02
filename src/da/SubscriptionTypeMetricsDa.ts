import { SubscriptionTypeMetrics } from '../model/SubscriptionTypeMetrics'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SubscriptionTypeMetricsDa extends AbstractDa<SubscriptionTypeMetrics> {
	protected getTableName(): string {
		return 'SubscriptionTypeMetrics'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
