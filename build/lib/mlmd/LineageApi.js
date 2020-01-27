"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var __2 = require("..");
var EventType = __1.Event.Type;
function getArtifactTypes(metadataStoreService, errorCallback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, artifactTypesMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, metadataStoreService.getArtifactTypes(new __2.GetArtifactTypesRequest())];
                case 1:
                    response = _a.sent();
                    if (!response) {
                        if (errorCallback) {
                            errorCallback('Unable to retrieve Artifact Types, some features may not work.');
                        }
                        return [2 /*return*/, new Map()];
                    }
                    artifactTypesMap = new Map();
                    (response.getArtifactTypesList() || []).forEach(function (artifactType) {
                        artifactTypesMap.set(artifactType.getId(), artifactType);
                    });
                    return [2 /*return*/, artifactTypesMap];
            }
        });
    });
}
exports.getArtifactTypes = getArtifactTypes;
function getExecutionTypes(metadataStoreService, errorCallback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, executionTypesMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, metadataStoreService.getExecutionTypes(new __1.GetExecutionTypesRequest())];
                case 1:
                    response = _a.sent();
                    if (!response) {
                        if (errorCallback) {
                            errorCallback('Unable to retrieve Execution Types, some features may not work.');
                        }
                        return [2 /*return*/, new Map()];
                    }
                    executionTypesMap = new Map();
                    (response.getExecutionTypesList() || []).forEach(function (executionType) {
                        executionTypesMap.set(executionType.getId(), executionType);
                    });
                    return [2 /*return*/, executionTypesMap];
            }
        });
    });
}
exports.getExecutionTypes = getExecutionTypes;
function getArtifactCreationTime(artifactId, metadataStoreService, errorCallback) {
    return __awaiter(this, void 0, void 0, function () {
        var eventsRequest, response, data, lastOutputEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!artifactId) {
                        throw new Error('artifactId is empty');
                    }
                    eventsRequest = new __1.GetEventsByArtifactIDsRequest();
                    eventsRequest.setArtifactIdsList([artifactId]);
                    return [4 /*yield*/, metadataStoreService.getEventsByArtifactIDs(eventsRequest)];
                case 1:
                    response = _a.sent();
                    if (!response) {
                        if (errorCallback) {
                            errorCallback("Unable to retrieve Events for artifactId: " + artifactId);
                        }
                        return [2 /*return*/, ''];
                    }
                    data = response.getEventsList().map(function (event) { return ({
                        time: event.getMillisecondsSinceEpoch(),
                        type: event.getType() || EventType.UNKNOWN,
                    }); });
                    lastOutputEvent = data
                        .reverse()
                        .find(function (event) { return event.type === EventType.DECLARED_OUTPUT || event.type === EventType.OUTPUT; });
                    if (lastOutputEvent && lastOutputEvent.time) {
                        return [2 /*return*/, __1.formatDateString(new Date(lastOutputEvent.time))];
                    }
                    else {
                        // No valid time found, just return empty
                        return [2 /*return*/, ''];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.getArtifactCreationTime = getArtifactCreationTime;
//# sourceMappingURL=LineageApi.js.map