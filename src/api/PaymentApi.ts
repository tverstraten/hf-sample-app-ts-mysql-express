import { Payment } from '../model/Payment'
import { PaymentService } from '../bl/PaymentService'
import { AbstractController } from './AbstractController.generated'

export class PaymentApi extends AbstractController<Payment, PaymentService> {
	static baseName = '/payment'

	constructor(app: any) {
		super(Payment, PaymentApi.baseName, PaymentService)
		this.bind(app)
	}
}
