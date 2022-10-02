import { PersistentBuilderType } from './PersistentBuilderType';
import { Traceable } from './Traceable';
export declare class PersistentBuilderVersion implements Traceable {
    id: number;
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