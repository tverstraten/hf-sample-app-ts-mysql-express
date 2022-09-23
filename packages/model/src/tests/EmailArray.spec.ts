import { emailArray } from '../validators/IsEmailArray'

describe('EmailCsv', () => {
	it('empty', async () => {
		expect(emailArray([])).toBeTruthy()
	})

	it('space', async () => {
		expect(emailArray([' '])).toBeTruthy()
	})

	it('spaces', async () => {
		expect(emailArray(['   '])).toBeTruthy()
	})

	it('one word', async () => {
		expect(emailArray(['hi'])).toBeFalsy()
	})

	it('one word leading spaces', async () => {
		expect(emailArray(['  hi'])).toBeFalsy()
	})

	it('one word trailing spaces', async () => {
		expect(emailArray(['hi   '])).toBeFalsy()
	})

	it('one word spaced', async () => {
		expect(emailArray(['  hi   '])).toBeFalsy()
	})

	it('two words', async () => {
		expect(emailArray(['hi', 'there'])).toBeFalsy()
	})

	it('one legit email', async () => {
		expect(emailArray(['hi@gmail.com'])).toBeTruthy()
	})

	it('one legit email leading spaces', async () => {
		expect(emailArray(['  hi@gmail.com'])).toBeTruthy()
	})

	it('one legit email trailing spaces', async () => {
		expect(emailArray(['hi@gmail.com  '])).toBeTruthy()
	})

	it('one legit email spaced', async () => {
		expect(emailArray(['  hi@gmail.com  '])).toBeTruthy()
	})

	it('two legit emails', async () => {
		expect(emailArray(['hi@gmail.com', 'yeah@hotmail.com  '])).toBeTruthy()
	})

	it('one legit emails and one word', async () => {
		expect(emailArray(['hi@gmail.com', 'yeah'])).toBeFalsy()
	})

	it('three legit emails', async () => {
		expect(emailArray(['hi@gmail.com', 'yeah@hotmail.com  ', 'my@email.com'])).toBeTruthy()
	})

	it('three legit emails one entry empty', async () => {
		expect(emailArray(['  hi@gmail.com', 'yeah@hotmail.com  ', 'my@email.com  '])).toBeTruthy()
	})
})
