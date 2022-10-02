import { Traceable } from './Traceable'

export class RepositoryDefinition implements Traceable {
	id = 0

	withinOrganizationId?: number

	name = ''

	providerName = ''

	url = ''

	pat = ''
}
