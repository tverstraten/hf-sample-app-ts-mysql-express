/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Notification } from '@tverstraten/hf-model'
import { NotificationService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class NotificationApi extends AbstractMutableApi<Notification, NotificationService> {
	static baseName = '/notification'

	constructor(app: any) {
		super(Notification, NotificationApi.baseName, NotificationService)
		this.bind(app)
	}
}
