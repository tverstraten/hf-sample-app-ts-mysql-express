/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { EmailDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Email } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Email.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class EmailService extends AbstractMutableService<Email> {
	constructor() {
		super(new EmailDac())
	}
}
