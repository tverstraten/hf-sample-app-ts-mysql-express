import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { PersistentBuilderType } from './PersistentBuilderType'
import { ReleaseLevel } from './ReleaseLevel'

/**
 * One set of details that configure a builder.
 */
export class PersistentBuilder extends AbstractMutable {
	/**
	 * The derivation of this class.
	 */
	type: PersistentBuilderType = PersistentBuilderType.configuration

	/**
	 * The organization it is for.
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * Its human readable identifier.
	 */
	@IsString()
	@MaxLength(128)
	name = ''

	/**
	 * The degree to which it has been released. This controls who gets to see it.
	 */
	@IsEnum(ReleaseLevel)
	releaseLevel: ReleaseLevel = ReleaseLevel.community

	/**
	 * The current version in use.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsOptional()
	@IsNumber()
	mostCurrentVersionId?: number
}
