import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { emailArray } from './IsEmailArray'

/**
 * check if the string is a csv list of email addresses
 *
 * @param csv - the csv lst of emails to parse
 * @returns true if all items in the csv are emails (strings)
 */
export function emailCsv(csv: any): boolean {
	if (typeof csv !== 'string') return false
	const array = csv.split(',')
	return emailArray(array)
}

/**
 * validator to check if the string is a csv list of email addresses
 */
@ValidatorConstraint({ name: 'IsEmailCsv', async: false })
export class IsEmailCsv implements ValidatorConstraintInterface {
	validate(object: any, __args: ValidationArguments) {
		return emailCsv(object)
	}

	defaultMessage(__args: ValidationArguments) {
		// here you can provide default error message if validation failed
		return 'The value ($value) is not all valid email addresses'
	}
}
