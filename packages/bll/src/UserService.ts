/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { User } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class User.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class UserService extends AbstractMutableService<User> {
	constructor() {
		super(new UserDac())
	}
}
