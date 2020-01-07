"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTypeName(typeId, artifactTypes) {
    return artifactTypes && artifactTypes.get(typeId) ?
        artifactTypes.get(typeId).getName() : String(typeId);
}
exports.getTypeName = getTypeName;
//# sourceMappingURL=LineageUtils.js.map