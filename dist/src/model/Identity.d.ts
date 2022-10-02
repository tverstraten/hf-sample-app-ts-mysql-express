import { IdentityProvider } from './IdentityProvider';
import { Traceable } from './Traceable';
export declare class Identity implements Traceable {
    id: number;
    providedBy: IdentityProvider;
    socialIdentifier: string;
    forId?: number;
    enabled: boolean;
    expiresOn?: Date;
}
//# sourceMappingURL=Identity.d.ts.map