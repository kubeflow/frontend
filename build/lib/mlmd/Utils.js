"use strict";
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("./Api");
var __1 = require("..");
var UNNAMED_RESOURCE_DISPLAY_NAME = '(unnamed)';
function getResourceProperty(resource, propertyName, fromCustomProperties) {
    if (fromCustomProperties === void 0) { fromCustomProperties = false; }
    var props = fromCustomProperties
        ? resource.getCustomPropertiesMap()
        : resource.getPropertiesMap();
    return (props && props.get(propertyName) && getMetadataValue(props.get(propertyName)))
        || null;
}
exports.getResourceProperty = getResourceProperty;
function getResourcePropertyViaFallBack(res, fieldRepos, fields) {
    var prop = fields.reduce(function (value, key) {
        var isCustomProp = key in fieldRepos[1];
        var repo = fieldRepos[Number(isCustomProp)];
        return value || getResourceProperty(res, repo[key], isCustomProp);
    }, '') || '';
    return prop;
}
exports.getResourcePropertyViaFallBack = getResourcePropertyViaFallBack;
function getArtifactName(artifact) {
    var artifactName = getResourceProperty(artifact, Api_1.ArtifactProperties.NAME) ||
        getResourceProperty(artifact, Api_1.ArtifactCustomProperties.NAME, true);
    return artifactName ? artifactName.toString() : UNNAMED_RESOURCE_DISPLAY_NAME;
}
function getExecutionName(execution) {
    var fields = ['COMPONENT_ID', 'TASK_ID', 'NAME'];
    var fieldRepos = [Api_1.ExecutionProperties, Api_1.ExecutionCustomProperties];
    return getResourcePropertyViaFallBack(execution, fieldRepos, fields) || UNNAMED_RESOURCE_DISPLAY_NAME;
}
function getResourceName(resource) {
    if (resource instanceof __1.Artifact) {
        return getArtifactName(resource);
    }
    return getExecutionName(resource);
}
exports.getResourceName = getResourceName;
function getResourceDescription(resource) {
    var fields, fieldRepos;
    if (resource instanceof __1.Artifact) {
        fieldRepos = [Api_1.ArtifactProperties, Api_1.ArtifactCustomProperties];
        fields = ['RUN_ID', 'RUN', 'PIPELINE_NAME', 'WORKSPACE'];
    }
    else {
        fieldRepos = [Api_1.ExecutionProperties, Api_1.ExecutionCustomProperties];
        fields = ['RUN_ID', 'RUN', 'PIPELINE_NAME', 'WORKSPACE'];
    }
    var description = getResourcePropertyViaFallBack(resource, fieldRepos, fields);
    return description;
}
exports.getResourceDescription = getResourceDescription;
function getTypeName(typeId, artifactTypes) {
    return artifactTypes && artifactTypes.get(typeId) ?
        artifactTypes.get(typeId).getName() : String(typeId);
}
exports.getTypeName = getTypeName;
function getMetadataValue(value) {
    if (!value) {
        return '';
    }
    switch (value.getValueCase()) {
        case __1.Value.ValueCase.DOUBLE_VALUE:
            return value.getDoubleValue();
        case __1.Value.ValueCase.INT_VALUE:
            return value.getIntValue();
        case __1.Value.ValueCase.STRING_VALUE:
            return value.getStringValue();
        case __1.Value.ValueCase.VALUE_NOT_SET:
            return '';
    }
}
exports.getMetadataValue = getMetadataValue;
//# sourceMappingURL=Utils.js.map