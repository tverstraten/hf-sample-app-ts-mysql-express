/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Build } from '@tverstraten/hf-model'
import { BuildService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class BuildApi extends AbstractMutableApi<Build, BuildService> {
	static baseName = '/build'

	constructor(app: any) {
		super(Build, BuildApi.baseName, BuildService)
		this.bind(app)
	}
}
