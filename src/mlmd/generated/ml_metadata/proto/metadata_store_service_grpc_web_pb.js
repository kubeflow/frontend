/**
 * @fileoverview gRPC-Web generated client stub for ml_metadata
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var ml_metadata_proto_metadata_store_pb = require('../../ml_metadata/proto/metadata_store_pb.js')
const proto = {};
proto.ml_metadata = require('./metadata_store_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ml_metadata.MetadataStoreServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ml_metadata.MetadataStoreServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutArtifactsRequest,
 *   !proto.ml_metadata.PutArtifactsResponse>}
 */
const methodInfo_MetadataStoreService_PutArtifacts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutArtifactsResponse,
  /** @param {!proto.ml_metadata.PutArtifactsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutArtifactsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutArtifactsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutArtifactsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutArtifactsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putArtifacts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutArtifacts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutArtifacts,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutArtifactsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutArtifactsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putArtifacts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutArtifacts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutArtifacts);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutArtifactTypeRequest,
 *   !proto.ml_metadata.PutArtifactTypeResponse>}
 */
const methodInfo_MetadataStoreService_PutArtifactType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutArtifactTypeResponse,
  /** @param {!proto.ml_metadata.PutArtifactTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutArtifactTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutArtifactTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutArtifactTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutArtifactTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putArtifactType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutArtifactType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutArtifactType,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutArtifactTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutArtifactTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putArtifactType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutArtifactType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutArtifactType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutExecutionsRequest,
 *   !proto.ml_metadata.PutExecutionsResponse>}
 */
const methodInfo_MetadataStoreService_PutExecutions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutExecutionsResponse,
  /** @param {!proto.ml_metadata.PutExecutionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutExecutionsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutExecutionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutExecutionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutExecutionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putExecutions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutExecutions',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutExecutions,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutExecutionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutExecutionsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putExecutions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutExecutions',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutExecutions);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutExecutionTypeRequest,
 *   !proto.ml_metadata.PutExecutionTypeResponse>}
 */
const methodInfo_MetadataStoreService_PutExecutionType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutExecutionTypeResponse,
  /** @param {!proto.ml_metadata.PutExecutionTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutExecutionTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutExecutionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutExecutionTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutExecutionTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putExecutionType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutExecutionType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutExecutionType,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutExecutionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutExecutionTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putExecutionType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutExecutionType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutExecutionType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutEventsRequest,
 *   !proto.ml_metadata.PutEventsResponse>}
 */
const methodInfo_MetadataStoreService_PutEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutEventsResponse,
  /** @param {!proto.ml_metadata.PutEventsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutEventsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutEvents',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutEvents,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutEventsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutEvents',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutEvents);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutExecutionRequest,
 *   !proto.ml_metadata.PutExecutionResponse>}
 */
const methodInfo_MetadataStoreService_PutExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutExecutionResponse,
  /** @param {!proto.ml_metadata.PutExecutionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutExecutionResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutExecutionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutExecutionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutExecution',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutExecution,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutExecutionResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutExecution',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutExecution);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutTypesRequest,
 *   !proto.ml_metadata.PutTypesResponse>}
 */
const methodInfo_MetadataStoreService_PutTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutTypesResponse,
  /** @param {!proto.ml_metadata.PutTypesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutTypesResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutTypes,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutTypesResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutTypes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutContextTypeRequest,
 *   !proto.ml_metadata.PutContextTypeResponse>}
 */
const methodInfo_MetadataStoreService_PutContextType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutContextTypeResponse,
  /** @param {!proto.ml_metadata.PutContextTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutContextTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutContextTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutContextTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutContextTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putContextType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutContextType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutContextType,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutContextTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutContextTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putContextType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutContextType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutContextType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutContextsRequest,
 *   !proto.ml_metadata.PutContextsResponse>}
 */
const methodInfo_MetadataStoreService_PutContexts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutContextsResponse,
  /** @param {!proto.ml_metadata.PutContextsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutContextsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putContexts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutContexts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutContexts,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutContextsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putContexts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutContexts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutContexts);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutAttributionsAndAssociationsRequest,
 *   !proto.ml_metadata.PutAttributionsAndAssociationsResponse>}
 */
const methodInfo_MetadataStoreService_PutAttributionsAndAssociations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutAttributionsAndAssociationsResponse,
  /** @param {!proto.ml_metadata.PutAttributionsAndAssociationsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutAttributionsAndAssociationsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutAttributionsAndAssociationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutAttributionsAndAssociationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutAttributionsAndAssociationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putAttributionsAndAssociations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutAttributionsAndAssociations',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutAttributionsAndAssociations,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutAttributionsAndAssociationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutAttributionsAndAssociationsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putAttributionsAndAssociations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutAttributionsAndAssociations',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutAttributionsAndAssociations);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.PutParentContextsRequest,
 *   !proto.ml_metadata.PutParentContextsResponse>}
 */
const methodInfo_MetadataStoreService_PutParentContexts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.PutParentContextsResponse,
  /** @param {!proto.ml_metadata.PutParentContextsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.PutParentContextsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.PutParentContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.PutParentContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.PutParentContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.putParentContexts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutParentContexts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutParentContexts,
      callback);
};


/**
 * @param {!proto.ml_metadata.PutParentContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.PutParentContextsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.putParentContexts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/PutParentContexts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_PutParentContexts);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactTypeRequest,
 *   !proto.ml_metadata.GetArtifactTypeResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactTypeResponse,
  /** @param {!proto.ml_metadata.GetArtifactTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactType,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactTypesByIDRequest,
 *   !proto.ml_metadata.GetArtifactTypesByIDResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactTypesByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactTypesByIDResponse,
  /** @param {!proto.ml_metadata.GetArtifactTypesByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactTypesByIDResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactTypesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactTypesByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactTypesByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactTypesByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactTypesByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactTypesByID,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactTypesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactTypesByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactTypesByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactTypesByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactTypesByID);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactTypesRequest,
 *   !proto.ml_metadata.GetArtifactTypesResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactTypesResponse,
  /** @param {!proto.ml_metadata.GetArtifactTypesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactTypesResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactTypes,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactTypesResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactTypes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionTypeRequest,
 *   !proto.ml_metadata.GetExecutionTypeResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutionType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionTypeResponse,
  /** @param {!proto.ml_metadata.GetExecutionTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutionType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionType,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutionType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionTypesByIDRequest,
 *   !proto.ml_metadata.GetExecutionTypesByIDResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutionTypesByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionTypesByIDResponse,
  /** @param {!proto.ml_metadata.GetExecutionTypesByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionTypesByIDResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionTypesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionTypesByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionTypesByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutionTypesByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionTypesByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionTypesByID,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionTypesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionTypesByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutionTypesByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionTypesByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionTypesByID);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionTypesRequest,
 *   !proto.ml_metadata.GetExecutionTypesResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutionTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionTypesResponse,
  /** @param {!proto.ml_metadata.GetExecutionTypesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionTypesResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutionTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionTypes,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionTypesResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutionTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionTypes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextTypeRequest,
 *   !proto.ml_metadata.GetContextTypeResponse>}
 */
const methodInfo_MetadataStoreService_GetContextType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextTypeResponse,
  /** @param {!proto.ml_metadata.GetContextTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextType,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextTypesByIDRequest,
 *   !proto.ml_metadata.GetContextTypesByIDResponse>}
 */
const methodInfo_MetadataStoreService_GetContextTypesByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextTypesByIDResponse,
  /** @param {!proto.ml_metadata.GetContextTypesByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextTypesByIDResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextTypesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextTypesByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextTypesByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextTypesByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextTypesByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextTypesByID,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextTypesByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextTypesByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextTypesByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextTypesByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextTypesByID);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextTypesRequest,
 *   !proto.ml_metadata.GetContextTypesResponse>}
 */
const methodInfo_MetadataStoreService_GetContextTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextTypesResponse,
  /** @param {!proto.ml_metadata.GetContextTypesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextTypesResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextTypes,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextTypesResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextTypes',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextTypes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactsRequest,
 *   !proto.ml_metadata.GetArtifactsResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifacts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactsResponse,
  /** @param {!proto.ml_metadata.GetArtifactsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifacts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifacts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifacts,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifacts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifacts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifacts);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionsRequest,
 *   !proto.ml_metadata.GetExecutionsResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionsResponse,
  /** @param {!proto.ml_metadata.GetExecutionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutions',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutions,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutions',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutions);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextsRequest,
 *   !proto.ml_metadata.GetContextsResponse>}
 */
const methodInfo_MetadataStoreService_GetContexts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextsResponse,
  /** @param {!proto.ml_metadata.GetContextsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContexts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContexts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContexts,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContexts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContexts',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContexts);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactsByIDRequest,
 *   !proto.ml_metadata.GetArtifactsByIDResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactsByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactsByIDResponse,
  /** @param {!proto.ml_metadata.GetArtifactsByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactsByIDResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactsByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactsByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactsByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByID,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactsByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactsByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByID);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionsByIDRequest,
 *   !proto.ml_metadata.GetExecutionsByIDResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutionsByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionsByIDResponse,
  /** @param {!proto.ml_metadata.GetExecutionsByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionsByIDResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionsByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionsByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutionsByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionsByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionsByID,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionsByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutionsByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionsByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionsByID);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextsByIDRequest,
 *   !proto.ml_metadata.GetContextsByIDResponse>}
 */
const methodInfo_MetadataStoreService_GetContextsByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextsByIDResponse,
  /** @param {!proto.ml_metadata.GetContextsByIDRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextsByIDResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextsByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextsByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextsByID =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByID,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextsByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextsByID =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByID',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByID);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactsByTypeRequest,
 *   !proto.ml_metadata.GetArtifactsByTypeResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactsByType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactsByTypeResponse,
  /** @param {!proto.ml_metadata.GetArtifactsByTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactsByTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactsByTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactsByTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactsByType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByType,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactsByTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactsByType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionsByTypeRequest,
 *   !proto.ml_metadata.GetExecutionsByTypeResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutionsByType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionsByTypeResponse,
  /** @param {!proto.ml_metadata.GetExecutionsByTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionsByTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionsByTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionsByTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutionsByType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionsByType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionsByType,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionsByTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutionsByType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionsByType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionsByType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextsByTypeRequest,
 *   !proto.ml_metadata.GetContextsByTypeResponse>}
 */
const methodInfo_MetadataStoreService_GetContextsByType = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextsByTypeResponse,
  /** @param {!proto.ml_metadata.GetContextsByTypeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextsByTypeResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextsByTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextsByTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextsByType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByType,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextsByTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextsByType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByType',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByType);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextByTypeAndNameRequest,
 *   !proto.ml_metadata.GetContextByTypeAndNameResponse>}
 */
const methodInfo_MetadataStoreService_GetContextByTypeAndName = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextByTypeAndNameResponse,
  /** @param {!proto.ml_metadata.GetContextByTypeAndNameRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextByTypeAndNameResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextByTypeAndNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextByTypeAndNameResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextByTypeAndNameResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextByTypeAndName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextByTypeAndName',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextByTypeAndName,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextByTypeAndNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextByTypeAndNameResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextByTypeAndName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextByTypeAndName',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextByTypeAndName);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactsByURIRequest,
 *   !proto.ml_metadata.GetArtifactsByURIResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactsByURI = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactsByURIResponse,
  /** @param {!proto.ml_metadata.GetArtifactsByURIRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactsByURIResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactsByURIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactsByURIResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactsByURIResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactsByURI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByURI',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByURI,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactsByURIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactsByURIResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactsByURI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByURI',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByURI);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetEventsByExecutionIDsRequest,
 *   !proto.ml_metadata.GetEventsByExecutionIDsResponse>}
 */
const methodInfo_MetadataStoreService_GetEventsByExecutionIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetEventsByExecutionIDsResponse,
  /** @param {!proto.ml_metadata.GetEventsByExecutionIDsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetEventsByExecutionIDsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetEventsByExecutionIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetEventsByExecutionIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetEventsByExecutionIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getEventsByExecutionIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetEventsByExecutionIDs',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetEventsByExecutionIDs,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetEventsByExecutionIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetEventsByExecutionIDsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getEventsByExecutionIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetEventsByExecutionIDs',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetEventsByExecutionIDs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetEventsByArtifactIDsRequest,
 *   !proto.ml_metadata.GetEventsByArtifactIDsResponse>}
 */
const methodInfo_MetadataStoreService_GetEventsByArtifactIDs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetEventsByArtifactIDsResponse,
  /** @param {!proto.ml_metadata.GetEventsByArtifactIDsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetEventsByArtifactIDsResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetEventsByArtifactIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetEventsByArtifactIDsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetEventsByArtifactIDsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getEventsByArtifactIDs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetEventsByArtifactIDs',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetEventsByArtifactIDs,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetEventsByArtifactIDsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetEventsByArtifactIDsResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getEventsByArtifactIDs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetEventsByArtifactIDs',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetEventsByArtifactIDs);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextsByArtifactRequest,
 *   !proto.ml_metadata.GetContextsByArtifactResponse>}
 */
const methodInfo_MetadataStoreService_GetContextsByArtifact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextsByArtifactResponse,
  /** @param {!proto.ml_metadata.GetContextsByArtifactRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextsByArtifactResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextsByArtifactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextsByArtifactResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextsByArtifactResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextsByArtifact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByArtifact',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByArtifact,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextsByArtifactRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextsByArtifactResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextsByArtifact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByArtifact',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByArtifact);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetContextsByExecutionRequest,
 *   !proto.ml_metadata.GetContextsByExecutionResponse>}
 */
const methodInfo_MetadataStoreService_GetContextsByExecution = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetContextsByExecutionResponse,
  /** @param {!proto.ml_metadata.GetContextsByExecutionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetContextsByExecutionResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetContextsByExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetContextsByExecutionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetContextsByExecutionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getContextsByExecution =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByExecution',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByExecution,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetContextsByExecutionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetContextsByExecutionResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getContextsByExecution =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetContextsByExecution',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetContextsByExecution);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetParentContextsByContextRequest,
 *   !proto.ml_metadata.GetParentContextsByContextResponse>}
 */
const methodInfo_MetadataStoreService_GetParentContextsByContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetParentContextsByContextResponse,
  /** @param {!proto.ml_metadata.GetParentContextsByContextRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetParentContextsByContextResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetParentContextsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetParentContextsByContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetParentContextsByContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getParentContextsByContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetParentContextsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetParentContextsByContext,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetParentContextsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetParentContextsByContextResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getParentContextsByContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetParentContextsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetParentContextsByContext);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetChildrenContextsByContextRequest,
 *   !proto.ml_metadata.GetChildrenContextsByContextResponse>}
 */
const methodInfo_MetadataStoreService_GetChildrenContextsByContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetChildrenContextsByContextResponse,
  /** @param {!proto.ml_metadata.GetChildrenContextsByContextRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetChildrenContextsByContextResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetChildrenContextsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetChildrenContextsByContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetChildrenContextsByContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getChildrenContextsByContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetChildrenContextsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetChildrenContextsByContext,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetChildrenContextsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetChildrenContextsByContextResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getChildrenContextsByContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetChildrenContextsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetChildrenContextsByContext);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetArtifactsByContextRequest,
 *   !proto.ml_metadata.GetArtifactsByContextResponse>}
 */
const methodInfo_MetadataStoreService_GetArtifactsByContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetArtifactsByContextResponse,
  /** @param {!proto.ml_metadata.GetArtifactsByContextRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetArtifactsByContextResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetArtifactsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetArtifactsByContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetArtifactsByContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getArtifactsByContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByContext,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetArtifactsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetArtifactsByContextResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getArtifactsByContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetArtifactsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetArtifactsByContext);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ml_metadata.GetExecutionsByContextRequest,
 *   !proto.ml_metadata.GetExecutionsByContextResponse>}
 */
const methodInfo_MetadataStoreService_GetExecutionsByContext = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ml_metadata.GetExecutionsByContextResponse,
  /** @param {!proto.ml_metadata.GetExecutionsByContextRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ml_metadata.GetExecutionsByContextResponse.deserializeBinary
);


/**
 * @param {!proto.ml_metadata.GetExecutionsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ml_metadata.GetExecutionsByContextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ml_metadata.GetExecutionsByContextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ml_metadata.MetadataStoreServiceClient.prototype.getExecutionsByContext =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionsByContext,
      callback);
};


/**
 * @param {!proto.ml_metadata.GetExecutionsByContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ml_metadata.GetExecutionsByContextResponse>}
 *     A native promise that resolves to the response
 */
proto.ml_metadata.MetadataStoreServicePromiseClient.prototype.getExecutionsByContext =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ml_metadata.MetadataStoreService/GetExecutionsByContext',
      request,
      metadata || {},
      methodInfo_MetadataStoreService_GetExecutionsByContext);
};


module.exports = proto.ml_metadata;

