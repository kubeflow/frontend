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
// tslint:disable: object-literal-sort-keys
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_groupby_1 = __importDefault(require("lodash.groupby"));
var React = __importStar(require("react"));
var typestyle_1 = require("typestyle");
var Css_1 = require("./Css");
var LineageCardColumn_1 = require("./LineageCardColumn");
var LineageActionBar_1 = require("./LineageActionBar");
var __1 = require("..");
var LineageApi_1 = require("./LineageApi");
var Utils_1 = require("./Utils");
var Api_1 = require("./Api");
var isInputEvent = function (event) {
    return [__1.Event.Type.INPUT.valueOf(), __1.Event.Type.DECLARED_INPUT.valueOf()].includes(event.getType());
};
var isOutputEvent = function (event) {
    return [__1.Event.Type.OUTPUT.valueOf(), __1.Event.Type.DECLARED_OUTPUT.valueOf()].includes(event.getType());
};
/** Default size used when cardWidth prop is unset. */
var DEFAULT_CARD_WIDTH = 210;
/** Default size used when edgeWidth prop is unset. */
var DEFAULT_EDGE_WIDTH = 80;
var LineageView = /** @class */ (function (_super) {
    __extends(LineageView, _super);
    function LineageView(props) {
        var _this = _super.call(this, props) || this;
        _this.metadataStoreService = Api_1.Api.getInstance().metadataStoreService;
        _this.actionBarRef = React.createRef();
        _this.state = {
            columnNames: ['Input Artifact', '', 'Target', '', 'Output Artifact'],
            columnTypes: ['ipa', 'ipx', 'target', 'opx', 'opa'],
            target: props.target,
            inputArtifacts: [],
            inputExecutions: [],
            outputExecutions: [],
            outputArtifacts: [],
        };
        _this.loadData = _this.loadData.bind(_this);
        _this.setTargetFromActionBar = _this.setTargetFromActionBar.bind(_this);
        _this.setTargetFromLineageCard = _this.setTargetFromLineageCard.bind(_this);
        _this.loadData(_this.props.target.getId());
        return _this;
    }
    LineageView.prototype.render = function () {
        if (!this.artifactTypes) {
            return null;
        }
        var columnNames = this.state.columnNames;
        var cardWidth = this.props.cardWidth || DEFAULT_CARD_WIDTH;
        var edgeWidth = this.props.edgeWidth || DEFAULT_EDGE_WIDTH;
        return (React.createElement("div", { className: typestyle_1.classes(Css_1.commonCss.page) },
            React.createElement(LineageActionBar_1.LineageActionBar, { ref: this.actionBarRef, initialTarget: this.props.target, setLineageViewTarget: this.setTargetFromActionBar }),
            React.createElement("div", { className: typestyle_1.classes(Css_1.commonCss.page, 'LineageExplorer'), style: { flexFlow: 'row', overflow: 'auto', width: '100%', position: 'relative', background: '#f3f2f4', zIndex: 0 } },
                React.createElement(LineageCardColumn_1.LineageCardColumn, { type: 'artifact', cards: this.buildArtifactCards(this.state.inputArtifacts), title: "" + columnNames[0], cardWidth: cardWidth, edgeWidth: edgeWidth, setLineageViewTarget: this.setTargetFromLineageCard }),
                React.createElement(LineageCardColumn_1.LineageCardColumn, { type: 'execution', cards: this.buildExecutionCards(this.state.inputExecutions), cardWidth: cardWidth, edgeWidth: edgeWidth, title: "" + columnNames[1] }),
                React.createElement(LineageCardColumn_1.LineageCardColumn, { type: 'artifact', cards: this.buildArtifactCards([this.state.target], /* isTarget= */ true), cardWidth: cardWidth, edgeWidth: edgeWidth, title: "" + columnNames[2] }),
                React.createElement(LineageCardColumn_1.LineageCardColumn, { type: 'execution', cards: this.buildExecutionCards(this.state.outputExecutions), cardWidth: cardWidth, edgeWidth: edgeWidth, reverseBindings: true, title: "" + columnNames[3] }),
                React.createElement(LineageCardColumn_1.LineageCardColumn, { type: 'artifact', cards: this.buildArtifactCards(this.state.outputArtifacts), reverseBindings: true, cardWidth: cardWidth, edgeWidth: edgeWidth, title: "" + columnNames[4], setLineageViewTarget: this.setTargetFromLineageCard }))));
    };
    LineageView.prototype.buildArtifactCards = function (artifacts, isTarget) {
        var _this = this;
        if (isTarget === void 0) { isTarget = false; }
        var artifactsByTypeId = lodash_groupby_1.default(artifacts, function (artifact) { return (artifact.getTypeId()); });
        return Object.keys(artifactsByTypeId).map(function (typeId) {
            var title = Utils_1.getTypeName(Number(typeId), _this.artifactTypes);
            var artifacts = artifactsByTypeId[typeId];
            return {
                title: title,
                elements: artifacts.map(function (artifact) { return ({
                    resource: artifact,
                    prev: !isTarget || _this.state.inputExecutions.length > 0,
                    next: !isTarget || _this.state.outputExecutions.length > 0,
                }); })
            };
        });
    };
    LineageView.prototype.buildExecutionCards = function (executions) {
        var _this = this;
        var executionsByTypeId = lodash_groupby_1.default(executions, function (execution) { return (execution.getTypeId()); });
        return Object.keys(executionsByTypeId).map(function (typeId) {
            var title = Utils_1.getTypeName(Number(typeId), _this.executionTypes);
            var executions = executionsByTypeId[typeId];
            return {
                title: title,
                elements: executions.map(function (execution) { return ({
                    resource: execution,
                    prev: true,
                    next: true,
                }); })
            };
        });
    };
    LineageView.prototype.loadData = function (targetId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, targetArtifactEvents, executionTypes, artifactTypes, outputExecutionIds, inputExecutionIds, _i, targetArtifactEvents_1, event_1, executionId, _b, outputExecutions, inputExecutions, _c, inputExecutionEvents, outputExecutionEvents, inputExecutionInputArtifactIds, outputExecutionOutputArtifactIds, _d, inputArtifacts, outputArtifacts;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getArtifactEvents([targetId]),
                            LineageApi_1.getExecutionTypes(this.metadataStoreService),
                            LineageApi_1.getArtifactTypes(this.metadataStoreService),
                        ])];
                    case 1:
                        _a = _e.sent(), targetArtifactEvents = _a[0], executionTypes = _a[1], artifactTypes = _a[2];
                        Object.assign(this, { artifactTypes: artifactTypes, executionTypes: executionTypes });
                        outputExecutionIds = [];
                        inputExecutionIds = [];
                        for (_i = 0, targetArtifactEvents_1 = targetArtifactEvents; _i < targetArtifactEvents_1.length; _i++) {
                            event_1 = targetArtifactEvents_1[_i];
                            executionId = event_1.getExecutionId();
                            if (isOutputEvent(event_1)) {
                                // The input executions column will show executions where the target
                                // was an output of the execution.
                                inputExecutionIds.push(executionId);
                            }
                            else if (isInputEvent(event_1)) {
                                // The output executions column will show executions where the target
                                // was an input for the execution.
                                outputExecutionIds.push(executionId);
                            }
                        }
                        return [4 /*yield*/, Promise.all([
                                this.getExecutions(outputExecutionIds),
                                this.getExecutions(inputExecutionIds),
                            ])];
                    case 2:
                        _b = _e.sent(), outputExecutions = _b[0], inputExecutions = _b[1];
                        return [4 /*yield*/, Promise.all([
                                this.getExecutionEvents(inputExecutionIds), this.getExecutionEvents(outputExecutionIds)
                            ])];
                    case 3:
                        _c = _e.sent(), inputExecutionEvents = _c[0], outputExecutionEvents = _c[1];
                        inputExecutionInputArtifactIds = [];
                        inputExecutionEvents.forEach(function (event) {
                            if (!isInputEvent(event)) {
                                return;
                            }
                            inputExecutionInputArtifactIds.push(event.getArtifactId());
                        });
                        outputExecutionOutputArtifactIds = [];
                        outputExecutionEvents.forEach(function (event) {
                            if (!isOutputEvent(event)) {
                                return;
                            }
                            outputExecutionOutputArtifactIds.push(event.getArtifactId());
                        });
                        return [4 /*yield*/, Promise.all([
                                this.getArtifacts(inputExecutionInputArtifactIds),
                                this.getArtifacts(outputExecutionOutputArtifactIds)
                            ])];
                    case 4:
                        _d = _e.sent(), inputArtifacts = _d[0], outputArtifacts = _d[1];
                        this.setState({
                            inputArtifacts: inputArtifacts, inputExecutions: inputExecutions, outputArtifacts: outputArtifacts, outputExecutions: outputExecutions,
                        });
                        return [2 /*return*/, ''];
                }
            });
        });
    };
    // Updates the view and action bar when the target is set from a lineage card.
    LineageView.prototype.setTargetFromLineageCard = function (target) {
        var actionBarRefObject = this.actionBarRef;
        if (!actionBarRefObject.current) {
            return;
        }
        actionBarRefObject.current.pushHistory(target);
        this.target = target;
    };
    // Updates the view when the target is changed from the action bar.
    LineageView.prototype.setTargetFromActionBar = function (target) {
        this.target = target;
    };
    Object.defineProperty(LineageView.prototype, "target", {
        set: function (target) {
            this.setState({
                target: target,
            });
            this.loadData(target.getId());
        },
        enumerable: true,
        configurable: true
    });
    LineageView.prototype.getExecutions = function (executionIds) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = new __1.GetExecutionsByIDRequest();
                        request.setExecutionIdsList(executionIds);
                        return [4 /*yield*/, this.metadataStoreService.getExecutionsByID(request)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.getExecutionsList()];
                }
            });
        });
    };
    LineageView.prototype.getExecutionEvents = function (executionIds) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = new __1.GetEventsByExecutionIDsRequest();
                        request.setExecutionIdsList(executionIds);
                        return [4 /*yield*/, this.metadataStoreService.getEventsByExecutionIDs(request)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.getEventsList()];
                }
            });
        });
    };
    LineageView.prototype.getArtifacts = function (artifactIds) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = new __1.GetArtifactsByIDRequest();
                        request.setArtifactIdsList(artifactIds);
                        return [4 /*yield*/, this.metadataStoreService.getArtifactsByID(request)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.getArtifactsList()];
                }
            });
        });
    };
    LineageView.prototype.getArtifactEvents = function (artifactIds) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = new __1.GetEventsByArtifactIDsRequest();
                        request.setArtifactIdsList(artifactIds);
                        return [4 /*yield*/, this.metadataStoreService.getEventsByArtifactIDs(request)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.getEventsList()];
                }
            });
        });
    };
    return LineageView;
}(React.Component));
exports.LineageView = LineageView;
//# sourceMappingURL=LineageView.js.map