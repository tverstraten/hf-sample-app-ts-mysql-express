CREATE TABLE `MODEL`.`BillingPeriods` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR NOT NULL COMMENT 'The human readable identifier for the period.',
	`start` TIMESTAMP NOT NULL COMMENT 'The point in time it started.',
	`end` TIMESTAMP NOT NULL COMMENT 'The point in time it ceased.',
	PRIMARY KEY (`id`), 
)
COMMENT='A singular interval of time used to bill accounts for.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Builds` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The organization it is for.',
	`forSystemId` NUMERIC NOT NULL COMMENT 'The system the build is for.',
	`startedOn` TIMESTAMP NOT NULL COMMENT 'The point in time the build was started.',
	`finishedOn` TIMESTAMP NOT NULL COMMENT 'The point in time the build was completed.',
	`builtById` NUMERIC NOT NULL COMMENT 'The id of the user that built it.',
	`triggeredById` NUMERIC NOT NULL COMMENT 'The user that triggered the build.',
	PRIMARY KEY (`id`), 
)
COMMENT='One invocation of a builder.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Emails` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The organization it is for.',
	`from` VARCHAR NOT NULL COMMENT 'The email address that sent it.',
	`sentTo` VARCHAR NOT NULL COMMENT 'The email addresses it was sent to.',
	`userSentToId` NUMERIC NOT NULL COMMENT 'The the users the sentTo email addresses represent.',
	`ccd` VARCHAR NOT NULL COMMENT 'A csv list of the email addresses that were cc"d.',
	`bccd` VARCHAR NOT NULL COMMENT 'A csv list of the email addresses that were bccd.',
	`firstRead` TIMESTAMP NOT NULL COMMENT 'To the best of our knowledge, when was it first read?',
	`subject` VARCHAR NOT NULL COMMENT 'The subject of the email.',
	`body` VARCHAR NOT NULL COMMENT 'The contents of the email, html encoded.',
	PRIMARY KEY (`id`), 
)
COMMENT='An email that was sent.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Identities` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`providedBy` VARCHAR NOT NULL COMMENT 'The system that provides the identification.',
	`socialIdentifier` VARCHAR NOT NULL COMMENT 'The identifier used by the social system defined by providedBy.',
	`forId` NUMERIC NOT NULL COMMENT 'The user this belongs to.',
	`enabled` SMALLINT NOT NULL COMMENT 'Is the identity currently valid?',
	`expiresOn` TIMESTAMP NOT NULL COMMENT 'The point in time which the token is no longer valid.',
	PRIMARY KEY (`id`), 
)
COMMENT='The definition of a way in which a user is identified to the system this can be an access token or a social account
github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws).', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Invitations` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`toEmail` VARCHAR NOT NULL COMMENT 'The email address that the invitation was sent to.',
	`invitedById` NUMERIC NOT NULL COMMENT 'The user that extended the invitation.',
	`invitedUserId` NUMERIC NOT NULL COMMENT 'The user that has been invited. When the invitation is created a user is also created to mark them as a placeholder.',
	`lastReminderSentOn` TIMESTAMP NOT NULL COMMENT 'The point in time the most recent reminder was sent.',
	PRIMARY KEY (`id`), 
)
COMMENT='One user extending the ability for another user to join the systems as a member of an organization.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Invoices` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` undefined NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` TIMESTAMP NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` NUMERIC NOT NULL COMMENT 'The amount to add to the balance of the account.',
	`invoiceNumber` VARCHAR NOT NULL COMMENT 'The human readable identifier.',
	`coveringId` NUMERIC NOT NULL COMMENT 'The period the invoice is for.',
	PRIMARY KEY (`id`), 
)
COMMENT='One amount charged to an account for a given billing period.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Notifications` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`userId` NUMERIC NOT NULL COMMENT 'The user the notification is for.',
	`text` VARCHAR NOT NULL COMMENT 'The text of the message.',
	`readOn` TIMESTAMP NOT NULL COMMENT 'When the notification was read.',
	PRIMARY KEY (`id`), 
)
COMMENT='A single notice sent out to a user.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`OrganizationalRoles` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR NOT NULL COMMENT 'The human readable identifier for the role.',
	`description` VARCHAR NOT NULL COMMENT 'A sentence or phrase that describe the role.',
	`operator` VARCHAR NOT NULL COMMENT 'Well known names.',
	`user` VARCHAR NOT NULL,
	`administrator` VARCHAR NOT NULL,
	`administratorWithBilling` VARCHAR NOT NULL,
	`internalAdministrator` VARCHAR NOT NULL,
	`internalSupport` VARCHAR NOT NULL,
	`internalBilling` VARCHAR NOT NULL,
	PRIMARY KEY (`id`), 
)
COMMENT='A categorization of the types of actions and ensuing responsibilities that a user may perform for an organization.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Organizations` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR NOT NULL COMMENT 'The human readable identifier for the organization.',
	`primaryContactEmail` VARCHAR NOT NULL COMMENT 'The email address to use as a primary point of contact for the organization.',
	`billingContactEmail` VARCHAR NOT NULL COMMENT 'The email address to use as a primary contact for billing.',
	`balance` NUMERIC NOT NULL COMMENT 'The current amount that the organization owes for usage.',
	`currentSubscription` undefined NOT NULL COMMENT 'The plan the account currently makes use of for making use of the system.',
	PRIMARY KEY (`id`), 
)
COMMENT='A real or symbolic entity that has one or more systems that they maintain/develop.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Payments` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` undefined NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` TIMESTAMP NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` NUMERIC NOT NULL COMMENT 'The amount to add to the balance of the account.',
	PRIMARY KEY (`id`), 
)
COMMENT='A single remittance of funds for an account.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilders` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`type` undefined NOT NULL COMMENT 'The derivation of this class.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR NOT NULL COMMENT 'Its human readable identifier.',
	`releaseLevel` undefined NOT NULL COMMENT 'The degree to which it has been released. This controls who gets to see it.',
	`mostCurrentVersionId` NUMERIC NOT NULL COMMENT 'The current version in use.',
	PRIMARY KEY (`id`), 
)
COMMENT='One set of details that configure a builder.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderDependencies` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`builderId` NUMERIC NOT NULL COMMENT 'The id of the builder that is dependent.',
	`dependentOnId` NUMERIC NOT NULL COMMENT 'The id of the builder that provides the required functionality.',
	PRIMARY KEY (`id`), 
)
COMMENT='An indication of one builder being dependent upon another.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderVersions` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`type` undefined NOT NULL COMMENT 'The derivation of this class.',
	`persistentBuilderId` NUMERIC NOT NULL COMMENT 'The id it is a version for.',
	`version` VARCHAR NOT NULL COMMENT 'An identifier of its version.',
	`released` SMALLINT NOT NULL COMMENT 'If true, this version is released for use.',
	`tags` VARCHAR NOT NULL COMMENT 'A csv list of tags associated with this version of this builder, all are soft coded from the list of tags.',
	`text` VARCHAR NOT NULL COMMENT 'The textual body of the builder.',
	`deprecated` SMALLINT NOT NULL COMMENT 'If true, this version should not be used any more.',
	`suggestedAlternateId` NUMERIC NOT NULL COMMENT 'The id of a builder version that should be used instead of this if its deprecated.',
	PRIMARY KEY (`id`), 
)
COMMENT='One set of details that configure a builder.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`RepositoryDefinitions` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR NOT NULL COMMENT 'The human readable identifier for the repository.',
	`providerName` VARCHAR NOT NULL COMMENT 'The human readable identifier for the repository service.',
	`url` VARCHAR NOT NULL COMMENT 'The human readable identifier for the repository.',
	`pat` VARCHAR NOT NULL COMMENT 'The access token to use to work with the repository.',
	PRIMARY KEY (`id`), 
)
COMMENT='A statement of one repository that may be used by the organization and how to connect to it.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Roles` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR NOT NULL COMMENT 'Its human readable identifier.',
	`description` VARCHAR NOT NULL COMMENT 'A sentence or paragraph that describes the role.',
	PRIMARY KEY (`id`), 
)
COMMENT='A domain of responsibility.
NOTE: the permissions that are set for the role are not persisted in storage, rather they
are persisted in code for faster loading.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SubscriptionTypeMetrics` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`name` VARCHAR NOT NULL COMMENT 'A human readable identifier for the type of subscription.',
	`description` VARCHAR NOT NULL COMMENT 'A word or phrase used to provide basic information on the subscription.',
	`numberOfUsersAllowed` NUMERIC NOT NULL COMMENT 'The maximum number of users that can be active in the organization.',
	`numberOfBuildsAllowed` NUMERIC NOT NULL COMMENT 'The maximum number of builds that can be performed for each billing cycle.',
	`costPerUser` NUMERIC NOT NULL COMMENT 'The incremental cost of a user beyond what is permitted under the plan.',
	`costPerBuild` NUMERIC NOT NULL COMMENT 'The incremental cost per build beyond what is permitted under the plan.',
	PRIMARY KEY (`id`), 
)
COMMENT='A plan for subscriptions.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SystemDescriptions` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR NOT NULL COMMENT 'A word that is a human readable identifier for the component.',
	`description` VARCHAR NOT NULL COMMENT 'A sentence or phrase that fully describes the table.',
	`configurationId` NUMERIC NOT NULL COMMENT 'The builder configuration to produce the system.',
	`systemAsJson` VARCHAR NOT NULL COMMENT 'An instance of System converted to json with recursion disconnected.',
	PRIMARY KEY (`id`), 
)
COMMENT='A complete meta data description of an application system.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Tags` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR NOT NULL COMMENT 'A word that is a human readable identifier for the component.',
	`description` VARCHAR NOT NULL COMMENT 'A sentence or phrase that fully describes the table.',
	PRIMARY KEY (`id`), 
)
COMMENT='A simple piece of text used to associate some aspect to elements in the system.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Transactions` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` undefined NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` TIMESTAMP NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` NUMERIC NOT NULL COMMENT 'The amount to add to the balance of the account.',
	PRIMARY KEY (`id`), 
)
COMMENT='An change of the amount of funds an accounts owes or is owed.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Users` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` NUMERIC NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` NUMERIC NOT NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` NUMERIC NOT NULL COMMENT 'The id of the organization it is for.',
	`givenName` VARCHAR NOT NULL COMMENT 'The name the user uses within their family to be identified. Often called surname.',
	`familyName` VARCHAR NOT NULL COMMENT 'The name of the persons family, often presented as their "last" name.',
	`contactEmail` VARCHAR NOT NULL COMMENT 'The email address that they indicate should be used to contact them at.',
	`avatarUrl` VARCHAR NOT NULL COMMENT 'A url to the image the users makes use of as an avatar.',
	`performsId` NUMERIC NOT NULL COMMENT 'The role that the user performs for the organization.',
	`primaryIdentityProvider` VARCHAR NOT NULL COMMENT 'The identity provider that this account is based off of.',
	`enabled` SMALLINT NOT NULL COMMENT 'If true, the user is currently able to log into the system ad perform operations
NOTE: access may also be restricted if the account is not currently enabled.',
	`lastInvitationSentOn` TIMESTAMP NOT NULL COMMENT 'The last date an invitation was sent to this user. Previously invitations are not recorded.',
	`invitationAcceptedOn` TIMESTAMP NOT NULL COMMENT 'The date an invitation was accepted by this user which would be the date they created an account.',
	PRIMARY KEY (`id`), 
)
COMMENT='One single persona that may use the system.', ENGINE=InnoDB;

CREATE TABLE `MODEL`.`UserRoles` (    
	`id` NUMERIC AUTO_INCREMENT NOT NULL AUTO_INCREMENT COMMENT 'The identifier.',
	`createdById` NUMERIC NOT NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NOT NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`userId` NUMERIC NOT NULL COMMENT 'The user that performs the role.',
	`roleId` NUMERIC NOT NULL COMMENT 'The role the user performs.',
	PRIMARY KEY (`id`), 
)
COMMENT='One role performed by one user.', ENGINE=InnoDB;


