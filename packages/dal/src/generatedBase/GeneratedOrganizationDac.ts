/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Organization } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedOrganizationDac extends AbstractMutableDac<Organization> 
{
	constructor(userId: number) {
		super(Organization, userId)
	}
	
	protected getTableName(): string {
		return 'Organizations'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Organization {
		const result = new Organization()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = new Date(row['createdOn']) // dateTime
		result.objectVersion = row['objectVersion'] // int
		result.lastUpdatedById = row['lastUpdatedById'] // int
		resultAny.lastUpdatedBy = (): any => { throw new RangeError(`Property lastUpdatedBy was not loaded from database`)} // User
		result.lastUpdatedOn = new Date(row['lastUpdatedOn']) // dateTime
		result.isDeleted = row['isDeleted'] == 1 // boolean
		result.name = row['name'] // string
		result.primaryContactEmail = row['primaryContactEmail'] // string
		result.billingContactEmail = row['billingContactEmail'] // string
		result.balance = row['balance'] // float
		result.currentSubscription = row['currentSubscription'] // SubscriptionType

		return result
	}
}
