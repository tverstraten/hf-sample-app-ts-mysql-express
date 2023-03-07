/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SystemDescription } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { SystemDescriptionDac } from '../SystemDescriptionDac'
import { UserDac } from '../UserDac'
import { OrganizationDac } from '../OrganizationDac'
import { PersistentBuilderDac } from '../PersistentBuilderDac'
import { User } from '@tverstraten/hf-model' // SystemDescriptionDac

describe('SystemDescriptionDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new SystemDescriptionDac(currentUser.id)
		const newObject = new SystemDescription()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		newObject.name = TestHelper.randomString(128) // string
		newObject.description = TestHelper.randomString(1024) // string
		newObject.configurationId = await DacTestHelper.randomResultId(new PersistentBuilderDac(currentUser.id)) // int
		newObject.systemAsJson = TestHelper.randomString(0) // string

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
		expect(resultObject.name).toBe(newObject.name) // string
		expect(resultObject.description).toBe(newObject.description) // string
		expect(resultObject.configurationId).toBe(newObject.configurationId) // int
		// configuration - the type (PersistentBuilder) is not being tested
		expect(resultObject.systemAsJson).toBe(newObject.systemAsJson) // string
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new SystemDescriptionDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], undefined, 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		readObject.name = TestHelper.randomString(128) // string
		readObject.description = TestHelper.randomString(1024) // string
		readObject.configurationId = await DacTestHelper.randomResultId(new PersistentBuilderDac(currentUser.id)) // int
		readObject.systemAsJson = TestHelper.randomString(0) // string

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
		expect(resultObject.name).toBe(readObject.name) // string
		expect(resultObject.description).toBe(readObject.description) // string
		expect(resultObject.configurationId).toBe(readObject.configurationId) // int
		// configuration - the type (PersistentBuilder) is not being tested
		expect(resultObject.systemAsJson).toBe(readObject.systemAsJson) // string
	})
})



