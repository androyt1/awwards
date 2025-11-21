import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

import { TransitionOverlay } from "./components/ui/transitionOverlay";
import { CustomCursor } from "./components/ui/customCursor";
import { Preloader } from "./components/ui/preloader";
import { Navigation } from "./components/layouts/navigation";
import { MobileMenu } from "./components/ui/mobileMenu";
import { Hero } from "./components/sections/hero";
import { Projects } from "./components/sections/projects";
import { Experience } from "./components/sections/experience";
import { Stack } from "./components/sections/stack";
import { Contact } from "./components/sections/contact";

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const transitionOverlayRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!loaded) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [loaded]);

  const handleNavigation = (targetId: string) => {
    const overlay = transitionOverlayRef.current;
    const lenis = lenisRef.current;
    if (!overlay || !lenis) return;
    const tl = gsap.timeline();
    tl.set(overlay, { transformOrigin: "bottom" })
      .to(overlay, { scaleY: 1, duration: 0.6, ease: "power4.inOut" })
      .add(() => {
        if (targetId === "#top") lenis.scrollTo(0, { immediate: true });
        else {
          const target = document.querySelector(targetId);
          if (target)
            lenis.scrollTo(target as HTMLElement, { immediate: true });
        }
      })
      .set(overlay, { transformOrigin: "top" })
      .to(overlay, {
        scaleY: 0,
        duration: 0.6,
        ease: "power4.inOut",
        delay: 0.1,
      });
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <CustomCursor />
      <TransitionOverlay ref={transitionOverlayRef} />

      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      <Navigation
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onNavigate={handleNavigation}
      />
      <MobileMenu
        isOpen={isMobileOpen}
        setIsOpen={setIsMobileOpen}
        onNavigate={handleNavigation}
      />

      <Hero loaded={loaded} />
      <Projects />
      <Experience />
      <Stack />
      <Contact />
    </div>
  );
}
