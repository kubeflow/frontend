// NOTE: This is a workaround to allow types to be re-exported while still using create-react-app's
// toolchain, which uses babel under the hood. See:
// https://github.com/facebook/create-react-app/issues/6054
import {ListRequest as ListRequestType} from './common/ListRequest'
import {LineageResource as LineageResourceType} from './mlmd/LineageTypes'

export type LineageResource = LineageResourceType
export type ListRequest = ListRequestType

export {
  Artifact,
  ArtifactType,
  Context,
  ContextType,
  Event,
  Execution,
  ExecutionType,
  Value,
} from './mlmd/generated/ml_metadata/proto/metadata_store_pb';
export {
  MetadataStoreServicePromiseClient
} from './mlmd/generated/ml_metadata/proto/metadata_store_service_grpc_web_pb';
export {
  GetArtifactTypesRequest,
  GetArtifactTypesResponse,
  GetArtifactsByIDRequest,
  GetArtifactsByIDResponse,
  GetArtifactsRequest,
  GetArtifactsResponse,
  GetContextByTypeAndNameRequest,
  GetContextByTypeAndNameResponse,
  GetContextTypeRequest,
  GetContextTypeResponse,
  GetContextsByTypeRequest,
  GetContextsByTypeResponse,
  GetContextsRequest,
  GetContextsResponse,
  GetEventsByArtifactIDsRequest,
  GetEventsByArtifactIDsResponse,
  GetEventsByExecutionIDsRequest,
  GetEventsByExecutionIDsResponse,
  GetExecutionTypesRequest,
  GetExecutionTypesResponse,
  GetExecutionsByContextRequest,
  GetExecutionsByContextResponse,
  GetExecutionsByIDRequest,
  GetExecutionsByIDResponse,
  GetExecutionsRequest,
  GetExecutionsResponse,
} from './mlmd/generated/ml_metadata/proto/metadata_store_service_pb'
export {
  Api,
  ArtifactCustomProperties,
  ArtifactProperties,
  ExecutionProperties,
  ExecutionCustomProperties,
} from './mlmd/Api'
export {getArtifactTypes, getArtifactCreationTime} from './mlmd/LineageApi'
export {LineageView} from './mlmd/LineageView'
export {
  getMetadataValue,
  getResourceProperty,
  getResourcePropertyViaFallBack,
  getTypeName
} from './mlmd/Utils'
export {logger, formatDateString, titleCase} from './common/Utils'
