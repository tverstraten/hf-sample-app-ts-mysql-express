/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SubscriptionTypeMetrics } from '@tverstraten/hf-model'
import { AbstractTraceableDac } from './AbstractTraceableDac'

/**
 * NOTE: This class is generated, do not make changes to it.
 */
export class GeneratedSubscriptionTypeMetricsDac extends AbstractTraceableDac<SubscriptionTypeMetrics> 
{
	constructor(userId: number) {
		super(SubscriptionTypeMetrics, userId)
	}
	
	protected getTableName(): string {
		return 'SubscriptionTypeMetrics'
	}

	// eslint-disable-next-line max-lines-per-function
	protected fromRow(row: any): SubscriptionTypeMetrics {
		const result = new SubscriptionTypeMetrics()
		const resultAny = result as any
		result.id = row['id'] // int
		result.createdById = row['createdById'] // int
		resultAny.createdBy = (): any => { throw new RangeError(`Property createdBy was not loaded from database`)} // User
		result.createdOn = new Date(row['createdOn']) // date
		result.type = row['type'] // SubscriptionType
		result.name = row['name'] // string
		result.description = row['description'] // string
		result.numberOfUsersAllowed = row['numberOfUsersAllowed'] // number
		result.numberOfBuildsAllowed = row['numberOfBuildsAllowed'] // number
		result.costPerUser = row['costPerUser'] // number
		result.costPerBuild = row['costPerBuild'] // number

		return result
	}
}
