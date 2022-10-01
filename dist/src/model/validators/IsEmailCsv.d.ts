import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare function emailCsv(csv: any): boolean;
export declare class IsEmailCsv implements ValidatorConstraintInterface {
    validate(object: any, __args: ValidationArguments): boolean;
    defaultMessage(__args: ValidationArguments): string;
}
//# sourceMappingURL=IsEmailCsv.d.ts.map