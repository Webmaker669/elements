// Variable to store the YouTube URL
let activeVideoUrl = "";

elements.pressure = {
  color: "#50A747",
  category: "tools",
  
  // Triggers when the tool is selected/clicked in the UI
  onClick: function() {
    const inputUrl = prompt("Enter a YouTube Video URL:");
    if (inputUrl && inputUrl.trim() !== "") {
      activeVideoUrl = inputUrl.trim();
      alert("YouTube URL set! Apply the tool to screen pixels to load.");
    }
  },

  tool: function(pixel) {
    if (pixel.pressure === undefined || Number.isNaN(pixel.pressure)) {
      pixel.pressure = 0;
    }
    pixel.pressure += 0.1;

    // Apply standard pressure coloring logic
    if (pixel.pressure > 10) {
      pixel.color = pixelColorPick(pixel, "#006400");
    } else if (pixel.pressure > 5) {
      pixel.color = pixelColorPick(pixel, "#50A747");
    } else {
      pixel.color = pixelColorPick(pixel, "#90EE90");
    }

    // Attach the stored video URL directly to the target pixel
    if (activeVideoUrl) {
      pixel.videoSource = activeVideoUrl;
    }
  },
  desc: "Click to set a YouTube URL, then apply to pixels to increase pressure and store video source."
};

elements.screen = {
  color: "#FFFFFF",
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL,
  
  tick: function(pixel) {
    // Check if the screen has an active video source assigned
    if (pixel.videoSource) {
      // You can access pixel.videoSource here to trigger frame sampling or display updates
      pixel.color = "#3355FF"; // Visual indication that the screen is receiving the link
    }
  }
};
