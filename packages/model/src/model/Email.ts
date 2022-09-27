import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Validate } from 'class-validator'
import { IsEmailCsv } from '../validators/IsEmailCsv'
import { AbstractMutable } from './AbstractMutable'

/**
 * an email that was sent
 */
export class Email extends AbstractMutable {
	/**
	 * the organization it is for
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * the email address that sent it
	 */
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@MaxLength(128)
	from = ''

	/**
	 * the email addresses it was sent to
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	sentTo = ''

	/**
	 * the the users the sentTo email addresses represent
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	userSentToId?: number

	/**
	 * a csv list of the email addresses that were cc'd
	 */
	@IsOptional()
	@IsString()
	@Validate(IsEmailCsv)
	@MaxLength(1024)
	ccd?: string

	/**
	 * get the list of cc'd as an array of email addresses
	 *
	 * @returns the cc text converted into an array with email address as one entry in the array
	 */
	get ccdArray(): string[] {
		if (!this.ccd || this.ccd.trim() === '') return []
		const results = this.ccd.split(',')
		for (let index = 0; index < results.length; index++) {
			results[index] = results[index].trim()
		}
		return results
	}

	/**
	 * a csv ist of the email addresses that were bcc'd
	 */
	@IsOptional()
	@IsString()
	@Validate(IsEmailCsv)
	@MaxLength(1024)
	bccd?: string

	/**
	 * get the list of bcc'd as an array of email addresses
	 *
	 * @returns the bcc text converted into an array with email address as one entry in the array
	 */
	get bccdArray(): string[] {
		if (!this.bccd || this.bccd.trim() === '') return []
		const results = this.bccd.split(',')
		for (let index = 0; index < results.length; index++) {
			results[index] = results[index].trim()
		}
		return results
	}

	/**
	 * to the best of our knowledge, when was it first read?
	 */
	@IsOptional()
	@IsDate()
	firstRead?: Date

	/**
	 * the subject of the email
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(256)
	subject = ''

	/**
	 * the contents of the email, html encoded
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(19000)
	body = ''
}
