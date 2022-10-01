import { Invoice } from '../model/Invoice'
import { InvoiceService } from '../bl/InvoiceService'
import { AbstractController } from './AbstractController.generated'

export class InvoiceApi extends AbstractController<Invoice, InvoiceService> {
	static baseName = '/invoice'

	constructor(app: any) {
		super(Invoice, InvoiceApi.baseName, InvoiceService)
		this.bind(app)
	}
}
