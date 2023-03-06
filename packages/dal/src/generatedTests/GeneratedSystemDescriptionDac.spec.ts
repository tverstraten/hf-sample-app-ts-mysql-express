/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { SystemDescription } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { SystemDescriptionDac } from '../SystemDescriptionDac'
import { UserDac } from '../UserDac'

describe('SystemDescriptionDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new SystemDescriptionDac(1)

		const newObject = new SystemDescription()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.name = TestHelper.randomString(128) 
		newObject.description = TestHelper.randomString(1024) 
		newObject.configurationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.systemAsJson = TestHelper.randomString(0) 

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(newObject.createdById)
		expect(resultObject.createdOn).toBe(newObject.createdOn)
		expect(resultObject.objectVersion).toBe(newObject.objectVersion)
		expect(resultObject.lastUpdatedById).toBe(newObject.lastUpdatedById)
		expect(resultObject.lastUpdatedOn).toBe(newObject.lastUpdatedOn)
		expect(resultObject.isDeleted).toBe(newObject.isDeleted)
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId)
		expect(resultObject.name).toBe(newObject.name)
		expect(resultObject.description).toBe(newObject.description)
		expect(resultObject.configurationId).toBe(newObject.configurationId)
		expect(resultObject.systemAsJson).toBe(newObject.systemAsJson)
	})
})




