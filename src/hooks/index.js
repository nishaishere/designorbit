import { useState, useEffect, useRef, useCallback } from 'react';

// ── Scroll-triggered fade-up ──────────────────────────────
export function useFadeUp(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// ── Navbar scroll state ───────────────────────────────────
export function useScrolled(offset = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > offset);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [offset]);
  return scrolled;
}

// ── Hover state helper ────────────────────────────────────
export function useHover() {
  const [hovered, setHovered] = useState(false);
  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };
  return [hovered, bind];
}

// ── Count-up animation ────────────────────────────────────
export function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useFadeUp(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(numericTarget)) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target, duration]);

  return [ref, count];
}

// ── Custom cursor ─────────────────────────────────────────
export function useCursor() {
  const cursorRef  = useRef(null);
  const ringRef    = useRef(null);
  const mouse      = useRef({ x: 0, y: 0 });
  const ring       = useRef({ x: 0, y: 0 });
  const rafId      = useRef(null);

  const animate = useCallback(() => {
    ring.current.x += (mouse.current.x - ring.current.x) * 0.13;
    ring.current.y += (mouse.current.y - ring.current.y) * 0.13;
    if (ringRef.current) {
      ringRef.current.style.left = ring.current.x + 'px';
      ringRef.current.style.top  = ring.current.y + 'px';
    }
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  const onEnter = useCallback(() => {
    if (cursorRef.current) { cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1.6)'; }
    if (ringRef.current)   { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px'; }
  }, []);

  const onLeave = useCallback(() => {
    if (cursorRef.current) { cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; }
    if (ringRef.current)   { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; }
  }, []);

  return { cursorRef, ringRef, onEnter, onLeave };
}
