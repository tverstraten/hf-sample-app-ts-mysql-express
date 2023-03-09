/**
 * NOTE: This file is generated, do not make changes to it.
 */
CREATE TABLE `Emails` (    
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
	`from` VARCHAR(128) NOT NULL COMMENT 'The email address that sent it.',
	`sentTo` VARCHAR(128) NOT NULL COMMENT 'The email addresses it was sent to.',
	`userSentToId` INTEGER NOT NULL COMMENT 'The id of the user the sentTo email addresses represent.',
	`ccd` VARCHAR(1024) NULL COMMENT 'A csv list of the email addresses that were cc"d.',
	`bccd` VARCHAR(1024) NULL COMMENT 'A csv list of the email addresses that were bccd.',
	`firstRead` TIMESTAMP NULL COMMENT 'To the best of our knowledge, when was it first read?',
	`subject` VARCHAR(256) NOT NULL COMMENT 'The subject of the email.',
	`body` VARCHAR(8192) NOT NULL COMMENT 'The contents of the email, html encoded.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Emails-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Emails-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Emails-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `Organizations` (`id`)
	, CONSTRAINT `FK-Emails-userSentTo` FOREIGN KEY (`userSentToId`) REFERENCES `Users` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='An email that was sent.';
