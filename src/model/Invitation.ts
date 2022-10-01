import { AbstractMutable } from './AbstractMutable'

export class Invitation extends AbstractMutable {
	toEmail = ''

	invitedById?: number

	invitedUserId?: number

	lastReminderSentOn?: Date
}
