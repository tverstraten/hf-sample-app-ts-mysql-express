import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
/**
 * check if an object is an array of valid email addresses
 *
 * @param array - the array to check
 * @returns true if all items in the array are emails (strings)
 */
export declare function emailArray(array: any[]): boolean;
/**
 * validator to check if the array only contains email addresses
 */
export declare class IsEmailArray implements ValidatorConstraintInterface {
    validate(object: any[], __args: ValidationArguments): boolean;
    defaultMessage(__args: ValidationArguments): string;
}
