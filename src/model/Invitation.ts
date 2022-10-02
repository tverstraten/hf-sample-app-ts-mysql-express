import { Traceable } from './Traceable'

export class Invitation implements Traceable {
	id = 0

	toEmail = ''

	invitedById?: number

	invitedUserId?: number

	lastReminderSentOn?: Date
}
