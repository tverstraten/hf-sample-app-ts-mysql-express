/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Build } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { BuildDac } from '../BuildDac'
import { UserDac } from '../UserDac'

describe('BuildDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new BuildDac(1)

		const newObject = new Build()
		newObject.createdById = currentUser.id
		newObject.lastUpdatedById = currentUser.id
		newObject.isDeleted = false
		newObject.withinOrganizationId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.forSystemId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.startedOn = new Date(Math.round(Math.random() * 10000000))
		newObject.finishedOn = new Date(Math.round(Math.random() * 10000000))
		newObject.builtById = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.triggeredById = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 

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
		expect(resultObject.forSystemId).toBe(newObject.forSystemId)
		expect(resultObject.startedOn).toBe(newObject.startedOn)
		expect(resultObject.finishedOn).toBe(newObject.finishedOn)
		expect(resultObject.builtById).toBe(newObject.builtById)
		expect(resultObject.triggeredById).toBe(newObject.triggeredById)
	})
})




