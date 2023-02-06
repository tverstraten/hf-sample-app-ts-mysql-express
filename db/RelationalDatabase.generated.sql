CREATE TABLE `MODEL`.`Builds` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`withinOrganizationId` VARCHAR(255) NULL,
	`forSystemId` VARCHAR(255) NULL,
	`startedOn` DATETIME NULL,
	`finishedOn` DATETIME NULL,
	`builtById` VARCHAR(255) NULL,
	`triggeredById` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Emails` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`withinOrganizationId` VARCHAR(255) NULL,
	`from` VARCHAR(255) NULL,
	`sentTo` VARCHAR(255) NULL,
	`userSentToId` VARCHAR(255) NULL,
	`ccd` VARCHAR(255) NULL,
	`bccd` VARCHAR(255) NULL,
	`firstRead` DATETIME NULL,
	`subject` VARCHAR(255) NULL,
	`body` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Identities` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`providedBy` VARCHAR(255) NULL,
	`socialIdentifier` VARCHAR(255) NULL,
	`forId` VARCHAR(255) NULL,
	`enabled` VARCHAR(255) NULL,
	`expiresOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Invitations` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`toEmail` VARCHAR(255) NULL,
	`invitedById` VARCHAR(255) NULL,
	`invitedUserId` VARCHAR(255) NULL,
	`lastReminderSentOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Notifications` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`userId` VARCHAR(255) NULL,
	`text` VARCHAR(255) NULL,
	`readOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`OrganizationalRoles` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL,
	`description` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Organizations` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL,
	`primaryContactEmail` VARCHAR(255) NULL,
	`billingContactEmail` VARCHAR(255) NULL,
	`balance` VARCHAR(255) NULL,
	`currentSubscription` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilders` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`type` VARCHAR(255) NULL,
	`withinOrganizationId` VARCHAR(255) NULL,
	`name` VARCHAR(255) NULL,
	`releaseLevel` VARCHAR(255) NULL,
	`mostCurrentVersionId` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderDependencies` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`builderId` VARCHAR(255) NULL,
	`dependentOnId` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`PersistentBuilderVersions` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`type` VARCHAR(255) NULL,
	`persistentBuilderId` VARCHAR(255) NULL,
	`version` VARCHAR(255) NULL,
	`released` VARCHAR(255) NULL,
	`tags` VARCHAR(255) NULL,
	`text` VARCHAR(255) NULL,
	`deprecated` VARCHAR(255) NULL,
	`suggestedAlternateId` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`RepositoryDefinitions` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`withinOrganizationId` VARCHAR(255) NULL,
	`name` VARCHAR(255) NULL,
	`providerName` VARCHAR(255) NULL,
	`url` VARCHAR(255) NULL,
	`pat` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SubscriptionTypeMetrics` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL,
	`description` VARCHAR(255) NULL,
	`numberOfUsersAllowed` VARCHAR(255) NULL,
	`numberOfBuildsAllowed` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`SystemDescriptions` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`withinOrganizationId` VARCHAR(255) NULL,
	`name` VARCHAR(255) NULL,
	`description` VARCHAR(255) NULL,
	`configurationId` VARCHAR(255) NULL,
	`systemAsJson` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Tags` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL,
	`description` VARCHAR(255) NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;

CREATE TABLE `MODEL`.`Users` (    
	`id` VARCHAR(255) NULL AUTO_INCREMENT,
	`withinOrganizationId` VARCHAR(255) NULL,
	`givenName` VARCHAR(255) NULL,
	`familyName` VARCHAR(255) NULL,
	`contactEmail` VARCHAR(255) NULL,
	`avatarUrl` VARCHAR(255) NULL,
	`performsId` VARCHAR(255) NULL,
	`primaryIdentityProvider` VARCHAR(255) NULL,
	`enabled` VARCHAR(255) NULL,
	`lastInvitationSentOn` DATETIME NULL,
	`invitationAcceptedOn` DATETIME NULL,
	PRIMARY KEY (`id`), 
)
ENGINE=InnoDB;


