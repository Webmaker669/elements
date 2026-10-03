runAfterLoad(function() {
  // 1. Add the span whenever the stats bar is (re)built
  const origInit = initStats;
  initStats = function() {
    const ok = origInit.apply(this, arguments);
    if (!ok || !statEls || !statEls.temperature) return ok;

    const span = document.createElement("span");
    span.id = "stat-pressure";
    span.className = "stat";
    statEls.temperature.after(span);
    statEls.pressure = span;
    return ok;
  };

  // 2. Fill it each update
  const origUpdate = updateStats;
  updateStats = function() {
    origUpdate.apply(this, arguments);
    try {
      if (typeof pixelMap === "undefined") return;
      if (!statEls || !statEls.pressure) return;

      const col = pixelMap[mousePos.x];
      const p = col ? col[mousePos.y] : undefined;
      const has = p !== undefined && !hiding;
      setStat("pressure", has ? "Pres:" + Math.round(p.pressure || 0) : null, has);
    } catch (e) {
      console.error("pressure stat error:", e);
    }
  };
});
