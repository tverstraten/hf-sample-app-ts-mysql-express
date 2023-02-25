import { IsNotEmpty, IsNumber } from 'class-validator'
import { AbstractTraceable } from './AbstractTraceable'

/**
 * One role performed by one user.
 */
export class UserRole extends AbstractTraceable {
	/**
	 * The user that performs the role.
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	userId?: number

	/**
	 * The role the user performs.
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	roleId?: number
}
