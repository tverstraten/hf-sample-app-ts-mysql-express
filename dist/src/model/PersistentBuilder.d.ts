import { AbstractMutable } from "./AbstractMutable";
import { PersistentBuilderType } from "./PersistentBuilderType";
import { ReleaseLevel } from "./ReleaseLevel";
export declare class PersistentBuilder extends AbstractMutable {
    type: PersistentBuilderType;
    withinOrganizationId?: number;
    name: string;
    releaseLevel: ReleaseLevel;
    mostCurrentVersionId?: number;
}
//# sourceMappingURL=PersistentBuilder.d.ts.map