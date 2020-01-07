"use strict";
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
// @ts-ignore
var react_svg_line_chart_1 = __importDefault(require("react-svg-line-chart"));
var typestyle_1 = require("typestyle");
var LineageCss_1 = require("./LineageCss");
var LineageCard_1 = require("./LineageCard");
/**
 * Canvas that draws the lines connecting the edges of a list of vertically stacked cards in one
 * <LineageCardColumn /> to the topmost <LineageCard /> in an adjacent <LineageCardColumn />.
 *
 * The adjacent column is assumed to be to right of the connecting cards unless `reverseEdges`
 * is set to true.
 */
exports.EdgeCanvas = function (props) {
    var cards = props.cards, cardWidth = props.cardWidth, edgeWidth = props.edgeWidth, reverseEdges = props.reverseEdges;
    var viewHeight = 1;
    var cardBodyHeight = 66;
    var cardContainerBorders = 2;
    var cardOffset = LineageCss_1.CARD_SPACER_HEIGHT + LineageCard_1.CARD_TITLE_HEIGHT + cardContainerBorders;
    var css = typestyle_1.stylesheet({
        edgeCanvas: {
            border: 0,
            display: 'block',
            marginLeft: LineageCss_1.px(cardWidth),
            marginTop: LineageCss_1.px(LineageCard_1.CARD_TITLE_HEIGHT + cardBodyHeight / 2),
            overflow: 'visible',
            position: 'absolute',
            width: edgeWidth,
            zIndex: -1,
            '$nest': {
                svg: {
                    display: 'block',
                    overflow: 'visible',
                    position: 'absolute',
                }
            }
        },
        edgeCanvasReverse: {
            marginLeft: 0,
            transform: 'translateX(-100%)',
        },
    });
    var lastNode = reverseEdges ? 'y1' : 'y4';
    var lastNodePositions = {
        y1: 0,
        y4: 0,
    };
    var edgeLines = [];
    cards.forEach(function (card, i) {
        card.elements.forEach(function (element, j) {
            if (!element.next) {
                return;
            }
            var y1 = lastNodePositions.y1, y4 = lastNodePositions.y4;
            edgeLines.push(React.createElement(react_svg_line_chart_1.default, { key: i + "-" + j, data: [
                    { x: 0, y: y1 },
                    { x: 30, y: y1 },
                    { x: edgeWidth - 30, y: y4 },
                    { x: edgeWidth, y: y4 },
                ], areaVisible: false, axisVisible: false, gridVisible: false, labelsVisible: false, pathColor: '#BDC1C6', pathVisible: true, pathWidth: 1, pathOpacity: 1, pointsVisible: false, viewBoxHeight: viewHeight, viewBoxWidth: edgeWidth, pathSmoothing: 0 }));
            viewHeight += cardBodyHeight;
            lastNodePositions[lastNode] += cardBodyHeight;
        });
        viewHeight += cardOffset;
        lastNodePositions[lastNode] += cardOffset;
    });
    var edgeCanvasClasses = typestyle_1.classes(css.edgeCanvas, reverseEdges ? css.edgeCanvasReverse : '');
    return React.createElement("div", { className: edgeCanvasClasses }, edgeLines);
};
//# sourceMappingURL=EdgeCanvas.js.map