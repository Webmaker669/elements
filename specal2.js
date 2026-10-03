// Run after the game has loaded so updateStats exists
runAfterLoad(function() {
  const originalUpdateStats = updateStats;

  updateStats = function() {
    originalUpdateStats.apply(this, arguments);

    const pixel = getPixel(mousePos.x, mousePos.y);
    if (!pixel || pixel.pressure === undefined) return;

    const statsDiv = document.getElementById("stats");
    if (!statsDiv) return;

    const span = document.createElement("span");
    span.className = "stat";
    span.id = "stat-pressure";
    span.textContent = "Pres:" + Math.round(pixel.pressure);

    // Put it right after the temperature stat if present, otherwise at the end
    const tempStat = document.getElementById("stat-temp");
    if (tempStat && tempStat.parentNode === statsDiv) {
      tempStat.after(span);
    } else {
      statsDiv.appendChild(span);
    }
  };
});
