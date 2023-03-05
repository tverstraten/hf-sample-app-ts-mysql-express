CREATE TABLE `PersistentBuilders` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` DATE NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` DATE NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`type` ENUM('code','template','configuration') NOT NULL COMMENT 'The derivation of this class.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The organization it is for.',
	`name` VARCHAR(128) NOT NULL COMMENT 'Its human readable identifier.',
	`releaseLevel` ENUM('community','private','enterprise') NOT NULL COMMENT 'The degree to which it has been released. This controls who gets to see it.',
	`mostCurrentVersionId` INTEGER NULL COMMENT 'The current version in use.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-PersistentBuilders-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilders-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilders-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `Organizations` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='One set of details that configure a builder.';
