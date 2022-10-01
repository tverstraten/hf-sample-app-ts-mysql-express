import { User } from '../model/User'
import { UserService } from '../bl/UserService'
import { AbstractController } from './AbstractController.generated'

export class UserApi extends AbstractController<User, UserService> {
	static baseName = '/user'

	constructor(app: any) {
		super(User, UserApi.baseName, UserService)
		this.bind(app)
	}
}
