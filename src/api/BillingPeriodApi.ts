import { BillingPeriod } from '../model/BillingPeriod'
import { BillingPeriodService } from '../bl/BillingPeriodService'
import { AbstractController } from './AbstractController.generated'

export class BillingPeriodApi extends AbstractController<BillingPeriod, BillingPeriodService> {
	static baseName = '/billingPeriod'

	constructor(app: any) {
		super(BillingPeriod, BillingPeriodApi.baseName, BillingPeriodService)
		this.bind(app)
	}
}
