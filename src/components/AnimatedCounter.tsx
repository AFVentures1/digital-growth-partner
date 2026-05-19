import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 1800, className }: Props) {
  // Extract numeric portion and suffix/prefix
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";

  const [display, setDisplay] = useState(match ? "0" : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const current = target * eased;
            setDisplay(
              Number.isInteger(target) ? Math.round(current).toString() : current.toFixed(1)
            );
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration, match]);

  return (
    <span ref={ref} className={className}>
      {match ? `${prefix}${display}${suffix}` : value}
    </span>
  );
}
