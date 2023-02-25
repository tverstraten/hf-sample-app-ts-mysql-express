/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { AbstractMutableService } from '@tverstraten/hf-bll'
import { AbstractApi, NoParamConstructor } from './AbstractApi'
import { Mutable } from '@tverstraten/hf-model'
import { Request, Response } from 'express'

/**
 * A base point of inheritance for classes to expose REST api endpoints that proxy to merely underlying services.
 * NOTE: This class is generated, do not make changes to it.
 */
export class AbstractMutableApi<T extends Mutable, S extends AbstractMutableService<T>> extends AbstractApi<T, S> {
	static baseName = '/abstractMutable'

	constructor(ctor: NoParamConstructor<T>, path: string, service: NoParamConstructor<S>) {
		super(ctor, path, service)
		this.router.put('/', this.update)
		this.router.delete('/:id', this.softDelete)
		this.router.delete('/:id/permanent', this.delete)
	}

	async update(req: Request, res: Response): Promise<any> {
		const body: T = req.body
		const itemUpdate = Object.assign(new this.derivedConstructor(), body)
		const service = this.getService(req, res)
		const item: T | null = await service.findOneById(itemUpdate.id)
		if (item == null) {
			this.logger.debug(`put exit 404 ${itemUpdate.id}`)
			res.status(404).send(`${itemUpdate.id} does not exist`)
		}
		const updatedItem = await service.updateAndReturn(itemUpdate)

		this.logger.debug(`put exit 200 ${JSON.stringify(req.body)}`)
		return res.status(200).json(updatedItem)
	}

	async softDelete(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id)
		const service = this.getService(req, res)
		await service.softDelete(id)

		this.logger.debug(`softDelete exit 204`)
		res.sendStatus(204)
	}

	async delete(req: Request, res: Response): Promise<void> {
		const id: number = parseInt(req.params.id)
		const service = this.getService(req, res)
		await service.delete(id)

		this.logger.debug(`delete exit 204`)
		res.sendStatus(204)
	}
}
