/**
 * Database creation script for application RelationalDatabase
 * The data that describes the structure of a relational database providing storage for the system.
 */


CREATE TABLE `MODEL`.`BillingPeriods` (    
	`id`  NULL,
	`name`  NULL,
	`start`  NULL,
	`end`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Builds` (    
	`id`  NULL,
	`withinOrganizationId`  NULL,
	`forSystemId`  NULL,
	`startedOn`  NULL,
	`finishedOn`  NULL,
	`builtById`  NULL,
	`triggeredById`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Emails` (    
	`id`  NULL,
	`withinOrganizationId`  NULL,
	`from`  NULL,
	`sentTo`  NULL,
	`userSentToId`  NULL,
	`ccd`  NULL,
	`bccd`  NULL,
	`firstRead`  NULL,
	`subject`  NULL,
	`body`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Identities` (    
	`id`  NULL,
	`providedBy`  NULL,
	`socialIdentifier`  NULL,
	`forId`  NULL,
	`enabled`  NULL,
	`expiresOn`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Invitations` (    
	`id`  NULL,
	`toEmail`  NULL,
	`invitedById`  NULL,
	`invitedUserId`  NULL,
	`lastReminderSentOn`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Invoices` (    
	`invoiceNumber`  NULL,
	`coveringId`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Notifications` (    
	`id`  NULL,
	`userId`  NULL,
	`text`  NULL,
	`readOn`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`OrganizationalRoles` (    
	`id`  NULL,
	`name`  NULL,
	`description`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Organizations` (    
	`id`  NULL,
	`name`  NULL,
	`primaryContactEmail`  NULL,
	`billingContactEmail`  NULL,
	`balance`  NULL,
	`currentSubscription`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Payments` (    
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`PersistentBuilders` (    
	`id`  NULL,
	`type`  NULL,
	`withinOrganizationId`  NULL,
	`name`  NULL,
	`releaseLevel`  NULL,
	`mostCurrentVersionId`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`PersistentBuilderDependencies` (    
	`id`  NULL,
	`builderId`  NULL,
	`dependentOnId`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`PersistentBuilderVersions` (    
	`id`  NULL,
	`type`  NULL,
	`persistentBuilderId`  NULL,
	`version`  NULL,
	`released`  NULL,
	`tags`  NULL,
	`text`  NULL,
	`deprecated`  NULL,
	`suggestedAlternateId`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`RepositoryDefinitions` (    
	`id`  NULL,
	`withinOrganizationId`  NULL,
	`name`  NULL,
	`providerName`  NULL,
	`url`  NULL,
	`pat`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`SubscriptionTypeMetrics` (    
	`id`  NULL,
	`name`  NULL,
	`description`  NULL,
	`numberOfUsersAllowed`  NULL,
	`numberOfBuildsAllowed`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`SystemDescriptions` (    
	`id`  NULL,
	`withinOrganizationId`  NULL,
	`name`  NULL,
	`description`  NULL,
	`configurationId`  NULL,
	`systemAsJson`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Tags` (    
	`id`  NULL,
	`name`  NULL,
	`description`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Transactions` (    
	`id`  NULL,
	`withinOrganizationId`  NULL,
	`transactionType`  NULL,
	`effective`  NULL,
	`amount`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


CREATE TABLE `MODEL`.`Users` (    
	`id`  NULL,
	`withinOrganizationId`  NULL,
	`givenName`  NULL,
	`familyName`  NULL,
	`contactEmail`  NULL,
	`avatarUrl`  NULL,
	`performsId`  NULL,
	`primaryIdentityProvider`  NULL,
	`enabled`  NULL,
	`lastInvitationSentOn`  NULL,
	`invitationAcceptedOn`  NULL,
	PRIMARY KEY (``), 
)
ENGINE=InnoDB;


