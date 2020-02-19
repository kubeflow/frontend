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
var EdgeCanvas_1 = require("./EdgeCanvas");
var EdgeLine_1 = require("./EdgeLine");
var LineageCss_1 = require("./LineageCss");
exports.CARD_OFFSET = LineageCss_1.CARD_SPACER_HEIGHT + LineageCss_1.CARD_TITLE_HEIGHT + LineageCss_1.CARD_CONTAINER_BORDERS;
/**
 * A version of <EdgeCanvas/> that draws the lines connecting the edges of a list of vertically
 * stacked output artifact cards <LineageCardColumn /> to the many output execution <LineageCard />
 * elements in an adjacent <LineageCardColumn />.
 */
var ControlledEdgeCanvas = /** @class */ (function (_super) {
    __extends(ControlledEdgeCanvas, _super);
    function ControlledEdgeCanvas(props) {
        return _super.call(this, props) || this;
    }
    ControlledEdgeCanvas.prototype.render = function () {
        var _this = this;
        var _a = this.props, reverseEdges = _a.reverseEdges, edgeWidth = _a.edgeWidth;
        var viewHeight = 1;
        var lastNode = reverseEdges ? 'y1' : 'y4';
        var lastNodePositions = { y1: 0, y4: 0 };
        if (this.props.offset) {
            lastNodePositions[lastNode] += this.props.offset;
            viewHeight += this.props.offset;
        }
        var edgeLines = [];
        this.props.artifactIds.forEach(function (artifactId, index) {
            if (index !== 0) {
                var offset = exports.CARD_OFFSET;
                if (_this.props.artifactToCardMap.get(artifactId) !==
                    _this.props.artifactToCardMap.get(artifactId - 1)) {
                    offset += LineageCss_1.CARD_ROW_HEIGHT;
                }
                viewHeight += offset;
                lastNodePositions[lastNode] += offset;
            }
            edgeLines.push(React.createElement(EdgeLine_1.EdgeLine, { height: viewHeight, width: edgeWidth, y1: lastNodePositions.y1, y4: lastNodePositions.y4 }));
        });
        var css = EdgeCanvas_1.edgeCanvasCss(
        /* left= */ this.props.cardWidth, 
        /* top= */ this.props.top + LineageCss_1.CARD_TITLE_HEIGHT + LineageCss_1.CARD_ROW_HEIGHT / 2, 
        /* width= */ edgeWidth);
        var edgeCanvasClasses = typestyle_1.classes(css.edgeCanvas, reverseEdges && 'edgeCanvasReverse');
        return React.createElement("div", { className: edgeCanvasClasses }, edgeLines);
    };
    return ControlledEdgeCanvas;
}(React.Component));
exports.ControlledEdgeCanvas = ControlledEdgeCanvas;
//# sourceMappingURL=ControlledEdgeCanvas.js.map