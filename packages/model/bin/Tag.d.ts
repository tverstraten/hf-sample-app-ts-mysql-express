import { AbstractMutable } from './AbstractMutable';
/**
 * a simple piece of text used to associate some aspect to elements in the system
 */
export declare class Tag extends AbstractMutable {
    /**
     * a word that is a human readable identifier for the component
     */
    name: string;
    /**
     * a sentence or phrase that fully describes the table
     */
    description: string;
}
