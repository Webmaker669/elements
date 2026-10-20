elements.bot = {
  color: "#ffffff",
  behavior: behaviors.WALL,
  category: "life",
  state: "powder",
  
  // This runs once automatically when the pixel is first placed/spawned
  onSelect: function(pixel) {
    console.log("Bot placed at:", pixel.x, pixel.y);
  },

  // This runs every time the user clicks on this specific pixel
  click: function(pixel) {
    console.log("Bot was clicked!");
    // Example: change color when clicked to show it registered
    pixel.color = "#00ff00";
  },

  // This runs every frame (tick)
  tick: function(pixel) {
    // Add your movement logic here
    // For example, checking surroundings or moving randomly
  }
};
