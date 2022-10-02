import {
	AbstractSingularBuilder,
	Artifact,
	Class,
	ComponentOrigin,
	DataAccessLayer,
	Permanence,
	RelationalDatabase,
	System,
	SystemComponent,
	SystemComponentArtifact,
	SystemComponentType,
	Table,
	TableType,
	ValueType,
} from '@hfadmin/runtime'
import Pluralize from 'pluralize'

export class ClassToTableTransformer extends AbstractSingularBuilder {
	constructor(configurationValues?: { [key: string]: any }) {
		const nonNullConfigurationValues = configurationValues ? configurationValues : []
		nonNullConfigurationValues['repeatFor'] = JSON.stringify({
			objectTypeName: 'Class',
			permanence: 'persistent',
			componentType: 'informationModel',
		})
		super(
			'A transformer that creates a table in an rdbms database for each concrete class in the model',
			{
				repeatFor: {
					name: 'Repeat for',
					required: true,
					description:
						'A parsable string of JSON that represents the properties values of the component that should be iterated on, review the documentation for SystemDescendantComponent and derivations for most available for use',
					valueType: ValueType.STRING,
					defaultValue: ``,
				},
			},
			nonNullConfigurationValues
		)
	}

	protected async buildInternal(system: System, component: SystemComponent): Promise<Artifact[]> {
		const rdbms = RelationalDatabase.fromSystem(system)
		const informationClass = component as Class

		const tableName = Pluralize(`${informationClass.name}`)
		const tableDescription = informationClass.description
		const table = new Table(system.name, tableName, tableDescription, TableType.table)
		table.permanence = Permanence.constant
		table.informational = false
		table.functional = true
		table.origin = ComponentOrigin.manufactured
		rdbms.addChild(table)

		return [new SystemComponentArtifact(table)]
	}
}
