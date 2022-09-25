import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * a single notice sent out to a user
 */
export class Notification extends AbstractMutable {
	/**
	 * the user the notification is for
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	userId?: number

	/**
	 * the text of the message
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(8192)
	text = ''

	/**
	 * when the notification was read
	 */
	@IsDate()
	readOn?: Date
}
