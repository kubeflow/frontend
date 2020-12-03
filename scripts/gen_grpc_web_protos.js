const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');
const replace_protos = require("./replace_protos");

// Replace existing proto files
const default_mlmd_version = "0.25.1";
const mlmd_version = process.argv.slice(2)[0] || default_mlmd_version;
console.log("Ready to replace mlmd files with version: " + mlmd_version);
replace_protos.replace_proto_files(mlmd_version);

// TODO: Build process should remove the existing generated proto definitions.
const OUT_DIR = path.join(__dirname, '..', 'src', 'mlmd', 'generated');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, {
    recursive: true
  });
}
console.log(`Generating PROTOS in: ${OUT_DIR}`);

// Expects protoc to be on your PATH.
// From npm/google-protobuf:
// The compiler is not currently available via npm, but you can download a
// pre-built binary on GitHub (look for the protoc-*.zip files under Downloads).
const protocProcess = spawn(
    'protoc', [
      `--js_out="import_style=commonjs,binary:${OUT_DIR}"`,
      `--grpc-web_out="import_style=commonjs+dts,mode=grpcweb:${OUT_DIR}"`,
      `--proto_path="./proto"`,
      'proto/ml_metadata/**/*.proto'
    ], {
      // Allow wildcards in glob to be interpreted
      shell: true
    }
);
protocProcess.stdout.on('data', buffer => console.log(buffer.toString()));
protocProcess.stderr.on('data', buffer => console.error(buffer.toString()));
protocProcess.on('close', code => {
  if (code) return;
  console.log(`Protos succesfully generated.`)
});

