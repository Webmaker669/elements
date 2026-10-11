elements.e_filter = {
  color: "#ff0000",
  behavior: behaviors.WALL,
  category: "machines", 
  state: "solid",
  density: 1000,
  
  click: function(pixel) {
    let inputName = prompt("Enter target element name:", pixel.filterTarget || "sand");
    if (inputName && elements[inputName]) {
      pixel.filterTarget = inputName;
    } else if (inputName) {
      alert("Element does not exist!");
    }
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
