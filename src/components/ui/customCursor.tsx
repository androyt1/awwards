import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// 2. CUSTOM CURSOR
export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      const moveCursor = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        gsap.to(dotRef.current, { x: clientX, y: clientY, duration: 0 });
        gsap.to(outlineRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.15,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={outlineRef}
        className="cursor-outline hidden md:block fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background] duration-200"
      />
    </>
  );
};
