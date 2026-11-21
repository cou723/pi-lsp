#!/usr/bin/env node
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

await build({
  absWorkingDir: packageRoot,
  entryPoints: { index: "src/index.ts" },
  outdir: "dist",
  bundle: true,
  format: "esm",
  platform: "node",
  target: "node22",
  sourcemap: true,
  logLevel: "info",
  external: ["@earendil-works/*", "typebox", "typebox/*"],
  banner: {
    js: 'import { createRequire as __bundleCreateRequire } from "node:module"; const require = __bundleCreateRequire(import.meta.url);',
  },
});
