import { IdentityProvider } from './IdentityProvider';
import { Traceable } from './Traceable';
export declare class User implements Traceable {
    id: number;
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