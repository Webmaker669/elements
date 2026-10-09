// Register the custom tool to prompt for a URL when clicked
tools.url_video = {
  color: "#8B4513",
  desc: "Sets or inputs a video URL for screen elements.",
  func: function(pixel, x, y) {
    let videoUrl = prompt("Enter the video URL:");
    if (videoUrl) {
      pixel.url = videoUrl;
      console.log("Assigned URL to pixel:", videoUrl);
    }
  }
};

// Register the custom screen element
elements.screen = {
  color: ["#8B4513", "#D2691E"],
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL
};
