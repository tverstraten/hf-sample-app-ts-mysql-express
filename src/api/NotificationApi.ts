import { Notification } from '../model/Notification'
import { NotificationService } from '../bl/NotificationService'
import { AbstractController } from './AbstractController.generated'

export class NotificationApi extends AbstractController<Notification, NotificationService> {
	static baseName = '/notification'

	constructor(app: any) {
		super(Notification, NotificationApi.baseName, NotificationService)
		this.bind(app)
	}
}
