import { Invitation } from '../model/Invitation'
import { InvitationService } from '../bl/InvitationService'
import { AbstractController } from './AbstractController.generated'

export class InvitationApi extends AbstractController<Invitation, InvitationService> {
	static baseName = '/invitation'

	constructor(app: any) {
		super(Invitation, InvitationApi.baseName, InvitationService)
		this.bind(app)
	}
}
