/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Email } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedEmailDac extends AbstractMutableDac<Email> 
{
	constructor(userId: number) {
		super(Email, userId)
	}
	
	protected getTableName(): string {
		return 'Emails'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Email {
		const result = new Email()
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
		result.withinOrganizationId = row['withinOrganizationId'] // int
		resultAny.withinOrganization = (): any => { throw new RangeError(`Property withinOrganization was not loaded from database`)} // Organization
		result.from = row['from'] // string
		result.sentTo = row['sentTo'] // string
		result.userSentToId = row['userSentToId'] // int
		resultAny.userSentTo = (): any => { throw new RangeError(`Property userSentTo was not loaded from database`)} // User
		result.ccd = row['ccd'] // string
		result.bccd = row['bccd'] // string
		result.firstRead = new Date(row['firstRead']) // dateTime
		result.subject = row['subject'] // string
		result.body = row['body'] // string

		return result
	}
}
