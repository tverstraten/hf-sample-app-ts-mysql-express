import { validate } from 'class-validator'
import { Email } from '../model/Email'

/**
 * get an email object to use for testing
 *
 * @returns an email object for testing
 */
function getValid(): Email {
	const obj = new Email()
	// obj.createdBy = new User()
	obj.createdOn = new Date()
	//obj.lastUpdatedBy = new User()
	obj.lastUpdatedOn = new Date()
	obj.withinOrganizationId = 1
	obj.bccd = undefined
	obj.subject = 'its about'
	obj.body = 'this is the content'
	obj.ccd = undefined
	obj.firstRead = undefined
	obj.from = 'me@myplace.com'
	obj.userSentToId = 1
	obj.sentTo = 'one@recipient.com'

	return obj
}

describe('Rules', () => {
	it('all values pass', async () => {
		const obj = getValid()
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(0)
	})

	it('bad cc ', async () => {
		const obj = getValid()
		obj.ccd = 'ok@fine.com, bad@email'
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(1)
	})

	it('bad bcc ', async () => {
		const obj = getValid()
		obj.bccd = 'ok@fine.com, bad@email'
		const errors = await validate(obj)

		expect(errors).not.toBeNull()
		expect(errors.length).toBe(1)
	})
})
