/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { BillingPeriod } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedBillingPeriodDac extends AbstractMutableDac<BillingPeriod> 
{
	constructor(userId: number) {
		super(BillingPeriod, userId)
	}
	
	protected getTableName(): string {
		return 'BillingPeriods'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): BillingPeriod {
		const result = new BillingPeriod()
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
		result.name = row['name'] // string
		result.start = row['start'] == null ? undefined : new Date(row['start']) // dateTime
		result.end = row['end'] == null ? undefined : new Date(row['end']) // dateTime

		return result
	}
}
