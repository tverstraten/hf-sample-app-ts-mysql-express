/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Payment } from '@tverstraten/hf-model'
import { PaymentService } from '@tverstraten/hf-bll'
import { AbstractApi } from './AbstractApi'

export class PaymentApi extends AbstractApi<Payment, PaymentService> {
	static baseName = '/payment'

	constructor(app: any) {
		super(Payment, PaymentApi.baseName, PaymentService)
		this.bind(app)
	}
}
