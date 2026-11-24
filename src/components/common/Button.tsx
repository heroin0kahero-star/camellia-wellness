import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ivory' | 'ghost-light';

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ExternalLinkProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  to?: never;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface NativeButtonProps extends BaseProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | ExternalLinkProps | NativeButtonProps;

interface VariantConfig {
  container: string;
  filler: string;
  hoverText: string;
}

const VARIANT_CONFIG: Record<ButtonVariant, VariantConfig> = {
  primary: {
    container: 'bg-[#3B252B] text-[#F6F1E9] border border-[#3B252B] hover:border-[#B69A70]',
    filler: 'bg-[#B69A70]',
    hoverText: 'text-[#25221F]',
  },
  secondary: {
    container: 'bg-[#E9DCD5] text-[#3B252B] border border-[#3B252B]/15 hover:border-[#3B252B]',
    filler: 'bg-[#3B252B]',
    hoverText: 'text-[#F6F1E9]',
  },
  outline: {
    container: 'bg-transparent text-[#3B252B] border border-[#3B252B]/40 hover:border-[#3B252B]',
    filler: 'bg-[#3B252B]',
    hoverText: 'text-[#F6F1E9]',
  },
  ivory: {
    container: 'bg-[#F6F1E9] text-[#3B252B] border border-[#F6F1E9] hover:border-[#B69A70]',
    filler: 'bg-[#B69A70]',
    hoverText: 'text-[#25221F]',
  },
  'ghost-light': {
    container: 'bg-transparent text-[#F6F1E9] border border-[#F6F1E9]/45 hover:border-[#B69A70]',
    filler: 'bg-[#B69A70]',
    hoverText: 'text-[#25221F]',
  },
};

const BASE_CLASSES =
  'relative isolate overflow-hidden inline-flex min-h-[44px] items-center justify-center px-6 py-2.5 text-xs font-medium tracking-[0.14em] uppercase whitespace-nowrap shrink-0 transition-colors duration-300 select-none';

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount;
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const config = VARIANT_CONFIG[variant];
  const isDisabled = 'disabled' in props && Boolean(props.disabled);

  const outerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [fillPhase, setFillPhase] = useState<'idle' | 'entering' | 'leaving'>('idle');
  const leaveTimerRef = useRef<number | null>(null);

  const motionStateRef = useRef({
    hovered: false,
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    targetTextX: 0,
    targetTextY: 0,
    currentTextX: 0,
    currentTextY: 0,
    rafId: 0,
  });

  useEffect(() => {
    if (isDisabled) {
      setFillPhase('idle');
      motionStateRef.current.hovered = false;
      motionStateRef.current.targetX = 0;
      motionStateRef.current.targetY = 0;
      motionStateRef.current.targetTextX = 0;
      motionStateRef.current.targetTextY = 0;
    }
  }, [isDisabled]);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current !== null) {
        window.clearTimeout(leaveTimerRef.current);
      }
      if (motionStateRef.current.rafId) {
        window.cancelAnimationFrame(motionStateRef.current.rafId);
      }
    };
  }, []);

  const canMagnetize = (): boolean => {
    if (isDisabled || typeof window === 'undefined') return false;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return finePointer && !reducedMotion;
  };

  const startLoop = () => {
    const state = motionStateRef.current;
    if (state.rafId) return;

    const tick = () => {
      state.currentX = lerp(state.currentX, state.targetX, 0.14);
      state.currentY = lerp(state.currentY, state.targetY, 0.14);
      state.currentTextX = lerp(state.currentTextX, state.targetTextX, 0.14);
      state.currentTextY = lerp(state.currentTextY, state.targetTextY, 0.14);

      const outerEl = outerRef.current;
      const labelEl = labelRef.current;

      if (outerEl) {
        outerEl.style.transform = `translate3d(${state.currentX.toFixed(2)}px, ${state.currentY.toFixed(2)}px, 0)`;
      }
      if (labelEl) {
        labelEl.style.transform = `translate3d(${state.currentTextX.toFixed(2)}px, ${state.currentTextY.toFixed(2)}px, 0)`;
      }

      const settled =
        !state.hovered &&
        Math.abs(state.currentX) < 0.05 &&
        Math.abs(state.currentY) < 0.05 &&
        Math.abs(state.currentTextX) < 0.05 &&
        Math.abs(state.currentTextY) < 0.05;

      if (settled) {
        if (outerEl) outerEl.style.transform = '';
        if (labelEl) labelEl.style.transform = '';
        state.currentX = 0;
        state.currentY = 0;
        state.currentTextX = 0;
        state.currentTextY = 0;
        state.rafId = 0;
        return;
      }

      state.rafId = window.requestAnimationFrame(tick);
    };

    state.rafId = window.requestAnimationFrame(tick);
  };

  const handleMouseEnter = () => {
    if (isDisabled) return;
    if (leaveTimerRef.current !== null) {
      window.clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setFillPhase('entering');

    if (canMagnetize()) {
      motionStateRef.current.hovered = true;
      startLoop();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!canMagnetize() || !outerRef.current) return;
    const rect = outerRef.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    const state = motionStateRef.current;
    state.hovered = true;
    state.targetX = clamp(dx * 0.16, -9, 9);
    state.targetY = clamp(dy * 0.22, -5, 5);
    state.targetTextX = clamp(dx * 0.09, -5, 5);
    state.targetTextY = clamp(dy * 0.12, -3, 3);
    startLoop();
  };

  const handleMouseLeave = () => {
    if (isDisabled) return;
    setFillPhase('leaving');
    leaveTimerRef.current = window.setTimeout(() => {
      setFillPhase('idle');
      leaveTimerRef.current = null;
    }, 450);

    const state = motionStateRef.current;
    state.hovered = false;
    state.targetX = 0;
    state.targetY = 0;
    state.targetTextX = 0;
    state.targetTextY = 0;
    if (canMagnetize()) {
      startLoop();
    }
  };

  const fillerTransformClass =
    fillPhase === 'entering'
      ? 'translate-y-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
      : fillPhase === 'leaving'
        ? '-translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]'
        : 'translate-y-full transition-none';

  const classes = `${BASE_CLASSES} ${config.container} ${props.className ?? ''}`;

  const innerContent = (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-x-[15%] -inset-y-[45%] z-0 rounded-[50%] ${config.filler} ${fillerTransformClass}`}
      />
      <span
        ref={labelRef}
        className={`relative z-10 inline-flex items-center justify-center gap-2.5 transition-colors duration-300 ${
          fillPhase === 'entering' ? config.hoverText : ''
        }`}
      >
        {props.children}
      </span>
    </>
  );

  if ('to' in props && props.to !== undefined) {
    return (
      <Link
        ref={outerRef as React.RefObject<HTMLAnchorElement>}
        to={props.to}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classes}
      >
        {innerContent}
      </Link>
    );
  }

  if ('href' in props && props.href !== undefined) {
    return (
      <a
        ref={outerRef as React.RefObject<HTMLAnchorElement>}
        href={props.href}
        target={props.target}
        rel={props.rel}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classes}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      ref={outerRef as React.RefObject<HTMLButtonElement>}
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-55`}
    >
      {innerContent}
    </button>
  );
}
