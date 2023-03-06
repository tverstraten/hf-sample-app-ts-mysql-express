CREATE TABLE `Organizations` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`name` VARCHAR(1024) NOT NULL COMMENT 'The human readable identifier for the organization.',
	`primaryContactEmail` VARCHAR(128) NOT NULL COMMENT 'The email address to use as a primary point of contact for the organization.',
	`billingContactEmail` VARCHAR(128) NOT NULL COMMENT 'The email address to use as a primary contact for billing.',
	`balance` DOUBLE(16, 2) NOT NULL COMMENT 'The current amount that the organization owes for usage.',
	`currentSubscription` ENUM('free','pro','team','enterprise') NOT NULL COMMENT 'The plan the account currently makes use of for making use of the system.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Organizations-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Organizations-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='A real or symbolic entity that has one or more systems that they maintain/develop.';
