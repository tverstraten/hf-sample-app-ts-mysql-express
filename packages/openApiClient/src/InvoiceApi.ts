import { AbstractApi } from './AbstractApi'
import { Invoice } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class Invoice.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvoiceApi extends AbstractApi<Invoice> {
	constructor() {
		super('Invoice')
	}
}
