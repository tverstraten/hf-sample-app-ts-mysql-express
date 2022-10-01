import { PaymentDa } from '../da/PaymentDa'
import { AbstractService } from './AbstractService.generated'
import { Payment } from '../model/Payment'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PaymentService extends AbstractService<Payment> {
	constructor() {
		super(new PaymentDa())
	}
}
