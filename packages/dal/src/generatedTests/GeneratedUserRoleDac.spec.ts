/* eslint-disable max-lines-per-function */
/* eslint-disable spellcheck/spell-checker */
/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { UserRole } from '@tverstraten/hf-model'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TestHelper } from '@tverstraten/hf-utils'
import { UserRoleDac } from '../UserRoleDac'
import { UserDac } from '../UserDac'

describe('UserRoleDac', () => {
	it('create and read basic properties', async () => {
		const userDac = new UserDac(1)
		const currentUser = await userDac.findOneById(1)
		expect(currentUser).toBeDefined()

		const objectDac = new UserRoleDac(1)

		const newObject = new UserRole()
		newObject.createdById = currentUser.id
		newObject.userId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 
		newObject.roleId = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) 

		const results = await objectDac.createAndReturn([newObject])
		expect(results.length).toBe(1)
		const resultObject = results[0]
		expect(resultObject.id).toBeGreaterThan(0)
		expect(resultObject.createdById).toBe(newObject.createdById)
		expect(resultObject.createdOn).toBe(newObject.createdOn)
		expect(resultObject.userId).toBe(newObject.userId)
		expect(resultObject.roleId).toBe(newObject.roleId)
	})
})




