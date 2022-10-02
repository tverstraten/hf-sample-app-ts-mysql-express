import {
	AbstractSingularBuilder,
	Artifact,
	Class,
	Column,
	ComponentOrigin,
	DataAccessLayer,
	Permanence,
	Property,
	RelationalDatabase,
	System,
	SystemComponent,
	SystemComponentArtifact,
	SystemComponentType,
	ValueType,
} from '@hfadmin/runtime'
import Pluralize from 'pluralize'

export class PropertyToColumnTransformer extends AbstractSingularBuilder {
	constructor(configurationValues?: { [key: string]: any }) {
		const nonNullConfigurationValues = configurationValues ? configurationValues : []
		nonNullConfigurationValues['repeatFor'] = JSON.stringify({
			objectTypeName: 'Property',
			permanence: 'persistent',
			componentType: 'informationModel',
		})
		super(
			'A transformer that creates columns in tables for properties in classes',
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
		const rdbms = RelationalDatabase.fromSystem(system) as RelationalDatabase
		const property = component as Property
		const informationClass = property.parent as Class

		const tableName = Pluralize(`${informationClass.name}`)
		const table = rdbms.findOneComponent({ name: tableName })
		if (table == undefined) throw new RangeError(`Table ${tableName} was not found in the database for property ${property.name}`)
		const columnName = `${property.name}`
		const columnDescription = property.description
		const dataType = ''
		const valueType = ValueType.STRING
		const length = 256
		const ansiTypeDeclaration = ''
		const column = new Column(system.name, tableName, columnName, columnDescription, dataType, valueType, length, ansiTypeDeclaration)
		column.permanence = Permanence.constant
		column.informational = false
		column.functional = true
		column.origin = ComponentOrigin.manufactured
		table.addChild(column)

		return [new SystemComponentArtifact(column)]
	}
}
