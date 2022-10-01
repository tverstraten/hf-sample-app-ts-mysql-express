import { BuildDa } from '../da/BuildDa'
import { AbstractService } from './AbstractService.generated'
import { Build } from '../model/Build'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class BuildService extends AbstractService<Build> {
	constructor() {
		super(new BuildDa())
	}
}
