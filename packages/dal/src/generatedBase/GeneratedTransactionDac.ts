/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Transaction } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedTransactionDac extends AbstractMutableDac<Transaction> 
{
	constructor(userId: number) {
		super(Transaction, userId)
	}
	
	protected getTableName(): string {
		return 'Transactions'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Transaction {
		const result = new Transaction()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = new Date(row['createdOn']) // date
		result.objectVersion = row['objectVersion'] // int
		result.lastUpdatedById = row['lastUpdatedById'] // int
		resultAny.lastUpdatedBy = (): any => { throw new RangeError(`Property lastUpdatedBy was not loaded from database`)} // User
		result.lastUpdatedOn = new Date(row['lastUpdatedOn']) // date
		result.isDeleted = row['isDeleted'] == 1 // boolean
		result.withinOrganizationId = row['withinOrganizationId'] // int
		resultAny.withinOrganization = (): any => { throw new RangeError(`Property withinOrganization was not loaded from database`)} // Organization
		result.transactionType = row['transactionType'] // TransactionType
		result.effective = new Date(row['effective']) // date
		result.amount = row['amount'] // number
		result.invoiceNumber = row['invoiceNumber'] // string
		result.coveringId = row['coveringId'] // int
		resultAny.covering = (): any => { throw new RangeError(`Property covering was not loaded from database`)} // BillingPeriod

		return result
	}
}
