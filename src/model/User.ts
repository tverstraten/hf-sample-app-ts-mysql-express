import { IdentityProvider } from './IdentityProvider'
import { Traceable } from './Traceable'

export class User implements Traceable {
	id = 0

	withinOrganizationId?: number

	givenName = ''

	familyName = ''

	contactEmail = ''

	avatarUrl?: string

	performsId?: number

	primaryIdentityProvider = IdentityProvider.github

	enabled = true

	lastInvitationSentOn?: Date

	invitationAcceptedOn?: Date

	get name() {
		return `${this.givenName} ${this.familyName}`.trim()
	}

	get status(): string {
		if (!this.enabled) return 'Disabled'
		if (this.lastInvitationSentOn) {
			if (!this.invitationAcceptedOn) return `Last Invited ${this.lastInvitationSentOn}`
		}

		return 'Enabled'
	}

	get identityProvider(): string {
		const fname = this.givenName ? this.givenName : ''
		const lname = this.familyName ? this.familyName : ''
		let fullName = `${fname} ${lname}`.trim()
		fullName = fullName === '' ? '-' : fullName

		return fullName
	}
}
