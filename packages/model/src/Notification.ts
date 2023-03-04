import { IsDate, IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { User } from './User'

/**
 * A single notice sent out to a user.
 */
export class Notification extends AbstractMutable {
	/**
	 * The user the notification is for.
	 *
	 * @see User
	 */
	@IsInt()
	@IsNotEmpty()
	userId?: number

	/**
	 * The user the notification is for.
	 */
	user?: User

	/**
	 * The text of the message.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(8192)
	text = ''

	/**
	 * When the notification was read.
	 */
	@IsDate()
	readOn?: Date
}
