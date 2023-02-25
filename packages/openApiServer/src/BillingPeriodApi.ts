/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { BillingPeriod } from '@tverstraten/hf-model'
import { BillingPeriodService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class BillingPeriodApi extends AbstractMutableApi<BillingPeriod, BillingPeriodService> {
	static baseName = '/billingPeriod'

	constructor(app: any) {
		super(BillingPeriod, BillingPeriodApi.baseName, BillingPeriodService)
		this.bind(app)
	}
}
