/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { InvoiceDac } from '@tverstraten/hf-dal'
import { AbstractService } from './AbstractService'
import { Invoice } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Invoice.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvoiceService extends AbstractService<Invoice> {
	constructor() {
		super(new InvoiceDac())
	}
}
