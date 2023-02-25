import { IsEmail, Validate, validate } from 'class-validator'
import { IsEmailCsv } from './IsEmailCsv'

class Email {
	@IsEmail()
	from = ''

	sentTo = ''

	@Validate(IsEmailCsv)
	ccd?: string

	subject = ''

	body = ''
}

/**
 * Get an email object to use for testing.
 *
 * @returns An email object for testing.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function getValid(): Email {
	const result = new Email()
	result.subject = 'its about'
	result.body = 'this is the content'
	// eslint-disable-next-line spellcheck/spell-checker
	result.from = 'me@myplace.com'
	result.sentTo = 'one@recipient.com'

	return result
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
})
