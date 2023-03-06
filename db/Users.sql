CREATE TABLE `Users` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The id of the organization it is for.',
	`givenName` VARCHAR(128) NOT NULL COMMENT 'The name the user uses within their family to be identified. Often called surname.',
	`familyName` VARCHAR(128) NOT NULL COMMENT 'The name of the persons family, often presented as their "last" name.',
	`contactEmail` VARCHAR(128) NOT NULL COMMENT 'The email address that they indicate should be used to contact them at.',
	`avatarUrl` VARCHAR(1024) NULL COMMENT 'A url to the image the users makes use of as an avatar.',
	`performsId` INTEGER NULL COMMENT 'The role that the user performs for the organization.',
	`primaryIdentityProvider` ENUM('github','google','microsoft','personalAccessToken') NOT NULL COMMENT 'The identity provider that this account is based off of.',
	`enabled` SMALLINT NOT NULL COMMENT 'If true, the user is currently able to log into the system ad perform operations
NOTE: access may also be restricted if the account is not currently enabled.',
	`lastInvitationSentOn` DATE NULL COMMENT 'The last date an invitation was sent to this user. Previously invitations are not recorded.',
	`invitationAcceptedOn` DATE NULL COMMENT 'The date an invitation was accepted by this user which would be the date they created an account.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Users-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Users-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Users-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `Organizations` (`id`)
	, CONSTRAINT `FK-Users-performs` FOREIGN KEY (`performsId`) REFERENCES `OrganizationalRoles` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='One single persona that may use the system.';
