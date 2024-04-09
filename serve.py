# fmt: off

import time
import numpy as np
import rerun as rr

rr.init("rerun_example_embed_web_viewer")
rr.serve(open_browser=False, ws_port=4321)

positions = np.vstack([xyz.ravel() for xyz in np.mgrid[3 * [slice(-10, 10, 10j)]]]).T
colors = np.vstack([rgb.ravel() for rgb in np.mgrid[3 * [slice(0, 255, 10j)]]]).astype(np.uint8).T

rr.log("my_points", rr.Points3D(positions, colors=colors, radii=0.5))

try:
  while True:
    time.sleep(1)
except KeyboardInterrupt:
  print("Ctrl-C received. Exiting.")
