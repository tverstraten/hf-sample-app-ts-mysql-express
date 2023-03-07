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
		result.createdById = row['createdById'] == null ? undefined : row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = row['createdOn'] == null ? undefined : new Date(row['createdOn']) // dateTime
		result.objectVersion = row['objectVersion'] // int
		result.lastUpdatedById = row['lastUpdatedById'] == null ? undefined : row['lastUpdatedById'] // int
		resultAny.lastUpdatedBy = (): any => { throw new RangeError(`Property lastUpdatedBy was not loaded from database`)} // User
		result.lastUpdatedOn = row['lastUpdatedOn'] == null ? undefined : new Date(row['lastUpdatedOn']) // dateTime
		result.isDeleted = row['isDeleted'] == 1 // boolean
		result.withinOrganizationId = row['withinOrganizationId'] // int
		resultAny.withinOrganization = (): any => { throw new RangeError(`Property withinOrganization was not loaded from database`)} // Organization
		result.transactionType = row['transactionType'] // TransactionType
		result.effective = new Date(row['effective']) // dateTime
		result.amount = row['amount'] // float
		result.invoiceNumber = row['invoiceNumber'] == null ? undefined : row['invoiceNumber'] // string
		result.coveringId = row['coveringId'] == null ? undefined : row['coveringId'] // int
		resultAny.covering = (): any => { throw new RangeError(`Property covering was not loaded from database`)} // BillingPeriod

		return result
	}
}
