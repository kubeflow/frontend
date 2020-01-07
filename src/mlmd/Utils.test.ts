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

import {doubleValue, intValue, stringValue} from './TestUtils';
import {Artifact, Value} from "..";
import {formatDateString, getMetadataValue, getResourceProperty, logger, titleCase} from "./Utils";

describe('Utils', () => {
  describe('log', () => {
    it('logs to console', () => {
      // tslint:disable-next-line:no-console
      const backup = console.log;
      global.console.log = jest.fn();
      logger.verbose('something to console');
      // tslint:disable-next-line:no-console
      expect(console.log).toBeCalledWith('something to console');
      global.console.log = backup;
    });

    it('logs to console error', () => {
      // tslint:disable-next-line:no-console
      const backup = console.error;
      global.console.error = jest.fn();
      logger.error('something to console error');
      // tslint:disable-next-line:no-console
      expect(console.error).toBeCalledWith('something to console error');
      global.console.error = backup;
    });
  });

  describe('formatDateString', () => {
    it('handles an ISO format date string', () => {
      const d = new Date(2018, 1, 13, 9, 55);
      expect(formatDateString(d.toISOString())).toBe(d.toLocaleString());
    });

    it('handles a locale format date string', () => {
      const d = new Date(2018, 1, 13, 9, 55);
      expect(formatDateString(d.toLocaleString())).toBe(d.toLocaleString());
    });

    it('handles a date', () => {
      const d = new Date(2018, 1, 13, 9, 55);
      expect(formatDateString(d)).toBe(d.toLocaleString());
    });

    it('handles undefined', () => {
      expect(formatDateString(undefined)).toBe('-');
    });
  });

  describe('titleCase', () => {
    it('Capitalizes the first letter of each word in a sentence', () => {
      expect(titleCase('this is a sentence')).toBe('This Is A Sentence');
    });

    it('Capitalizes the first letter of words seperated by non-word characters',
      () => {
        expect(titleCase('test-hyphen_underscore.period'))
          .toBe('Test Hyphen Underscore.period');
      });

    it('Returns an empty string when given an empty string',
      () => {
        expect(titleCase('')).toBe('');
      });
  });

  describe('getResourceProperty', () => {
    it('returns null if resource has no properties', () => {
      expect(getResourceProperty(new Artifact(), 'testPropName')).toBeNull();
    });

    it('returns null if resource has no custom properties', () => {
      expect(getResourceProperty(new Artifact(), 'testCustomPropName', true)).toBeNull();
    });

    it('returns null if resource has no property with the provided name', () => {
      const resource = new Artifact();
      resource.getPropertiesMap().set('somePropName', doubleValue(123));
      expect(getResourceProperty(resource, 'testPropName')).toBeNull();
    });

    it('returns if resource has no property with specified name if fromCustomProperties is false', () => {
      const resource = new Artifact();
      resource.getCustomPropertiesMap().set('testCustomPropName', doubleValue(123));
      expect(getResourceProperty(
        resource,
        'testCustomPropName',
        /* fromCustomProperties= */ false
      )).toBeNull();
    });

    it('returns if resource has no custom property with specified name if fromCustomProperties is true', () => {
      const resource = new Artifact();
      resource.getPropertiesMap().set('testPropName', doubleValue(123));
      expect(getResourceProperty(
        resource,
        'testPropName',
        /* fromCustomProperties= */ true
      )).toBeNull();
    });

    it('returns the value of the property with the provided name', () => {
      const resource = new Artifact();
      resource.getPropertiesMap().set('testPropName', doubleValue(123));
      expect(getResourceProperty(resource, 'testPropName')).toEqual(123);
    });

    it('returns the value of the custom property with the provided name', () => {
      const resource = new Artifact();
      resource.getCustomPropertiesMap().set('testCustomPropName', stringValue('abc'));
      expect(
          getResourceProperty(
              resource,
              'testCustomPropName',
              /* fromCustomProperties= */ true
          )
      ).toEqual('abc');
    });
  });

  describe('getMetadataValue', () => {
    it('returns a value of type double', () => {
      expect(getMetadataValue(doubleValue(123))).toEqual(123);
    });

    it('returns a value of type int', () => {
      expect(getMetadataValue(intValue(123))).toEqual(123);
    });

    it('returns a value of type string', () => {
      expect(getMetadataValue(stringValue('abc'))).toEqual('abc');
    });

    it('returns an empty string if Value has no value', () => {
      expect(getMetadataValue(new Value())).toEqual('');
    });
  });
});
