import { IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * A simple piece of text used to associate some aspect to elements in the system.
 */
export class Tag extends AbstractMutable {
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
}
