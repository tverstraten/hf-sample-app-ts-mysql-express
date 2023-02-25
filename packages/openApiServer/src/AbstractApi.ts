/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Logger } from '@tverstraten/log-annotations'
import express, { Request, Response } from 'express'
import { AbstractService } from '@tverstraten/hf-bll'
import { FindResults } from '@tverstraten/hf-dal'

export interface NoParamConstructor<T> {
	new (): T
}

/**
 * A base point of inheritance for classes to expose REST api endpoints that proxy to merely underlying services.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractApi<T, S extends AbstractService<T>> {
	protected logger = new Logger(this.constructor.name)

	protected serviceConstructor: NoParamConstructor<S>

	protected derivedConstructor: NoParamConstructor<T>

	protected router = express.Router()

	private path: string

	constructor(ctor: NoParamConstructor<T>, path: string, service: NoParamConstructor<S>) {
		this.path = path
		this.serviceConstructor = service
		this.derivedConstructor = ctor

		this.router.get('/:id', this.findOneById)
		this.router.get('/:id', this.findAllByFilter)
	}

	getService(__req: Request, __res: Response): S {
		return new this.serviceConstructor()
	}

	bind(app: any): void {
		app.use(this.path, this.router)
	}

	async findOneById(req: Request, res: Response): Promise<any> {
		const id: number = parseInt(req.params.id)
		const service = this.getService(req, res)
		const item: T | null = await service.findOneById(id)
		if (item) {
			this.logger.debug(`get exit 200 ${JSON.stringify(item)}`)
			const result = res.status(200).send(item)
			return result
		}

		this.logger.debug(`get exit 404 ${req.params.id}`)
		res.status(404).send('item not found')
	}

	async findAllByFilter(req: Request, res: Response): Promise<any> {
		let filter = ''
		if (typeof req.query.filter === 'string') filter = req.query.filter
		else if (Array.isArray(req.query.filter)) {
			if (typeof req.query.filter[0] === 'string') filter = req.query.filter[0]
		}

		let orderBy = ''
		if (typeof req.query.orderBy === 'string') orderBy = req.query.orderBy
		else if (Array.isArray(req.query.orderBy)) {
			if (typeof req.query.orderBy[0] === 'string') orderBy = req.query.orderBy[0]
		}

		let page = 1
		if (typeof req.query.page === 'string') page = parseInt(req.query.page)
		else if (Array.isArray(req.query.page)) {
			if (typeof req.query.page[0] === 'string') page = parseInt(req.query.page[0])
		}

		let pageSize = 20
		if (typeof req.query.pageSize === 'string') pageSize = parseInt(req.query.pageSize)
		else if (Array.isArray(req.query.pageSize)) {
			if (typeof req.query.pageSize[0] === 'string') pageSize = parseInt(req.query.pageSize[0])
		}

		const service = this.getService(req, res)
		const results: FindResults<T> = await service.findBy(filter, [], orderBy, page, pageSize)
		if (results.rows) {
			this.logger.debug(`get(filter=${filter}, page=${page}, pageSize=${pageSize}) exit 200 ${JSON.stringify(results.rows)}`)
			return res.status(200).send(results.rows)
		}

		this.logger.debug(`get(filter=${filter}, page=${page}, pageSize=${pageSize}) exit 404`)
		res.status(404).send('item not found')
	}
}
