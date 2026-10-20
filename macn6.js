elements.little_boy_bomb = {
  color: "#002D04",
  behavior: behaviors.POWDER, 
  state: "powder",
  category: "weapons",
  tick: function(pixel) {
    let belowX = pixel.x;
    let belowY = pixel.y + 1;
    
    if (pixel.hasSpawned === undefined) {
      pixel.hasSpawned = true;
      return; // Skip the first frame detonation check
    }

    if (!isEmpty(belowX, belowY, true)) {
      explodeAt(pixel.x, pixel.y, 20); 
    }
  }
};
