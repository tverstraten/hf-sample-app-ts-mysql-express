import { AbstractMutable } from './AbstractMutable'

export class SystemDescription extends AbstractMutable {
	withinOrganizationId?: number

	name = ''

	description = ''

	configurationId?: number

	systemAsJson?: string
}
