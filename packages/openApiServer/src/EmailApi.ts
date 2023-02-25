/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Email } from '@tverstraten/hf-model'
import { EmailService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class EmailApi extends AbstractMutableApi<Email, EmailService> {
	static baseName = '/email'

	constructor(app: any) {
		super(Email, EmailApi.baseName, EmailService)
		this.bind(app)
	}
}
