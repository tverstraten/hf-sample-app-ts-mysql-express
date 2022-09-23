import { Template } from '../Template';
import { Historical } from './Historical';
/**
 * one version of a template
 */
export declare class TemplateHistorical extends Template implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
