let activeVideoUrl = "";

elements.pressure = {
  color: "#50A747",
  category: "tools",
  
  tool: function(pixel) {
    // Prompt for URL if one isn't set yet
    if (!activeVideoUrl) {
      const inputUrl = prompt("Enter a YouTube Video URL:");
      if (inputUrl && inputUrl.trim() !== "") {
        activeVideoUrl = inputUrl.trim();
      } else {
        return;
      }
    }

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

    pixel.videoSource = activeVideoUrl;
  },
  desc: "Prompts for a YouTube URL on use, then builds pressure on pixels."
};

elements.screen = {
  color: "#FFFFFF",
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL,
  
  tick: function(pixel) {
    if (pixel.videoSource) {
      pixel.color = "#3355FF";
    }
  }
};
