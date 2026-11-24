import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

const PARAMS = {
  pointsNumber: 40,
  widthFactor: 0.3,
  spring: 0.4,
  friction: 0.5,
} as const;

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const finePointerQuery = window.matchMedia('(pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let mouseMoved = false;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    const pointer = {
      x: 0.5 * viewportWidth,
      y: 0.5 * viewportHeight,
    };

    const trail: TrailPoint[] = Array.from({ length: PARAMS.pointsNumber }, () => ({
      x: pointer.x,
      y: pointer.y,
      dx: 0,
      dy: 0,
    }));

    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      canvas.width = Math.floor(viewportWidth * dpr);
      canvas.height = Math.floor(viewportHeight * dpr);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updateMousePosition = (x: number, y: number) => {
      pointer.x = x;
      pointer.y = y;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseMoved = true;
      updateMousePosition(e.clientX, e.clientY);
    };

    const handleClick = (e: MouseEvent) => {
      mouseMoved = true;
      updateMousePosition(e.clientX, e.clientY);
    };

    const update = (t: number) => {
      if (!mouseMoved) {
        pointer.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * viewportWidth;
        pointer.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
          viewportHeight;
      }

      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        const prev = i === 0 ? pointer : trail[i - 1];
        const spring = i === 0 ? 0.4 * PARAMS.spring : PARAMS.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= PARAMS.friction;
        p.dy *= PARAMS.friction;
        p.x += p.dx;
        p.y += p.dy;
      }

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = 'rgba(59, 37, 43, 0.56)';

      for (let i = 1; i < trail.length - 1; i++) {
        const pPrev = trail[i - 1];
        const pCurr = trail[i];
        const pNext = trail[i + 1];

        const xcPrev = i === 1 ? trail[0].x : 0.5 * (pPrev.x + pCurr.x);
        const ycPrev = i === 1 ? trail[0].y : 0.5 * (pPrev.y + pCurr.y);
        const xcNext = 0.5 * (pCurr.x + pNext.x);
        const ycNext = 0.5 * (pCurr.y + pNext.y);

        ctx.beginPath();
        ctx.moveTo(xcPrev, ycPrev);
        ctx.quadraticCurveTo(pCurr.x, pCurr.y, xcNext, ycNext);
        ctx.lineWidth = PARAMS.widthFactor * (PARAMS.pointsNumber - i);
        ctx.stroke();
      }

      animationFrameId = window.requestAnimationFrame(update);
    };

    setupCanvas();
    animationFrameId = window.requestAnimationFrame(update);

    window.addEventListener('resize', setupCanvas);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    const handlePreferenceChange = () => {
      if (!finePointerQuery.matches || reducedMotionQuery.matches) {
        window.cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, viewportWidth, viewportHeight);
      }
    };

    finePointerQuery.addEventListener('change', handlePreferenceChange);
    reducedMotionQuery.addEventListener('change', handlePreferenceChange);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setupCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      finePointerQuery.removeEventListener('change', handlePreferenceChange);
      reducedMotionQuery.removeEventListener('change', handlePreferenceChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden h-full w-full md:block"
    />
  );
}
