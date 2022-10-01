import { SubscriptionTypeMetricsDa } from '../da/SubscriptionTypeMetricsDa'
import { AbstractService } from './AbstractService.generated'
import { SubscriptionTypeMetrics } from '../model/SubscriptionTypeMetrics'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SubscriptionTypeMetricsService extends AbstractService<SubscriptionTypeMetrics> {
	constructor() {
		super(new SubscriptionTypeMetricsDa())
	}
}
