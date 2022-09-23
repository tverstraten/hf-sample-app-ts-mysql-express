import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

/**
 * check if an object is a date and before now
 *
 * @param item - the date to test
 * @returns true if item is before today
 */
export function beforeToday(item: any): boolean {
	if (!(item instanceof Date)) return false
	const now = new Date().getTime()
	const itemTime = item.getTime()
	const diff = itemTime - now
	if (diff > 1000) return false
	return true
}

/**
 * validator to check if the object is a date and before now
 */
@ValidatorConstraint({ name: 'IsBeforeToday', async: false })
export class IsBeforeToday implements ValidatorConstraintInterface {
	validate(object: any[], __args: ValidationArguments) {
		return beforeToday(object)
	}

	defaultMessage(__args: ValidationArguments) {
		return 'The value ($value) is not a date before now'
	}
}
