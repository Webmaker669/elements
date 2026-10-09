if (typeof tools !== "undefined" && typeof elements !== "undefined") {
  tools.url_video = {
    color: "#8B4513",
    desc: "Sets a video URL",
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
}
