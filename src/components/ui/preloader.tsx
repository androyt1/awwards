import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) containerRef.current.style.display = "none";
        onComplete();
      },
    });
    const progress = { value: 0 };
    tl.to(progress, {
      value: 100,
      duration: 2,
      ease: "power4.inOut",
      onUpdate: () => {
        if (percentRef.current)
          percentRef.current.textContent = `${Math.round(progress.value)}%`;
      },
    })
      .to(".preloader-bar", {
        height: 0,
        duration: 0.8,
        ease: "power4.inOut",
        stagger: 0.1,
      })
      .to(
        containerRef.current,
        { y: "-100%", duration: 0.8, ease: "power3.inOut" },
        "-=0.5"
      );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex flex-col bg-black"
    >
      <div className="flex-1 flex items-end pb-12 px-6 md:px-12 z-20">
        <span
          ref={percentRef}
          className="text-[15vw] font-display font-bold leading-none text-white"
        >
          0%
        </span>
      </div>
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="preloader-bar bg-neutral-900 h-full w-full border-r border-white/5"
          ></div>
        ))}
      </div>
    </div>
  );
};
