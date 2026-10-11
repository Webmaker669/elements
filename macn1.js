elements.e_filter = {
  color: "#ff0000",
  behavior: behaviors.WALL,
  category: "machines", 
  state: "solid",
  density: 1000,
  onCreate: function(pixel) {
    pixel.filterTarget = currentElement || "sand";
  },

  tick: function(pixel) {
    if (!pixel.filterTarget) {
      pixel.filterTarget = "sand";
    }

    if (pixelMap[pixel.x] && pixelMap[pixel.x][pixel.y - 1]) {
      let abovePixel = pixelMap[pixel.x][pixel.y - 1];
      if (abovePixel.element === pixel.filterTarget) {
        changePixel(abovePixel, "gold");
      }
    }
  }
};

