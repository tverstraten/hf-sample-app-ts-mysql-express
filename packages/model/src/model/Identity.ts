import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { IdentityProvider } from './IdentityProvider'

/**
 * the definition of a way in which a user is identified to the system this can be an access token or a social account
 * github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws)
 */
export class Identity extends AbstractMutable {
	/**
	 * the system that provides the identification
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	providedBy = IdentityProvider.github

	/**
	 * the identifer used by the social system defined by providedBy
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	socialIdentifier = ''

	/**
	 * the user this belongs to
	 *
	 * @see User
	 */
	@IsNumber()
	@IsNotEmpty()
	forId?: number

	/**
	 * is the identity currently valid?
	 */
	@IsBoolean()
	@IsNotEmpty()
	enabled = false

	/**
	 * the point in time which the token is no longer valid
	 */
	@IsDate()
	expiresOn?: Date
}
