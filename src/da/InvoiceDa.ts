import { Invoice } from '../model/Invoice'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class InvoiceDa extends AbstractDa<Invoice> {
	protected getTableName(): string {
		return 'Invoice'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
