import { AbstractMutable } from "./AbstractMutable";
export declare class Email extends AbstractMutable {
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