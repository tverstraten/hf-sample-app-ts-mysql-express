import { Traceable } from './Traceable';
export declare class Build implements Traceable {
    id: number;
    withinOrganizationId?: number;
    forSystemId?: number;
    startedOn: Date;
    finishedOn?: Date;
    builtById?: number;
    triggeredById?: number;
}
//# sourceMappingURL=Build.d.ts.map