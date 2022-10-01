import { AbstractTraceableDa } from '../da/AbstractTraceableDa'
import { AbstractService } from './AbstractService.generated'
import { AbstractTraceable } from '../model/AbstractTraceable'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class AbstractTraceableService extends AbstractService<AbstractTraceable> {
	constructor() {
		super(new AbstractTraceableDa())
	}
}
