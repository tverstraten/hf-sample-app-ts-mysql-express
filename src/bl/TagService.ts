import { TagDa } from '../da/TagDa'
import { AbstractService } from './AbstractService.generated'
import { Tag } from '../model/Tag'

/**
 * NOTE: This file is meant to be extended, add to it as you need. It is only generated if it does not already exist.
 */
export class TagService extends AbstractService<Tag> {
	constructor() {
		super(new TagDa())
	}
}
