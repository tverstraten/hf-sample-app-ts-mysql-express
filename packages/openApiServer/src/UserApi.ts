/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { User } from '@tverstraten/hf-model'
import { UserService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class UserApi extends AbstractMutableApi<User, UserService> {
	static baseName = '/user'

	constructor(app: any) {
		super(User, UserApi.baseName, UserService)
		this.bind(app)
	}
}
