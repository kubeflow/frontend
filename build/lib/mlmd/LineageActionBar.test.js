"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var enzyme_1 = require("enzyme");
var LineageActionBar_1 = require("./LineageActionBar");
var TestUtils_1 = require("./TestUtils");
var __1 = require("..");
describe('LineageActionBar', function () {
    var tree;
    var setLineageViewTarget = jest.fn();
    var mountActionBar = function () { return (enzyme_1.mount(React.createElement(LineageActionBar_1.LineageActionBar, { initialTarget: TestUtils_1.testModel, setLineageViewTarget: setLineageViewTarget }))); };
    afterEach(function () {
        tree.unmount();
        setLineageViewTarget.mockReset();
    });
    it('Renders correctly for a given initial target', function () {
        tree = enzyme_1.shallow(React.createElement(LineageActionBar_1.LineageActionBar, { initialTarget: TestUtils_1.testModel, setLineageViewTarget: jest.fn() }));
        expect(tree).toMatchSnapshot();
    });
    it('Does not update the LineageView target when the current breadcrumb is clicked', function () {
        var tree = mountActionBar();
        // There is one disabled button for the initially selected target.
        expect(tree.state('history').length).toBe(1);
        expect(setLineageViewTarget.mock.calls.length).toBe(0);
        tree.find('button').first().simulate('click');
        expect(setLineageViewTarget.mock.calls.length).toBe(0);
        expect(tree.state('history').length).toBe(1);
    });
    it('Updates the LineageView target model when an inactive breadcrumb is clicked', function () {
        var tree = mountActionBar();
        // Add a second artifact to the history state to make the first breadcrumb enabled.
        tree.setState({
            history: [TestUtils_1.testModel, TestUtils_1.buildTestModel()]
        });
        expect(tree.state('history').length).toBe(2);
        tree.update();
        expect(setLineageViewTarget.mock.calls.length).toBe(0);
        tree.find('button').first().simulate('click');
        expect(setLineageViewTarget.mock.calls.length).toBe(1);
        expect(tree).toMatchSnapshot();
    });
    it('Adds the artifact to the history state and DOM when pushHistory() is called', function () {
        var tree = mountActionBar();
        expect(tree.state('history').length).toBe(1);
        tree.instance().pushHistory(new __1.Artifact());
        expect(tree.state('history').length).toBe(2);
        tree.update();
        expect(tree).toMatchSnapshot();
    });
    it('Sets history to the initial prop when the reset button is clicked', function () {
        var tree = mountActionBar();
        expect(tree.state('history').length).toBe(1);
        tree.instance().pushHistory(TestUtils_1.buildTestModel());
        tree.instance().pushHistory(TestUtils_1.buildTestModel());
        expect(tree.state('history').length).toBe(3);
        // Flush state to the DOM
        tree.update();
        var buttonWrappers = tree.find('button');
        expect(buttonWrappers.length).toBe(4);
        // The reset button is the last button on the action bar.
        tree.find('button').last().simulate('click');
        expect(tree.state('history').length).toBe(1);
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=LineageActionBar.test.js.map