import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare function emailArray(array: any[]): boolean;
export declare class IsEmailArray implements ValidatorConstraintInterface {
    validate(object: any[], __args: ValidationArguments): boolean;
    defaultMessage(__args: ValidationArguments): string;
}
//# sourceMappingURL=IsEmailArray.d.ts.map