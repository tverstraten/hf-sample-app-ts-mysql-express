import { IsBoolean, IsDate, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { IdentityProvider } from './IdentityProvider'
import { User } from './User'

/**
 * The definition of a way in which a user is identified to the system this can be an access token or a social account
 * github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws).
 */
export class Identity extends AbstractMutable {
	/**
	 * The system that provides the identification.
	 */
	@IsNotEmpty()
	@MaxLength(128)
	@IsEnum(IdentityProvider)
	providedBy: IdentityProvider = IdentityProvider.github

	/**
	 * The identifier used by the social system defined by providedBy.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	socialIdentifier = ''

	/**
	 * The user this belongs to.
	 *
	 * @see User
	 */
	@IsInt()
	@IsNotEmpty()
	forId?: number

	/**
	 * The user this belongs to.
	 */
	for?: User

	/**
	 * Is the identity currently valid?
	 */
	@IsBoolean()
	@IsNotEmpty()
	enabled = false

	/**
	 * The point in time which the token is no longer valid.
	 */
	@IsDate()
	@IsOptional()
	expiresOn?: Date
}
