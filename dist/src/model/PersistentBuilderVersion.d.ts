import { AbstractMutable } from "./AbstractMutable";
import { PersistentBuilderType } from "./PersistentBuilderType";
export declare abstract class PersistentBuilderVersion extends AbstractMutable {
    type: PersistentBuilderType;
    persistentBuilderId?: number;
    version: string;
    released: boolean;
    tags: string;
    text: string;
    deprecated: boolean;
    suggestedAlternateId?: number;
}
//# sourceMappingURL=PersistentBuilderVersion.d.ts.map