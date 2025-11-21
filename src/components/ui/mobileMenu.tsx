import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const MobileMenu = ({
  isOpen,
  setIsOpen,
  onNavigate,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  onNavigate: (id: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 1,
        ease: "power4.inOut",
      }).from(
        ".mobile-link-item",
        { y: 100, opacity: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    } else {
      gsap.to(containerRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  const links = [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-60 bg-neutral-900 flex flex-col justify-between p-8 pt-32 pointer-events-auto"
      style={{ clipPath: "circle(0% at 100% 0%)" }}
    >
      <div className="flex flex-col gap-2">
        {links.map((link, i) => (
          <div key={i} className="overflow-hidden">
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigate(link.href);
              }}
              className="mobile-link-item block text-[12vw] leading-[0.9] font-display font-bold text-white hover:text-gray-400 transition-colors uppercase text-left"
            >
              {link.label}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-end text-gray-500 font-mono text-xs uppercase">
        <div>
          <p>androyt1@gmail.com</p>
          <p>+44 7821 460751</p>
        </div>
        <p>© 2025</p>
      </div>
    </div>
  );
};
