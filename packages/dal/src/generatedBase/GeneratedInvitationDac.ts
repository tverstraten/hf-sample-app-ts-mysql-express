/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Invitation } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedInvitationDac extends AbstractMutableDac<Invitation> 
{
	constructor(userId: number) {
		super(Invitation, userId)
	}
	
	protected getTableName(): string {
		return 'Invitations'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Invitation {
		const result = new Invitation()
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
		result.toEmail = row['toEmail'] // string
		result.invitedById = row['invitedById'] // int
		resultAny.invitedBy = (): any => { throw new RangeError(`Property invitedBy was not loaded from database`)} // User
		result.invitedUserId = row['invitedUserId'] // int
		resultAny.invitedUser = (): any => { throw new RangeError(`Property invitedUser was not loaded from database`)} // User
		result.lastReminderSentOn = new Date(row['lastReminderSentOn']) // date

		return result
	}
}
