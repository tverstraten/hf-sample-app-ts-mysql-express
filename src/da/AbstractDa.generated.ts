import { Mutex } from 'async-mutex'
import * as dotenv from 'dotenv'
import { createPool, Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise'

dotenv.config()

/**
 * NOTE: This file is generated, do not make changes to it.
 */
export abstract class AbstractDa {
	static connectionPool?: Pool

	databaseConnection?: PoolConnection

	async getConnectionPool(): Promise<Pool> {
		const mutex = new Mutex()
		const release = await mutex.acquire()
		try {
			if (AbstractDa.connectionPool == null) {
				try {
					const pool = await createPool({
						multipleStatements: true,
						host: process.env.DATABASE_URL,
						user: process.env.DATABASE_USER_ID,
						password: process.env.DATABASE_PASSWORD,
						database: process.env.DATABASE_NAME,
						waitForConnections: true,
						connectionLimit: 20,
						queueLimit: 0,
					})

					AbstractDa.connectionPool = pool
				} catch (problem) {
					console.log(`connect failed reason ${problem}`)
					throw problem
				}
			}
		} finally {
			release()
		}

		if (AbstractDa.connectionPool != null) return AbstractDa.connectionPool
		throw new RangeError(`failed to create connection pool`)
	}

	async getConnection(): Promise<PoolConnection> {
		if (!this.databaseConnection) {
			try {
				const pool = await this.getConnectionPool()
				this.databaseConnection = await pool.getConnection()
			} catch (problem) {
				console.log(`getConnection() failed reason ${problem}`)
				throw problem
			}
		}

		return this.databaseConnection
	}

	async executePrepared(sql: string, params: any[]): Promise<RowDataPacket[][] | RowDataPacket[] | ResultSetHeader> {
		try {
			let connection = await this.getConnection()
			const [rows] = await connection.query(sql, params)
			return rows as RowDataPacket[] | ResultSetHeader
		} catch (problem) {
			console.log(`connect failed reason ${problem}`)
			throw problem
		}
	}
}
