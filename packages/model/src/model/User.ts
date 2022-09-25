import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, MaxLength, Validate } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { IdentityProvider } from './IdentityProvider'
import { IsBeforeToday } from '../validators/IsBeforeToday'

/**
 * one single persona that may use the system.
 */
export class User extends AbstractMutable {
	/**
	 * the id of the organization it is for
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * the name the user uses within their family to be identified. often called surname
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	givenName = ''

	/**
	 * the name of the persons family, often presented as their "last" name
	 */
	@IsString()
	@MaxLength(128)
	familyName = ''

	/**
	 * the email address that they indicate should be used to contact them at
	 */
	@IsString()
	@IsEmail()
	@MaxLength(128)
	contactEmail = ''

	/**
	 * a url to the image the users makes use of as an avatar
	 */
	@IsOptional()
	@IsString()
	@IsUrl()
	@MaxLength(1024)
	avatarUrl?: string

	/**
	 * the role that the user performs for the organization
	 *
	 * @see OrganizationalRole
	 */
	@IsNumber()
	performsId?: number

	/**
	 * the identity provider that this account is based off of
	 */
	@IsString()
	@MaxLength(128)
	primaryIdentityProvider = IdentityProvider.github

	/**
	 * if true, the user is currently able to log into the system ad perform operations
	 * NOTE: access may also be restricted if the account is not currently enabled
	 */
	@IsBoolean()
	enabled = true

	/**
	 * the last date an invitation was sent to this user. previosuly invitations are not recorded
	 */
	@IsOptional()
	@IsDate()
	@Validate(IsBeforeToday)
	lastInvitationSentOn?: Date

	/**
	 * the date an invitation was accepted by this user which would be the date they created an account
	 */
	@IsOptional()
	@IsDate()
	@Validate(IsBeforeToday)
	invitationAcceptedOn?: Date

	/**
	 * get the users name
	 *
	 * @returns the users full name
	 */
	get name() {
		return `${this.givenName} ${this.familyName}`.trim()
	}

	/**
	 * get the current state of the user
	 *
	 * @returns a textual description of the state of the user
	 */
	get status(): string {
		if (!this.enabled) return 'Disabled'
		if (this.lastInvitationSentOn) {
			if (!this.invitationAcceptedOn) return `Last Invited ${this.lastInvitationSentOn}`
		}

		return 'Enabled'
	}

	/**
	 * get the users full name
	 *
	 * @returns the users full name
	 */
	get identityProvider(): string {
		const fname = this.givenName ? this.givenName : ''
		const lname = this.familyName ? this.familyName : ''
		let fullName = `${fname} ${lname}`.trim()
		fullName = fullName === '' ? '-' : fullName

		return fullName
	}
}
