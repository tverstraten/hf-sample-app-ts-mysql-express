import { AbstractMutable } from "./AbstractMutable";
import { IdentityProvider } from "./IdentityProvider";
export declare class Identity extends AbstractMutable {
    providedBy: IdentityProvider;
    socialIdentifier: string;
    forId?: number;
    enabled: boolean;
    expiresOn?: Date;
}
//# sourceMappingURL=Identity.d.ts.map