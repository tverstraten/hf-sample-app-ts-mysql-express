import { IsNotEmpty, IsNumber, IsString, IsUrl, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * a statement of one repository that may be usedd by the organization and how to connect to it
 */
export class RepositoryDefinition extends AbstractMutable {
	/**
	 * the organization it is for
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * the human readable identifier for the repository
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * the human readable identifier for the repository service
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	providerName = ''

	/**
	 * the human readable identifier for the repository
	 */
	@IsString()
	@IsNotEmpty()
	@IsUrl()
	@MaxLength(1024)
	url = ''

	/**
	 * the access token to use to work with the repo
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	pat = ''
}
