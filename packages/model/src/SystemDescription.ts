import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { Organization } from './Organization'
import { PersistentBuilder } from './PersistentBuilder'

/**
 * A complete meta data description of an application system.
 */
export class SystemDescription extends AbstractMutable {
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
	 * A word that is a human readable identifier for the component.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * A sentence or phrase that fully describes the table.
	 */
	@IsString()
	@MaxLength(1024)
	description = ''

	/**
	 * The builder configuration to produce the system.
	 *
	 * @see PersistentBuilder
	 */
	@IsOptional()
	@IsInt()
	configurationId?: number

	/**
	 * The builder configuration to produce the system.
	 */
	configuration?: PersistentBuilder

	/**
	 * An instance of System converted to json with recursion disconnected.
	 */
	@IsString()
	systemAsJson?: string
}
