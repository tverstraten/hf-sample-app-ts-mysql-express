import { IsNotEmpty, IsString, MaxLength } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * A domain of responsibility.
 * NOTE: the permissions that are set for the role are not persisted in storage, rather they
 * are persisted in code for faster loading.
 */
export class Role extends AbstractMutable {
	/**
	 * Its human readable identifier.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	name = ''

	/**
	 * A sentence or paragraph that describes the role.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	description = ''
}
