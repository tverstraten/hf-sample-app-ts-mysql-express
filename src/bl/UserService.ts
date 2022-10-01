import { UserDa } from '../da/UserDa'
import { AbstractService } from './AbstractService.generated'
import { User } from '../model/User'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class UserService extends AbstractService<User> {
	constructor() {
		super(new UserDa())
	}
}
