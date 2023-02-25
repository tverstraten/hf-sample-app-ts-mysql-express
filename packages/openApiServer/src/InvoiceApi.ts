/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Invoice } from '@tverstraten/hf-model'
import { InvoiceService } from '@tverstraten/hf-bll'
import { AbstractApi } from './AbstractApi'

export class InvoiceApi extends AbstractApi<Invoice, InvoiceService> {
	static baseName = '/invoice'

	constructor(app: any) {
		super(Invoice, InvoiceApi.baseName, InvoiceService)
		this.bind(app)
	}
}
