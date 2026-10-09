tools.url_video = {
  color: "#8B4513",
  desc: "Sets a video URL for screen elements",
  func: function(pixel, x, y) {
    let videoUrl = prompt("Enter the video URL:");
    if (videoUrl) {
      pixel.url = videoUrl;
    }
  }
};

elements.screen = {
  color: ["#8B4513", "#D2691E"],
  category: "solids",
  state: "solid",
  density: 900,
  behavior: behaviors.WALL
};
