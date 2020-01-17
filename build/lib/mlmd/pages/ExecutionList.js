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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_1 = require("frontend");
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var typestyle_1 = require("typestyle");
var CustomTable_1 = __importStar(require("../components/CustomTable"));
var Css_1 = require("../Css");
var Utils_1 = require("../lib/Utils");
var Router_1 = require("../components/Router");
var Page_1 = require("./Page");
var ExecutionList = /** @class */ (function (_super) {
    __extends(ExecutionList, _super);
    function ExecutionList(props) {
        var _this = _super.call(this, props) || this;
        _this.tableRef = React.createRef();
        _this.api = frontend_1.Api.getInstance();
        _this.nameCustomRenderer = function (props) {
            var _a = props.id.split(':'), executionType = _a[0], executionId = _a[1];
            var link = Router_1.RoutePage.EXECUTION_DETAILS
                .replace(":" + Router_1.RouteParams.EXECUTION_TYPE + "+", executionType)
                .replace(":" + Router_1.RouteParams.ID, executionId);
            return (React.createElement(react_router_dom_1.Link, { onClick: function (e) { return e.stopPropagation(); }, className: Css_1.commonCss.link, to: link }, props.value));
        };
        _this.state = {
            executions: [],
            columns: [
                {
                    label: 'Pipeline/Workspace',
                    flex: 2,
                    customRenderer: _this.nameCustomRenderer,
                    sortKey: 'pipelineName'
                },
                {
                    label: 'Name',
                    flex: 1,
                    customRenderer: _this.nameCustomRenderer,
                    sortKey: 'name',
                },
                { label: 'State', flex: 1, sortKey: 'state', },
                { label: 'ID', flex: 1, sortKey: 'id' },
                { label: 'Type', flex: 2, sortKey: 'type' },
            ],
            rows: [],
            expandedRows: new Map(),
        };
        _this.reload = _this.reload.bind(_this);
        _this.toggleRowExpand = _this.toggleRowExpand.bind(_this);
        _this.getExpandedExecutionsRow = _this.getExpandedExecutionsRow.bind(_this);
        return _this;
    }
    ExecutionList.prototype.getInitialToolbarState = function () {
        return {
            actions: [],
            breadcrumbs: [],
            pageTitle: 'Executions',
        };
    };
    ExecutionList.prototype.render = function () {
        var _a = this.state, rows = _a.rows, columns = _a.columns;
        return (React.createElement("div", { className: typestyle_1.classes(Css_1.commonCss.page, Css_1.padding(20, 'lr')) },
            React.createElement(CustomTable_1.default, { ref: this.tableRef, columns: columns, rows: rows, disablePaging: true, disableSelection: true, reload: this.reload, initialSortColumn: 'pipelineName', initialSortOrder: 'asc', getExpandComponent: this.getExpandedExecutionsRow, toggleExpansion: this.toggleRowExpand, emptyMessage: 'No executions found.' })));
    };
    ExecutionList.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.tableRef.current) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tableRef.current.reload()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ExecutionList.prototype.reload = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, executions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!this.executionTypes || !this.executionTypes.size)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.getExecutionTypes()];
                    case 1:
                        _a.executionTypes = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!!this.state.executions.length) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getExecutions()];
                    case 3:
                        executions = _b.sent();
                        this.setState({ executions: executions });
                        this.clearBanner();
                        _b.label = 4;
                    case 4:
                        this.setState({
                            rows: this.getRowsFromExecutions(request),
                        });
                        return [2 /*return*/, ''];
                }
            });
        });
    };
    ExecutionList.prototype.getExecutionTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, artifactTypesMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.metadataStoreService.getExecutionTypes(new frontend_1.GetExecutionTypesRequest())];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            this.showPageError('Unable to retrieve Execution Types, some features may not work.');
                            return [2 /*return*/, new Map()];
                        }
                        artifactTypesMap = new Map();
                        (response.getExecutionTypesList() || []).forEach(function (executionType) {
                            artifactTypesMap.set(executionType.getId(), executionType);
                        });
                        return [2 /*return*/, artifactTypesMap];
                }
            });
        });
    };
    ExecutionList.prototype.getExecutions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.metadataStoreService.getExecutions(new frontend_1.GetExecutionsRequest())];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            this.showPageError('Unable to retrieve Executions.');
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, response.getExecutionsList() || []];
                }
            });
        });
    };
    /**
     * Temporary solution to apply sorting, filtering, and pagination to the
     * local list of executions until server-side handling is available
     * TODO: Replace once https://github.com/kubeflow/metadata/issues/73 is done.
     * @param request
     */
    ExecutionList.prototype.getRowsFromExecutions = function (request) {
        var _this = this;
        var collapsedAndExpandedRows = Utils_1.groupRows(this.state.executions
            .map(function (execution) {
            var type = _this.executionTypes && _this.executionTypes.get(execution.getTypeId()) ?
                _this.executionTypes.get(execution.getTypeId()).getName() : execution.getTypeId();
            return {
                id: type + ":" + execution.getId(),
                otherFields: [
                    Utils_1.getResourceProperty(execution, frontend_1.ExecutionProperties.PIPELINE_NAME)
                        || Utils_1.getResourceProperty(execution, frontend_1.ExecutionCustomProperties.WORKSPACE, true),
                    Utils_1.getResourceProperty(execution, frontend_1.ExecutionProperties.NAME),
                    Utils_1.getResourceProperty(execution, frontend_1.ExecutionProperties.STATE),
                    execution.getId(),
                    type,
                ],
            };
        })
            .filter(Utils_1.rowFilterFn(request))
            .sort(Utils_1.rowCompareFn(request, this.state.columns)));
        this.setState({ expandedRows: collapsedAndExpandedRows.expandedRows });
        return collapsedAndExpandedRows.collapsedRows;
    };
    /**
     * Toggles the expansion state of a row
     * @param index
     */
    ExecutionList.prototype.toggleRowExpand = function (index) {
        var rows = this.state.rows;
        if (!rows[index]) {
            return;
        }
        rows[index].expandState = rows[index].expandState === CustomTable_1.ExpandState.EXPANDED
            ? CustomTable_1.ExpandState.COLLAPSED
            : CustomTable_1.ExpandState.EXPANDED;
        this.setState({ rows: rows });
    };
    ExecutionList.prototype.getExpandedExecutionsRow = function (index) {
        return Utils_1.getExpandedRow(this.state.expandedRows, this.state.columns)(index);
    };
    return ExecutionList;
}(Page_1.Page));
exports.default = ExecutionList;
//# sourceMappingURL=ExecutionList.js.map