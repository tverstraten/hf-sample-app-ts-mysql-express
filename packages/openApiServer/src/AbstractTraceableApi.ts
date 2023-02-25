/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Request, Response } from 'express'
import { AbstractTraceableService } from '@tverstraten/hf-bll'
import { AbstractTraceable } from '@tverstraten/hf-model'
import { Traceable } from '@tverstraten/hf-model'
import { AbstractApi, NoParamConstructor } from './AbstractApi'

/**
 * A base point of inheritance for classes to expose REST api endpoints that proxy to merely underlying services.
 * NOTE: This class is generated, do not make changes to it.
 */
export class AbstractTraceableApi<T extends Traceable, S extends AbstractTraceableService<T>> extends AbstractApi<
	AbstractTraceable,
	AbstractTraceableService<T>
> {
	constructor(ctor: NoParamConstructor<T>, path: string, service: NoParamConstructor<S>) {
		super(ctor, path, service)
		this.router.post('/', this.create)
	}

	async create(req: Request, res: Response): Promise<any> {
		const body: T = req.body
		const newItem = Object.assign(new this.derivedConstructor(), body)
		const service = this.getService(req, res)
		const savedItem = await service.createAndReturn(newItem)

		this.logger.debug(`post exit 201 ${JSON.stringify(savedItem)}`)
		res.status(201).json(savedItem)
	}
}
