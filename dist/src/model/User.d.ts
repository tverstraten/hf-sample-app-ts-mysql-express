import { AbstractMutable } from "./AbstractMutable";
import { IdentityProvider } from "./IdentityProvider";
export declare class User extends AbstractMutable {
    withinOrganizationId?: number;
    givenName: string;
    familyName: string;
    contactEmail: string;
    avatarUrl?: string;
    performsId?: number;
    primaryIdentityProvider: IdentityProvider;
    enabled: boolean;
    lastInvitationSentOn?: Date;
    invitationAcceptedOn?: Date;
    get name(): string;
    get status(): string;
    get identityProvider(): string;
}
//# sourceMappingURL=User.d.ts.map