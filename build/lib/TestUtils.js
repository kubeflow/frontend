"use strict";
/*
 * Copyright 2018 Google LLC
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
var metadata_store_pb_1 = require("./generated/src/apis/metadata/metadata_store_pb");
var Api_1 = require("./mlmd/Api");
exports.doubleValue = function (number) {
    var value = new metadata_store_pb_1.Value();
    value.setDoubleValue(number);
    return value;
};
exports.intValue = function (number) {
    var value = new metadata_store_pb_1.Value();
    value.setIntValue(number);
    return value;
};
exports.stringValue = function (string) {
    var value = new metadata_store_pb_1.Value();
    value.setStringValue(String(string));
    return value;
};
exports.buildTestModel = function () {
    var model = new metadata_store_pb_1.Artifact();
    model.setId(1);
    model.setTypeId(1);
    model.setUri('gs://my-bucket/mnist');
    model.getPropertiesMap().set(Api_1.ArtifactProperties.NAME, exports.stringValue('test model'));
    model.getPropertiesMap().set(Api_1.ArtifactProperties.DESCRIPTION, exports.stringValue('A really great model'));
    model.getPropertiesMap().set(Api_1.ArtifactProperties.VERSION, exports.stringValue('v1'));
    model.getPropertiesMap().set(Api_1.ArtifactProperties.CREATE_TIME, exports.stringValue('2019-06-12T01:21:48.259263Z'));
    model.getPropertiesMap().set(Api_1.ArtifactProperties.ALL_META, exports.stringValue('{"hyperparameters": {"early_stop": true, ' +
        '"layers": [10, 3, 1], "learning_rate": 0.5}, ' +
        '"model_type": "neural network", ' +
        '"training_framework": {"name": "tensorflow", "version": "v1.0"}}'));
    model.getCustomPropertiesMap().set(Api_1.ArtifactCustomProperties.WORKSPACE, exports.stringValue('workspace-1'));
    model.getCustomPropertiesMap().set(Api_1.ArtifactCustomProperties.RUN, exports.stringValue('1'));
    return model;
};
exports.testModel = exports.buildTestModel();
//# sourceMappingURL=TestUtils.js.map