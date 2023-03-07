/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { User } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedUserDac extends AbstractMutableDac<User> 
{
	constructor(userId: number) {
		super(User, userId)
	}
	
	protected getTableName(): string {
		return 'Users'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): User {
		const result = new User()
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
		result.givenName = row['givenName'] // string
		result.familyName = row['familyName'] // string
		result.contactEmail = row['contactEmail'] // string
		result.avatarUrl = row['avatarUrl'] == null ? undefined : row['avatarUrl'] // string
		result.performsId = row['performsId'] == null ? undefined : row['performsId'] // int
		resultAny.performs = (): any => { throw new RangeError(`Property performs was not loaded from database`)} // OrganizationalRole
		result.primaryIdentityProvider = row['primaryIdentityProvider'] // IdentityProvider
		result.enabled = row['enabled'] == 1 // boolean
		result.lastInvitationSentOn = row['lastInvitationSentOn'] == null ? undefined : new Date(row['lastInvitationSentOn']) // dateTime
		result.invitationAcceptedOn = row['invitationAcceptedOn'] == null ? undefined : new Date(row['invitationAcceptedOn']) // dateTime

		return result
	}
}
