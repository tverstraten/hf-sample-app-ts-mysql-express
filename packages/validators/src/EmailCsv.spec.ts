import { emailCsv } from './IsEmailCsv'

// eslint-disable-next-line max-lines-per-function
describe('EmailCsv', () => {
	it('undefined', async () => {
		expect(emailCsv(undefined)).toBeFalsy()
	})

	it('null', async () => {
		expect(emailCsv(null)).toBeFalsy()
	})

	it('empty', async () => {
		expect(emailCsv('')).toBeTruthy()
	})

	it('space', async () => {
		expect(emailCsv(' ')).toBeTruthy()
	})

	it('spaces', async () => {
		expect(emailCsv('   ')).toBeTruthy()
	})

	it('one word', async () => {
		expect(emailCsv('hi')).toBeFalsy()
	})

	it('one word leading spaces', async () => {
		expect(emailCsv('  hi')).toBeFalsy()
	})

	it('one word trailing spaces', async () => {
		expect(emailCsv('hi   ')).toBeFalsy()
	})

	it('one word spaced', async () => {
		expect(emailCsv('  hi   ')).toBeFalsy()
	})

	it('two words', async () => {
		expect(emailCsv('hi,there')).toBeFalsy()
	})

	it('one legit email', async () => {
		expect(emailCsv('hi@gmail.com')).toBeTruthy()
	})

	it('one legit email leading spaces', async () => {
		expect(emailCsv('  hi@gmail.com')).toBeTruthy()
	})

	it('one legit email trailing spaces', async () => {
		expect(emailCsv('hi@gmail.com  ')).toBeTruthy()
	})

	it('one legit email spaced', async () => {
		expect(emailCsv('  hi@gmail.com  ')).toBeTruthy()
	})

	it('two legit emails', async () => {
		expect(emailCsv('hi@gmail.com,yeah@hotmail.com  ')).toBeTruthy()
	})

	it('one legit emails and one word', async () => {
		expect(emailCsv('hi@gmail.com,yeah')).toBeFalsy()
	})

	it('three legit emails spacing 1', async () => {
		expect(emailCsv('hi@gmail.com,yeah@hotmail.com  ,my@email.com')).toBeTruthy()
	})

	it('three legit emails spacing 2', async () => {
		expect(emailCsv('  hi@gmail.com,yeah@hotmail.com  ,my@email.com  ')).toBeTruthy()
	})

	it('three legit emails spacing 3', async () => {
		expect(emailCsv('hi@gmail.com,  yeah@hotmail.com  ,my@email.com  ')).toBeTruthy()
	})

	it('leading comma', async () => {
		expect(emailCsv(',hi@gmail.com,yeah@hotmail.com')).toBeTruthy()
	})

	it('trailing comma', async () => {
		expect(emailCsv('hi@gmail.com,yeah@hotmail.com,')).toBeTruthy()
	})
})
