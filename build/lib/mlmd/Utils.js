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
exports.logger = {
    error: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable-next-line:no-console
        console.error.apply(console, args);
    },
    verbose: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable-next-line:no-console
        console.log.apply(console, args);
    },
};
function formatDateString(date) {
    if (typeof date === 'string') {
        return new Date(date).toLocaleString();
    }
    else {
        return date ? date.toLocaleString() : '-';
    }
}
exports.formatDateString = formatDateString;
/** Title cases a string by capitalizing the first letter of each word. */
function titleCase(str) {
    return str.split(/[\s_-]/)
        .map(function (w) { return "" + w.charAt(0).toUpperCase() + w.slice(1); })
        .join(' ');
}
exports.titleCase = titleCase;
function getResourceProperty(resource, propertyName, fromCustomProperties) {
    if (fromCustomProperties === void 0) { fromCustomProperties = false; }
    var props = fromCustomProperties
        ? resource.getCustomPropertiesMap()
        : resource.getPropertiesMap();
    return (props && props.get(propertyName) && getMetadataValue(props.get(propertyName)))
        || null;
}
exports.getResourceProperty = getResourceProperty;
function getArtifactName(artifact) {
    return String(getResourceProperty(artifact, Api_1.ArtifactProperties.NAME));
}
function getExecutionName(execution) {
    return String(getResourceProperty(execution, Api_1.ExecutionProperties.NAME));
}
function getResourceName(resource) {
    if (resource instanceof __1.Artifact) {
        return getArtifactName(resource);
    }
    return getExecutionName(resource);
}
exports.getResourceName = getResourceName;
function getResourceDescription(resource) {
    var description;
    if (resource instanceof __1.Artifact) {
        description = getResourceProperty(resource, Api_1.ArtifactProperties.PIPELINE_NAME)
            || getResourceProperty(resource, Api_1.ArtifactCustomProperties.WORKSPACE, true);
    }
    else {
        description = getResourceProperty(resource, Api_1.ExecutionProperties.PIPELINE_NAME)
            || getResourceProperty(resource, Api_1.ExecutionCustomProperties.WORKSPACE, true);
    }
    return String(description) || '';
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