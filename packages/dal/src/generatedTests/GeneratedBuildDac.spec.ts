/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Build } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { DacTestHelper } from './DacTestHelper'
import { BuildDac } from '../BuildDac'
import { UserDac } from '../UserDac'
import { OrganizationDac } from '../OrganizationDac'
import { SystemDescriptionDac } from '../SystemDescriptionDac'

describe('BuildDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()
		const runDate = new Date()

		const objectDac = new BuildDac(1)
		const newObject = new Build()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.firstResultId(new OrganizationDac(1)) // int
		newObject.forSystemId = await DacTestHelper.firstResultId(new SystemDescriptionDac(1)) // int
		newObject.startedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.finishedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.builtById = await DacTestHelper.firstResultId(new UserDac(1)) // int
		newObject.triggeredById = await DacTestHelper.firstResultId(new UserDac(1)) // int

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.objectVersion).toBe(1)
		expect(resultObject.lastUpdatedById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.lastUpdatedOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.isDeleted).toBe(false)
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not matched
		expect(resultObject.forSystemId).toBe(newObject.forSystemId) // int
		// forSystem - the type (SystemDescription) is not matched
		expect(Math.abs((resultObject.startedOn as Date).getTime() - newObject.startedOn.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.finishedOn as Date).getTime() - newObject.finishedOn.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.builtById).toBe(newObject.builtById) // int
		// builtBy - the type (User) is not matched
		expect(resultObject.triggeredById).toBe(newObject.triggeredById) // int
		// triggeredBy - the type (User) is not matched
	})
})




