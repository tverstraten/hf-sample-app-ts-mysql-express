import { AbstractMutableApi } from './AbstractMutableApi'
import { Build } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class Build.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class BuildApi extends AbstractMutableApi<Build> {
	constructor() {
		super('Build')
	}
}
