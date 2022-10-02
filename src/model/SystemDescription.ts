import { Traceable } from './Traceable'

export class SystemDescription implements Traceable {
	id = 0

	withinOrganizationId?: number

	name = ''

	description = ''

	configurationId?: number

	systemAsJson?: string
}
