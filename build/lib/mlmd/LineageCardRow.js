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
var react_router_dom_1 = require("react-router-dom");
var typestyle_1 = require("typestyle");
var Utils_1 = require("./Utils");
typestyle_1.cssRaw("\n.cardRow {\n  align-items: center;\n  border-bottom: 1px solid var(--grey-200);\n  display: flex;\n  height: 54px;\n  padding: 6px 0px;\n  position: relative;\n}\n\n.cardRow .noRadio {\n  height: 16px;\n  width: 16px;\n}\n\n.cardRow.clickTarget {\n  cursor: pointer;\n}\n\n.cardRow .form-radio-container {\n  position: relative;\n}\n\n.cardRow .form-radio {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: inline-block;\n  position: relative;\n  background-color: #fff;\n  border: 1px solid var(--grey-400);\n  color: var(--blue-500);\n  top: 0px;\n  height: 18px;\n  width: 18px;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n}\n\n.cardRow .form-radio:checked {\n  border: 2px solid var(--blue-500);\n}\n\n.cardRow .form-radio:checked::before {\n  position: absolute;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  content: '';\n  transform: translate(-50%, -50%);\n  padding: 5px;\n  display: block;\n  background: currentColor;\n}\n\n.cardRow .form-radio:hover {\n  background-color: var(--grey-100);\n}\n\n.cardRow .form-radio:checked {\n  background-color: #fff;\n}\n\n.cardRow .form-radio.hover-hint {\n  color: var(--grey-400);\n  left: 0;\n  opacity: 0;\n  position: absolute;\n}\n\n.cardRow.clickTarget:hover .form-radio.hover-hint {\n  opacity: 1;\n}\n\n.cardRow.clickTarget .form-radio.hover-hint:checked::before {\n  background: currentColor;\n}\n\n.cardRow.clickTarget .form-radio.hover-hint:checked {\n  border: 2px solid var(--grey-400);\n}\n\n.cardRow div {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.cardRow div input {\n  margin: 10px 10px 0 20px;\n}\n\n.cardRow .rowTitle {\n  font-size: 12px;\n  font-family: \"PublicSans-SemiBold\";\n  color: var(--grey-900);\n  letter-spacing: 0.2px;\n  line-height: 24px;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.cardRow .rowTitle:hover {\n  text-decoration: underline;\n  color: var(--blue-600);\n  cursor: pointer;\n}\n\n.cardRow .rowDesc {\n  font-size: 11px;\n  color: var(--grey-600);\n  letter-spacing: 0.3px;\n  line-height: 12px;\n}\n.cardRow footer {\n  overflow: hidden;\n}\n.cardRow [class^='edge'] {\n  width: 8px;\n  height: 8px;\n  background-color: var(--grey-700);\n  border-radius: 2px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  cursor: pointer;\n}\n.cardRow .edgeRight {\n  left: 100%;\n}\n\n.cardRow .edgeLeft {\n  left: 0;\n}\n\n.cardRow.lastRow {\n  border-bottom: 0px;\n}\n\n");
var CLICK_TARGET_CSS_NAME = 'clickTarget';
var LineageCardRow = /** @class */ (function (_super) {
    __extends(LineageCardRow, _super);
    function LineageCardRow(props) {
        var _this = _super.call(this, props) || this;
        _this.rowContainerRef = React.createRef();
        _this.handleMouseEnter = function (e) {
            if (!e || !e.target)
                return;
            var element = e.target;
            if (element.className.match(/\browTitle\b/)) {
                _this.showRadioHint(false);
            }
        };
        _this.handleMouseLeave = function (e) {
            if (!e || !e.target)
                return;
            var element = e.target;
            if (element.className.match(/\browTitle\b/)) {
                _this.showRadioHint(true);
            }
        };
        _this.showRadioHint = function (show) {
            if (_this.props.isTarget) {
                return;
            }
            if (!_this.rowContainerRef.current) {
                return;
            }
            var rowContainer = _this.rowContainerRef.current;
            if (show) {
                if (!rowContainer.classList.contains(CLICK_TARGET_CSS_NAME)) {
                    rowContainer.classList.add(CLICK_TARGET_CSS_NAME);
                }
            }
            else {
                if (rowContainer.classList.contains(CLICK_TARGET_CSS_NAME)) {
                    rowContainer.classList.remove(CLICK_TARGET_CSS_NAME);
                }
            }
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    LineageCardRow.prototype.checkEdgeAffordances = function () {
        var affItems = [];
        this.props.leftAffordance && affItems.push(React.createElement("div", { className: 'edgeLeft', key: 'edgeLeft' }));
        this.props.rightAffordance && affItems.push(React.createElement("div", { className: 'edgeRight', key: 'edgeRight' }));
        return affItems;
    };
    LineageCardRow.prototype.render = function () {
        var _a = this.props, isLastRow = _a.isLastRow, isTarget = _a.isTarget, type = _a.type;
        var canTarget = !isTarget && type === 'artifact';
        var cardRowClasses = typestyle_1.classes('cardRow', isLastRow && 'lastRow', canTarget && 'clickTarget');
        return (React.createElement("div", { className: cardRowClasses, ref: this.rowContainerRef, onClick: this.handleClick },
            this.checkRadio(),
            React.createElement("footer", null,
                React.createElement(react_router_dom_1.Link, { className: 'rowTitle', to: this.props.resourceDetailsRoute, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, Utils_1.getResourceName(this.props.resource)),
                React.createElement("p", { className: 'rowDesc' }, Utils_1.getResourceDescription(this.props.resource))),
            this.checkEdgeAffordances()));
    };
    LineageCardRow.prototype.checkRadio = function () {
        if (this.props.hideRadio) {
            return React.createElement("div", { className: 'noRadio' });
        }
        return (React.createElement("div", { className: 'form-radio-container' },
            React.createElement("input", { type: 'radio', className: 'form-radio', name: '', value: '', onClick: this.handleClick, checked: this.props.isTarget, readOnly: true }),
            React.createElement("input", { type: 'radio', className: 'form-radio hover-hint', name: '', value: '', onClick: this.handleClick, checked: true, readOnly: true })));
    };
    LineageCardRow.prototype.handleClick = function () {
        if (!this.props.setLineageViewTarget || !(this.props.type === 'artifact'))
            return;
        this.props.setLineageViewTarget(this.props.resource);
    };
    return LineageCardRow;
}(React.Component));
exports.LineageCardRow = LineageCardRow;
//# sourceMappingURL=LineageCardRow.js.map