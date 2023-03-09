/**
 * NOTE: This file is generated, do not make changes to it.
 */
import { Traceable } from '@tverstraten/hf-model'
import { AbstractDac } from '../generatedBase/AbstractDac'

/**
 * Utility with helper methods for testing.
 * NOTE: This class is generated, do not make changes to it.
 */
export class DacTestHelper {
	static async firstResultId<T extends Traceable>(dac: AbstractDac<T>): Promise<number | undefined> {
		const results = await dac.findBy('1=1', [], [], [], 1, 1)
		return results.rows.length > 0 ? results.rows[0].id : undefined
	}

	static async randomResult<T extends Traceable>(dac: AbstractDac<T>): Promise<T | undefined> {
		const results = await dac.findBy('1=1', [], [], [], 1, 20)
		return results.rows.length > 0 ? results.rows[Math.floor(Math.random() * results.rows.length)] : undefined
	}

	static async randomResultId<T extends Traceable>(dac: AbstractDac<T>): Promise<number | undefined> {
		const result = await this.randomResult(dac)
		return result ? result.id : undefined
	}
}
