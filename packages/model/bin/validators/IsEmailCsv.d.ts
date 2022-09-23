import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
/**
 * check if the string is a csv list of email addresses
 *
 * @param csv - the csv lst of emails to parse
 * @returns true if all items in the csv are emails (strings)
 */
export declare function emailCsv(csv: any): boolean;
/**
 * validator to check if the string is a csv list of email addresses
 */
export declare class IsEmailCsv implements ValidatorConstraintInterface {
    validate(object: any, __args: ValidationArguments): boolean;
    defaultMessage(__args: ValidationArguments): string;
}
