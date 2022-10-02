import { IdentityProvider } from './IdentityProvider'
import { Traceable } from './Traceable'

export class Identity implements Traceable {
	id = 0

	providedBy = IdentityProvider.github

	socialIdentifier = ''

	forId?: number

	enabled = false

	expiresOn?: Date
}
