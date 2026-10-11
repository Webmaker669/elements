elements.e_filter = {
  color: "#ff0000",
  category: "machines",
  click: pixel => pixel.target = prompt("Filter:"),
  tick: pixel => {
    let p = pixelMap[pixel.x]?.[pixel.y - 1];
    if (p?.element === pixel.target) changePixel(p, "gold");
  }
};
