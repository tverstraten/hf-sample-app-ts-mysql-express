"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractDa = void 0;
const async_mutex_1 = require("async-mutex");
const dotenv = __importStar(require("dotenv"));
const promise_1 = require("mysql2/promise");
dotenv.config();
class AbstractDa {
    async getConnectionPool() {
        const mutex = new async_mutex_1.Mutex();
        const release = await mutex.acquire();
        try {
            if (AbstractDa.connectionPool == null) {
                try {
                    const pool = await (0, promise_1.createPool)({
                        multipleStatements: true,
                        host: process.env.DATABASE_URL,
                        user: process.env.DATABASE_USER_ID,
                        password: process.env.DATABASE_PASSWORD,
                        database: process.env.DATABASE_NAME,
                        waitForConnections: true,
                        connectionLimit: 20,
                        queueLimit: 0,
                    });
                    AbstractDa.connectionPool = pool;
                }
                catch (problem) {
                    console.log(`connect failed reason ${problem}`);
                    throw problem;
                }
            }
        }
        finally {
            release();
        }
        if (AbstractDa.connectionPool != null)
            return AbstractDa.connectionPool;
        throw new RangeError(`failed to create connection pool`);
    }
    async getConnection() {
        if (!this.databaseConnection) {
            try {
                const pool = await this.getConnectionPool();
                this.databaseConnection = await pool.getConnection();
            }
            catch (problem) {
                console.log(`getConnection() failed reason ${problem}`);
                throw problem;
            }
        }
        return this.databaseConnection;
    }
    async executePrepared(sql, params) {
        try {
            let connection = await this.getConnection();
            const [rows] = await connection.query(sql, params);
            return rows;
        }
        catch (problem) {
            console.log(`connect failed reason ${problem}`);
            throw problem;
        }
    }
}
exports.AbstractDa = AbstractDa;
