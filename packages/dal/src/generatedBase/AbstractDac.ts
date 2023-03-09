/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { LogAction, LogAsyncMethod, Logger } from '@tverstraten/log-annotations'
import { Mutex } from 'async-mutex'
import * as dotenv from 'dotenv'
import { createPool, Pool, PoolConnection, ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { FindResults } from './FindResults'
import { NoParamConstructor } from './NoParamConstructor'
import { RdbmsMapping } from './RdbmsMapping'

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
	async findOneById(id: number, expand: string[] = []): Promise<T> {
		const sql = `SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` = ?`
		const queryResults = (await this.executePrepared(sql, [id])) as RowDataPacket[]

		let findResult
		if (queryResults != null) {
			queryResults.forEach((row) => {
				findResult = this.fromRow(row) as T
			})
		}

		if (!findResult) throw RangeError(`findOneById(${id}) Object with the given id does not exist`)

		for (const oneExpandIndex in expand) {
			const oneExpand = expand[oneExpandIndex].trim()
			if (oneExpand.length > 0) {
				await this.expand([findResult], this.supportType.name, oneExpand)
			}
		}

		return findResult
	}

	// eslint-disable-next-line max-params
	async findBy(where: string, params: any[] = [], expand: string[] = [], orderBy: string[] = [], page = 1, pageSize = 20): Promise<FindResults<T>> {
		return this.findBySafe(where, params, expand, orderBy, page, pageSize)
	}

	// eslint-disable-next-line max-params, max-lines-per-function
	@LogAsyncMethod()
	async findBySafe(where: string, params: any[] = [], expand: string[] = [], orderBy: string[] = [], page = 1, pageSize = 20): Promise<FindResults<T>> {
		const selectList = ` SQL_CALC_FOUND_ROWS *`
		const fromFragment = ` FROM \`${this.getTableName()}\``
		const whereFragment = where ? ` WHERE ${where}` : ''
		const orderByFragment = orderBy.length > 0 ? ` ORDER BY ${orderBy}` : ''
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
		const firstOverall = (overallResults as any)[0]
		results.numberOfMatchingRows = firstOverall['FOUND_ROWS()']
		results.rows = foundObjects

		if (results.rows.length > 0) {
			for (const oneExpandIndex in expand) {
				const oneExpand = expand[oneExpandIndex].trim()
				if (oneExpand.length > 0) {
					await this.expand(results.rows, this.supportType.name, oneExpand)
				}
			}
		}

		return results
	}

	private getIdList(sourceObjects: T[], propertyName: string): string {
		let idList = ''
		const idArray: number[] = []
		sourceObjects?.forEach((source) => {
			if (source) {
				const propertyValue = (source as any)[propertyName]
				if (!idArray.includes(propertyValue)) {
					idArray.push(propertyValue)
					if (propertyValue) {
						if (idList != '') idList += ','
						idList += propertyValue
					}
				}
			}
		})

		return idList
	}

	// eslint-disable-next-line max-lines-per-function
	private async deepLoadPropertyOneToMany(sourceObjects: any[], propertyName: string, propertyType: string): Promise<any[]> {
		/*
		if (sourceObjects?.length > 0) {
			const source1 = sourceObjects[0]
			if (source1[propertyName]) {
				let deepObjects: any[] = []
				sourceObjects.forEach((sourceObject) => {
					if (sourceObject) {
						const sourceProperty = sourceObject[propertyName]
						if (Array.isArray(sourceProperty)) deepObjects = deepObjects.concat(sourceProperty)
						else deepObjects.push(sourceProperty)
					}
				})
				return deepObjects
			}
		}*/

		// get the id's of the source objects
		const idList = this.getIdList(sourceObjects, 'id')

		// get the dal and do a find by
		if (idList != null && idList.length > 0) {
			const dal = RdbmsMapping.getDac(propertyType, this.userId) as AbstractDac<any>
			const deepObjects = (await dal.findBy(`${propertyName} in (${idList})`, [], [], [], 1, -1)).rows
			const deepObjectMap = new Map<number | string, any>()
			deepObjects?.forEach((deepObject: any) => {
				if (deepObject) {
					const id = deepObject[propertyName]
					let arrayForId: any[]
					if (!deepObjectMap.has(id)) {
						arrayForId = []
						deepObjectMap.set(id, arrayForId)
					} else arrayForId = deepObjectMap.get(id)
					arrayForId.push(deepObject)
				}
			})

			// stitch the values in
			sourceObjects?.forEach((source) => {
				if (!source[propertyName]) source[propertyName] = deepObjectMap.get(source['id'])
			})

			return deepObjects
		}

		return []
	}

	// eslint-disable-next-line max-lines-per-function
	private async deepLoadPropertyManyToOne(sourceObjects: any[], propertyName: string, propertyType: string): Promise<any[]> {
		/*
		if (sourceObjects && sourceObjects.length > 0) {
			const source1 = sourceObjects[0]
			if (source1[propertyName]) {
				let deepObjects: any[] = []
				sourceObjects.forEach((sourceObject) => {
					const sourceProperty = sourceObject[propertyName]
					if (Array.isArray(sourceProperty)) deepObjects = deepObjects.concat(sourceProperty)
					else deepObjects.push(sourceProperty)
				})
				return deepObjects
			}
		}*/

		const idList = this.getIdList(sourceObjects, propertyName)

		// get the dal and do a find by
		if (idList != null && idList.length > 0) {
			const dal = RdbmsMapping.getDac(propertyType, this.userId) as AbstractDac<any>
			const deepObjects = (await dal.findBy(`id in (${idList})`, [], [], [], 1, -1)).rows
			const deepObjectMap = new Map()
			deepObjects?.forEach((deepObject) => {
				const id = deepObject['id']
				deepObjectMap.set(id, deepObject)
			})

			// stitch the values in
			sourceObjects?.forEach((source) => {
				source[propertyName] = deepObjectMap.get(source[propertyName])
			})

			return deepObjects
		}

		return []
	}

	// eslint-disable-next-line max-lines-per-function
	private async expand(sourceObjects: T[], sourceClassName: string, propertyPathToExpand: string): Promise<void> {
		// does the path exist?
		const steps = propertyPathToExpand.split('.')
		const step = steps[0].trim()
		const propertyMapping = RdbmsMapping.getPropertyMapping(sourceClassName, step)
		if (propertyMapping) {
			const targetClassName = propertyMapping?.typeName
			const loadedObjects =
				propertyMapping?.reversePropertyName == undefined
					? await this.deepLoadPropertyManyToOne(sourceObjects, step, targetClassName)
					: await this.deepLoadPropertyOneToMany(sourceObjects, step, targetClassName)

			// next step
			if (steps != null && steps.length > 1) {
				if (loadedObjects != null && loadedObjects.length > 0) {
					const remainingSteps = propertyPathToExpand.replace(`${step}.`, '').trim()
					if (remainingSteps.length > 0) {
						await this.expand(loadedObjects, targetClassName, remainingSteps)
					}
				}
			}
		} else {
			this.logger.debug(`expand "${propertyPathToExpand}" step ${step} invalid`)
			throw new Error(`Property path "${propertyPathToExpand}" is invalid for ${sourceClassName}`)
		}
	}
}
