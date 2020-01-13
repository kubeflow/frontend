# kubeflow/frontend

Shared libraries and components used by Kubeflow frontend projects.

## Building && Testing

The `postinstall` step will generate build artifacts in `build/lib`. To manually generate new build
artifacts, run:

```bash
npm run build
```

## Modules

* `common` - miscellaneous shared components.
* `mlmd` - components for visualizing data from an `ml-metadata` store. For more information on
 how to write ML Metadata, see the [kubeflow/metadata](https://github.com/kubeflow/metadata)
 repository. 

## Generated Protocol Buffers

This project contains classes generated from Protocol Buffer message definitions from the
`ml_metadata` proto package. The proto files were taken from an earlier commit hash of the
[google/ml-metadata](https://github.com/google/ml-metadata/tree/master/ml_metadata/proto) protos.

Generated copies are included with `src/` to allow `postinstall` to succeed without a dependency on 
`protoc` being in the system PATH. 

If a file in `proto/` is modified or you need to manually re-generate the protos, you'll need to
add `protoc` to your system's PATH and generate new compiled protos by running:

```bash
npm run build:ml_metadata
```

See [https://github.com/protocolbuffers/protobuf/releases](https://github.com/protocolbuffers/protobuf/releases)
for a pre-built binary of `protoc`.
