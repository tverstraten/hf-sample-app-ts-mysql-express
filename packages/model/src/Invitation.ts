import { IsBeforeToday } from '@tverstraten/hf-validators'
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Validate } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * One user extending the ability for another user to join the systems as a member of an organization.
 */
export class Invitation extends AbstractMutable {
	/**
	 * The email address that the invitation was sent to.
	 */
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@MaxLength(128)
	toEmail = ''

	/**
	 * The user that extended the invitation.
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	invitedById?: number

	/**
	 * The user that has been invited. When the invitation is created a user is also created to mark them as a placeholder.
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	invitedUserId?: number

	/**
	 * The point in time the most recent reminder was sent.
	 */
	@IsOptional()
	@IsDate()
	@Validate(IsBeforeToday)
	lastReminderSentOn?: Date
}
