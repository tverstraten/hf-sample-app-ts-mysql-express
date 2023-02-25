/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { BuildDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Build } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Build.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class BuildService extends AbstractMutableService<Build> {
	constructor() {
		super(new BuildDac())
	}
}
