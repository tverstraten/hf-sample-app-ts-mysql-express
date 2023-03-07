/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Build } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { BuildDac } from '../BuildDac'
import { UserDac } from '../UserDac'
import { OrganizationDac } from '../OrganizationDac'
import { SystemDescriptionDac } from '../SystemDescriptionDac'
import { User } from '@tverstraten/hf-model' // BuildDac

describe('BuildDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new BuildDac(currentUser.id)
		const newObject = new Build()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		newObject.forSystemId = await DacTestHelper.randomResultId(new SystemDescriptionDac(currentUser.id)) // int
		newObject.startedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.finishedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		newObject.builtById = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		newObject.triggeredById = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int

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
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.forSystemId).toBe(newObject.forSystemId) // int
		// forSystem - the type (SystemDescription) is not being tested
		expect(Math.abs((resultObject.startedOn as Date).getTime() - newObject.startedOn.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.finishedOn as Date).getTime() - newObject.finishedOn.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.builtById).toBe(newObject.builtById) // int
		// builtBy - the type (User) is not being tested
		expect(resultObject.triggeredById).toBe(newObject.triggeredById) // int
		// triggeredBy - the type (User) is not being tested
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new BuildDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], undefined, 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		readObject.forSystemId = await DacTestHelper.randomResultId(new SystemDescriptionDac(currentUser.id)) // int
		readObject.startedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		readObject.finishedOn = new Date(Math.round(Math.random() * 10000000)) // dateTime
		readObject.builtById = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int
		readObject.triggeredById = await DacTestHelper.randomResultId(new UserDac(currentUser.id)) // int

		const results = await objectDac.updateAndReturn([readObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.createdOn).toBeDefined()
		expect(resultObject.objectVersion).toBe(readObject.objectVersion + 1)
		expect(resultObject.lastUpdatedById).toBe(objectDac.userId)
		expect(Math.abs((resultObject.lastUpdatedOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(resultObject.isDeleted).toBe(false)
		expect(resultObject.id).toBe(readObject.id) // int
		expect(resultObject.createdById).toBe(readObject.createdById) // int
		// createdBy - the type (User) is not being tested
		expect(resultObject.withinOrganizationId).toBe(readObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.forSystemId).toBe(readObject.forSystemId) // int
		// forSystem - the type (SystemDescription) is not being tested
		expect(Math.abs((resultObject.startedOn as Date).getTime() - readObject.startedOn.getTime())).toBeLessThan(1000) // dateTime
		expect(Math.abs((resultObject.finishedOn as Date).getTime() - readObject.finishedOn.getTime())).toBeLessThan(1000) // dateTime
		expect(resultObject.builtById).toBe(readObject.builtById) // int
		// builtBy - the type (User) is not being tested
		expect(resultObject.triggeredById).toBe(readObject.triggeredById) // int
		// triggeredBy - the type (User) is not being tested
	})
})



