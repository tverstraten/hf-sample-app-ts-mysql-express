import { IsBeforeToday } from '@tverstraten/hf-validators'
import { IsBoolean, IsDate, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, Validate } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { IdentityProvider } from './IdentityProvider'
import { Organization } from './Organization'
import { OrganizationalRole } from './OrganizationalRole'

/**
 * One single persona that may use the system.
 */
export class User extends AbstractMutable {
	/**
	 * The id of the organization it is for.
	 *
	 * @see Organization
	 */
	@IsInt()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * The id of the organization it is for.
	 */
	withinOrganization?: Organization

	/**
	 * The name the user uses within their family to be identified. Often called surname.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	givenName = ''

	/**
	 * The name of the persons family, often presented as their "last" name.
	 */
	@IsString()
	@MaxLength(128)
	familyName = ''

	/**
	 * The email address that they indicate should be used to contact them at.
	 */
	@IsString()
	@IsEmail()
	@MaxLength(128)
	contactEmail = ''

	/**
	 * A url to the image the users makes use of as an avatar.
	 */
	@IsOptional()
	@IsString()
	@IsUrl()
	@MaxLength(1024)
	avatarUrl?: string

	/**
	 * The role that the user performs for the organization.
	 *
	 * @see OrganizationalRole
	 */
	@IsInt()
	performsId?: number

	/**
	 * The role that the user performs for the organization.
	 */
	performs?: OrganizationalRole

	/**
	 * The identity provider that this account is based off of.
	 */
	@MaxLength(128)
	@IsEnum(IdentityProvider)
	primaryIdentityProvider: IdentityProvider = IdentityProvider.github

	/**
	 * If true, the user is currently able to log into the system ad perform operations
	 * NOTE: access may also be restricted if the account is not currently enabled.
	 */
	@IsBoolean()
	enabled = true

	/**
	 * The last date an invitation was sent to this user. Previously invitations are not recorded.
	 */
	@IsOptional()
	@IsDate()
	@Validate(IsBeforeToday)
	lastInvitationSentOn?: Date

	/**
	 * The date an invitation was accepted by this user which would be the date they created an account.
	 */
	@IsOptional()
	@IsDate()
	@Validate(IsBeforeToday)
	invitationAcceptedOn?: Date

	/**
	 * Get the users name.
	 *
	 * @returns The users full name.
	 */
	get name(): string {
		return `${this.givenName} ${this.familyName}`.trim()
	}

	/**
	 * Get the current state of the user.
	 *
	 * @returns A textual description of the state of the user.
	 */
	get status(): string {
		if (!this.enabled) return 'Disabled'
		if (this.lastInvitationSentOn) {
			if (!this.invitationAcceptedOn) return `Last Invited ${this.lastInvitationSentOn}`
		}

		return 'Enabled'
	}

	/**
	 * Get the users full name.
	 *
	 * @returns The users full name.
	 */
	get identityProvider(): string {
		const first_name = this.givenName ? this.givenName : ''
		const last_name = this.familyName ? this.familyName : ''
		let fullName = `${first_name} ${last_name}`.trim()
		fullName = fullName === '' ? '-' : fullName

		return fullName
	}
}
