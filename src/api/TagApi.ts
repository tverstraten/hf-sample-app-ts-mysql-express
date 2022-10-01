import { Tag } from '../model/Tag'
import { TagService } from '../bl/TagService'
import { AbstractController } from './AbstractController.generated'

export class TagApi extends AbstractController<Tag, TagService> {
	static baseName = '/tag'

	constructor(app: any) {
		super(Tag, TagApi.baseName, TagService)
		this.bind(app)
	}
}
