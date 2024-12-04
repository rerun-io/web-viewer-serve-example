# Web Viewer Serve Example

Logging data from a Python SDK to an embedded Rerun Viewer.

This repository contains:
- A vanilla JS Vite app, using the Web Viewer
- A Python script that logs data to the Web Viewer

## Running the example

First, ensure you have [node](https://nodejs.org/en) and [uv](https://docs.astral.sh/uv/) installed.

Run the following commands:

```
$ npm install
$ npm run dev & uv run serve.py
```

Then open `http://localhost:5173` in your browser.
