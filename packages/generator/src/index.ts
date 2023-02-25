/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ConfigurationManager, RuntimeBuilder, System } from '@tverstraten/harvest-forward'
import { ClassValidatorRulesExtractor } from './ClassValidatorRulesExtractor'

// eslint-disable-next-line @typescript-eslint/naming-convention
async function run() {
	const configuration = await ConfigurationManager.registerConfigurationFile('mine', `./.hf.json`)

	if (configuration) {
		const system = new System(configuration.name)
		const additionalBuilder = new ClassValidatorRulesExtractor()
		const settings = configuration.configuration.settings as any
		const configurations = settings.configurations as any[]
		const typescriptOuterConfiguration = configurations[0]
		const typescriptBuilders = typescriptOuterConfiguration.settings.configurations as any[]
		typescriptBuilders.push({ builder: additionalBuilder })
		const builder = new RuntimeBuilder(system, configuration.configuration)
		await builder.build(system)
	}
}

;(async () => {
	try {
		// eslint-disable-next-line spellcheck/spell-checker
		run()
	} catch (problem) {
		console.log(problem)
	}
})()
