elements.screen = {
  color: ["#8B4513", "#D2691E"],
  category: "solids", // Changed from "video" to a standard category like "solids" or "Deco" depending on your API
  state: "solid",
  density: 900,
  behavior: behaviors.WALL // Changed from behaviors.SOLID to a valid built-in behavior type
};

tools.url_video = {
  color: "#8B4513",
  func: function(pixel, x, y) {
    let videoUrl = prompt("Enter the video URL:");
    if (videoUrl) {
      // Store the URL globally or handle it as needed
      window.currentVideoUrl = videoUrl;
      console.log("Saved URL:", videoUrl);
    }
  }
};
