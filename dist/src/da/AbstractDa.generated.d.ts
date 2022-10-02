import { Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { FindResults } from './FindResults.generated';
import { Traceable } from '../model/Traceable';
declare class WhereClause {
    sqlText?: string;
    valuesToBind: any;
    constructor(text: string, params: any);
}
export declare abstract class AbstractDa<T extends Traceable> {
    static connectionPool?: Pool;
    databaseConnection?: PoolConnection;
    protected abstract getTableName(): string;
    protected abstract getIdColumnName(): string;
    protected abstract getDefaultOrderByColumnName(): string;
    getConnectionPool(): Promise<Pool>;
    getConnection(): Promise<PoolConnection>;
    executePrepared(sql: string, params: any[]): Promise<RowDataPacket[][] | RowDataPacket[] | ResultSetHeader>;
    protected fromRow(row: any): T;
    findOneById(id: number): Promise<T>;
    findBy(where: string, params?: any[], orderBy?: string, page?: number, pageSize?: number): Promise<FindResults<T>>;
    findBySafe(where: string, params?: any[], orderBy?: string, page?: number, pageSize?: number): Promise<FindResults<T>>;
    getInsertSqlFragments(values: any): {
        columnNames: string;
        parameterMarkers: string;
        parameters: any[];
    };
    insertPartial(values: any): Promise<boolean>;
    create(newItem: T): Promise<boolean>;
    insertPartialAndReturn(values: any): Promise<T>;
    createAndReturn(newItem: T): Promise<T>;
    getUpdatePartialSqlFragments(values: any): {
        setFragments: string;
        parameters: any[];
    };
    updatePartial(values: any, whereClause: WhereClause): Promise<number | undefined>;
    update(itemUpdate: T): Promise<boolean>;
    updateAndReturnPartial(values: any, whereClause: WhereClause): Promise<T[]>;
    updateAndReturn(itemUpdate: T): Promise<T>;
    remove(id: number): Promise<boolean>;
}
export {};
//# sourceMappingURL=AbstractDa.generated.d.ts.map