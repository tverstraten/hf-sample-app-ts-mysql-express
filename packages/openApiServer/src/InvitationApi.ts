/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Invitation } from '@tverstraten/hf-model'
import { InvitationService } from '@tverstraten/hf-bll'
import { AbstractMutableApi } from './AbstractMutableApi'

export class InvitationApi extends AbstractMutableApi<Invitation, InvitationService> {
	static baseName = '/invitation'

	constructor(app: any) {
		super(Invitation, InvitationApi.baseName, InvitationService)
		this.bind(app)
	}
}
