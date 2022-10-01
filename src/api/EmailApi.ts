import { Email } from '../model/Email'
import { EmailService } from '../bl/EmailService'
import { AbstractController } from './AbstractController.generated'

export class EmailApi extends AbstractController<Email, EmailService> {
	static baseName = '/email'

	constructor(app: any) {
		super(Email, EmailApi.baseName, EmailService)
		this.bind(app)
	}
}
