/**
 * Utility with helper methods for testing.
 */
export class TestHelper {
	static toTimestamp(value: Date): number {
		return Math.round(value.getTime() / 1000) * 1000
	}

	static datesEqual(date1?: Date, date2?: Date): void {
		if (date1 == null || date2 == null) fail(`neither date can be empty`)
		expect(TestHelper.toTimestamp(date1)).toBe(TestHelper.toTimestamp(date2))
	}

	static dateBetween(check: Date, earlier: Date, later: Date): void {
		const checkTs = TestHelper.toTimestamp(check)
		const earlierTs = TestHelper.toTimestamp(earlier) - 1000
		const laterTs = TestHelper.toTimestamp(later)

		expect(checkTs).toBeGreaterThanOrEqual(earlierTs)
		expect(checkTs).toBeLessThanOrEqual(laterTs)
	}

	static dateApproximatelyBetween(check: Date, earlier: Date, later: Date): void {
		this.dateBetween(check, new Date(earlier.getTime() - 5000), new Date(later.getTime() + 5000))
	}

	/**
	 * Generate a string of random length.
	 *
	 * @param length - The number of characters to include in the string.
	 * @returns A string of the given length with random characters.
	 */
	static randomString(length: number): string {
		let out_string = ''
		const out_length = length == null || length == -1 ? 50 : length
		// eslint-disable-next-line spellcheck/spell-checker
		const char_choices = '0123456789Aabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>,.:;{}[]|~!@#$%^&*()_+=_'
		for (let index = 0; index < out_length; index++) {
			out_string += char_choices.charAt(Math.floor(Math.random() * char_choices.length))
		}
		return out_string
	}

	/**
	 * Get a random enumerated value.
	 *
	 * @param enumType - The type of enumeration to get a random value from.
	 * @returns A random enumerated value.
	 */
	static randomEnum(enumType: any): any {
		const keys = Object.keys(enumType)
		return enumType[keys[(keys.length * Math.random()) << 0]]
	}
}
