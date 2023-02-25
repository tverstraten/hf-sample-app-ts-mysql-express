/* eslint-disable max-lines-per-function */
import { validate } from 'class-validator'
import { IdentityProvider } from './IdentityProvider'
import { User } from './User'

/**
 * Get a valid user object for testing.
 *
 * @returns The user object to use for testing.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getValid(): User {
	const obj = new User()
	obj.avatarUrl = 'https://some.place.com/pic.jpg'
	// eslint-disable-next-line spellcheck/spell-checker
	obj.contactEmail = 'fred@bad.com'
	//obj.createdBy = new User()
	obj.createdOn = new Date()
	obj.enabled = true
	obj.familyName = 'family'
	obj.givenName = 'given'
	obj.invitationAcceptedOn = new Date()
	obj.lastInvitationSentOn = new Date()
	//obj.lastUpdatedBy = new User()
	obj.lastUpdatedOn = new Date()
	obj.performsId = 1
	obj.primaryIdentityProvider = IdentityProvider.google
	obj.withinOrganizationId = 1

	return obj
}

describe('Rules', () => {
	it('all values pass', async () => {
		const obj = getValid()
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(0)
	})

	it('bad avatar 1', async () => {
		const obj = getValid()
		// eslint-disable-next-line spellcheck/spell-checker
		obj.avatarUrl = 'https:/some.place.com/pic.jpg'
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(1)
	})

	it('empty avatar', async () => {
		const obj = getValid()
		obj.avatarUrl = undefined
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(0)
	})

	it('bad contact', async () => {
		const obj = getValid()
		// eslint-disable-next-line spellcheck/spell-checker
		obj.contactEmail = 'fred@badcom'
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(1)
	})

	it('bad invitationAcceptedOn', async () => {
		const obj = getValid()
		obj.invitationAcceptedOn = new Date(new Date().getTime() + 5000)
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(1)
	})

	it('bad lastInvitationSentOn', async () => {
		const obj = getValid()
		obj.lastInvitationSentOn = new Date(new Date().getTime() + 5000)
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(1)
	})
})
