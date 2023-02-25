import { AbstractTypeScriptAstHarvester, Artifact, Class, InformationModel, LengthRule, Property, System, SystemComponent } from '@tverstraten/harvest-forward'
import ts, { ClassDeclaration, Decorator, PropertyDeclaration, SyntaxKind } from 'typescript'

export class ClassValidatorRulesExtractor extends AbstractTypeScriptAstHarvester {
	constructor(configurationValues?: { [key: string]: any }) {
		super('A harvester that extracts inheritance relationships from a model of typescript classes', {}, configurationValues)
	}

	// eslint-disable-next-line max-lines-per-function
	async harvestFromAst(system: System, ast: ts.SourceFile): Promise<Artifact[]> {
		let representedClass: Class
		let representedProperty: Property
		const _thisThis = this
		const results = [] as Artifact[]
		const model = InformationModel.fromSystem(system)

		try {
			// eslint-disable-next-line @typescript-eslint/naming-convention, max-lines-per-function
			ts.forEachChild(ast, function visit(node: ts.Node) {
				switch (node.kind) {
					case SyntaxKind.ClassDeclaration:
						const classDeclaration = node as ClassDeclaration
						const name = classDeclaration.name?.getText(ast) as string
						if (name != null && _thisThis.validClass(name)) {
							const fullName = SystemComponent.fullConstantCase(model.fullConstantCaseName, name)
							representedClass = system.descendants[fullName] as Class
							ts.forEachChild(node, visit)
						}
						break
					case SyntaxKind.PropertyDeclaration:
						const member = node as PropertyDeclaration
						const memberIdentifier = member.name
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						const memberName = memberIdentifier.getText(ast)
						if (memberName != null) {
							const fullName = SystemComponent.fullConstantCase(representedClass.fullConstantCaseName, memberName)
							representedProperty = system.descendants[fullName] as Property
							ts.forEachChild(node, visit)
						}
						ts.forEachChild(node, visit)
						break
					case SyntaxKind.Decorator:
						const decorator = node as Decorator
						const nameNode = (decorator.expression as any).expression
						const decoratorName = nameNode.escapedText
						const parameters = (decorator.expression as any).arguments
						switch (decoratorName) {
							case 'MaxLength':
								const existingRule = representedProperty.rules.find((rule) => rule instanceof LengthRule)
								if (!existingRule) {
									const newRule = new LengthRule(representedProperty.fullConstantCaseName, decoratorName, '')
									newRule.maximum = parseInt(parameters[0].getText(ast))
									representedProperty.rules.push(newRule)
								}
								break
							case 'IsEmail':
								// do something
								break
							case 'IsUrl':
								// do something
								break
							case 'IsNumber':
							case 'IsString':
							case 'IsBoolean':
							case 'IsDate':
							case 'IsEnum':
							case 'IsNotEmpty':
							case 'IsOptional':
							case 'Validate':
								// ignore
								break
							default:
								console.log(`skipping ${decoratorName}-${JSON.stringify(parameters)}`)
						}
						break

					default:
						// ignore
						break
				}
				//console.log(node.kind);
			})

			return results
		} catch (problem) {
			this.logger.error(`harvestFromAst(failed) ${problem}`)
			throw problem
		}
	}
}
