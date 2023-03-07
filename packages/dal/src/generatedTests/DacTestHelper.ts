import { Traceable } from '@tverstraten/hf-model'
import { AbstractDac } from '../generatedBase/AbstractDac'

/**
 * Utility with helper methods for testing.
 */
export class DacTestHelper {
	static async firstResultId<T extends Traceable>(dac: AbstractDac<T>): Promise<number | undefined> {
		const results = await dac.findBy('1=1', [], undefined, 1, 1)
		return results.rows.length > 0 ? results.rows[0].id : undefined
	}
}
