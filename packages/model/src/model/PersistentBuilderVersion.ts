import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'
import { PersistentBuilderType } from './PersistentBuilderType'

/**
 * one set of details that configure a builder
 */
export abstract class PersistentBuilderVersion extends AbstractMutable {
	/**
	 * the derivation of this class
	 */
	type: PersistentBuilderType = PersistentBuilderType.configuration

	/**
	 * the id it is a version for
	 *
	 * @see PersistentBuilder
	 */
	@IsNumber()
	@IsNotEmpty()
	persistentBuilderId?: number

	/**
	 * an identifier of its version
	 */
	@IsString()
	@MaxLength(128)
	version = ''

	/**
	 * if true, this version is released for use
	 */
	@IsBoolean()
	released = false

	/**
	 * a csv list of tags associated with this version of this builder, all are soft coded from the list of tags
	 */
	@IsString()
	@MaxLength(1024)
	tags = ''

	/**
	 * the textual body of the builder
	 */
	@IsString()
	text = ''

	/**
	 * if true, this version should not be used any more
	 */
	@IsBoolean()
	deprecated = false

	/**
	 * the id of a builder version that should be used instead of this if its deprecated
	 *
	 * @see PersistentBuilderVersion
	 */
	@IsOptional()
	@IsNumber()
	@IsNotEmpty()
	suggestedAlternateId?: number
}
