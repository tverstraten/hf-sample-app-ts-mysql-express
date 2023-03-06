CREATE TABLE `Invitations` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`toEmail` VARCHAR(128) NOT NULL COMMENT 'The email address that the invitation was sent to.',
	`invitedById` INTEGER NOT NULL COMMENT 'The user that extended the invitation.',
	`invitedUserId` INTEGER NOT NULL COMMENT 'The user that has been invited. When the invitation is created a user is also created to mark them as a placeholder.',
	`lastReminderSentOn` TIMESTAMP NULL COMMENT 'The point in time the most recent reminder was sent.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Invitations-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Invitations-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Invitations-invitedBy` FOREIGN KEY (`invitedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Invitations-invitedUser` FOREIGN KEY (`invitedUserId`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='One user extending the ability for another user to join the systems as a member of an organization.';
