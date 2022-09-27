import { IsBoolean } from 'class-validator'
import { Invoice } from '../model/Invoice'
import { Historical } from './Historical'

/**
 * a historical representation of an invoice
 */
export class InvoiceHistorical extends Invoice implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
