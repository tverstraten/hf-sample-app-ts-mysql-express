import { Traceable } from "./Traceable";
export interface Mutable extends Traceable {
    objectVersion: number;
    lastUpdatedById?: number;
    lastUpdatedOn: Date;
}
//# sourceMappingURL=Mutable.d.ts.map