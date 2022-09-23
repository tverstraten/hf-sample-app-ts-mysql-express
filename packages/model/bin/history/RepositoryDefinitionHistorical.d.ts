import { RepositoryDefinition } from '../RepositoryDefinition';
import { Historical } from './Historical';
/**
 * a historical view of a repository definition
 */
export declare class RepositoryDefinitionHistorical extends RepositoryDefinition implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
