import "./styles.css";

import { WebViewer } from "@rerun-io/web-viewer";

const rrdUrl = "ws://localhost:4321";
const parentElement = document.getElementById("app");

const viewer = new WebViewer();
await viewer.start(rrdUrl, parentElement, {
  width: "100%",
  height: "100%",
});

