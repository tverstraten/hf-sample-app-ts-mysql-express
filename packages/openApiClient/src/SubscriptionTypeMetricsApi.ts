import { AbstractTraceableApi } from './AbstractTraceableApi'
import { SubscriptionTypeMetrics } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class SubscriptionTypeMetrics.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SubscriptionTypeMetricsApi extends AbstractTraceableApi<SubscriptionTypeMetrics> {
	constructor() {
		super('SubscriptionTypeMetrics')
	}
}
