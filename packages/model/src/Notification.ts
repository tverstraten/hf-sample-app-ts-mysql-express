import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * A single notice sent out to a user.
 */
export class Notification extends AbstractMutable {
	/**
	 * The user the notification is for.
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	userId?: number

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
