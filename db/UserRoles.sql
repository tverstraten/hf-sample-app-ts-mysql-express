/**
 * NOTE: This file is generated, do not make changes to it.
 */
CREATE TABLE `UserRoles` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`userId` INTEGER NOT NULL COMMENT 'The user that performs the role.',
	`roleId` INTEGER NOT NULL COMMENT 'The role the user performs.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-UserRoles-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-UserRoles-user` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-UserRoles-role` FOREIGN KEY (`roleId`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='One role performed by one user.';
