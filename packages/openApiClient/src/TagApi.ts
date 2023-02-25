import { AbstractMutableApi } from './AbstractMutableApi'
import { Tag } from '@tverstraten/hf-model'

/**
 * Api client meant to proxy to open api services that operate on the persistent class Tag.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TagApi extends AbstractMutableApi<Tag> {
	constructor() {
		super('Tag')
	}
}
