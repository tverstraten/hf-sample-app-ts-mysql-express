import { AbstractMutableDa } from '../da/AbstractMutableDa'
import { AbstractService } from './AbstractService.generated'
import { AbstractMutable } from '../model/AbstractMutable'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class AbstractMutableService extends AbstractService<AbstractMutable> {
	constructor() {
		super(new AbstractMutableDa())
	}
}
