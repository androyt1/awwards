import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "../../utils/cn";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
}

export const MagneticButton = ({
  children,
  className,
  onClick,
  href,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    };

    const mouseLeave = () =>
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });

    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);

    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  const Component = href ? "a" : "button";

  const setRef = (el: HTMLElement | null) => {
    ref.current = el;
  };

  return (
    <Component
      ref={setRef}
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center cursor-pointer relative outline-none",
        className
      )}
    >
      {children}
    </Component>
  );
};
