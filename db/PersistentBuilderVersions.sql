CREATE TABLE `PersistentBuilderVersions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`type` ENUM('code','template','configuration') NOT NULL COMMENT 'The derivation of this class.',
	`persistentBuilderId` INTEGER NOT NULL COMMENT 'The id it is a version for.',
	`version` VARCHAR(128) NOT NULL COMMENT 'An identifier of its version.',
	`released` SMALLINT NOT NULL COMMENT 'If true, this version is released for use.',
	`tags` VARCHAR(1024) NOT NULL COMMENT 'A csv list of tags associated with this version of this builder, all are soft coded from the list of tags.',
	`text` VARCHAR(255) NOT NULL COMMENT 'The textual body of the builder.',
	`deprecated` SMALLINT NOT NULL COMMENT 'If true, this version should not be used any more.',
	`suggestedAlternateId` INTEGER NULL COMMENT 'The id of a builder version that should be used instead of this if its deprecated.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-persistentBuilder` FOREIGN KEY (`persistentBuilderId`) REFERENCES `PersistentBuilders` (`id`)
	, CONSTRAINT `FK-PersistentBuilderVersions-suggestedAlternate` FOREIGN KEY (`suggestedAlternateId`) REFERENCES `PersistentBuilderVersions` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='One set of details that configure a builder.';
