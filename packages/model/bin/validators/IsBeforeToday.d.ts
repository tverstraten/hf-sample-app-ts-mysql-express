import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
/**
 * check if an object is a date and before now
 *
 * @param item - the date to test
 * @returns true if item is before today
 */
export declare function beforeToday(item: any): boolean;
/**
 * validator to check if the object is a date and before now
 */
export declare class IsBeforeToday implements ValidatorConstraintInterface {
    validate(object: any[], __args: ValidationArguments): boolean;
    defaultMessage(__args: ValidationArguments): string;
}
