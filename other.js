// Better Color Mixing - Sandboxels mod
// Subtractive (RYB) paint mixing: yellow+blue=green, red+yellow=orange, red+blue=purple.
// Liquids gradually tint each other on contact. Includes paints + Blend/Rinse tools.
(function () {
  const RATE = 0.25;      // how far each pixel moves toward its neighbor per mix (0-0.5)
  const CHANCE = 0.35;    // chance per tick a liquid pixel tries to mix
  const MIN_DIFF = 12;    // skip mixing if colors are already this close (sum of RGB diffs)
  const MAX_TEMP = 400;   // hot liquids (lava etc.) don't mix
  const DIRS4 = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const DIRS8 = DIRS4.concat([[1, 1], [-1, 1], [1, -1], [-1, -1]]);

  function parse(c) {
    if (Array.isArray(c)) c = c[0];
    if (typeof c !== "string") return null;
    if (c[0] === "#") {
      let h = c.slice(1);
      if (h.length === 3) h = h.replace(/./g, "$&$&");
      return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16));
    }
    if (c.startsWith("rgb")) {
      const m = c.match(/[\d.]+/g);
      return m && m.length >= 3 ? [+m[0], +m[1], +m[2]] : null;
    }
    return null;
  }

  function rgb2ryb([r, g, b]) {
    const w = Math.min(r, g, b); r -= w; g -= w; b -= w;
    const mg = Math.max(r, g, b);
    const y0 = Math.min(r, g); r -= y0; g -= y0;
    let y = y0;
    if (b && g) { b /= 2; g /= 2; }
    y += g; b += g;
    const my = Math.max(r, y, b);
    if (my) { const n = mg / my; r *= n; y *= n; b *= n; }
    return [r + w, y + w, b + w];
  }

  function ryb2rgb([r, y, b]) {
    const w = Math.min(r, y, b); r -= w; y -= w; b -= w;
    const my = Math.max(r, y, b);
    let g = Math.min(y, b); y -= g; b -= g;
    if (b && g) { b *= 2; g *= 2; }
    r += y; g += y;
    const mg = Math.max(r, g, b);
    if (mg) { const n = my / mg; r *= n; g *= n; b *= n; }
    return [r + w, g + w, b + w];
  }

  // move color a toward color b by t, in RYB space, preserving brightness
  function blend(a, b, t) {
    const A = rgb2ryb(a), B = rgb2ryb(b);
    const m = [0, 1, 2].map(i => A[i] + (B[i] - A[i]) * t);
    const ma = Math.max(...A), mb = Math.max(...B), cur = Math.max(...m);
    const k = cur ? (ma + (mb - ma) * t) / cur : 1;
    return ryb2rgb(m.map(v => v * k)).map(v => Math.max(0, Math.min(255, Math.round(v))));
  }

  function mixPair(p, q, rate) {
    const a = parse(p.color), b = parse(q.color);
    if (!a || !b) return;
    if (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) < MIN_DIFF) return;
    p.color = "rgb(" + blend(a, b, rate) + ")";
    q.color = "rgb(" + blend(b, a, rate) + ")";
  }

  function mixable(p) {
    const e = elements[p.element];
    return e && e.state === "liquid" && !e.noColorMix && !(p.temp > MAX_TEMP);
  }

  function liquidMix(p) {
    if (p.del || Math.random() > CHANCE || !mixable(p)) return;
    const d = DIRS4[Math.floor(Math.random() * 4)];
    const x = p.x + d[0], y = p.y + d[1];
    if (outOfBounds(x, y)) return;
    const q = pixelMap[x] && pixelMap[x][y];
    if (!q || q.del || !mixable(q)) return;
    mixPair(p, q, RATE);
  }

  // ---- Paints ----
  const paints = {
    red_paint: "#e8262a",
    yellow_paint: "#ffd500",
    blue_paint: "#1f4fe0",
    white_paint: "#f5f5f5",
    black_paint: "#1a1a1a"
  };
  for (const name in paints) {
    elements[name] = {
      color: paints[name],
      behavior: behaviors.LIQUID,
      category: "liquids",
      state: "liquid",
      density: 1100,
      tempHigh: 100,
      stateHigh: "steam"
    };
  }

  // ---- Tools ----
  elements.color_blend = {
    color: "#c58cff",
    category: "tools",
    tool: function (p) {
      if (!p || p.del) return;
      for (const d of DIRS8) {
        const x = p.x + d[0], y = p.y + d[1];
        if (outOfBounds(x, y)) continue;
        const q = pixelMap[x] && pixelMap[x][y];
        if (q && !q.del) mixPair(p, q, 0.4);
      }
    }
  };

  elements.color_rinse = {
    color: "#9fe8ff",
    category: "tools",
    tool: function (p) {
      if (!p || p.del) return;
      try {
        const c = pixelColorPick(p);
        if (c) p.color = c;
      } catch (e) {}
    }
  };

  // ---- Hook every liquid ----
  runAfterLoad(function () {
    for (const n in elements) {
      const e = elements[n];
      if (!e || e.state !== "liquid" || e.noColorMix || e.tool || e.category === "tools") continue;
      const old = e.tick;
      e.tick = function (p) {
        if (typeof old === "function") old(p);
        liquidMix(p);
      };
    }
  });
})();
