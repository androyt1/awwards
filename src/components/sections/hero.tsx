import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "../ui/splitText";

export function Hero({ loaded }: { loaded: boolean }) {
  useGSAP(() => {
    if (!loaded) return;
    const tl = gsap.timeline();
    tl.from(".hero-char", {
      y: 100,
      opacity: 0,
      rotateZ: 5,
      stagger: 0.02,
      duration: 1,
      ease: "power4.out",
      delay: 0.2,
    }).from(".hero-meta", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5");
  }, [loaded]);

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden"
    >
      <div className="max-w-[95vw] z-10">
        <div className="flex items-center gap-4 mb-6 hero-meta">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-mono text-xs md:text-sm text-gray-400 tracking-widest uppercase">
            Senior Frontend Developer (7+ Years)
          </span>
        </div>
        <h1 className="text-[13vw] leading-[0.85] font-display font-bold tracking-tighter uppercase mb-8">
          <div>
            <SplitText text="Creative" />
          </div>
          <div className="text-gray-600">
            <SplitText text="Engineer" />
          </div>
        </h1>
        <div className="mt-12 grid md:grid-cols-[1fr_2fr] gap-8 hero-meta border-t border-white/10 pt-8">
          <p className="font-mono text-sm text-gray-500">
            CARSHALTON, UK <br /> REMOTE EMEA
          </p>
          <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-300">
            I build scalable, high-performance applications with{" "}
            <span className="text-white">React, Next.js, and AI</span>. Focusing
            on interaction design and technical robustness.
          </p>
        </div>
      </div>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
