/**
 * NOTE: This file is generated, do not make changes to it.
 */
CREATE TABLE `RepositoryDefinitions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier for the repository.',
	`providerName` VARCHAR(128) NOT NULL COMMENT 'The human readable identifier for the repository service.',
	`url` VARCHAR(1024) NOT NULL COMMENT 'The human readable identifier for the repository.',
	`pat` VARCHAR(128) NOT NULL COMMENT 'The access token to use to work with the repository.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-RepositoryDefinitions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-RepositoryDefinitions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-RepositoryDefinitions-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `Organizations` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='A statement of one repository that may be used by the organization and how to connect to it.';
