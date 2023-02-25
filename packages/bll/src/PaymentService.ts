/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PaymentDac } from '@tverstraten/hf-dal'
import { AbstractService } from './AbstractService'
import { Payment } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Payment.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class PaymentService extends AbstractService<Payment> {
	constructor() {
		super(new PaymentDac())
	}
}
