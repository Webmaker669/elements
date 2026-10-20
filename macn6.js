elements.little_boy_bomb = {
  color: "#002D04",
  behavior: behaviors.POWDER, 
  state: "powder",
  category: "weapons",
  tick: function(pixel) {
    let belowX = pixel.x;
    let belowY = pixel.y + 1;
    
    if (isEmpty(belowX, belowY, true)) {
      pixel.wasFalling = true; 
    } else {
      if (pixel.wasFalling === true) {
        changePixel(pixel, "flash");
      }
    }
  }
};
