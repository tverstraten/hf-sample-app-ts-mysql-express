CREATE TABLE `Builds` (    
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
	`forSystemId` INTEGER NOT NULL COMMENT 'The system the build is for.',
	`startedOn` TIMESTAMP NOT NULL COMMENT 'The point in time the build was started.',
	`finishedOn` TIMESTAMP NULL COMMENT 'The point in time the build was completed.',
	`builtById` INTEGER NULL COMMENT 'The id of the user that built it.',
	`triggeredById` INTEGER NULL COMMENT 'The user that triggered the build.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Builds-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Builds-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Builds-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `Organizations` (`id`)
	, CONSTRAINT `FK-Builds-forSystem` FOREIGN KEY (`forSystemId`) REFERENCES `SystemDescriptions` (`id`)
	, CONSTRAINT `FK-Builds-builtBy` FOREIGN KEY (`builtById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Builds-triggeredBy` FOREIGN KEY (`triggeredById`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='One invocation of a builder.';
