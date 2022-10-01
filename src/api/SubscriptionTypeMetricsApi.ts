import { SubscriptionTypeMetrics } from '../model/SubscriptionTypeMetrics'
import { SubscriptionTypeMetricsService } from '../bl/SubscriptionTypeMetricsService'
import { AbstractController } from './AbstractController.generated'

export class SubscriptionTypeMetricsApi extends AbstractController<SubscriptionTypeMetrics, SubscriptionTypeMetricsService> {
	static baseName = '/subscriptionTypeMetrics'

	constructor(app: any) {
		super(SubscriptionTypeMetrics, SubscriptionTypeMetricsApi.baseName, SubscriptionTypeMetricsService)
		this.bind(app)
	}
}
