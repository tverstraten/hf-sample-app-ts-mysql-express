import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { Organization } from './Organization'
import { PersistentBuilderType } from './PersistentBuilderType'
import { ReleaseLevel } from './ReleaseLevel'

/**
 * One set of details that configure a builder.
 */
export class PersistentBuilder extends AbstractMutable {
	/**
	 * The derivation of this class.
	 */
	@IsNotEmpty()
	@IsEnum(PersistentBuilderType)
	type: PersistentBuilderType = PersistentBuilderType.configuration

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
	 * Its human readable identifier.
	 */
	@IsString()
	@MaxLength(128)
	name = ''

	/**
	 * The degree to which it has been released. This controls who gets to see it.
	 */
	@IsNotEmpty()
	@IsEnum(ReleaseLevel)
	releaseLevel: ReleaseLevel = ReleaseLevel.community

	/**
	 * The current version in use.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsOptional()
	@IsInt()
	mostCurrentVersionId?: number
}
