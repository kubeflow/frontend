/*
 * Copyright 2019 Google LLC
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

import {
  ArtifactCustomProperties,
  ArtifactProperties,
  ExecutionCustomProperties,
  ExecutionProperties,
} from './Api';
import {ArtifactTypeMap} from "./LineageApi";
import {Artifact, Execution, Value} from '..';

const UNNAMED_RESOURCE_DISPLAY_NAME = '(unnamed)';
type RepoTypes = typeof ArtifactCustomProperties | typeof ArtifactProperties | typeof ExecutionCustomProperties | typeof ExecutionProperties

export function getResourceProperty(resource: Artifact | Execution,
    propertyName: string, fromCustomProperties = false): string | number | null {
  const props = fromCustomProperties
      ? resource.getCustomPropertiesMap()
      : resource.getPropertiesMap();

  return (props && props.get(propertyName) && getMetadataValue(props.get(propertyName)))
      || null;
}

export function getResourcePropertyViaFallBack(res: Artifact | Execution,
    fieldRepos: RepoTypes[],
    fields: string[]): string {
    const prop = fields.reduce((value: string, key: string) => {
      const isCustomProp = key in fieldRepos[1];
      const repo = fieldRepos[Number(isCustomProp)];
      return value || getResourceProperty(res, repo[key], isCustomProp)
    }, '') || ''
    return prop as string;
}

function getArtifactName(artifact: Artifact): string {
  const artifactName = getResourceProperty(artifact, ArtifactProperties.NAME) ||
    getResourceProperty(artifact, ArtifactCustomProperties.NAME, true);
  return artifactName ? artifactName.toString() : UNNAMED_RESOURCE_DISPLAY_NAME;
}

function getExecutionName(execution: Execution): string {
  const fields = ['COMPONENT_ID', 'TASK_ID', 'NAME']
  const fieldRepos = [ExecutionProperties, ExecutionCustomProperties]
  return getResourcePropertyViaFallBack(
    execution,
    fieldRepos,
    fields
  ) || UNNAMED_RESOURCE_DISPLAY_NAME
}

export function getResourceName(resource: Artifact | Execution): string {
  if (resource instanceof Artifact) {
    return getArtifactName(resource);
  }
  return getExecutionName(resource);
}

export function getResourceDescription(resource: Artifact | Execution): string {
  let fields: string[], fieldRepos: RepoTypes[];
  if (resource instanceof Artifact) {
    fieldRepos = [ArtifactProperties, ArtifactCustomProperties]
    fields = ['RUN_ID', 'RUN', 'PIPELINE_NAME', 'WORKSPACE']
  } else {
    fieldRepos = [ExecutionProperties, ExecutionCustomProperties]
    fields = ['RUN_ID', 'RUN', 'PIPELINE_NAME', 'WORKSPACE']
  }
  const description = getResourcePropertyViaFallBack(
    resource,
    fieldRepos,
    fields,
  )
  return description;
}

export function getTypeName(typeId: number, artifactTypes: ArtifactTypeMap): string {
  return artifactTypes && artifactTypes.get(typeId!) ?
    artifactTypes.get(typeId!)!.getName() : String(typeId);
}

export function getMetadataValue(value?: Value): string | number {
  if (!value) {
    return '';
  }

  switch (value.getValueCase()) {
    case Value.ValueCase.DOUBLE_VALUE:
      return value.getDoubleValue();
    case Value.ValueCase.INT_VALUE:
      return value.getIntValue();
    case Value.ValueCase.STRING_VALUE:
      return value.getStringValue();
    case Value.ValueCase.VALUE_NOT_SET:
      return '';
  }
}
