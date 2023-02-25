import { IsEmailCsv } from '@tverstraten/hf-validators'
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Validate } from 'class-validator'
import { AbstractMutable } from './AbstractMutable'

/**
 * An email that was sent.
 */
export class Email extends AbstractMutable {
	/**
	 * The organization it is for.
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	withinOrganizationId?: number

	/**
	 * The email address that sent it.
	 */
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@MaxLength(128)
	from = ''

	/**
	 * The email addresses it was sent to.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(128)
	sentTo = ''

	/**
	 * The the users the sentTo email addresses represent.
	 *
	 * @see Organization
	 */
	@IsNumber()
	@IsNotEmpty()
	userSentToId?: number

	/**
	 * A csv list of the email addresses that were cc'd.
	 */
	@IsOptional()
	@IsString()
	@Validate(IsEmailCsv)
	@MaxLength(1024)
	ccd?: string

	/**
	 * Get the list of cc'd as an array of email addresses.
	 *
	 * @returns The cc text converted into an array with email address as one entry in the array.
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
	 * A csv list of the email addresses that were bccd.
	 */
	@IsOptional()
	@IsString()
	@Validate(IsEmailCsv)
	@MaxLength(1024)
	bccd?: string

	/**
	 * Get the list of bcc'd as an array of email addresses.
	 *
	 * @returns The bcc text converted into an array with email address as one entry in the array.
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
	 * To the best of our knowledge, when was it first read?
	 */
	@IsOptional()
	@IsDate()
	firstRead?: Date

	/**
	 * The subject of the email.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(256)
	subject = ''

	/**
	 * The contents of the email, html encoded.
	 */
	@IsString()
	@IsNotEmpty()
	@MaxLength(19000)
	body = ''
}
