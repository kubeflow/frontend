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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
// @ts-ignore
var react_svg_line_chart_1 = __importDefault(require("react-svg-line-chart"));
var typestyle_1 = require("typestyle");
var LineageCss_1 = require("./LineageCss");
var LineageCard_1 = require("./LineageCard");
var react_dom_1 = require("react-dom");
var Utils_1 = require("./Utils");
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
        var _this = _super.call(this, props) || this;
        _this.state = {
            edgeGap: -1,
            parentWidth: -1,
        };
        return _this;
    }
    EdgeCanvas.prototype.render = function () {
        var _a = this.props, cards = _a.cards, columnPadding = _a.columnPadding, reverseEdges = _a.reverseEdges;
        var viewHeight = 1;
        var cardBodyHeight = 67;
        var cardContainerBorders = 2;
        var cardOffset = LineageCss_1.CARD_SPACER_HEIGHT + LineageCard_1.CARD_TITLE_HEIGHT + cardContainerBorders;
        var _b = this.state, edgeGap = _b.edgeGap, parentWidth = _b.parentWidth;
        var viewWidth = Math.max(edgeGap, 0) + 2 * columnPadding;
        var css = typestyle_1.stylesheet({
            edgeCanvas: {
                border: 0,
                display: 'block',
                left: parentWidth - edgeGap,
                top: LineageCss_1.px(LineageCard_1.CARD_TITLE_HEIGHT + cardBodyHeight / 2),
                overflow: 'visible',
                position: 'absolute',
                width: viewWidth,
                zIndex: -1,
                transition: 'transform .25s',
                $nest: {
                    svg: {
                        display: 'block',
                        overflow: 'visible',
                        position: 'absolute',
                    },
                    '&.edgeCanvasReverse': {
                        left: 0,
                        transform: 'translateX(-100%)',
                    },
                },
            },
        });
        var lastNode = reverseEdges ? 'y1' : 'y4';
        var lastNodePositions = { y1: 0, y4: 0 };
        var edgeLines = [];
        cards.forEach(function (card, i) {
            card.elements.forEach(function (element, j) {
                if (!element.next)
                    return;
                var y1 = lastNodePositions.y1, y4 = lastNodePositions.y4;
                edgeLines.push(React.createElement(react_svg_line_chart_1.default, { key: i + "-" + j, data: [
                        { x: 0, y: y1 },
                        { x: 30, y: y1 },
                        { x: viewWidth - 30, y: y4 },
                        { x: viewWidth, y: y4 },
                    ], areaVisible: false, axisVisible: false, gridVisible: false, labelsVisible: false, pathColor: '#BDC1C6', pathVisible: true, pathWidth: 1, pathOpacity: 1, pointsVisible: false, viewBoxHeight: viewHeight, viewBoxWidth: viewWidth, pathSmoothing: 0 }));
                viewHeight += cardBodyHeight;
                lastNodePositions[lastNode] += cardBodyHeight;
            });
            viewHeight += cardOffset;
            lastNodePositions[lastNode] += cardOffset;
        });
        var edgeCanvasClasses = typestyle_1.classes(css.edgeCanvas, reverseEdges && 'edgeCanvasReverse');
        Utils_1.sleep(50).then(this.componentDidMount.bind(this));
        return React.createElement("div", { className: edgeCanvasClasses }, edgeLines);
    };
    EdgeCanvas.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $this, _a, $next, $parent, parentWidth, edgeGap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        $this = react_dom_1.findDOMNode(this);
                        _a = [$this.nextSibling, $this.parentElement], $next = _a[0], $parent = _a[1];
                        if (!$this || !$next)
                            return [2 /*return*/];
                        return [4 /*yield*/, Utils_1.sleep(50)]; // So the browser has time to draw the elements (and have correct clientWidth values)
                    case 1:
                        _b.sent(); // So the browser has time to draw the elements (and have correct clientWidth values)
                        parentWidth = $parent.clientWidth;
                        edgeGap = parentWidth - $next.clientWidth;
                        if (edgeGap === this.state.edgeGap)
                            return [2 /*return*/];
                        this.setState({ edgeGap: edgeGap, parentWidth: parentWidth });
                        return [2 /*return*/];
                }
            });
        });
    };
    return EdgeCanvas;
}(React.Component));
exports.EdgeCanvas = EdgeCanvas;
//# sourceMappingURL=EdgeCanvas.js.map