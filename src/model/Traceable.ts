import { Identifiable } from '@hfadmin/runtime'

export interface Traceable extends Identifiable {
	id: number

	createdById?: number

	createdOn: Date
}
