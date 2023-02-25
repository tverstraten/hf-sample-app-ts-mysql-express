/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { TagDac } from '@tverstraten/hf-dal'
import { AbstractMutableService } from './AbstractMutableService'
import { Tag } from '@tverstraten/hf-model'

/**
 * Services meant to operate on the persistent class Tag.
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TagService extends AbstractMutableService<Tag> {
	constructor() {
		super(new TagDac())
	}
}
