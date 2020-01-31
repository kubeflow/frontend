"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
/** Known Artifact properties */
var ArtifactProperties;
(function (ArtifactProperties) {
    ArtifactProperties["ALL_META"] = "__ALL_META__";
    ArtifactProperties["CREATE_TIME"] = "create_time";
    ArtifactProperties["DESCRIPTION"] = "description";
    ArtifactProperties["NAME"] = "name";
    ArtifactProperties["PIPELINE_NAME"] = "pipeline_name";
    ArtifactProperties["VERSION"] = "version";
})(ArtifactProperties = exports.ArtifactProperties || (exports.ArtifactProperties = {}));
/** Known Artifact custom properties */
var ArtifactCustomProperties;
(function (ArtifactCustomProperties) {
    ArtifactCustomProperties["WORKSPACE"] = "__kf_workspace__";
    ArtifactCustomProperties["RUN"] = "__kf_run__";
    ArtifactCustomProperties["NAME"] = "name";
    ArtifactCustomProperties["PIPELINE_NAME"] = "pipeline_name";
    ArtifactCustomProperties["RUN_ID"] = "run_id";
})(ArtifactCustomProperties = exports.ArtifactCustomProperties || (exports.ArtifactCustomProperties = {}));
/** Known Execution properties */
var ExecutionProperties;
(function (ExecutionProperties) {
    ExecutionProperties["NAME"] = "name";
    ExecutionProperties["COMPONENT_ID"] = "component_id";
    ExecutionProperties["PIPELINE_NAME"] = "pipeline_name";
    ExecutionProperties["STATE"] = "state";
})(ExecutionProperties = exports.ExecutionProperties || (exports.ExecutionProperties = {}));
/** Known Execution custom properties */
var ExecutionCustomProperties;
(function (ExecutionCustomProperties) {
    ExecutionCustomProperties["WORKSPACE"] = "__kf_workspace__";
    ExecutionCustomProperties["RUN"] = "__kf_run__";
    ExecutionCustomProperties["RUN_ID"] = "run_id";
    ExecutionCustomProperties["TASK_ID"] = "task_id";
})(ExecutionCustomProperties = exports.ExecutionCustomProperties || (exports.ExecutionCustomProperties = {}));
/**
 * Class to wrap backend APIs.
 */
var Api = /** @class */ (function () {
    function Api() {
        this.metadataServicePromiseClient = new __1.MetadataStoreServicePromiseClient('');
    }
    /**
     * Factory function to return an Api instance.
     */
    Api.getInstance = function () {
        if (!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    };
    Object.defineProperty(Api.prototype, "metadataStoreService", {
        get: function () {
            return this.metadataServicePromiseClient;
        },
        enumerable: true,
        configurable: true
    });
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=Api.js.map