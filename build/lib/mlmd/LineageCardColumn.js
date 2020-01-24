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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var grey_1 = __importDefault(require("@material-ui/core/colors/grey"));
var react_1 = __importDefault(require("react"));
var typestyle_1 = require("typestyle");
var LineageCard_1 = require("./LineageCard");
var LineageCss_1 = require("./LineageCss");
var EdgeCanvas_1 = require("./EdgeCanvas");
var LineageCardColumn = /** @class */ (function (_super) {
    __extends(LineageCardColumn, _super);
    function LineageCardColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineageCardColumn.prototype.render = function () {
        var _a = this.props, cardWidth = _a.cardWidth, edgeWidth = _a.edgeWidth, type = _a.type, title = _a.title;
        var css = typestyle_1.stylesheet({
            mainColumn: {
                display: 'inline-block',
                justifyContent: 'center',
                minHeight: '100%',
                padding: "0 " + edgeWidth / 2 + "px",
                width: LineageCss_1.px(cardWidth),
                $nest: {
                    h2: {
                        color: grey_1.default[600],
                        fontFamily: 'PublicSans-Regular',
                        fontSize: '12px',
                        letterSpacing: '0.5px',
                        lineHeight: '40px',
                        textAlign: 'left',
                        textTransform: 'capitalize'
                    }
                }
            },
            columnBody: {
                width: LineageCss_1.px(cardWidth),
            },
            columnHeader: {
                height: '40px',
                margin: '10px 0px',
                textAlign: 'left',
                width: LineageCss_1.px(cardWidth),
            }
        });
        return (react_1.default.createElement("div", { className: typestyle_1.classes(css.mainColumn, type) },
            react_1.default.createElement("div", { className: typestyle_1.classes(css.columnHeader) },
                react_1.default.createElement("h2", null, title)),
            react_1.default.createElement("div", { className: typestyle_1.classes(css.columnBody) }, this.drawColumnContent())));
    };
    LineageCardColumn.prototype.jsxFromCardDetails = function (det, i) {
        var isNotFirstEl = i > 0;
        return react_1.default.createElement(LineageCard_1.LineageCard, { key: i, cardWidth: this.props.cardWidth, title: det.title, type: this.props.type, addSpacer: isNotFirstEl, rows: det.elements, isTarget: /Target/i.test(this.props.title), setLineageViewTarget: this.props.setLineageViewTarget, buildArtifactDetailsRoute: this.props.buildArtifactDetailsRoute });
    };
    LineageCardColumn.prototype.drawColumnContent = function () {
        var _a = this.props, cards = _a.cards, cardWidth = _a.cardWidth, edgeWidth = _a.edgeWidth, skipEdgeCanvas = _a.skipEdgeCanvas;
        return react_1.default.createElement(react_1.default.Fragment, null,
            skipEdgeCanvas ? null :
                react_1.default.createElement(EdgeCanvas_1.EdgeCanvas, { cards: cards, cardWidth: cardWidth, edgeWidth: edgeWidth, reverseEdges: !!this.props.reverseBindings }),
            cards.map(this.jsxFromCardDetails.bind(this)));
    };
    return LineageCardColumn;
}(react_1.default.Component));
exports.LineageCardColumn = LineageCardColumn;
//# sourceMappingURL=LineageCardColumn.js.map