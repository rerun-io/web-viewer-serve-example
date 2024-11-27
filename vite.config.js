import wasm from "vite-plugin-wasm";
import { searchForWorkspaceRoot } from "vite";
import fs from "node:fs";
import path from "node:path";

const reloadOnSave = {
  name: "full-reload-always",
  handleHotUpdate({ server }) {
    // by default, vite uses hmr which doesn't work well with imperative handles
    server.ws.send({ type: "full-reload" });
    return [];
  },
};

/** @type {import("vite").UserConfig} */
const config = {
  plugins: [wasm(), reloadOnSave],
  optimizeDeps: {
    exclude: process.env.NODE_ENV === "production" ? [] : ["@rerun-io/web-viewer"],
  },
  build: {
    target: "esnext",
  },
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        // NOTE: hack to allow `new URL("file://...")` in `web-viewer` when it is a linked package
        fs.realpathSync(path.join(__dirname, "node_modules", "@rerun-io/web-viewer")),
      ],
    },
  },
};

if ("REPOSITORY" in process.env) {
  config.base = `/${process.env.REPOSITORY}/`;
}

export default config;
