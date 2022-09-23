import { Invoice } from '../Invoice';
import { Historical } from './Historical';
/**
 * a historical representation of an invoice
 */
export declare class InvoiceHistorical extends Invoice implements Historical {
    /**
     * is the object deleted
     */
    isDeleted: boolean;
}
