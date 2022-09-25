import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { PersistentBuilderType } from './PersistentBuilderType'
import { ReleaseLevel } from './ReleaseLevel'

/**
 * one set of details that configure a builder
 */
export class PersistentBuilder extends AbstractMutable {
	/**
	 * the derivation of this class
	 */
	type: PersistentBuilderType = PersistentBuilderType.configuration

	/**
	 * the organization it is for
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * its human readable identifier
	 */
	@IsString()
	@MaxLength(128)
	name = ''

	/**
	 * the degree to which it has been released. this controls who gets to see it
	 */
	@IsEnum(ReleaseLevel)
	releaseLevel: ReleaseLevel = ReleaseLevel.community

	/**
	 * the current version in use
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	mostCurrentVersionId?: number
}
