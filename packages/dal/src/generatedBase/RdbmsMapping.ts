/* eslint-disable @typescript-eslint/naming-convention */
import { AbstractDac } from './AbstractDac'
import { BillingPeriodDac } from '../BillingPeriodDac'
import { BuildDac } from '../BuildDac'
import { EmailDac } from '../EmailDac'
import { IdentityDac } from '../IdentityDac'
import { InvitationDac } from '../InvitationDac'
import { NotificationDac } from '../NotificationDac'
import { OrganizationDac } from '../OrganizationDac'
import { OrganizationalRoleDac } from '../OrganizationalRoleDac'
import { PersistentBuilderDac } from '../PersistentBuilderDac'
import { PersistentBuilderDependencyDac } from '../PersistentBuilderDependencyDac'
import { PersistentBuilderVersionDac } from '../PersistentBuilderVersionDac'
import { RepositoryDefinitionDac } from '../RepositoryDefinitionDac'
import { RoleDac } from '../RoleDac'
import { SubscriptionTypeMetricsDac } from '../SubscriptionTypeMetricsDac'
import { SystemDescriptionDac } from '../SystemDescriptionDac'
import { TagDac } from '../TagDac'
import { TransactionDac } from '../TransactionDac'
import { UserDac } from '../UserDac'
import { UserRoleDac } from '../UserRoleDac'

export interface PropertyMapping {
	typeName: string
	reversePropertyName?: string
}

export class RdbmsMapping {
	static propertyMap: Record<string, PropertyMapping> = {
		'BillingPeriod.createdById': { typeName: 'User' },
		'BillingPeriod.lastUpdatedById': { typeName: 'User' },
		'Build.createdById': { typeName: 'User' },
		'Build.lastUpdatedById': { typeName: 'User' },
		'Build.withinOrganizationId': { typeName: 'Organization' },
		'Build.forSystemId': { typeName: 'SystemDescription' },
		'Build.builtById': { typeName: 'User' },
		'Build.triggeredById': { typeName: 'User' },
		'Email.createdById': { typeName: 'User' },
		'Email.lastUpdatedById': { typeName: 'User' },
		'Email.withinOrganizationId': { typeName: 'Organization' },
		'Email.userSentToId': { typeName: 'User' },
		'Identity.createdById': { typeName: 'User' },
		'Identity.lastUpdatedById': { typeName: 'User' },
		'Identity.forId': { typeName: 'User' },
		'Invitation.createdById': { typeName: 'User' },
		'Invitation.lastUpdatedById': { typeName: 'User' },
		'Invitation.invitedById': { typeName: 'User' },
		'Invitation.invitedUserId': { typeName: 'User' },
		'Notification.createdById': { typeName: 'User' },
		'Notification.lastUpdatedById': { typeName: 'User' },
		'Notification.userId': { typeName: 'User' },
		'Organization.createdById': { typeName: 'User' },
		'Organization.lastUpdatedById': { typeName: 'User' },
		'OrganizationalRole.createdById': { typeName: 'User' },
		'OrganizationalRole.lastUpdatedById': { typeName: 'User' },
		'PersistentBuilder.createdById': { typeName: 'User' },
		'PersistentBuilder.lastUpdatedById': { typeName: 'User' },
		'PersistentBuilder.withinOrganizationId': { typeName: 'Organization' },
		'PersistentBuilderDependency.createdById': { typeName: 'User' },
		'PersistentBuilderDependency.builderId': { typeName: 'PersistentBuilderVersion' },
		'PersistentBuilderDependency.dependentOnId': { typeName: 'PersistentBuilderVersion' },
		'PersistentBuilderVersion.createdById': { typeName: 'User' },
		'PersistentBuilderVersion.lastUpdatedById': { typeName: 'User' },
		'PersistentBuilderVersion.persistentBuilderId': { typeName: 'PersistentBuilder' },
		'PersistentBuilderVersion.suggestedAlternateId': { typeName: 'PersistentBuilderVersion' },
		'RepositoryDefinition.createdById': { typeName: 'User' },
		'RepositoryDefinition.lastUpdatedById': { typeName: 'User' },
		'RepositoryDefinition.withinOrganizationId': { typeName: 'Organization' },
		'Role.createdById': { typeName: 'User' },
		'Role.lastUpdatedById': { typeName: 'User' },
		'SubscriptionTypeMetrics.createdById': { typeName: 'User' },
		'SystemDescription.createdById': { typeName: 'User' },
		'SystemDescription.lastUpdatedById': { typeName: 'User' },
		'SystemDescription.withinOrganizationId': { typeName: 'Organization' },
		'SystemDescription.configurationId': { typeName: 'PersistentBuilder' },
		'Tag.createdById': { typeName: 'User' },
		'Tag.lastUpdatedById': { typeName: 'User' },
		'Transaction.createdById': { typeName: 'User' },
		'Transaction.lastUpdatedById': { typeName: 'User' },
		'Transaction.withinOrganizationId': { typeName: 'Organization' },
		'Transaction.coveringId': { typeName: 'BillingPeriod' },
		'User.createdById': { typeName: 'User' },
		'User.lastUpdatedById': { typeName: 'User' },
		'User.withinOrganizationId': { typeName: 'Organization' },
		'User.performsId': { typeName: 'OrganizationalRole' },
		'UserRole.createdById': { typeName: 'User' },
		'UserRole.userId': { typeName: 'User' },
		'UserRole.roleId': { typeName: 'User' },
	}

	// eslint-disable-next-line max-lines-per-function
	static getDac(className: string, userId: number): AbstractDac<any> {
		switch (className) {
			case 'BillingPeriod':
				return new BillingPeriodDac(userId)
			case 'Build':
				return new BuildDac(userId)
			case 'Email':
				return new EmailDac(userId)
			case 'Identity':
				return new IdentityDac(userId)
			case 'Invitation':
				return new InvitationDac(userId)
			case 'Notification':
				return new NotificationDac(userId)
			case 'Organization':
				return new OrganizationDac(userId)
			case 'OrganizationalRole':
				return new OrganizationalRoleDac(userId)
			case 'PersistentBuilder':
				return new PersistentBuilderDac(userId)
			case 'PersistentBuilderDependency':
				return new PersistentBuilderDependencyDac(userId)
			case 'PersistentBuilderVersion':
				return new PersistentBuilderVersionDac(userId)
			case 'RepositoryDefinition':
				return new RepositoryDefinitionDac(userId)
			case 'Role':
				return new RoleDac(userId)
			case 'SubscriptionTypeMetrics':
				return new SubscriptionTypeMetricsDac(userId)
			case 'SystemDescription':
				return new SystemDescriptionDac(userId)
			case 'Tag':
				return new TagDac(userId)
			case 'Transaction':
				return new TransactionDac(userId)
			case 'User':
				return new UserDac(userId)
			case 'UserRole':
				return new UserRoleDac(userId)
			default:
				throw new RangeError(`Class ${className} is not mapped to a dac. `)
		}
	}

	static getPropertyMapping(className: string, propertyName: string): PropertyMapping | undefined {
		return this.propertyMap[`${className}.${propertyName}`]
	}
}
