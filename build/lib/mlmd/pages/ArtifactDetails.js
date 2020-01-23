"use strict";
/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var frontend_1 = require("frontend");
var React = __importStar(require("react"));
var Page_1 = require("./Page");
var Router_1 = require("../components/Router");
var typestyle_1 = require("typestyle");
var Css_1 = require("../Css");
var core_1 = require("@material-ui/core");
var Utils_1 = require("../lib/Utils");
var ResourceInfo_1 = require("../components/ResourceInfo");
var MD2Tabs_1 = __importDefault(require("../atoms/MD2Tabs"));
var ArtifactDetailsTab;
(function (ArtifactDetailsTab) {
    ArtifactDetailsTab[ArtifactDetailsTab["OVERVIEW"] = 0] = "OVERVIEW";
    ArtifactDetailsTab[ArtifactDetailsTab["LINEAGE_EXPLORER"] = 1] = "LINEAGE_EXPLORER";
})(ArtifactDetailsTab = exports.ArtifactDetailsTab || (exports.ArtifactDetailsTab = {}));
var tabs = (_a = {},
    _a[ArtifactDetailsTab.OVERVIEW] = { name: 'Overview' },
    _a[ArtifactDetailsTab.LINEAGE_EXPLORER] = { name: 'Lineage Explorer' },
    _a);
var tabNames = Object.values(tabs).map(function (tabConfig) { return tabConfig.name; });
var ArtifactDetails = /** @class */ (function (_super) {
    __extends(ArtifactDetails, _super);
    function ArtifactDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.api = frontend_1.Api.getInstance();
        _this.state = {
            selectedTab: ArtifactDetailsTab.OVERVIEW
        };
        _this.load = _this.load.bind(_this);
        return _this;
    }
    Object.defineProperty(ArtifactDetails.prototype, "fullTypeName", {
        get: function () {
            return this.props.match.params[Router_1.RouteParams.ARTIFACT_TYPE] || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArtifactDetails.prototype, "properTypeName", {
        get: function () {
            var parts = this.fullTypeName.split('/');
            if (!parts.length)
                return '';
            return Utils_1.titleCase(parts[parts.length - 1]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArtifactDetails.prototype, "id", {
        get: function () {
            return this.props.match.params[Router_1.RouteParams.ID];
        },
        enumerable: true,
        configurable: true
    });
    ArtifactDetails.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.load()];
            });
        });
    };
    ArtifactDetails.prototype.render = function () {
        if (!this.state.artifact)
            return React.createElement(core_1.CircularProgress, null);
        return (React.createElement("div", { className: typestyle_1.classes(Css_1.commonCss.page) },
            React.createElement("div", { className: typestyle_1.classes(Css_1.padding(20, 't')) },
                React.createElement(MD2Tabs_1.default, { tabs: tabNames, selectedTab: this.state.selectedTab, onSwitch: this.switchTab.bind(this) })),
            this.state.selectedTab === ArtifactDetailsTab.OVERVIEW && (React.createElement("div", { className: typestyle_1.classes(Css_1.padding(20, 'lr')) },
                React.createElement(ResourceInfo_1.ResourceInfo, { typeName: this.properTypeName, resource: this.state.artifact }))),
            this.state.selectedTab === ArtifactDetailsTab.LINEAGE_EXPLORER && (React.createElement(frontend_1.LineageView, { target: this.state.artifact }))));
    };
    ArtifactDetails.prototype.getInitialToolbarState = function () {
        return {
            actions: [],
            breadcrumbs: [{ displayName: 'Artifacts', href: Router_1.RoutePage.ARTIFACTS }],
            pageTitle: this.properTypeName + " " + this.id + " details"
        };
    };
    ArtifactDetails.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.load()];
            });
        });
    };
    ArtifactDetails.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, response, artifact, artifactName, title, version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = new frontend_1.GetArtifactsByIDRequest();
                        request.setArtifactIdsList([Number(this.id)]);
                        return [4 /*yield*/, this.api.metadataStoreService.getArtifactsByID(request)];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            this.showPageError("Unable to retrieve " + this.fullTypeName + " " + this.id + ".");
                            return [2 /*return*/];
                        }
                        if (!response.getArtifactsList().length) {
                            this.showPageError("No " + this.fullTypeName + " identified by id: " + this.id);
                            return [2 /*return*/];
                        }
                        if (response.getArtifactsList().length > 1) {
                            this.showPageError("Found multiple artifacts with ID: " + this.id);
                            return [2 /*return*/];
                        }
                        artifact = response.getArtifactsList()[0];
                        artifactName = Utils_1.getResourceProperty(artifact, frontend_1.ArtifactProperties.NAME);
                        title = artifactName ? artifactName.toString() : '';
                        version = Utils_1.getResourceProperty(artifact, frontend_1.ArtifactProperties.VERSION);
                        if (version) {
                            title += " (version: " + version + ")";
                        }
                        this.props.updateToolbar({
                            pageTitle: title
                        });
                        this.setState({ artifact: artifact });
                        return [2 /*return*/];
                }
            });
        });
    };
    ArtifactDetails.prototype.switchTab = function (selectedTab) {
        this.setState({ selectedTab: selectedTab });
    };
    return ArtifactDetails;
}(Page_1.Page));
exports.default = ArtifactDetails;
//# sourceMappingURL=ArtifactDetails.js.map