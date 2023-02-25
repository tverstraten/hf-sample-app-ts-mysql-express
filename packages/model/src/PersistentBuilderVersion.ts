import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { PersistentBuilderType } from './PersistentBuilderType'

/**
 * One set of details that configure a builder.
 */
export class PersistentBuilderVersion extends AbstractMutable {
	/**
	 * The derivation of this class.
	 */
	type: PersistentBuilderType = PersistentBuilderType.configuration

	/**
	 * The id it is a version for.
	 *
	 * @see PersistentBuilder
	 */
	@IsNumber()
	@IsNotEmpty()
	persistentBuilderId?: number

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
	@IsNumber()
	suggestedAlternateId?: number
}
