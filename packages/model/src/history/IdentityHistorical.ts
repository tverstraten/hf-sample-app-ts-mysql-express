import { IsBoolean } from 'class-validator'
import { Identity } from '../model/Identity'
import { Historical } from './Historical'

/**
 * the definition of a way in which a user is identified to the system this can be an access token or a social account
 * github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws)
 */
export class IdentityHistorical extends Identity implements Historical {
	/**
	 * is the object deleted
	 */
	@IsBoolean()
	isDeleted = false
}
