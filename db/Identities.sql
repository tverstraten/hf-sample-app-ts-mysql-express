CREATE TABLE `Identities` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`providedBy` ENUM('github','google','microsoft','personalAccessToken') NOT NULL COMMENT 'The system that provides the identification.',
	`socialIdentifier` VARCHAR(128) NOT NULL COMMENT 'The identifier used by the social system defined by providedBy.',
	`forId` INTEGER NOT NULL COMMENT 'The user this belongs to.',
	`enabled` SMALLINT NOT NULL COMMENT 'Is the identity currently valid?',
	`expiresOn` TIMESTAMP NULL COMMENT 'The point in time which the token is no longer valid.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Identities-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Identities-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Identities-for` FOREIGN KEY (`forId`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='The definition of a way in which a user is identified to the system this can be an access token or a social account
github, azure ad (ms), google, gitlab, bitbucket, codecommit (aws).';
