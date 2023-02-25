/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Tag } from '@tverstraten/hf-model'
import { TagService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class TagApi extends AbstractMutableApi<Tag, TagService> {
	static baseName = '/tag'

	constructor(app: any) {
		super(Tag, TagApi.baseName, TagService)
		this.bind(app)
	}
}
