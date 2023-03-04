import { IsInt, IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { Organization } from './Organization'

/**
 * A statement of one repository that may be used by the organization and how to connect to it.
 */
export class RepositoryDefinition extends AbstractMutable {
	/**
	 * The organization it is for.
	 *
	 * @see Organization
	 */
	@IsInt()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * The organization it is for.
	 */
	withinOrganization?: Organization

	/**
	 * The human readable identifier for the repository.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * The human readable identifier for the repository service.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	providerName = ''

	/**
	 * The human readable identifier for the repository.
	 */
	@IsString()
	@IsNotEmpty()
	@IsUrl()
	@MaxLength(1024)
	url = ''

	/**
	 * The access token to use to work with the repository.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	pat = ''
}
