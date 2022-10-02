import { Traceable } from './Traceable'

export class Notification implements Traceable {
	id = 0

	userId?: number

	text = ''

	readOn?: Date
}
