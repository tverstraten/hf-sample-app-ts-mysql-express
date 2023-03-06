/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { PersistentBuilder } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { PersistentBuilderDac } from '../PersistentBuilderDac'
import { UserDac } from '../UserDac'
import { PersistentBuilderType } from '@tverstraten/hf-model'
import { ReleaseLevel } from '@tverstraten/hf-model'

describe('PersistentBuilderDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new PersistentBuilderDac(1)

		const newObject = new PersistentBuilder()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.type = TestHelper.randomEnum(PersistentBuilderType) 
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.name = TestHelper.randomString(128) 
		newObject.releaseLevel = TestHelper.randomEnum(ReleaseLevel) 
		newObject.mostCurrentVersionId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 

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
		expect(resultObject.type).toBe(newObject.type)
		expect(resultObject.withinOrganizationId).toBe(newObject.withinOrganizationId)
		expect(resultObject.name).toBe(newObject.name)
		expect(resultObject.releaseLevel).toBe(newObject.releaseLevel)
		expect(resultObject.mostCurrentVersionId).toBe(newObject.mostCurrentVersionId)
	})
})




