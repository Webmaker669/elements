const videos = {};      // id -> { video, canvas, ctx }
let activeVideoId = null;
let videoCounter = 0;

function makeVideo(src) {
  const id = "vid" + (++videoCounter);
  const video = document.createElement("video");
  video.crossOrigin = "anonymous";
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.src = src;
  video.play().catch(() => {});
  videos[id] = { video, canvas: document.createElement("canvas") };
  videos[id].ctx = videos[id].canvas.getContext("2d", { willReadFrequently: true });
  activeVideoId = id;
}

elements.pressure = {
  color: "#50A747",
  category: "tools",
  canPlace: false,

  onSelect: function() {
    promptInput(
      "Enter a direct video URL (.mp4 / .webm), or leave blank to choose a file from your computer.",
      function(r) {
        if (r) {
          makeVideo(r.trim());
        } else {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "video/*";
          input.onchange = function() {
            if (input.files[0]) makeVideo(URL.createObjectURL(input.files[0]));
          };
          input.click();
        }
      },
      "Pressure"
    );
  },

  tool: function(pixel) {
    if (activeVideoId && pixel.element === "screen") {
      pixel.videoSource = activeVideoId;
    }
  },
  desc: "Choose a video, then drag over Screen pixels to play it on them."
};

elements.screen = {
  color: "#FFFFFF",
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL,
  desc: "Plays a video on its pixels when painted with the Pressure tool."
};

let videoErrorShown = false;

runEveryTick(function() {
  // Group screen pixels by video and get each group's bounding box
  const groups = {};
  for (const p of currentPixels) {
    if (p.del || p.element !== "screen" || !p.videoSource) continue;
    const g = groups[p.videoSource] ||
      (groups[p.videoSource] = { x1: p.x, y1: p.y, x2: p.x, y2: p.y, pixels: [] });
    g.x1 = Math.min(g.x1, p.x); g.y1 = Math.min(g.y1, p.y);
    g.x2 = Math.max(g.x2, p.x); g.y2 = Math.max(g.y2, p.y);
    g.pixels.push(p);
  }

  // Clean up videos with no pixels left
  for (const id in videos) {
    if (!groups[id] && id !== activeVideoId) {
      videos[id].video.pause();
      delete videos[id];
    }
  }

  for (const id in groups) {
    const v = videos[id];
    if (!v || v.video.readyState < 2) continue;
    const g = groups[id];
    const w = g.x2 - g.x1 + 1;
    const h = g.y2 - g.y1 + 1;

    if (v.canvas.width !== w || v.canvas.height !== h) {
      v.canvas.width = w;
      v.canvas.height = h;
    }
    v.ctx.drawImage(v.video, 0, 0, w, h);

    let data;
    try {
      data = v.ctx.getImageData(0, 0, w, h).data;
    } catch (e) {
      if (!videoErrorShown) {
        logMessage("This video blocks pixel access (CORS). Pick a local file instead.");
        videoErrorShown = true;
      }
      continue;
    }

    for (const p of g.pixels) {
      const i = ((p.y - g.y1) * w + (p.x - g.x1)) * 4;
      p.color = "rgb(" + data[i] + "," + data[i + 1] + "," + data[i + 2] + ")";
    }
  }
});
