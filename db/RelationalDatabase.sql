CREATE TABLE `MODEL`.`BillingPeriods` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier for the period.',
	`start` DATE NOT NULL COMMENT 'The point in time it started.',
	`end` DATE NOT NULL COMMENT 'The point in time it ceased.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-BillingPeriods-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-BillingPeriods-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A singular interval of time used to bill accounts for.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Builds` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`forSystemId` INTEGER NOT NULL COMMENT 'The system the build is for.',
	`startedOn` DATE NOT NULL COMMENT 'The point in time the build was started.',
	`finishedOn` DATE NOT NULL COMMENT 'The point in time the build was completed.',
	`builtById` INTEGER NOT NULL COMMENT 'The id of the user that built it.',
	`triggeredById` INTEGER NOT NULL COMMENT 'The user that triggered the build.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Builds-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Builds-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Builds-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
	, CONSTRAINT `FK-Builds-forSystem` FOREIGN KEY (`forSystemId`) REFERENCES `MODEL`.`SystemDescriptions` (`id`)
	, CONSTRAINT `FK-Builds-builtBy` FOREIGN KEY (`builtById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Builds-triggeredBy` FOREIGN KEY (`triggeredById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='One invocation of a builder.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Emails` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`from` VARCHAR(128) NOT NULL COMMENT 'The email address that sent it.',
	`sentTo` VARCHAR(128) NOT NULL COMMENT 'The email addresses it was sent to.',
	`userSentToId` INTEGER NOT NULL COMMENT 'The id of the user the sentTo email addresses represent.',
	`ccd` VARCHAR(1024) NOT NULL COMMENT 'A csv list of the email addresses that were cc"d.',
	`bccd` VARCHAR(1024) NOT NULL COMMENT 'A csv list of the email addresses that were bccd.',
	`firstRead` DATE NOT NULL COMMENT 'To the best of our knowledge, when was it first read?',
	`subject` VARCHAR(256) NOT NULL COMMENT 'The subject of the email.',
	`body` VARCHAR(19000) NOT NULL COMMENT 'The contents of the email, html encoded.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Emails-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Emails-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Emails-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
	, CONSTRAINT `FK-Emails-userSentTo` FOREIGN KEY (`userSentToId`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='An email that was sent.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Identities` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`providedBy` ENUM('github','google','microsoft','personalAccessToken') NOT NULL COMMENT 'The system that provides the identification.',
	`socialIdentifier` VARCHAR(128) NOT NULL COMMENT 'The identifier used by the social system defined by providedBy.',
	`forId` INTEGER NOT NULL COMMENT 'The user this belongs to.',
	`enabled` SMALLINT NOT NULL COMMENT 'Is the identity currently valid?',
	`expiresOn` DATE NULL COMMENT 'The point in time which the token is no longer valid.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Identities-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Identities-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Identities-for` FOREIGN KEY (`forId`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='The definition of a way in which a user is identified to the system this can be an access token or a social account
github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws).', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Invitations` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`toEmail` VARCHAR(128) NOT NULL COMMENT 'The email address that the invitation was sent to.',
	`invitedById` INTEGER NOT NULL COMMENT 'The user that extended the invitation.',
	`invitedUserId` INTEGER NOT NULL COMMENT 'The user that has been invited. When the invitation is created a user is also created to mark them as a placeholder.',
	`lastReminderSentOn` DATE NOT NULL COMMENT 'The point in time the most recent reminder was sent.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Invitations-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Invitations-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Invitations-invitedBy` FOREIGN KEY (`invitedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Invitations-invitedUser` FOREIGN KEY (`invitedUserId`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='One user extending the ability for another user to join the systems as a member of an organization.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Invoices` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` ENUM('payment','invoice') NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` DATE NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` NUMERIC(0, 0) NOT NULL COMMENT 'The amount to add to the balance of the account.',
	`invoiceNumber` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier.',
	`coveringId` INTEGER NOT NULL COMMENT 'The period the invoice is for.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Invoices-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Invoices-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Invoices-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
	, CONSTRAINT `FK-Invoices-covering` FOREIGN KEY (`coveringId`) REFERENCES `MODEL`.`BillingPeriods` (`id`)
)
COMMENT='One amount charged to an account for a given billing period.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Notifications` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`userId` INTEGER NOT NULL COMMENT 'The user the notification is for.',
	`text` VARCHAR(8192) NOT NULL COMMENT 'The text of the message.',
	`readOn` DATE NOT NULL COMMENT 'When the notification was read.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Notifications-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Notifications-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Notifications-user` FOREIGN KEY (`userId`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A single notice sent out to a user.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`OrganizationalRoles` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier for the role.',
	`description` VARCHAR(1024) NOT NULL COMMENT 'A sentence or phrase that describe the role.',
	`operator` VARCHAR(255) NOT NULL COMMENT 'Well known names.',
	`user` VARCHAR(255) NOT NULL,
	`administrator` VARCHAR(255) NOT NULL,
	`administratorWithBilling` VARCHAR(255) NOT NULL,
	`internalAdministrator` VARCHAR(255) NOT NULL,
	`internalSupport` VARCHAR(255) NOT NULL,
	`internalBilling` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-OrganizationalRoles-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-OrganizationalRoles-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A categorization of the types of actions and ensuing responsibilities that a user may perform for an organization.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Organizations` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(1024) NOT NULL COMMENT 'The human readable identifier for the organization.',
	`primaryContactEmail` VARCHAR(128) NOT NULL COMMENT 'The email address to use as a primary point of contact for the organization.',
	`billingContactEmail` VARCHAR(128) NOT NULL COMMENT 'The email address to use as a primary contact for billing.',
	`balance` NUMERIC(0, 0) NOT NULL COMMENT 'The current amount that the organization owes for usage.',
	`currentSubscription` ENUM('free','pro','team','enterprise') NOT NULL COMMENT 'The plan the account currently makes use of for making use of the system.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Organizations-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Organizations-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A real or symbolic entity that has one or more systems that they maintain/develop.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Payments` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` ENUM('payment','invoice') NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` DATE NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` NUMERIC(0, 0) NOT NULL COMMENT 'The amount to add to the balance of the account.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Payments-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Payments-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Payments-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
)
COMMENT='A single remittance of funds for an account.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilders` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`type` ENUM('code','template','configuration') NOT NULL COMMENT 'The derivation of this class.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR(128) NOT NULL COMMENT 'Its human readable identifier.',
	`releaseLevel` ENUM('community','private','enterprise') NOT NULL COMMENT 'The degree to which it has been released. This controls who gets to see it.',
	`mostCurrentVersionId` INTEGER NOT NULL COMMENT 'The current version in use.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-PersistentBuilders-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilders-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilders-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
)
COMMENT='One set of details that configure a builder.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderDependencies` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`builderId` INTEGER NOT NULL COMMENT 'The id of the builder that is dependent.',
	`dependentOnId` INTEGER NOT NULL COMMENT 'The id of the builder that provides the required functionality.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-PersistentBuilderDependencies-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilderDependencies-builder` FOREIGN KEY (`builderId`) REFERENCES `MODEL`.`PersistentBuilderVersions` (`id`)
	, CONSTRAINT `FK-PersistentBuilderDependencies-dependentOn` FOREIGN KEY (`dependentOnId`) REFERENCES `MODEL`.`PersistentBuilderVersions` (`id`)
)
COMMENT='An indication of one builder being dependent upon another.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderVersions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`type` ENUM('code','template','configuration') NOT NULL COMMENT 'The derivation of this class.',
	`persistentBuilderId` INTEGER NOT NULL COMMENT 'The id it is a version for.',
	`version` VARCHAR(128) NOT NULL COMMENT 'An identifier of its version.',
	`released` SMALLINT NOT NULL COMMENT 'If true, this version is released for use.',
	`tags` VARCHAR(1024) NOT NULL COMMENT 'A csv list of tags associated with this version of this builder, all are soft coded from the list of tags.',
	`text` VARCHAR(255) NOT NULL COMMENT 'The textual body of the builder.',
	`deprecated` SMALLINT NOT NULL COMMENT 'If true, this version should not be used any more.',
	`suggestedAlternateId` INTEGER NOT NULL COMMENT 'The id of a builder version that should be used instead of this if its deprecated.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-persistentBuilder` FOREIGN KEY (`persistentBuilderId`) REFERENCES `MODEL`.`PersistentBuilders` (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-suggestedAlternate` FOREIGN KEY (`suggestedAlternateId`) REFERENCES `MODEL`.`PersistentBuilderVersions` (`id`)
)
COMMENT='One set of details that configure a builder.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`RepositoryDefinitions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier for the repository.',
	`providerName` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier for the repository service.',
	`url` VARCHAR(1024) NOT NULL COMMENT 'The human readable identifier for the repository.',
	`pat` VARCHAR(128) NOT NULL COMMENT 'The access token to use to work with the repository.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-RepositoryDefinitions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-RepositoryDefinitions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-RepositoryDefinitions-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
)
COMMENT='A statement of one repository that may be used by the organization and how to connect to it.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Roles` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(128) NOT NULL COMMENT 'Its human readable identifier.',
	`description` VARCHAR(128) NOT NULL COMMENT 'A sentence or paragraph that describes the role.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Roles-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Roles-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A domain of responsibility.
NOTE: the permissions that are set for the role are not persisted in storage, rather they
are persisted in code for faster loading.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SubscriptionTypeMetrics` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`type` ENUM('free','pro','team','enterprise') NOT NULL COMMENT 'The type of subscription this is for.',
	`name` VARCHAR(255) NOT NULL COMMENT 'A human readable identifier for the type of subscription.',
	`description` VARCHAR(1024) NOT NULL COMMENT 'A word or phrase used to provide basic information on the subscription.',
	`numberOfUsersAllowed` NUMERIC(0, 0) NOT NULL COMMENT 'The maximum number of users that can be active in the organization.',
	`numberOfBuildsAllowed` NUMERIC(0, 0) NOT NULL COMMENT 'The maximum number of builds that can be performed for each billing cycle.',
	`costPerUser` NUMERIC(0, 0) NOT NULL COMMENT 'The incremental cost of a user beyond what is permitted under the plan.',
	`costPerBuild` NUMERIC(0, 0) NOT NULL COMMENT 'The incremental cost per build beyond what is permitted under the plan.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-SubscriptionTypeMetrics-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A plan for subscriptions.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SystemDescriptions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR(128) NOT NULL COMMENT 'A word that is a human readable identifier for the component.',
	`description` VARCHAR(1024) NOT NULL COMMENT 'A sentence or phrase that fully describes the table.',
	`configurationId` INTEGER NOT NULL COMMENT 'The builder configuration to produce the system.',
	`systemAsJson` VARCHAR(255) NOT NULL COMMENT 'An instance of System converted to json with recursion disconnected.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-SystemDescriptions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-SystemDescriptions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-SystemDescriptions-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
	, CONSTRAINT `FK-SystemDescriptions-configuration` FOREIGN KEY (`configurationId`) REFERENCES `MODEL`.`PersistentBuilders` (`id`)
)
COMMENT='A complete meta data description of an application system.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Tags` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(128) NOT NULL COMMENT 'A word that is a human readable identifier for the component.',
	`description` VARCHAR(1024) NOT NULL COMMENT 'A sentence or phrase that fully describes the table.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Tags-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Tags-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='A simple piece of text used to associate some aspect to elements in the system.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Transactions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` ENUM('payment','invoice') NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` DATE NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` NUMERIC(0, 0) NOT NULL COMMENT 'The amount to add to the balance of the account.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Transactions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Transactions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Transactions-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
)
COMMENT='An change of the amount of funds an accounts owes or is owed.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Users` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The id of the organization it is for.',
	`givenName` VARCHAR(128) NOT NULL COMMENT 'The name the user uses within their family to be identified. Often called surname.',
	`familyName` VARCHAR(128) NOT NULL COMMENT 'The name of the persons family, often presented as their "last" name.',
	`contactEmail` VARCHAR(128) NOT NULL COMMENT 'The email address that they indicate should be used to contact them at.',
	`avatarUrl` VARCHAR(1024) NOT NULL COMMENT 'A url to the image the users makes use of as an avatar.',
	`performsId` INTEGER NOT NULL COMMENT 'The role that the user performs for the organization.',
	`primaryIdentityProvider` VARCHAR(128) NOT NULL COMMENT 'The identity provider that this account is based off of.',
	`enabled` SMALLINT NOT NULL COMMENT 'If true, the user is currently able to log into the system ad perform operations
NOTE: access may also be restricted if the account is not currently enabled.',
	`lastInvitationSentOn` DATE NOT NULL COMMENT 'The last date an invitation was sent to this user. Previously invitations are not recorded.',
	`invitationAcceptedOn` DATE NOT NULL COMMENT 'The date an invitation was accepted by this user which would be the date they created an account.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Users-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Users-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-Users-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `MODEL`.`Organizations` (`id`)
	, CONSTRAINT `FK-Users-performs` FOREIGN KEY (`performsId`) REFERENCES `MODEL`.`OrganizationalRoles` (`id`)
)
COMMENT='One single persona that may use the system.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`UserRoles` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`userId` INTEGER NOT NULL COMMENT 'The user that performs the role.',
	`roleId` INTEGER NOT NULL COMMENT 'The role the user performs.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-UserRoles-createdBy` FOREIGN KEY (`createdById`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-UserRoles-user` FOREIGN KEY (`userId`) REFERENCES `MODEL`.`Users` (`id`)
	, CONSTRAINT `FK-UserRoles-role` FOREIGN KEY (`roleId`) REFERENCES `MODEL`.`Users` (`id`)
)
COMMENT='One role performed by one user.', ENGINE=InnoDB;


