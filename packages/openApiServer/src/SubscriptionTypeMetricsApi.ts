/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SubscriptionTypeMetrics } from '@tverstraten/hf-model'
import { SubscriptionTypeMetricsService } from '@tverstraten/hf-bll'
import { AbstractTraceableApi } from './AbstractTraceableApi'

export class SubscriptionTypeMetricsApi extends AbstractTraceableApi<SubscriptionTypeMetrics, SubscriptionTypeMetricsService> {
	static baseName = '/subscriptionTypeMetrics'

	constructor(app: any) {
		super(SubscriptionTypeMetrics, SubscriptionTypeMetricsApi.baseName, SubscriptionTypeMetricsService)
		this.bind(app)
	}
}
