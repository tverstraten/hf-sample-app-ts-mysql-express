import { PersistentBuilderType } from './PersistentBuilderType';
import { ReleaseLevel } from './ReleaseLevel';
import { Traceable } from './Traceable';
export declare class PersistentBuilder implements Traceable {
    id: number;
    type: PersistentBuilderType;
    withinOrganizationId?: number;
    name: string;
    releaseLevel: ReleaseLevel;
    mostCurrentVersionId?: number;
}
//# sourceMappingURL=PersistentBuilder.d.ts.map