import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let tx = mx;
    let ty = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };

    const loop = () => {
      tx += (mx - tx) * 0.18;
      ty += (my - ty) * 0.18;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${tx - 16}px, ${ty - 16}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full"
        style={{ background: "hsl(232 66% 50%)", boxShadow: "0 0 8px hsl(232 66% 50% / 0.8)" }}
      />
      <div
        ref={trailRef}
        className="custom-cursor-trail pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border"
        style={{ borderColor: "hsl(51 100% 50% / 0.5)", transition: "width .2s, height .2s" }}
      />
    </>
  );
}
