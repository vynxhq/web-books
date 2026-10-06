// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in book.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class and add a .seen .unit-art .NAME
// rule with its keyframes in book.html (see the examples there: swap-a, hop, spin, tilt, breathe, ...).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Foundations: the quantity-bar model — an x bar and a four-times bar under one brace.
    reset(
      P('M240 78h50', '', 'stroke-width="5"') +                         // the x bar
      P('M310 78h200', '', 'stroke-width="5"') +                        // the 4x bar, four times as long
      Tx(265, 62, 'x', 30, '', 'middle') + Tx(410, 62, '4x', 30, '', 'middle') +
      P('M240 92v14H510V92', 'pulsebar') +                              // the brace, gently pulsing
      Tx(375, 138, 'sum', 24, 'a', 'middle') +
      `<circle class="t" r="7" fill="currentColor" stroke="none" style="--k:${k++}" cx="215" cy="78"/>`
    ),
  ];
})();
