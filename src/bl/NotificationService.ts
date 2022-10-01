import { NotificationDa } from '../da/NotificationDa'
import { AbstractService } from './AbstractService.generated'
import { Notification } from '../model/Notification'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class NotificationService extends AbstractService<Notification> {
	constructor() {
		super(new NotificationDa())
	}
}
