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
// How many pixels away from the point the curve should start at.
var HORIZONTAL_CONTROL_POINT_OFFSET = 30;
exports.EdgeLine = function (props) {
    var height = props.height, width = props.width, y1 = props.y1, y4 = props.y4;
    return React.createElement(react_svg_line_chart_1.default, { data: [
            { x: 0, y: y1 },
            { x: HORIZONTAL_CONTROL_POINT_OFFSET, y: y1 },
            { x: width - HORIZONTAL_CONTROL_POINT_OFFSET, y: y4 },
            { x: width, y: y4 },
        ], areaVisible: false, axisVisible: false, gridVisible: false, labelsVisible: false, pathColor: '#BDC1C6', pathVisible: true, pathWidth: 1, pathOpacity: 1, pointsVisible: false, viewBoxHeight: height, viewBoxWidth: width, pathSmoothing: 0 });
};
//# sourceMappingURL=EdgeLine.js.map