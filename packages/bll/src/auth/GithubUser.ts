/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable spellcheck/spell-checker */
import { ProviderUser } from './ProviderUser'

export interface GithubUser extends ProviderUser {
	login: string
	id: number
	node_id: string
	avatar_url: string
	// eslint-disable-next-line spellcheck/spell-checker
	gravatar_id: string
	url: string
	html_url: string
	followers_url: string
	following_url: string
	gists_url: string
	starred_url: string
	subscriptions_url: string
	organizations_url: string
	repos_url: string
	events_url: string
	received_events_url: string
	type: string
	site_admin: boolean
	name?: string
	company?: string
	blog?: string
	location?: string
	// eslint-disable-next-line spellcheck/spell-checker
	hireable?: boolean
	bio?: string
	twitter_username?: string
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
	private_gists: number
	total_private_repos: number
	owned_private_repos: number
	disk_usage: number
	collaborators: number
	two_factor_authentication: boolean
	access_token: string
}

export function GithubUserFromJson(asJson: any): GithubUser {
	const asGithubUser = asJson as GithubUser

	asGithubUser.social_id = `${asGithubUser.id}`
	asGithubUser.family_name = asGithubUser.name ? asGithubUser.name : ''
	asGithubUser.given_name = asGithubUser.name ? asGithubUser.name : asGithubUser.login
	asGithubUser.avatar_url = asGithubUser.avatar_url ? asGithubUser.avatar_url : ''
	asGithubUser.organization_name = asGithubUser.company ? asGithubUser.company : asGithubUser.login

	return asGithubUser
}
