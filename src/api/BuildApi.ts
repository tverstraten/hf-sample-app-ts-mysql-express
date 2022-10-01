import { Build } from '../model/Build'
import { BuildService } from '../bl/BuildService'
import { AbstractController } from './AbstractController.generated'

export class BuildApi extends AbstractController<Build, BuildService> {
	static baseName = '/build'

	constructor(app: any) {
		super(Build, BuildApi.baseName, BuildService)
		this.bind(app)
	}
}
