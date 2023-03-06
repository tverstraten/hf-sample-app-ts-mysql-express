CREATE TABLE `Transactions` (    
	`id` INTEGER AUTO_INCREMENT NOT NULL COMMENT 'The identifier.',
	`createdById` INTEGER NULL COMMENT 'The id of the user that created this.',
	`createdOn` TIMESTAMP NULL COMMENT 'The point in time that this object was first created in persistent storage.',
	`objectVersion` INTEGER NOT NULL COMMENT 'The historical version of the object. This does represent a designator of a single state that the object has been in,
in conjunction with id it represents one state of one unique object. The current state is always denoted by an objectVersion
of 0 and each new state is added with the value increased by 1.',
	`lastUpdatedById` INTEGER NULL COMMENT 'The id of the user that last update this.',
	`lastUpdatedOn` TIMESTAMP NULL COMMENT 'The point in time that this object was last updated.',
	`isDeleted` SMALLINT NOT NULL COMMENT 'Is the object deleted.',
	`withinOrganizationId` INTEGER NOT NULL COMMENT 'The id of the organization it is for.',
	`transactionType` ENUM('payment','invoice') NOT NULL COMMENT 'The kind of transaction it is.',
	`effective` TIMESTAMP NOT NULL COMMENT 'The point in time the transaction was effective.',
	`amount` DOUBLE(16, 2) NOT NULL COMMENT 'The amount to add to the balance of the account.',
	`invoiceNumber` VARCHAR(128) NULL COMMENT 'The human readable identifier.',
	`coveringId` INTEGER NULL COMMENT 'The period the invoice is for.',
	PRIMARY KEY (`id`)
	, CONSTRAINT `FK-Transactions-createdBy` FOREIGN KEY (`createdById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Transactions-lastUpdatedBy` FOREIGN KEY (`lastUpdatedById`) REFERENCES `Users` (`id`)
	, CONSTRAINT `FK-Transactions-withinOrganization` FOREIGN KEY (`withinOrganizationId`) REFERENCES `Organizations` (`id`)
	, CONSTRAINT `FK-Transactions-covering` FOREIGN KEY (`coveringId`) REFERENCES `BillingPeriods` (`id`)
) 
ENGINE=InnoDB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT='An change of the amount of funds an accounts owes or is owed.';
