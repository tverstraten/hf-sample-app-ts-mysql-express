import { Traceable } from './Traceable';
export declare class Email implements Traceable {
    id: number;
    withinOrganizationId?: number;
    from: string;
    sentTo: string;
    userSentToId?: number;
    ccd?: string;
    get ccdArray(): string[];
    bccd?: string;
    get bccdArray(): string[];
    firstRead?: Date;
    subject: string;
    body: string;
}
//# sourceMappingURL=Email.d.ts.map