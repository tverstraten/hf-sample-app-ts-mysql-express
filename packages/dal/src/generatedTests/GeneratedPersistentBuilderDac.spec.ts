/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilder } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DacTestHelper } from './DacTestHelper'
import { PersistentBuilderDac } from '../PersistentBuilderDac'
import { UserDac } from '../UserDac'
import { OrganizationDac } from '../OrganizationDac'
import { PersistentBuilderType } from '@tverstraten/hf-model'
import { ReleaseLevel } from '@tverstraten/hf-model'
import { User } from '@tverstraten/hf-model' // PersistentBuilderDac

describe('PersistentBuilderDac', () => {
	it('create and read basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)		
		const runDate = new Date()

		const objectDac = new PersistentBuilderDac(currentUser.id)
		const newObject = new PersistentBuilder()
		newObject.createdById = -1
		newObject.lastUpdatedById = -1
		newObject.isDeleted = false
		newObject.type = TestHelper.randomEnum(PersistentBuilderType) // enumeration
		newObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		newObject.name = TestHelper.randomString(128) // string
		newObject.releaseLevel = TestHelper.randomEnum(ReleaseLevel) // enumeration

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
		expect(resultObject.type).toBe(newObject.type) // Enumeration
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.name).toBe(newObject.name) // string
		expect(resultObject.releaseLevel).toBe(newObject.releaseLevel) // Enumeration
		expect(resultObject.mostCurrentVersionId).toBe(newObject.mostCurrentVersionId) // int

		// test the values again but by reading this getTime
		const reReadObject = await objectDac.findOneById(resultObject.id)
		expect(reReadObject.createdById).toBe(objectDac.userId)
		expect(Math.abs((reReadObject.createdOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(reReadObject.objectVersion).toBe(1)
		expect(reReadObject.lastUpdatedById).toBe(objectDac.userId)
		expect(Math.abs((reReadObject.lastUpdatedOn as Date).getTime() - runDate.getTime())).toBeLessThan(1000)
		expect(reReadObject.isDeleted).toBe(false)
		expect(reReadObject.type).toBe(newObject.type) // Enumeration
		expect(reReadObject.withinOrganizationId).toBe(newObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not being tested
		expect(reReadObject.name).toBe(newObject.name) // string
		expect(reReadObject.releaseLevel).toBe(newObject.releaseLevel) // Enumeration
		expect(reReadObject.mostCurrentVersionId).toBe(newObject.mostCurrentVersionId) // int

		// test deep loading the initial values
		const createdByResult = await objectDac.findOneById(resultObject.id, ['createdBy'])
		expect(createdByResult?.createdBy?.id).toBe(resultObject.createdById)
		const lastUpdatedByResult = await objectDac.findOneById(resultObject.id, ['lastUpdatedBy'])
		expect(lastUpdatedByResult?.lastUpdatedBy?.id).toBe(resultObject.lastUpdatedById)
		const withinOrganizationResult = await objectDac.findOneById(resultObject.id, ['withinOrganization'])
		expect(withinOrganizationResult?.withinOrganization?.id).toBe(resultObject.withinOrganizationId)
	})
	
	it('read one and change basic properties', async () => {
		const currentUser = await DacTestHelper.randomResult(new UserDac(1)) as User
		expect(currentUser).toBeDefined()
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const userDac = new UserDac(currentUser.id)
		const runDate = new Date()

		const objectDac = new PersistentBuilderDac(currentUser.id)
		const initialRead = await objectDac.findBy('1=1 and isDeleted=0', [], [], [], 1, 1)
		const readObject = initialRead.rows[0]
		readObject.lastUpdatedById = -1
		readObject.type = TestHelper.randomEnum(PersistentBuilderType) // enumeration
		readObject.withinOrganizationId = await DacTestHelper.randomResultId(new OrganizationDac(currentUser.id)) // int
		readObject.name = TestHelper.randomString(128) // string
		readObject.releaseLevel = TestHelper.randomEnum(ReleaseLevel) // enumeration

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
		expect(resultObject.type).toBe(readObject.type) // Enumeration
		expect(resultObject.withinOrganizationId).toBe(readObject.withinOrganizationId) // int
		// withinOrganization - the type (Organization) is not being tested
		expect(resultObject.name).toBe(readObject.name) // string
		expect(resultObject.releaseLevel).toBe(readObject.releaseLevel) // Enumeration
		expect(resultObject.mostCurrentVersionId).toBe(readObject.mostCurrentVersionId) // int
	})
})



