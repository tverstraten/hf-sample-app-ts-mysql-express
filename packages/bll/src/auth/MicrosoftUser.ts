/* eslint-disable @typescript-eslint/naming-convention */
import { ProviderUser } from './ProviderUser'

/**
 * A user from a google jwt authentication token
 * aud 	always 	The audience that this ID token is intended for. It must be one of the OAuth 2.0 client IDs of your application.
 * Exp 	always 	Expiration time on or after which the ID token must not be accepted. Represented in Unix time (integer seconds).
 * Iat 	always 	The time the ID token was issued. Represented in Unix time (integer seconds).
 * Iss 	always 	The Issuer Identifier for the Issuer of the response. Always https://accounts.google.com or accounts.google.com for Google ID tokens.
 * Sub 	always 	An identifier for the user, unique among all Google accounts and never reused. A Google account can have multiple email addresses at different points in time, but the sub value is never changed. Use sub within your application as the unique-identifier key for the user. Maximum length of 255 case-sensitive ASCII characters.
 * At_hash 		Access token hash. Provides validation that the access token is tied to the identity token. If the ID token is issued with an access_token value in the server flow, this claim is always included. This claim can be used as an alternate mechanism to protect against cross-site request forgery attacks, but if you follow Step 1 and Step 3 it is not necessary to verify the access token.
 * Azp 		The client_id of the authorized presenter. This claim is only needed when the party requesting the ID token is not the same as the audience of the ID token. This may be the case at Google for hybrid apps where a web application and Android app have a different OAuth 2.0 client_id but share the same Google APIs project.
 * Email 		The user's email address. This value may not be unique to this user and is not suitable for use as a primary key. Provided only if your scope included the email scope value.
 * Email_verified 		True if the user's e-mail address has been verified; otherwise false.
 * Family_name 		The user's surname(s) or last name(s). Might be provided when a name claim is present.
 * Given_name 		The user's given name(s) or first name(s). Might be provided when a name claim is present.
 * Hd 		The hosted G Suite domain of the user. Provided only if the user belongs to a hosted domain.
 * Locale 		The user's locale, represented by a BCP 47 language tag. Might be provided when a name claim is present.
 * Name 		The user's full name, in a displayable form. Might be provided when:
 *    The request scope included the string "profile"
 *    The ID token is returned from a token refresh
 *    When name claims are present, you can use them to update your app's user records. Note that this claim is never guaranteed to be present.
 * Nonce 		The value of the nonce supplied by your app in the authentication request. You should enforce protection against replay attacks by ensuring it is presented only once.
 * Picture 		The URL of the user's profile picture. Might be provided when:
 *    The request scope included the string "profile"
 *    The ID token is returned from a token refresh
 *    When picture claims are present, you can use them to update your app's user records. Note that this claim is never guaranteed to be present.
 * Profile 		The URL of the user's profile page. Might be provided when:
 *   The request scope included the string "profile"
 *   The ID token is returned from a token refresh
 *   When profile claims are present, you can use them to update your app's user records. Note that this claim is never guaranteed to be present.
 */
export interface MicrosoftUser extends ProviderUser {
	sub: string
	email: string
	email_verified: string
	family_name: string
	given_name: string
	hd: string
	locale: string
	name: string
	picture: string
	profile: string
}
