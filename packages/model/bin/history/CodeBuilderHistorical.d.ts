import { CodeBuilder } from '../CodeBuilder';
import { Historical } from './Historical';
/**
 * one version of a code builder
 */
export declare class CodeBuilderHistorical extends CodeBuilder implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
