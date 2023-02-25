import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { emailArray } from './IsEmailArray'

/**
 * Check if the string is a csv list of email addresses.
 *
 * @param csv - The csv list of emails to parse.
 * @returns True if all items in the csv are emails (strings).
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function emailCsv(csv: any): boolean {
	if (typeof csv !== 'string') return false
	const array = csv.split(',')
	return emailArray(array)
}

/**
 * Validator to check if the string is a csv list of email addresses.
 */
@ValidatorConstraint({ name: 'IsEmailCsv', async: false })
export class IsEmailCsv implements ValidatorConstraintInterface {
	validate(object: any, __args: ValidationArguments): boolean {
		return emailCsv(object)
	}

	defaultMessage(__args: ValidationArguments): string {
		// here you can provide default error message if validation failed
		return 'The value ($value) is not all valid email addresses'
	}
}
