/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Notification } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedNotificationDac extends AbstractMutableDac<Notification> 
{
	constructor(userId: number) {
		super(Notification, userId)
	}
	
	protected getTableName(): string {
		return 'Notifications'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Notification {
		const result = new Notification()
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
		result.userId = row['userId'] // int
		resultAny.user = (): any => { throw new RangeError(`Property user was not loaded from database`)} // User
		result.text = row['text'] // string
		result.readOn = new Date(row['readOn']) // date

		return result
	}
}
