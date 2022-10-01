import { Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
export declare abstract class AbstractDa {
    static connectionPool?: Pool;
    databaseConnection?: PoolConnection;
    getConnectionPool(): Promise<Pool>;
    getConnection(): Promise<PoolConnection>;
    executePrepared(sql: string, params: any[]): Promise<RowDataPacket[][] | RowDataPacket[] | ResultSetHeader>;
}
//# sourceMappingURL=AbstractDa.generated.d.ts.map