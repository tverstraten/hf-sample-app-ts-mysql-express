/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserRole } from '@tverstraten/hf-model'
import { AbstractTraceableDac } from './AbstractTraceableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedUserRoleDac extends AbstractTraceableDac<UserRole> 
{
	constructor(userId: number) {
		super(UserRole, userId)
	}
	
	protected getTableName(): string {
		return 'UserRoles'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): UserRole {
		const result = new UserRole()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] == null ? undefined : row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = row['createdOn'] == null ? undefined : new Date(row['createdOn']) // dateTime
		result.userId = row['userId'] // int
		resultAny.user = (): any => { throw new RangeError(`Property user was not loaded from database`)} // User
		result.roleId = row['roleId'] // int
		resultAny.role = (): any => { throw new RangeError(`Property role was not loaded from database`)} // User

		return result
	}
}
