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
Object.defineProperty(exports, "__esModule", { value: true });
var TestUtils_1 = require("./TestUtils");
var __1 = require("..");
var Utils_1 = require("./Utils");
describe('Utils', function () {
    describe('log', function () {
        it('logs to console', function () {
            // tslint:disable-next-line:no-console
            var backup = console.log;
            global.console.log = jest.fn();
            Utils_1.logger.verbose('something to console');
            // tslint:disable-next-line:no-console
            expect(console.log).toBeCalledWith('something to console');
            global.console.log = backup;
        });
        it('logs to console error', function () {
            // tslint:disable-next-line:no-console
            var backup = console.error;
            global.console.error = jest.fn();
            Utils_1.logger.error('something to console error');
            // tslint:disable-next-line:no-console
            expect(console.error).toBeCalledWith('something to console error');
            global.console.error = backup;
        });
    });
    describe('formatDateString', function () {
        it('handles an ISO format date string', function () {
            var d = new Date(2018, 1, 13, 9, 55);
            expect(Utils_1.formatDateString(d.toISOString())).toBe(d.toLocaleString());
        });
        it('handles a locale format date string', function () {
            var d = new Date(2018, 1, 13, 9, 55);
            expect(Utils_1.formatDateString(d.toLocaleString())).toBe(d.toLocaleString());
        });
        it('handles a date', function () {
            var d = new Date(2018, 1, 13, 9, 55);
            expect(Utils_1.formatDateString(d)).toBe(d.toLocaleString());
        });
        it('handles undefined', function () {
            expect(Utils_1.formatDateString(undefined)).toBe('-');
        });
    });
    describe('titleCase', function () {
        it('Capitalizes the first letter of each word in a sentence', function () {
            expect(Utils_1.titleCase('this is a sentence')).toBe('This Is A Sentence');
        });
        it('Capitalizes the first letter of words seperated by non-word characters', function () {
            expect(Utils_1.titleCase('test-hyphen_underscore.period'))
                .toBe('Test Hyphen Underscore.period');
        });
        it('Returns an empty string when given an empty string', function () {
            expect(Utils_1.titleCase('')).toBe('');
        });
    });
    describe('getResourceProperty', function () {
        it('returns null if resource has no properties', function () {
            expect(Utils_1.getResourceProperty(new __1.Artifact(), 'testPropName')).toBeNull();
        });
        it('returns null if resource has no custom properties', function () {
            expect(Utils_1.getResourceProperty(new __1.Artifact(), 'testCustomPropName', true)).toBeNull();
        });
        it('returns null if resource has no property with the provided name', function () {
            var resource = new __1.Artifact();
            resource.getPropertiesMap().set('somePropName', TestUtils_1.doubleValue(123));
            expect(Utils_1.getResourceProperty(resource, 'testPropName')).toBeNull();
        });
        it('returns if resource has no property with specified name if fromCustomProperties is false', function () {
            var resource = new __1.Artifact();
            resource.getCustomPropertiesMap().set('testCustomPropName', TestUtils_1.doubleValue(123));
            expect(Utils_1.getResourceProperty(resource, 'testCustomPropName', 
            /* fromCustomProperties= */ false)).toBeNull();
        });
        it('returns if resource has no custom property with specified name if fromCustomProperties is true', function () {
            var resource = new __1.Artifact();
            resource.getPropertiesMap().set('testPropName', TestUtils_1.doubleValue(123));
            expect(Utils_1.getResourceProperty(resource, 'testPropName', 
            /* fromCustomProperties= */ true)).toBeNull();
        });
        it('returns the value of the property with the provided name', function () {
            var resource = new __1.Artifact();
            resource.getPropertiesMap().set('testPropName', TestUtils_1.doubleValue(123));
            expect(Utils_1.getResourceProperty(resource, 'testPropName')).toEqual(123);
        });
        it('returns the value of the custom property with the provided name', function () {
            var resource = new __1.Artifact();
            resource.getCustomPropertiesMap().set('testCustomPropName', TestUtils_1.stringValue('abc'));
            expect(Utils_1.getResourceProperty(resource, 'testCustomPropName', 
            /* fromCustomProperties= */ true)).toEqual('abc');
        });
    });
    describe('getMetadataValue', function () {
        it('returns a value of type double', function () {
            expect(Utils_1.getMetadataValue(TestUtils_1.doubleValue(123))).toEqual(123);
        });
        it('returns a value of type int', function () {
            expect(Utils_1.getMetadataValue(TestUtils_1.intValue(123))).toEqual(123);
        });
        it('returns a value of type string', function () {
            expect(Utils_1.getMetadataValue(TestUtils_1.stringValue('abc'))).toEqual('abc');
        });
        it('returns an empty string if Value has no value', function () {
            expect(Utils_1.getMetadataValue(new __1.Value())).toEqual('');
        });
    });
});
//# sourceMappingURL=Utils.test.js.map