CREATE TABLE `MODEL`.`BillingPeriods` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`name` DATETIME NULL,
	`start` DATETIME NULL,
	`end` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Builds` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`withinOrganizationId` DATETIME NULL,
	`forSystemId` DATETIME NULL,
	`startedOn` DATETIME NULL,
	`finishedOn` DATETIME NULL,
	`builtById` DATETIME NULL,
	`triggeredById` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Emails` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`withinOrganizationId` DATETIME NULL,
	`from` DATETIME NULL,
	`sentTo` DATETIME NULL,
	`userSentToId` DATETIME NULL,
	`ccd` DATETIME NULL,
	`bccd` DATETIME NULL,
	`firstRead` DATETIME NULL,
	`subject` DATETIME NULL,
	`body` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Identities` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`providedBy` DATETIME NULL,
	`socialIdentifier` DATETIME NULL,
	`forId` DATETIME NULL,
	`enabled` DATETIME NULL,
	`expiresOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Invitations` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`toEmail` DATETIME NULL,
	`invitedById` DATETIME NULL,
	`invitedUserId` DATETIME NULL,
	`lastReminderSentOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Notifications` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`userId` DATETIME NULL,
	`text` DATETIME NULL,
	`readOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`OrganizationalRoles` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`name` DATETIME NULL,
	`description` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Organizations` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`name` DATETIME NULL,
	`primaryContactEmail` DATETIME NULL,
	`billingContactEmail` DATETIME NULL,
	`balance` DATETIME NULL,
	`currentSubscription` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilders` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`type` DATETIME NULL,
	`withinOrganizationId` DATETIME NULL,
	`name` DATETIME NULL,
	`releaseLevel` DATETIME NULL,
	`mostCurrentVersionId` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderDependencies` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`builderId` DATETIME NULL,
	`dependentOnId` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderVersions` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`type` DATETIME NULL,
	`persistentBuilderId` DATETIME NULL,
	`version` DATETIME NULL,
	`released` DATETIME NULL,
	`tags` DATETIME NULL,
	`text` DATETIME NULL,
	`deprecated` DATETIME NULL,
	`suggestedAlternateId` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`RepositoryDefinitions` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`withinOrganizationId` DATETIME NULL,
	`name` DATETIME NULL,
	`providerName` DATETIME NULL,
	`url` DATETIME NULL,
	`pat` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SubscriptionTypeMetrics` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`name` DATETIME NULL,
	`description` DATETIME NULL,
	`numberOfUsersAllowed` DATETIME NULL,
	`numberOfBuildsAllowed` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SystemDescriptions` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`withinOrganizationId` DATETIME NULL,
	`name` DATETIME NULL,
	`description` DATETIME NULL,
	`configurationId` DATETIME NULL,
	`systemAsJson` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Tags` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`name` DATETIME NULL,
	`description` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Transactions` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`withinOrganizationId` DATETIME NULL,
	`transactionType` DATETIME NULL,
	`effective` DATETIME NULL,
	`amount` DATETIME NULL,
	`invoiceNumber` DATETIME NULL,
	`coveringId` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Users` (    
	`id` DATETIME NULL AUTO_INCREMENT,
	`withinOrganizationId` DATETIME NULL,
	`givenName` DATETIME NULL,
	`familyName` DATETIME NULL,
	`contactEmail` DATETIME NULL,
	`avatarUrl` DATETIME NULL,
	`performsId` DATETIME NULL,
	`primaryIdentityProvider` DATETIME NULL,
	`enabled` DATETIME NULL,
	`lastInvitationSentOn` DATETIME NULL,
	`invitationAcceptedOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;


