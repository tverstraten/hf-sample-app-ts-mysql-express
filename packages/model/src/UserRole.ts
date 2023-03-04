import { IsInt, IsNotEmpty } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'
import { User } from './User'

/**
 * One role performed by one user.
 */
export class UserRole extends AbstractTraceable {
	/**
	 * The user that performs the role.
	 *
	 * @see User
	 */
	@IsInt()
	@IsNotEmpty()
	userId?: number

	/**
	 * The user that performs the role.
	 */
	user?: User

	/**
	 * The role the user performs.
	 *
	 * @see User
	 */
	@IsInt()
	@IsNotEmpty()
	roleId?: number

	/**
	 * The role the user performs.
	 */
	role?: User
}
