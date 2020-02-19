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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var typestyle_1 = require("typestyle");
var LineageCss_1 = require("./LineageCss");
var EdgeLine_1 = require("./EdgeLine");
exports.CARD_OFFSET = LineageCss_1.CARD_SPACER_HEIGHT + LineageCss_1.CARD_TITLE_HEIGHT + LineageCss_1.CARD_CONTAINER_BORDERS;
exports.edgeCanvasCss = function (left, top, width) {
    return typestyle_1.stylesheet({
        edgeCanvas: {
            border: 0,
            display: 'block',
            left: left,
            transition: 'transform .25s',
            overflow: 'visible',
            position: 'absolute',
            top: LineageCss_1.px(top),
            width: width,
            zIndex: -1,
            $nest: {
                '&.edgeCanvasReverse': {
                    left: 0,
                    transform: 'translateX(-100%)',
                },
                svg: {
                    display: 'block',
                    overflow: 'visible',
                    position: 'absolute',
                },
            },
        },
    });
};
/**
 * Canvas that draws the lines connecting the edges of a list of vertically stacked cards in one
 * <LineageCardColumn /> to the topmost <LineageCard /> in an adjacent <LineageCardColumn />.
 *
 * The adjacent column is assumed to be to right of the connecting cards unless `reverseEdges`
 * is set to true.
 */
var EdgeCanvas = /** @class */ (function (_super) {
    __extends(EdgeCanvas, _super);
    function EdgeCanvas(props) {
        return _super.call(this, props) || this;
    }
    EdgeCanvas.prototype.render = function () {
        var _a = this.props, cards = _a.cards, reverseEdges = _a.reverseEdges, edgeWidth = _a.edgeWidth;
        var viewHeight = 1;
        var lastNode = reverseEdges ? 'y1' : 'y4';
        var lastNodePositions = { y1: 0, y4: 0 };
        var edgeLines = [];
        cards.forEach(function (card, i) {
            card.elements.forEach(function (element, j) {
                if (!element.next) {
                    return;
                }
                edgeLines.push(React.createElement(EdgeLine_1.EdgeLine, { height: viewHeight, width: edgeWidth, y1: lastNodePositions.y1, y4: lastNodePositions.y4 }));
                viewHeight += LineageCss_1.CARD_ROW_HEIGHT;
                lastNodePositions[lastNode] += LineageCss_1.CARD_ROW_HEIGHT;
            });
            viewHeight += exports.CARD_OFFSET;
            lastNodePositions[lastNode] += exports.CARD_OFFSET;
        });
        var css = exports.edgeCanvasCss(
        /* left= */ this.props.cardWidth, 
        /* top= */ LineageCss_1.CARD_TITLE_HEIGHT + LineageCss_1.CARD_ROW_HEIGHT / 2, 
        /* width= */ edgeWidth);
        var edgeCanvasClasses = typestyle_1.classes(css.edgeCanvas, reverseEdges && 'edgeCanvasReverse');
        return React.createElement("div", { className: edgeCanvasClasses }, edgeLines);
    };
    return EdgeCanvas;
}(React.Component));
exports.EdgeCanvas = EdgeCanvas;
//# sourceMappingURL=EdgeCanvas.js.map