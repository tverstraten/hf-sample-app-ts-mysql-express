import express, { Request, Response } from 'express'
import { AbstractService } from '../bl/AbstractService.generated'
import { FindResults } from '../da/FindResults.generated'
import { Traceable } from '../model/Traceable'

export interface NoParamConstructor<T> {
	new (): T
}

export abstract class AbstractController<T extends Traceable, S extends AbstractService<T>> {

	protected serviceConstructor: NoParamConstructor<S>

	protected derivedConstructor: NoParamConstructor<T>

	protected router = express.Router()

	private path: string

	constructor(ctor: NoParamConstructor<T>, path: string, service: NoParamConstructor<S>) {
		this.path = path
		this.serviceConstructor = service
		this.derivedConstructor = ctor

		this.addDefaultGet()
		this.addDefaultPost()
		this.addDefaultPut()
		this.addDefaultDelete()
	}

	getService(req: Request, __res: Response): S {
		return new this.serviceConstructor()
	}

	bind(app: any) {
		app.use(this.path, this.router)
	}

	addDefaultGet() {
		this.router.get('/:id', async (req: Request, res: Response) => {
			const id: number = parseInt(req.params.id)
			const service = this.getService(req, res)
			const item: T | null = await service.findOneById(id)
			if (item) {
				console.log(`get exit 200 ${JSON.stringify(item)}`)
				return res.status(200).send(item)
			}
			console.log(`get exit 404 ${req.params.id}`)
			res.status(404).send('item not found')
		})

		this.router.get('', async (req: Request, res: Response) => {
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
				console.log(`get(filter=${filter}, page=${page}, pageSize=${pageSize}) exit 200 ${JSON.stringify(results.rows)}`)
				return res.status(200).send(results.rows)
			}
			console.log(`get(filter=${filter}, page=${page}, pageSize=${pageSize}) exit 404`)
			res.status(404).send('item not found')
		})
	}

	addDefaultPost() {
		this.router.post('/', async (req: Request, res: Response) => {
			const body: T = req.body
			const newItem = Object.assign(new this.derivedConstructor(), body)
			const service = this.getService(req, res)
			const savedItem = await service.createAndReturn(newItem)

			console.log(`post exit 201 ${JSON.stringify(savedItem)}`)
			res.status(201).json(savedItem)
		})
	}

	addDefaultPut() {
		this.router.put('/', async (req: Request, res: Response) => {
			const body: T = req.body
			const itemUpdate = Object.assign(new this.derivedConstructor(), body)
			const service = this.getService(req, res)
			const item: T | null = await service.findOneById(itemUpdate.id)
			if (item == null) {
				console.log(`put exit 404 ${itemUpdate.id}`)
				res.status(404).send(`${itemUpdate.id} does not exist`)
			}
			const updatedItem = await service.updateAndReturn(itemUpdate)

			console.log(`put exit 200 ${JSON.stringify(req.body)}`)
			return res.status(200).json(updatedItem)
		})
	}

	addDefaultDelete() {
		this.router.delete('/:id', async (req: Request, res: Response) => {
			const id: number = parseInt(req.params.id)
			const service = this.getService(req, res)
			await service.remove(id)
			console.log(`delete exit 204`)
			res.sendStatus(204)
		})
	}
}
