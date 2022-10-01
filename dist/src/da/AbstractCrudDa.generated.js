"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCrudDa = void 0;
const AbstractDa_generated_1 = require("./AbstractDa.generated");
const FindResults_generated_1 = require("./FindResults.generated");
class WhereClause {
    constructor(text, params) {
        this.sqlText = text;
        this.valuesToBind = params;
    }
}
class AbstractCrudDa extends AbstractDa_generated_1.AbstractDa {
    fromRow(row) {
        const result = this.constructor();
        const resultAny = result;
        Object.keys(row).forEach((columnName) => {
            resultAny[columnName] = row[columnName];
        });
        return result;
    }
    async findOneById(id) {
        try {
            const sql = `SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` = ?`;
            const queryResults = (await this.executePrepared(sql, [id]));
            let findResult;
            if (queryResults != null) {
                queryResults.forEach((row) => {
                    findResult = this.fromRow(row);
                });
            }
            if (findResult == null)
                throw RangeError(`findOneById(${id}) Object with the given id does not exist`);
            return findResult;
        }
        catch (problem) {
            console.log(`findOneById(${id}) failed reason ${problem}`);
            throw problem;
        }
    }
    async findBy(where, params = [], orderBy, page = 1, pageSize = 20) {
        return this.findBySafe(where, params, orderBy, page, pageSize);
    }
    async findBySafe(where, params = [], orderBy, page = 1, pageSize = 20) {
        try {
            const selectList = ` SQL_CALC_FOUND_ROWS *`;
            const fromFragment = ` FROM \`${this.getTableName()}\``;
            const whereFragment = where ? ` WHERE ${where}` : '';
            const orderByFragment = orderBy ? ` ORDER BY ${orderBy}` : '';
            const limitFragment = pageSize === -1 ? '' : ` LIMIT ${(page - 1) * pageSize}, ${pageSize}`;
            const sql = `SELECT${selectList}${fromFragment}${whereFragment}${orderByFragment}${limitFragment}; SELECT FOUND_ROWS()`;
            const queryResults = await this.executePrepared(sql, params);
            const rowResults = queryResults[0];
            const overallResults = queryResults[1];
            const foundObjects = [];
            if (rowResults != null) {
                rowResults.forEach((row) => {
                    foundObjects.push(this.fromRow(row));
                });
            }
            const results = new FindResults_generated_1.FindResults();
            results.page = page;
            results.rowsPerPage = pageSize;
            results.numberOfMatchingRows = overallResults.affectedRows;
            results.rows = foundObjects;
            return results;
        }
        catch (problem) {
            console.log(`findBy(${where}) failed reason ${problem}`);
            throw problem;
        }
    }
    getInsertSqlFragments(values) {
        let columnNames = '';
        let parameterMarkers = '';
        const parameters = [];
        Object.keys(values).forEach((columnName) => {
            const columnValue = values[columnName];
            if (columnValue !== undefined) {
                if (columnNames !== '')
                    columnNames += ',';
                columnNames += `\`${columnName}\``;
                if (parameterMarkers !== '')
                    parameterMarkers += ',';
                parameterMarkers += '?';
            }
        });
        return { columnNames: columnNames, parameterMarkers: parameterMarkers, parameters: parameters };
    }
    async insertPartial(values) {
        const fragments = this.getInsertSqlFragments(values);
        const sql = `INSERT INTO \`${this.getTableName()}\` (${fragments.columnNames}) values (${fragments.parameterMarkers})`;
        const executeResult = (await this.executePrepared(sql, fragments.parameters));
        return executeResult.affectedRows === 1;
    }
    async create(newItem) {
        try {
            const didSucceed = await this.insertPartial(newItem);
            return didSucceed;
        }
        catch (problem) {
            console.log(`create() failed ${JSON.stringify(newItem)} reason ${problem}`);
            throw problem;
        }
    }
    async insertPartialAndReturn(values) {
        const fragments = this.getInsertSqlFragments(values);
        const sql = `INSERT INTO \`${this.getTableName()}\` (${fragments.columnNames}) values (${fragments.parameterMarkers});SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` = LAST_INSERT_ID()`;
        const executeResult = await this.executePrepared(sql, fragments.parameters);
        const result1 = executeResult[1];
        let insertedRow;
        if (executeResult != null) {
            result1.forEach((row) => {
                insertedRow = this.fromRow(row);
            });
        }
        if (insertedRow)
            return insertedRow;
        throw new RangeError(`Row was not returned from the database`);
    }
    async createAndReturn(newItem) {
        try {
            const newRow = await this.insertPartialAndReturn(newItem);
            return newRow;
        }
        catch (problem) {
            console.log(`Create() failed ${JSON.stringify(newItem)} reason ${problem}`);
            throw problem;
        }
    }
    getUpdatePartialSqlFragments(values) {
        let setFragments = '';
        const parameters = [];
        Object.keys(values).forEach((columnName) => {
            const columnValue = values[columnName];
            if (columnValue !== undefined) {
                if (setFragments !== '')
                    setFragments += ',';
                if (columnName === 'objectVersion') {
                    setFragments += `\`objectVersion\` = \`objectVersion\` + 1`;
                }
                else {
                    setFragments += `\`${columnName}\` = ?`;
                    parameters.push(columnValue);
                }
            }
        });
        return { setFragments: setFragments, parameters: parameters };
    }
    async updatePartial(values, whereClause) {
        const fragments = this.getUpdatePartialSqlFragments(values);
        fragments.parameters = fragments.parameters.concat(whereClause.valuesToBind);
        const sql = `UPDATE \`${this.getTableName()}\` SET ${fragments.setFragments} WHERE ${whereClause.sqlText}`;
        const executeResult = await this.executePrepared(sql, fragments.parameters);
        if (executeResult != null)
            return executeResult.affectedRows;
        return undefined;
    }
    async update(itemUpdate) {
        try {
            const id = itemUpdate[this.getIdColumnName()];
            const where = new WhereClause(`\`${this.getIdColumnName()}\` = ?`, [id]);
            const rowsUpdated = await this.updatePartial(itemUpdate, where);
            return rowsUpdated === 1;
        }
        catch (problem) {
            console.log(`Update failed ${JSON.stringify(itemUpdate)}, reason ${problem}`);
            throw problem;
        }
    }
    async updateAndReturnPartial(values, whereClause) {
        const fragments = this.getUpdatePartialSqlFragments(values);
        fragments.parameters = fragments.parameters.concat(whereClause.valuesToBind);
        const sql = `SET @uids := null;UPDATE \`${this.getTableName()}\` SET ${fragments.setFragments} WHERE ${whereClause.sqlText} AND (SELECT @uids := CONCAT_WS(',', \`${this.getIdColumnName()}\`, @uids) ); SELECT * FROM \`${this.getTableName()}\` WHERE \`${this.getIdColumnName()}\` in (@uids);`;
        const executeResult = await this.executePrepared(sql, fragments.parameters);
        const updatedRows = executeResult[2];
        const results = [];
        if (updatedRows != null) {
            updatedRows.forEach((row) => {
                const updatedObject = this.fromRow(row);
                results.push(updatedObject);
            });
        }
        return results;
    }
    async updateAndReturn(itemUpdate) {
        const id = itemUpdate[this.getIdColumnName()];
        try {
            const where = new WhereClause(`\`${this.getIdColumnName()}\` = ?`, [id]);
            const data = await this.updateAndReturnPartial(itemUpdate, where);
            return data[0];
        }
        catch (problem) {
            console.log(`UpdateAndReturn(${id}) failed ${JSON.stringify(itemUpdate)}, reason ${problem}`);
            throw problem;
        }
    }
    async remove(id) {
        try {
            const sql = `DELETE FROM '${this.getTableName()}' WHERE '${this.getIdColumnName()}' = @id`;
            await this.executePrepared(sql, [id]);
            return true;
        }
        catch (problem) {
            console.log(`Remove failed ${id} reson ${problem}`);
            throw problem;
        }
    }
}
exports.AbstractCrudDa = AbstractCrudDa;
