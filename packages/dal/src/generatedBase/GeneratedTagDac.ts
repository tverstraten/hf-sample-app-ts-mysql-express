/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Tag } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedTagDac extends AbstractMutableDac<Tag> 
{
	constructor(userId: number) {
		super(Tag, userId)
	}
	
	protected getTableName(): string {
		return 'Tags'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Tag {
		const result = new Tag()
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
		result.description = row['description'] // string

		return result
	}
}
