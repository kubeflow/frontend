import {
  ArtifactType,
  Event,
  ExecutionType, formatDateString,
  GetEventsByArtifactIDsRequest,
  GetExecutionTypesRequest,
} from "..";
import {GetArtifactTypesRequest, MetadataStoreServicePromiseClient} from "..";

const EventType = Event.Type;

export type ArtifactTypeMap = Map<number, ArtifactType>;
export type ExecutionTypeMap = Map<number, ExecutionType>;

export async function getArtifactTypes(
  metadataStoreService: MetadataStoreServicePromiseClient,
  errorCallback?: (message: string) => void
): Promise<ArtifactTypeMap> {
  const response =
    await metadataStoreService.getArtifactTypes(new GetArtifactTypesRequest());

  if (!response) {
    if (errorCallback) {
      errorCallback('Unable to retrieve Artifact Types, some features may not work.');
    }
    return new Map();
  }

  const artifactTypesMap = new Map<number, ArtifactType>();

  (response!.getArtifactTypesList() || []).forEach((artifactType: ArtifactType) => {
    artifactTypesMap.set(artifactType.getId()!, artifactType);
  });

  return artifactTypesMap;
}

export async function getExecutionTypes(
  metadataStoreService: MetadataStoreServicePromiseClient,
  errorCallback?: (message: string) => void
): Promise<ExecutionTypeMap> {
  const response =
    await metadataStoreService.getExecutionTypes(new GetExecutionTypesRequest());

  if (!response) {
    if (errorCallback) {
      errorCallback('Unable to retrieve Execution Types, some features may not work.');
    }
    return new Map();
  }

  const executionTypesMap = new Map<number, ExecutionType>();

  (response!.getExecutionTypesList() || []).forEach((executionType: ExecutionType) => {
    executionTypesMap.set(executionType.getId()!, executionType);
  });

  return executionTypesMap;
}

export async function getArtifactCreationTime(
  artifactId: number,
  metadataStoreService: MetadataStoreServicePromiseClient,
  errorCallback?: (message: string) => void
): Promise<string> {
  if (!artifactId) {
    throw new Error('artifactId is empty');
  }

  const eventsRequest = new GetEventsByArtifactIDsRequest();
  eventsRequest.setArtifactIdsList([artifactId]);
  const response =
    await metadataStoreService.getEventsByArtifactIDs(eventsRequest);

  if (!response) {
    if (errorCallback) {
      errorCallback(`Unable to retrieve Events for artifactId: ${artifactId}`);
    }
    return '';
  }

  const data = response.getEventsList().map(event => ({
    time: event.getMillisecondsSinceEpoch(),
    type: event.getType() || EventType.UNKNOWN,
  }));
  // The last output event is the event that produced current artifact.
  const lastOutputEvent = data
    .reverse()
    .find(event => event.type === EventType.DECLARED_OUTPUT || event.type === EventType.OUTPUT);
  if (lastOutputEvent && lastOutputEvent.time) {
    return formatDateString(new Date(lastOutputEvent.time));
  } else {
    // No valid time found, just return empty
    return '';
  }
}
