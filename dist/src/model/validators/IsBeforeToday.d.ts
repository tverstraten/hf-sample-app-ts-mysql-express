import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare function beforeToday(item: any): boolean;
export declare class IsBeforeToday implements ValidatorConstraintInterface {
    validate(object: any[], __args: ValidationArguments): boolean;
    defaultMessage(__args: ValidationArguments): string;
}
//# sourceMappingURL=IsBeforeToday.d.ts.map