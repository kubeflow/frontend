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
var ARTIFACT_FIELD_REPOS = [Api_1.ArtifactProperties, Api_1.ArtifactCustomProperties];
var EXECUTION_FIELD_REPOS = [Api_1.ExecutionProperties, Api_1.ExecutionCustomProperties];
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
    var prop = fields.reduce(function (value, field) {
        return value || fieldRepos.reduce(function (v, repo, isCustomProp) {
            return v || (
            // eslint-disable-next-line no-sequences
            field in repo && getResourceProperty(res, repo[field], !!isCustomProp));
        }, '');
    }, '') || '';
    return prop;
}
exports.getResourcePropertyViaFallBack = getResourcePropertyViaFallBack;
function getArtifactName(artifact) {
    return getResourcePropertyViaFallBack(artifact, ARTIFACT_FIELD_REPOS, ['NAME'])
        || UNNAMED_RESOURCE_DISPLAY_NAME;
}
exports.getArtifactName = getArtifactName;
function getExecutionName(execution) {
    return getResourcePropertyViaFallBack(execution, EXECUTION_FIELD_REPOS, ['COMPONENT_ID', 'TASK_ID', 'NAME']) || UNNAMED_RESOURCE_DISPLAY_NAME;
}
function getResourceName(typedResource) {
    return typedResource.type === 'artifact'
        ? getArtifactName(typedResource.resource)
        : getExecutionName(typedResource.resource);
}
exports.getResourceName = getResourceName;
/**
 * Promisified sleep operation
 * @param t Time to sleep for in ms
 */
exports.sleep = function (t) { return new Promise(function (res) { return setTimeout(res, t); }); };
function getResourceDescription(typedResource) {
    return getResourcePropertyViaFallBack(typedResource.resource, typedResource.type === 'artifact' ? ARTIFACT_FIELD_REPOS : EXECUTION_FIELD_REPOS, ['RUN_ID', 'RUN', 'PIPELINE_NAME', 'WORKSPACE']);
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