import { InvoiceDa } from '../da/InvoiceDa'
import { AbstractService } from './AbstractService.generated'
import { Invoice } from '../model/Invoice'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvoiceService extends AbstractService<Invoice> {
	constructor() {
		super(new InvoiceDa())
	}
}
