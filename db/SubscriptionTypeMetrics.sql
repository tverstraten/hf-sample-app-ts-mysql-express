CREATE TABLE `SubscriptionTypeMetrics` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`type` ENUM('free','pro','team','enterprise') NOT NULL COMMENT 'The type of subscription this is for.',
	`name` VARCHAR(255) NOT NULL COMMENT 'A human readable identifier for the type of subscription.',
	`description` VARCHAR(1024) NOT NULL COMMENT 'A word or phrase used to provide basic information on the subscription.',
	`numberOfUsersAllowed` DOUBLE(16, 2) NOT NULL COMMENT 'The maximum number of users that can be active in the organization.',
	`numberOfBuildsAllowed` DOUBLE(16, 2) NOT NULL COMMENT 'The maximum number of builds that can be performed for each billing cycle.',
	`costPerUser` DOUBLE(16, 2) NOT NULL COMMENT 'The incremental cost of a user beyond what is permitted under the plan.',
	`costPerBuild` DOUBLE(16, 2) NOT NULL COMMENT 'The incremental cost per build beyond what is permitted under the plan.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-SubscriptionTypeMetrics-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='A plan for subscriptions.';
