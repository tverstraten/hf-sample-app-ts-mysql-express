/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Identity } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedIdentityDac extends AbstractMutableDac<Identity> 
{
	constructor(userId: number) {
		super(Identity, userId)
	}
	
	protected getTableName(): string {
		return 'Identities'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Identity {
		const result = new Identity()
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
		result.providedBy = row['providedBy'] // IdentityProvider
		result.socialIdentifier = row['socialIdentifier'] // string
		result.forId = row['forId'] // int
		resultAny.for = (): any => { throw new RangeError(`Property for was not loaded from database`)} // User
		result.enabled = row['enabled'] == 1 // boolean
		result.expiresOn = new Date(row['expiresOn']) // dateTime

		return result
	}
}
