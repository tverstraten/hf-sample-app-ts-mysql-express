import { Notification } from '../model/Notification'
import { AbstractDa } from './AbstractDa.generated'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class NotificationDa extends AbstractDa<Notification> {
	protected getTableName(): string {
		return 'Notification'
	}

	protected getIdColumnName(): string {
		return 'id'
	}

	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}
}
