import { EmailDa } from '../da/EmailDa'
import { AbstractService } from './AbstractService.generated'
import { Email } from '../model/Email'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class EmailService extends AbstractService<Email> {
	constructor() {
		super(new EmailDa())
	}
}
