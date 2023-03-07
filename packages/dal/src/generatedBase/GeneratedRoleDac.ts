/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Role } from '@tverstraten/hf-model'
import { AbstractMutableDac } from './AbstractMutableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedRoleDac extends AbstractMutableDac<Role> 
{
	constructor(userId: number) {
		super(Role, userId)
	}
	
	protected getTableName(): string {
		return 'Roles'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): Role {
		const result = new Role()
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
		result.description = row['description'] // string

		return result
	}
}
