import { GeneratedSubscriptionTypeMetricsDac } from './generatedBase/GeneratedSubscriptionTypeMetricsDac'
import { RdbmsMapping } from './generatedBase/RdbmsMapping'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class SubscriptionTypeMetricsDac extends GeneratedSubscriptionTypeMetricsDac
{
	// Add custom code as required
}

// make sure to leave this line here
RdbmsMapping.registerDac('SubscriptionTypeMetrics', SubscriptionTypeMetricsDac)
