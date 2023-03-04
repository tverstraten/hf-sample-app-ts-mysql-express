import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { PersistentBuilder } from './PersistentBuilder'
import { PersistentBuilderType } from './PersistentBuilderType'

/**
 * One set of details that configure a builder.
 */
export class PersistentBuilderVersion extends AbstractMutable {
	/**
	 * The derivation of this class.
	 */
	@IsNotEmpty()
	@IsEnum(PersistentBuilderType)
	type: PersistentBuilderType = PersistentBuilderType.configuration

	/**
	 * The id it is a version for.
	 *
	 * @see PersistentBuilder
	 */
	@IsInt()
	@IsNotEmpty()
	persistentBuilderId?: number

	/**
	 * The version it is for.
	 */
	persistentBuilder?: PersistentBuilder

	/**
	 * An identifier of its version.
	 */
	@IsString()
	@MaxLength(128)
	version = ''

	/**
	 * If true, this version is released for use.
	 */
	@IsBoolean()
	released = false

	/**
	 * A csv list of tags associated with this version of this builder, all are soft coded from the list of tags.
	 */
	@IsString()
	@MaxLength(1024)
	tags = ''

	/**
	 * The textual body of the builder.
	 */
	@IsString()
	text = ''

	/**
	 * If true, this version should not be used any more.
	 */
	@IsBoolean()
	deprecated = false

	/**
	 * The id of a builder version that should be used instead of this if its deprecated.
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsOptional()
	@IsInt()
	suggestedAlternateId?: number

	/**
	 * The builder version that should be used instead of this if its deprecated.
	 */
	suggestedAlternate?: PersistentBuilderVersion
}
