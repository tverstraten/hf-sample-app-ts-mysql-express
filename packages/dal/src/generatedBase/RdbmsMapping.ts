/* eslint-disable @typescript-eslint/naming-convention */
/**
 * NOTE: This file is generated, do not make changes to it.
 */

export interface PropertyMapping {
	typeName: string
	reversePropertyName?: string
}

export class RdbmsMapping {
	static propertyMap: Record<string, PropertyMapping> = {
		'BillingPeriod.createdBy': { typeName: 'User' },
		'BillingPeriod.lastUpdatedBy': { typeName: 'User' },
		'Build.createdBy': { typeName: 'User' },
		'Build.lastUpdatedBy': { typeName: 'User' },
		'Build.withinOrganization': { typeName: 'Organization' },
		'Build.forSystem': { typeName: 'SystemDescription' },
		'Build.builtBy': { typeName: 'User' },
		'Build.triggeredBy': { typeName: 'User' },
		'Email.createdBy': { typeName: 'User' },
		'Email.lastUpdatedBy': { typeName: 'User' },
		'Email.withinOrganization': { typeName: 'Organization' },
		'Email.userSentTo': { typeName: 'User' },
		'Identity.createdBy': { typeName: 'User' },
		'Identity.lastUpdatedBy': { typeName: 'User' },
		'Identity.for': { typeName: 'User' },
		'Invitation.createdBy': { typeName: 'User' },
		'Invitation.lastUpdatedBy': { typeName: 'User' },
		'Invitation.invitedBy': { typeName: 'User' },
		'Invitation.invitedUser': { typeName: 'User' },
		'Notification.createdBy': { typeName: 'User' },
		'Notification.lastUpdatedBy': { typeName: 'User' },
		'Notification.user': { typeName: 'User' },
		'Organization.createdBy': { typeName: 'User' },
		'Organization.lastUpdatedBy': { typeName: 'User' },
		'OrganizationalRole.createdBy': { typeName: 'User' },
		'OrganizationalRole.lastUpdatedBy': { typeName: 'User' },
		'PersistentBuilder.createdBy': { typeName: 'User' },
		'PersistentBuilder.lastUpdatedBy': { typeName: 'User' },
		'PersistentBuilder.withinOrganization': { typeName: 'Organization' },
		'PersistentBuilderDependency.createdBy': { typeName: 'User' },
		'PersistentBuilderDependency.builder': { typeName: 'PersistentBuilderVersion' },
		'PersistentBuilderDependency.dependentOn': { typeName: 'PersistentBuilderVersion' },
		'PersistentBuilderVersion.createdBy': { typeName: 'User' },
		'PersistentBuilderVersion.lastUpdatedBy': { typeName: 'User' },
		'PersistentBuilderVersion.persistentBuilder': { typeName: 'PersistentBuilder' },
		'PersistentBuilderVersion.suggestedAlternate': { typeName: 'PersistentBuilderVersion' },
		'RepositoryDefinition.createdBy': { typeName: 'User' },
		'RepositoryDefinition.lastUpdatedBy': { typeName: 'User' },
		'RepositoryDefinition.withinOrganization': { typeName: 'Organization' },
		'Role.createdBy': { typeName: 'User' },
		'Role.lastUpdatedBy': { typeName: 'User' },
		'SubscriptionTypeMetrics.createdBy': { typeName: 'User' },
		'SystemDescription.createdBy': { typeName: 'User' },
		'SystemDescription.lastUpdatedBy': { typeName: 'User' },
		'SystemDescription.withinOrganization': { typeName: 'Organization' },
		'SystemDescription.configuration': { typeName: 'PersistentBuilder' },
		'Tag.createdBy': { typeName: 'User' },
		'Tag.lastUpdatedBy': { typeName: 'User' },
		'Transaction.createdBy': { typeName: 'User' },
		'Transaction.lastUpdatedBy': { typeName: 'User' },
		'Transaction.withinOrganization': { typeName: 'Organization' },
		'Transaction.covering': { typeName: 'BillingPeriod' },
		'User.createdBy': { typeName: 'User' },
		'User.lastUpdatedBy': { typeName: 'User' },
		'User.withinOrganization': { typeName: 'Organization' },
		'User.performs': { typeName: 'OrganizationalRole' },
		'UserRole.createdBy': { typeName: 'User' },
		'UserRole.user': { typeName: 'User' },
		'UserRole.role': { typeName: 'User' },
	}

	static dacMapping: Map<string, any> = new Map<string, any>()

	static registerDac(className: string, dac: any): void {
		this.dacMapping.set(className, dac)
	}

	// eslint-disable-next-line max-lines-per-function
	static getDac(className: string, userId: number): any {
		const type = this.dacMapping.get(className)
		return new type(userId)
	}

	static getPropertyMapping(className: string, propertyName: string): PropertyMapping | undefined {
		return this.propertyMap[`${className}.${propertyName}`]
	}
}
