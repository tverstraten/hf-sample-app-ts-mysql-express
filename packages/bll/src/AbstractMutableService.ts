/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { AbstractMutableDac } from '@tverstraten/hf-dal'
import { AbstractTraceableService } from './AbstractTraceableService'
import { Mutable } from '@tverstraten/hf-model'

/**
 * A base point of inheritance for services that work with persistent data that can be altered.
 * NOTE: This class is generated, do not make changes to it.
 */
export abstract class AbstractMutableService<T extends Mutable> extends AbstractTraceableService<T> {
	mutableDac: AbstractMutableDac<T>

	constructor(dac: AbstractMutableDac<T>) {
		super(dac)
		this.mutableDac = dac
	}

	async update(itemUpdate: T): Promise<boolean> {
		return this.mutableDac.update(itemUpdate)
	}

	async updateAndReturn(itemUpdate: T): Promise<T | null> {
		return this.mutableDac.updateAndReturn(itemUpdate)
	}

	async delete(id: number): Promise<boolean> {
		return this.mutableDac.delete(id)
	}

	async softDelete(id: number): Promise<boolean> {
		return this.mutableDac.softDelete(id)
	}
}
