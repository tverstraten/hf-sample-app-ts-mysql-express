import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

/**
 * Check if an object is a date and before now.
 *
 * @param item - The date to test.
 * @returns True if item is before today.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function beforeToday(item: any): boolean {
	if (!(item instanceof Date)) return false
	const now = new Date().getTime()
	const itemTime = item.getTime()
	const diff = itemTime - now
	if (diff > 1000) return false
	return true
}

/**
 * Validator to check if the object is a date and before now.
 */
@ValidatorConstraint({ name: 'IsBeforeToday', async: false })
export class IsBeforeToday implements ValidatorConstraintInterface {
	validate(object: any[], __args: ValidationArguments): boolean {
		return beforeToday(object)
	}

	defaultMessage(__args: ValidationArguments): string {
		return 'The value ($value) is not a date before now'
	}
}
