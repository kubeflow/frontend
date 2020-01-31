"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var grey_1 = __importDefault(require("@material-ui/core/colors/grey"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var ArrowRightAlt_1 = __importDefault(require("@material-ui/icons/ArrowRightAlt"));
var Replay_1 = __importDefault(require("@material-ui/icons/Replay"));
var typestyle_1 = require("typestyle");
var Css_1 = require("./Css");
var Utils_1 = require("./Utils");
var Api_1 = require("./Api");
var baseLinkButton = {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "inline",
    margin: 0,
    padding: 0,
};
var baseBreadcrumb = __assign(__assign({}, baseLinkButton), { fontFamily: Css_1.fonts.secondary, fontWeight: 500 });
var actionBarCss = typestyle_1.stylesheet({
    actionButton: {
        color: Css_1.color.strong
    },
    workspace: __assign(__assign({}, baseBreadcrumb), { fontStyle: 'italic' }),
    workspaceSep: {
        display: 'block',
        color: '#3c3c3c',
        $nest: {
            '&::before': {
                content: '""',
                color: '#9f9f9f',
                margin: '0 .75em',
                border: '1px solid',
                background: 'currentColor',
            }
        }
    },
    breadcrumbInactive: __assign(__assign({ color: Css_1.color.grey }, baseBreadcrumb), { $nest: {
            '&:hover': {
                textDecoration: 'underline',
            }
        } }),
    breadcrumbActive: __assign(__assign({ color: Css_1.color.strong }, baseBreadcrumb), { $nest: {
            '&:hover': {
                cursor: 'default',
            }
        } }),
    breadcrumbSeparator: {
        color: grey_1.default[400],
    },
    container: {
        borderBottom: '1px solid ' + Css_1.color.separator,
        height: '48px',
        justifyContent: 'space-between',
    },
});
var BreadcrumbSeparator = function () { return (React.createElement("div", { className: typestyle_1.classes(Css_1.commonCss.flex) },
    React.createElement(ArrowRightAlt_1.default, { className: typestyle_1.classes(actionBarCss.breadcrumbSeparator, Css_1.padding(10, 'lr')) }))); };
/** Shows the current navigation history and actions available to the Lineage Explorer. */
var LineageActionBar = /** @class */ (function (_super) {
    __extends(LineageActionBar, _super);
    function LineageActionBar(props) {
        var _this = _super.call(this, props) || this;
        _this.reset = _this.reset.bind(_this);
        _this.pushHistory = _this.pushHistory.bind(_this);
        _this.state = {
            history: []
        };
        if (_this.props.initialTarget) {
            _this.state.history.push(_this.props.initialTarget);
        }
        return _this;
    }
    LineageActionBar.prototype.pushHistory = function (artifact) {
        this.setState({
            history: __spreadArrays(this.state.history, [artifact])
        });
    };
    LineageActionBar.prototype.render = function () {
        var _this = this;
        var breadcrumbs = [
            React.createElement("span", { className: typestyle_1.classes(actionBarCss.workspace), key: 'workspace' }, Utils_1.getResourcePropertyViaFallBack(this.state.history[0], [Api_1.ArtifactProperties, Api_1.ArtifactCustomProperties], ['PIPELINE_NAME', 'WORKSPACE'])),
            React.createElement("aside", { className: actionBarCss.workspaceSep }),
        ];
        this.state.history.forEach(function (artifact, index) {
            var isActive = index === _this.state.history.length - 1;
            var onBreadcrumbClicked = function () {
                _this.sliceHistory(index);
            };
            breadcrumbs.push(React.createElement("button", { key: "breadcrumb-" + index, className: typestyle_1.classes(isActive ? actionBarCss.breadcrumbActive : actionBarCss.breadcrumbInactive), disabled: isActive, onClick: onBreadcrumbClicked }, 
            // TODO: Resolve how to handle Artifacts logged with no name
            Utils_1.getResourceProperty(artifact, Api_1.ArtifactProperties.NAME) || '(unnamed)'));
            if (!isActive) {
                breadcrumbs.push(React.createElement(BreadcrumbSeparator, { key: "separator-" + index }));
            }
        });
        return (React.createElement("div", { className: typestyle_1.classes(actionBarCss.container, Css_1.padding(25, 'lr'), Css_1.commonCss.flex) },
            React.createElement("div", { className: typestyle_1.classes(Css_1.commonCss.flex) }, breadcrumbs),
            React.createElement("div", null,
                React.createElement(Button_1.default, { className: typestyle_1.classes(actionBarCss.actionButton), disabled: false, onClick: this.reset },
                    React.createElement(Replay_1.default, null),
                    " Reset"))));
    };
    LineageActionBar.prototype.sliceHistory = function (index) {
        var history = this.state.history.slice(0, index + 1);
        var targetArtifact = history[index];
        var onHistoryChanged = this.props.setLineageViewTarget.bind(this, targetArtifact);
        this.setState({
            history: history,
        }, onHistoryChanged);
    };
    LineageActionBar.prototype.reset = function () {
        this.sliceHistory(0);
    };
    return LineageActionBar;
}(React.Component));
exports.LineageActionBar = LineageActionBar;
//# sourceMappingURL=LineageActionBar.js.map