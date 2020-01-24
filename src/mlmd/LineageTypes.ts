/**
 * This file provides common types used by the Lineage Explorer components
 */
import {Artifact, Execution} from "..";

export type LineageCardType = 'artifact' | 'execution';
export interface LineageRow {
    prev?: boolean;
    next?: boolean;
    resource: LineageResource;

    // The full typename for the resource's typeId
    resourceType: string;
}

export type LineageResource = Artifact | Execution;

export const DEFAULT_LINEAGE_CARD_TYPE = 'artifact' as LineageCardType;
