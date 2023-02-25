/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { LogAsyncMethod } from '@tverstraten/log-annotations'
import { ResultSetHeader, RowDataPacket } from 'mysql2/promise'
import { Mutable } from '@tverstraten/hf-model'
import { WhereClause } from './AbstractDac'
import { AbstractTraceableDac } from './AbstractTraceableDac'

/**
 * Base point of inheritance for data access classes to model classes that can be modified and removed.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractMutableDac<T extends Mutable> extends AbstractTraceableDac<T> {
	getUpdatePartialSqlFragments(values: any): { setFragments: string; parameters: any[] } {
		let setFragments = ''
		const parameters = [] as any[]
		Object.keys(values).forEach((columnName) => {
			const columnValue = values[columnName]
			if (columnValue !== undefined) {
				if (setFragments !== '') setFragments += ','

				if (columnName === 'objectVersion') {
					setFragments += `\`objectVersion\` = \`objectVersion\` + 1`
				} else {
					setFragments += `\`${columnName}\` = ?`
					parameters.push(columnValue)
				}
			}
		})

		return { setFragments: setFragments, parameters: parameters }
	}

	@LogAsyncMethod()
	async updatePartial(values: any, whereClause: WhereClause): Promise<number | undefined> {
		const fragments = this.getUpdatePartialSqlFragments(values)
		fragments.parameters = fragments.parameters.concat(whereClause.valuesToBind)

		const sql = `UPDATE \`${this.getTableName()}\` SET ${fragments.setFragments} WHERE ${whereClause.sqlText}`

		const executeResult = await this.executePrepared(sql, fragments.parameters)

		if (executeResult != null) return (executeResult as ResultSetHeader).affectedRows

		return undefined
	}

	async update(itemUpdate: T): Promise<boolean> {
		const id = itemUpdate.id
		const where = new WhereClause(`\`${this.getIdColumnName()}\` = ?`, [id])
		const rowsUpdated = await this.updatePartial(itemUpdate, where)
		return rowsUpdated === 1
	}

	@LogAsyncMethod()
	async updateAndReturnPartial(values: any, whereClause: WhereClause): Promise<T[]> {
		const fragments = this.getUpdatePartialSqlFragments(values)
		fragments.parameters = fragments.parameters.concat(whereClause.valuesToBind)

		const sql = `SET @uids := null;UPDATE \`${this.getTableName()}\` SET ${fragments.setFragments} WHERE ${
			whereClause.sqlText
		} AND (SELECT @uids := CONCAT_WS(',', \`${this.getIdColumnName()}\`, @uids) ); SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` in (@uids);`

		const executeResult = await this.executePrepared(sql, fragments.parameters)

		const updatedRows = (executeResult as any)[2] as RowDataPacket[]

		const results = [] as T[]
		if (updatedRows != null) {
			updatedRows.forEach((row) => {
				const updatedObject = this.fromRow(row)
				results.push(updatedObject)
			})
		}
		return results
	}

	async updateAndReturn(itemUpdate: T): Promise<T> {
		const id = itemUpdate.id
		const where = new WhereClause(`\`${this.getIdColumnName()}\` = ?`, [id])
		const data = await this.updateAndReturnPartial(itemUpdate, where)
		return data[0]
	}

	@LogAsyncMethod()
	async delete(id: number): Promise<boolean> {
		const sql = `DELETE FROM '${this.getTableName()}' WHERE '${this.getIdColumnName()}' = @id`
		await this.executePrepared(sql, [id])
		return true
	}

	@LogAsyncMethod()
	async softDelete(id: number): Promise<boolean> {
		const sql = `UPDATE '${this.getTableName()}' SET isDeleted=1 WHERE '${this.getIdColumnName()}' = @id`
		await this.executePrepared(sql, [id])
		return true
	}
}
