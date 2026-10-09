let activeVideoUrl = "";
const videoFrames = {}; // videoSource -> iframe

function getYouTubeId(url) {
  const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : null;
}

elements.pressure = {
  color: "#50A747",
  category: "tools",
  canPlace: false,

  onSelect: function() {
    promptInput("Enter a YouTube Video URL:", function(r) {
      if (!r || !getYouTubeId(r)) {
        logMessage("Invalid YouTube URL.");
        selectElement("unknown");
        return;
      }
      activeVideoUrl = r.trim();
    }, "Pressure", activeVideoUrl);
  },

  tool: function(pixel) {
    if (!activeVideoUrl) return;

    if (pixel.pressure === undefined || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }
    pixel.pressure += 0.1;

    if (pixel.pressure > 10) {
      pixel.color = pixelColorPick(pixel, "#006400");
    } else if (pixel.pressure > 5) {
      pixel.color = pixelColorPick(pixel, "#50A747");
    } else {
      pixel.color = pixelColorPick(pixel, "#90EE90");
    }

    if (pixel.element === "screen") {
      pixel.videoSource = activeVideoUrl;
    }
  },
  desc: "Prompts for a YouTube URL, then assigns it to Screen pixels."
};

elements.screen = {
  color: "#FFFFFF",
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL,
  desc: "Use the Pressure tool on it to play a YouTube video."
};

renderPostPixel(function() {
  // Group screen pixels by video and find each group's bounding box
  const boxes = {};
  for (const p of currentPixels) {
    if (p.del || p.element !== "screen" || !p.videoSource) continue;
    const b = boxes[p.videoSource] ||
      (boxes[p.videoSource] = { x1: p.x, y1: p.y, x2: p.x, y2: p.y });
    b.x1 = Math.min(b.x1, p.x); b.y1 = Math.min(b.y1, p.y);
    b.x2 = Math.max(b.x2, p.x); b.y2 = Math.max(b.y2, p.y);
  }

  // Remove iframes whose screens no longer exist
  for (const src in videoFrames) {
    if (!boxes[src]) {
      videoFrames[src].remove();
      delete videoFrames[src];
    }
  }

  const rect = canvas.getBoundingClientRect();
  const scale = rect.width / canvas.width;

  for (const src in boxes) {
    const id = getYouTubeId(src);
    if (!id) continue;
    let frame = videoFrames[src];
    if (!frame) {
      frame = document.createElement("iframe");
      frame.src = "https://www.youtube.com/embed/" + id +
        "?autoplay=1&mute=1&loop=1&controls=0&playlist=" + id;
      frame.allow = "autoplay; encrypted-media";
      frame.style.cssText = "position:fixed;border:0;pointer-events:none;z-index:5;";
      document.body.appendChild(frame);
      videoFrames[src] = frame;
    }
    const b = boxes[src];
    frame.style.left = (rect.left + b.x1 * pixelSize * scale) + "px";
    frame.style.top = (rect.top + b.y1 * pixelSize * scale) + "px";
    frame.style.width = ((b.x2 - b.x1 + 1) * pixelSize * scale) + "px";
    frame.style.height = ((b.y2 - b.y1 + 1) * pixelSize * scale) + "px";
  }
});
