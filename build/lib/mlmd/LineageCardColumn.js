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
var EdgeCanvas_1 = require("./EdgeCanvas");
var ControlledEdgeCanvas_1 = require("./ControlledEdgeCanvas");
var LineageCss_1 = require("./LineageCss");
var LineageCardColumn = /** @class */ (function (_super) {
    __extends(LineageCardColumn, _super);
    function LineageCardColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineageCardColumn.prototype.render = function () {
        var _a = this.props, columnPadding = _a.columnPadding, type = _a.type, title = _a.title;
        var css = typestyle_1.stylesheet({
            mainColumn: {
                display: 'inline-block',
                justifyContent: 'center',
                minHeight: '100%',
                padding: "0 " + columnPadding + "px",
                width: this.props.columnWidth,
                boxSizing: 'border-box',
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
                position: 'relative',
                width: '100%',
            },
            columnHeader: {
                height: '40px',
                margin: '10px 0px',
                textAlign: 'left',
                width: '100%',
            }
        });
        return (react_1.default.createElement("div", { className: typestyle_1.classes(css.mainColumn, type) },
            react_1.default.createElement("div", { className: typestyle_1.classes(css.columnHeader) },
                react_1.default.createElement("h2", null, title)),
            react_1.default.createElement("div", { className: typestyle_1.classes(css.columnBody) }, this.drawColumnContent())));
    };
    LineageCardColumn.prototype.jsxFromCardDetails = function (det, i) {
        var isNotFirstEl = i > 0;
        return react_1.default.createElement(LineageCard_1.LineageCard, { key: i, title: det.title, type: this.props.type, addSpacer: isNotFirstEl, rows: det.elements, isTarget: /Target/i.test(this.props.title), setLineageViewTarget: this.props.setLineageViewTarget });
    };
    LineageCardColumn.prototype.drawColumnContent = function () {
        var _a = this.props, cards = _a.cards, columnPadding = _a.columnPadding, columnWidth = _a.columnWidth, skipEdgeCanvas = _a.skipEdgeCanvas;
        var edgeWidth = columnPadding * 2;
        var cardWidth = columnWidth - edgeWidth;
        var edgeCanvases = [];
        if (this.props.outputExecutionToOutputArtifactMap) {
            edgeCanvases = this.buildOutputExecutionToOutputArtifactEdgeCanvases(this.props.outputExecutionToOutputArtifactMap, cards, edgeWidth, cardWidth);
        }
        else {
            edgeCanvases.push(react_1.default.createElement(EdgeCanvas_1.EdgeCanvas, { cardWidth: cardWidth, edgeWidth: edgeWidth, cards: cards, reverseEdges: !!this.props.reverseBindings }));
        }
        return react_1.default.createElement(react_1.default.Fragment, null,
            skipEdgeCanvas ? null : edgeCanvases,
            cards.map(this.jsxFromCardDetails.bind(this)));
    };
    LineageCardColumn.prototype.buildOutputExecutionToOutputArtifactEdgeCanvases = function (outputExecutionToOutputArtifactMap, artifactCards, edgeWidth, cardWidth) {
        var _this = this;
        var edgeCanvases = [];
        var artifactIdToCardMap = new Map();
        artifactCards.forEach(function (card, index) {
            card.elements.forEach(function (row) {
                artifactIdToCardMap.set(row.resource.getId(), index);
            });
        });
        // Offset relative to the top of the column
        var artifactOffset = 0;
        var artifactCardIndex;
        var executionCardIndex = 0;
        outputExecutionToOutputArtifactMap.forEach(function (artifactIds) {
            var executionCardTop = (LineageCss_1.CARD_ROW_HEIGHT + EdgeCanvas_1.CARD_OFFSET) * executionCardIndex;
            edgeCanvases.push(react_1.default.createElement(ControlledEdgeCanvas_1.ControlledEdgeCanvas, { cardWidth: cardWidth, edgeWidth: edgeWidth, reverseEdges: !!_this.props.reverseBindings, artifactIds: artifactIds, artifactToCardMap: artifactIdToCardMap, offset: artifactOffset - executionCardTop, outputExecutionToOutputArtifactMap: outputExecutionToOutputArtifactMap, top: executionCardTop }));
            // Advance starting artifact offset.
            artifactIds.forEach(function (artifactId) {
                if (artifactCardIndex === null) {
                    artifactCardIndex = artifactIdToCardMap.get(artifactId);
                    return;
                }
                var newArtifactIndex = artifactIdToCardMap.get(artifactId);
                if (artifactCardIndex === newArtifactIndex) {
                    // Next artifact row is on the same card
                    artifactOffset += EdgeCanvas_1.CARD_OFFSET;
                }
                else {
                    // Next artifact row is on the next card
                    artifactOffset += LineageCss_1.CARD_ROW_HEIGHT + EdgeCanvas_1.CARD_OFFSET;
                }
                artifactCardIndex = newArtifactIndex;
            });
            executionCardIndex++;
        });
        return edgeCanvases;
    };
    return LineageCardColumn;
}(react_1.default.Component));
exports.LineageCardColumn = LineageCardColumn;
//# sourceMappingURL=LineageCardColumn.js.map