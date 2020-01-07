"use strict";
/*
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Css_1 = require("./Css");
var Css = __importStar(require("./Css"));
describe('Css', function () {
    describe('padding', function () {
        it('returns padding units in all directions by default', function () {
            expect(Css_1._paddingInternal()).toEqual({
                paddingBottom: Css_1.spacing.base,
                paddingLeft: Css_1.spacing.base,
                paddingRight: Css_1.spacing.base,
                paddingTop: Css_1.spacing.base,
            });
        });
        it('returns specified padding units in all directions', function () {
            expect(Css_1._paddingInternal(100)).toEqual({
                paddingBottom: 100,
                paddingLeft: 100,
                paddingRight: 100,
                paddingTop: 100,
            });
        });
        it('returns default units in specified directions', function () {
            expect(Css_1._paddingInternal(undefined, 'lr')).toEqual({
                paddingLeft: Css_1.spacing.base,
                paddingRight: Css_1.spacing.base,
            });
        });
        it('calls internal padding with the same arguments', function () {
            var spy = jest.spyOn(Css, 'padding');
            Css.padding(123, 'abcdefg');
            expect(spy).toHaveBeenCalledWith(123, 'abcdefg');
        });
    });
});
//# sourceMappingURL=Css.test.js.map