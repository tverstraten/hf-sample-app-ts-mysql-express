/* eslint-disable @typescript-eslint/naming-convention */
/**
 * A user from a social identity provider.
 */
export interface ProviderUser {
	social_id: string
	email: string
	family_name: string
	given_name: string
	avatar_url: string
	organization_name: string
}
