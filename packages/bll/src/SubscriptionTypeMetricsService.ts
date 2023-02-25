/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SubscriptionTypeMetricsDac } from '@tverstraten/hf-dal'
import { AbstractTraceableService } from './AbstractTraceableService'
import { SubscriptionTypeMetrics } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class SubscriptionTypeMetrics.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SubscriptionTypeMetricsService extends AbstractTraceableService<SubscriptionTypeMetrics> {
	constructor() {
		super(new SubscriptionTypeMetricsDac())
	}
}
