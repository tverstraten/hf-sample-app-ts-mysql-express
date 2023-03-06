CREATE TABLE `PersistentBuilderDependencies` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`builderId` INTEGER NULL COMMENT 'The id of the builder that is dependent.',
	`dependentOnId` INTEGER NULL COMMENT 'The id of the builder that provides the required functionality.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-PersistentBuilderDependencies-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-PersistentBuilderDependencies-builder` FOREIGN KEY (`builderId`) REFERENCES `PersistentBuilderVersions` (`id`)
	, CONSTRAINT `FK-PersistentBuilderDependencies-dependentOn` FOREIGN KEY (`dependentOnId`) REFERENCES `PersistentBuilderVersions` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='An indication of one builder being dependent upon another.';
