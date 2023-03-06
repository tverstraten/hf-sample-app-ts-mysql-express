CREATE TABLE `Roles` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(128) NOT NULL COMMENT 'Its human readable identifier.',
	`description` VARCHAR(128) NOT NULL COMMENT 'A sentence or paragraph that describes the role.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Roles-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Roles-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='A domain of responsibility.
NOTE: the permissions that are set for the role are not persisted in storage, rather they
are persisted in code for faster loading.';
