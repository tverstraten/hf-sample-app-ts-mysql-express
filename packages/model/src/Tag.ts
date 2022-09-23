import { IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * a simple piece of text used to associate some aspect to elements in the system
 */
export class Tag extends AbstractMutable {
	/**
	 * a word that is a human readable identifier for the component
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * a sentence or phrase that fully describes the table
	 */
	@IsString()
	@MaxLength(1024)
	description = ''
}
