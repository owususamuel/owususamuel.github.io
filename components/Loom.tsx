'use client';

import { useEffect, useRef } from 'react';

type BlockKey = 'gold' | 'ember' | 'leaf';
type Block = [k0: number, k1: number, key: BlockKey];
type Palette = Record<'bg' | 'thread' | BlockKey, string>;

// Seeded 2D Perlin noise, so the weave looks the same on every visit.
const perm = (() => {
  const p = Array.from({ length: 256 }, (_, i) => i);
  let s = 20261011;
  const rnd = () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  const out = new Uint8Array(512);
  for (let i = 0; i < 512; i++) out[i] = p[i & 255];
  return out;
})();

const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);

const grad = (h: number, x: number, y: number) => {
  switch (h & 7) {
    case 0: return x + y;
    case 1: return -x + y;
    case 2: return x - y;
    case 3: return -x - y;
    case 4: return x;
    case 5: return -x;
    case 6: return y;
    default: return -y;
  }
};

const noise = (x: number, y: number) => {
  const fx = Math.floor(x);
  const fy = Math.floor(y);
  const X = fx & 255;
  const Y = fy & 255;
  x -= fx;
  y -= fy;
  const u = fade(x);
  const v = fade(y);
  const a = perm[X] + Y;
  const b = perm[X + 1] + Y;
  const g00 = grad(perm[a], x, y);
  const g10 = grad(perm[b], x - 1, y);
  const g01 = grad(perm[a + 1], x, y - 1);
  const g11 = grad(perm[b + 1], x - 1, y - 1);
  const l1 = g00 + u * (g10 - g00);
  const l2 = g01 + u * (g11 - g01);
  return l1 + v * (l2 - l1);
};

const hash = (a: number, b: number) => {
  let h = Math.imul(a + 1, 374761393) ^ Math.imul(b + 7, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
};

/** Stacked threads displaced like a voice print, with kente-style colour blocks woven in. */
export function Loom() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const root = document.documentElement;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const dark = window.matchMedia('(prefers-color-scheme: dark)');

    let W = 1;
    let H = 1;
    let gap = 10;
    let step = 6;
    let top = 30;
    let count = 2;
    let cols = 0;
    let pts = new Float32Array(2);
    let blocks: Block[][] = [];
    let colors: Palette = { bg: '', thread: '', gold: '', ember: '', leaf: '' };
    let raf = 0;
    const start = performance.now();
    const pointer = { x: -1e4, y: -1e4, lx: null as number | null, ly: null as number | null, energy: 0 };

    const readColors = () => {
      const cs = getComputedStyle(root);
      const v = (name: string) => cs.getPropertyValue(name).trim();
      colors = { bg: v('--bg'), thread: v('--thread'), gold: v('--gold'), ember: v('--ember'), leaf: v('--leaf') };
    };

    const layout = () => {
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gap = W < 640 ? 8 : 10;
      step = W < 640 ? 4 : 6;
      top = gap * 3;
      count = Math.max(2, Math.floor((H - top - 2) / gap) + 1);
      cols = Math.ceil(W / step);
      pts = new Float32Array(cols + 1);

      // Columns of uneven width, bands of four threads.
      const columns: [number, number, number][] = [];
      for (let x = 0, c = 0; x < W; c++) {
        const w = 40 + Math.floor(hash(c, 991) * 64);
        columns.push([x, Math.min(W, x + w), c]);
        x += w;
      }
      blocks = [];
      for (let i = 0; i < count; i++) {
        const band = Math.floor(i / 4);
        const list: Block[] = [];
        for (const [x0, x1, c] of columns) {
          const h = hash(c, band);
          const key: BlockKey | null = h < 0.06 ? 'gold' : h < 0.078 ? 'ember' : h < 0.096 ? 'leaf' : null;
          if (key) list.push([Math.floor(x0 / step), Math.min(cols, Math.ceil(x1 / step)), key]);
        }
        blocks.push(list);
      }
    };

    const trace = (k0: number, k1: number) => {
      ctx.moveTo(Math.min(W, k0 * step), pts[k0]);
      for (let k = k0 + 1; k <= k1; k++) ctx.lineTo(Math.min(W, k * step), pts[k]);
    };

    const draw = (now: number) => {
      const still = motion.matches;
      const t = still ? 12 : now / 1000;
      const sweep = still ? Infinity : ((now - start) / 1700) * (W + 360);
      pointer.energy *= 0.968;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, W, H);

      const cx = W * 0.63;
      const sig = W * 0.23;
      const inv2s = 1 / (2 * sig * sig);
      const amp = gap * 5.2;
      const pe = still ? 0 : pointer.energy;

      for (let i = 0; i < count; i++) {
        const y0 = top + i * gap;
        const vy = Math.pow(Math.sin((Math.PI * (i + 1)) / (count + 1)), 1.3);
        const breath = 0.6 + 0.4 * Math.sin(t * 0.33 + i * 0.07);
        const dy = y0 - pointer.y;
        const near = pe > 0.01 ? Math.exp(-(dy * dy) / 16200) * pe : 0;

        for (let k = 0; k <= cols; k++) {
          const x = Math.min(W, k * step);
          let g = (sweep - x) / 360;
          g = g <= 0 ? 0 : g >= 1 ? 1 : g * g * (3 - 2 * g);
          if (g === 0) {
            pts[k] = y0;
            continue;
          }
          const dx = x - cx;
          let env = (0.1 + 0.9 * Math.exp(-dx * dx * inv2s) * breath) * vy;
          if (near) {
            const px = x - pointer.x;
            env += near * Math.exp(-(px * px) / 33800) * 1.3;
          }
          let a = noise(x * 0.0062 + t * 0.11, i * 0.19 - t * 0.05) * 0.65 + 0.5;
          a = a < 0 ? 0 : a > 1 ? 1 : a;
          const b = noise(x * 0.034 - t * 0.6, i * 0.43 + 17.3) * 0.5 + 0.5;
          pts[k] = y0 - (a * a * a * 1.2 + b * 0.16) * env * amp * g;
        }

        // Fill beneath the thread so nearer threads hide the ones behind.
        ctx.beginPath();
        trace(0, cols);
        ctx.lineTo(W, y0 + 1.5);
        ctx.lineTo(0, y0 + 1.5);
        ctx.closePath();
        ctx.fillStyle = colors.bg;
        ctx.fill();

        ctx.beginPath();
        trace(0, cols);
        ctx.strokeStyle = colors.thread;
        ctx.lineWidth = 1;
        ctx.stroke();

        const list = blocks[i];
        if (list.length) {
          ctx.lineWidth = 1.7;
          for (const [k0, k1, key] of list) {
            ctx.beginPath();
            trace(k0, k1);
            ctx.strokeStyle = colors[key];
            ctx.stroke();
          }
        }
      }
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const run = () => {
      cancelAnimationFrame(raf);
      if (motion.matches) draw(performance.now());
      else raf = requestAnimationFrame(loop);
    };
    const redrawIfStill = () => {
      if (motion.matches) draw(performance.now());
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (pointer.lx !== null && pointer.ly !== null) {
        const d = Math.hypot(x - pointer.lx, y - pointer.ly);
        pointer.energy = Math.min(1.25, pointer.energy + d * 0.012);
      }
      pointer.x = x;
      pointer.y = y;
      pointer.lx = x;
      pointer.ly = y;
    };
    const onDown = (e: PointerEvent) => {
      onMove(e);
      pointer.energy = Math.min(1.25, pointer.energy + 0.6);
    };
    const onLeave = () => {
      pointer.lx = null;
      pointer.ly = null;
    };
    const refreshColors = () => {
      readColors();
      redrawIfStill();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    dark.addEventListener('change', refreshColors);
    motion.addEventListener('change', run);

    const resizer = new ResizeObserver(() => {
      layout();
      redrawIfStill();
    });
    resizer.observe(canvas.parentElement ?? canvas);

    const themeWatcher = new MutationObserver(refreshColors);
    themeWatcher.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    readColors();
    layout();
    run();

    return () => {
      cancelAnimationFrame(raf);
      resizer.disconnect();
      themeWatcher.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerleave', onLeave);
      dark.removeEventListener('change', refreshColors);
      motion.removeEventListener('change', run);
    };
  }, []);

  return (
    <div className="loom" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
