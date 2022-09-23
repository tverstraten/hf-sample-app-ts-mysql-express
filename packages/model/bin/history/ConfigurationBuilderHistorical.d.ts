import { ConfigurationBuilder } from '../ConfigurationBuilder';
import { Historical } from './Historical';
/**
 * one version of a configuration
 */
export declare class ConfigurationBuilderHistorical extends ConfigurationBuilder implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
