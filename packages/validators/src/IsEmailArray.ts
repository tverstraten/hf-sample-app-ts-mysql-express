import { isEmail, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

/**
 * Check if an object is an array of valid email addresses.
 *
 * @param array - The array to check.
 * @returns True if all items in the array are emails (strings).
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function emailArray(array: any[]): boolean {
	if (!(array instanceof Array)) return false
	for (let index = 0; index < array.length; index++) {
		const arrayItem = array[index].trim()
		if (typeof arrayItem !== 'string') return false
		if (arrayItem !== '' && !isEmail(arrayItem)) return false
	}
	return true
}

/**
 * Validator to check if the array only contains email addresses.
 */
@ValidatorConstraint({ name: 'IsEmailArray', async: false })
export class IsEmailArray implements ValidatorConstraintInterface {
	validate(object: any[], __args: ValidationArguments): boolean {
		return emailArray(object)
	}

	defaultMessage(__args: ValidationArguments): string {
		// here you can provide default error message if validation failed
		return 'The value ($value) is not all valid email addresses'
	}
}
