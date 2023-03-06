/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { LogAction, LogAsyncMethod, Logger } from '@tverstraten/log-annotations'
import { Mutex } from 'async-mutex'
import * as dotenv from 'dotenv'
import { createPool, Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { FindResults } from './FindResults'
import { NoParamConstructor } from './NoParamConstructor'

dotenv.config()

/**
 * a representation of a where clause
 */
export class WhereClause {
	sqlText?: string

	valuesToBind: any

	constructor(text: string, params: any) {
		this.sqlText = text
		this.valuesToBind = params
	}
}

/**
 * A base point of inheritance for classes to access the database.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractDac<T> {
	protected logger = new Logger(this.constructor.name)

	static connectionPool?: Pool

	databaseConnection?: PoolConnection

	userId: number

	supportType: NoParamConstructor<T>

	excludedProperties = ['id']

	constructor(supportType: NoParamConstructor<T>, userId: number) {
		this.userId = userId
		this.supportType = supportType
	}

	/**
	 * NOTE: override as required in derivations.
	 */
	protected getTableName(): string {
		return this.supportType.name
	}

	/**
	 * NOTE: override as required in derivations.
	 */
	protected getIdColumnName(): string {
		return 'id'
	}

	/**
	 * NOTE: override as required in derivations.
	 */
	protected getDefaultOrderByColumnName(): string {
		return 'id'
	}

	@LogAsyncMethod([LogAction.exception])
	async getConnectionPool(): Promise<Pool> {
		const mutex = new Mutex()
		const release = await mutex.acquire()
		try {
			if (AbstractDac.connectionPool == null) {
				const pool = await createPool({
					multipleStatements: true,
					host: process.env.DATABASE_URL,
					user: process.env.DATABASE_USER_ID,
					password: process.env.DATABASE_PASSWORD,
					database: 'model',
					waitForConnections: true,
					connectionLimit: 20,
					queueLimit: 0,
				})

				AbstractDac.connectionPool = pool
			}
		} finally {
			release()
		}

		if (AbstractDac.connectionPool != null) return AbstractDac.connectionPool
		throw new RangeError(`failed to create connection pool`)
	}

	@LogAsyncMethod([LogAction.exception])
	async getConnection(): Promise<PoolConnection> {
		if (!this.databaseConnection) {
			const pool = await this.getConnectionPool()
			this.databaseConnection = await pool.getConnection()
		}

		return this.databaseConnection
	}

	@LogAsyncMethod([LogAction.exception])
	async executePrepared(sql: string, params: any[]): Promise<RowDataPacket[][] | RowDataPacket[] | ResultSetHeader> {
		const connection = await this.getConnection()
		const [rows] = await connection.query(sql, params)
		return rows as RowDataPacket[] | ResultSetHeader
	}

	protected fromRow(row: any): T {
		const result = new this.supportType()
		const resultAny = result as any
		Object.keys(row).forEach((columnName) => {
			resultAny[columnName] = row[columnName]
		})

		return result
	}

	@LogAsyncMethod()
	async findOneById(id: number): Promise<T> {
		const sql = `SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` = ?`
		const queryResults = (await this.executePrepared(sql, [id])) as RowDataPacket[]

		let findResult
		if (queryResults != null) {
			queryResults.forEach((row) => {
				findResult = this.fromRow(row) as T
			})
		}

		if (findResult == null) throw RangeError(`findOneById(${id}) Object with the given id does not exist`)
		return findResult
	}

	async findBy(where: string, params: any[] = [], orderBy?: string, page = 1, pageSize = 20): Promise<FindResults<T>> {
		return this.findBySafe(where, params, orderBy, page, pageSize)
	}

	@LogAsyncMethod()
	async findBySafe(where: string, params: any[] = [], orderBy?: string, page = 1, pageSize = 20): Promise<FindResults<T>> {
		const selectList = ` SQL_CALC_FOUND_ROWS *`
		const fromFragment = ` FROM \`${this.getTableName()}\``
		const whereFragment = where ? ` WHERE ${where}` : ''
		const orderByFragment = orderBy ? ` ORDER BY ${orderBy}` : ''
		const limitFragment = pageSize === -1 ? '' : ` LIMIT ${(page - 1) * pageSize}, ${pageSize}`
		const sql = `SELECT${selectList}${fromFragment}${whereFragment}${orderByFragment}${limitFragment}; SELECT FOUND_ROWS()`
		const queryResults = await this.executePrepared(sql, params)

		const rowResults = (queryResults as any)[0] as RowDataPacket[]
		const overallResults = (queryResults as any)[1] as ResultSetHeader

		const foundObjects = [] as T[]
		if (rowResults != null) {
			rowResults.forEach((row) => {
				foundObjects.push(this.fromRow(row) as T)
			})
		}

		const results = new FindResults<T>()
		results.page = page
		results.rowsPerPage = pageSize
		results.numberOfMatchingRows = overallResults.affectedRows
		results.rows = foundObjects

		return results
	}
}
