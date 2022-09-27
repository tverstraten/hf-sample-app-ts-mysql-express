import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Validate } from 'class-validator'
import { IsBeforeToday } from '../validators/IsBeforeToday'
import { AbstractMutable } from './AbstractMutable'

/**
 * one user extending the ability for another user to join the systems as a member of an organization
 */
export class Invitation extends AbstractMutable {
	/**
	 * the email address that the invitation was sent to
	 */
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@MaxLength(128)
	toEmail = ''

	/**
	 * the user that extended the invitation
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	invitedById?: number

	/**
	 * the user that has been invited. when the invitation is created a user is also created to mark them as a placeholder
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	invitedUserId?: number

	/**
	 * the point in time the most recent reminder was sent
	 */
	@IsOptional()
	@IsDate()
	@Validate(IsBeforeToday)
	lastReminderSentOn?: Date
}
