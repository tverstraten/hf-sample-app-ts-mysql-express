import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * A complete meta data description of an application system.
 */
export class SystemDescription extends AbstractMutable {
	/**
	 * The organization it is for.
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

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
	 * @see PersistentBuilderConfiguration
	 */
	@IsOptional()
	@IsNumber()
	configurationId?: number

	/**
	 * An instance of System converted to json with recursion disconnected.
	 */
	@IsString()
	systemAsJson?: string
}
