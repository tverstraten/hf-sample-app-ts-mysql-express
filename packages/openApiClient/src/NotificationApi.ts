import { AbstractMutableApi } from './AbstractMutableApi'
import { Notification } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class Notification.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class NotificationApi extends AbstractMutableApi<Notification> {
	constructor() {
		super('Notification')
	}
}
