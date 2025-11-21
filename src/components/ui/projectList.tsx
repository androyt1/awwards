import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "../../data";

export const ProjectList = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useGSAP(() => {
    const movePreview = (e: MouseEvent) => {
      if (!activeImage) return;
      const { clientX, clientY } = e;
      gsap.to(previewRef.current, {
        x: clientX,
        y: clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", movePreview);
    return () => window.removeEventListener("mousemove", movePreview);
  }, [activeImage]);

  return (
    <div className="relative py-20 group/list">
      <div
        ref={previewRef}
        className="fixed top-0 left-0 w-[300px] h-[220px] md:w-[450px] md:h-[300px] pointer-events-none z-20 rounded-lg overflow-hidden transition-opacity duration-300"
        style={{ opacity: activeImage ? 1 : 0 }}
      >
        {activeImage && (
          <img
            src={activeImage}
            alt="Project Preview"
            className="w-full h-full object-cover grayscale group-hover/list:grayscale-0 transition-all duration-500"
          />
        )}
      </div>
      <div className="flex flex-col border-t border-white/10">
        {PROJECTS.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-white/10 px-4 md:px-8 transition-colors hover:bg-white/5 cursor-none"
            onMouseEnter={() => setActiveImage(project.image)}
            onMouseLeave={() => setActiveImage(null)}
          >
            <div className="flex items-baseline gap-4 z-10 mix-blend-difference mb-4 md:mb-0">
              <span className="text-xs font-mono text-gray-500">0{i + 1}</span>
              <h3 className="text-4xl md:text-7xl font-display font-bold text-white group-hover:translate-x-4 transition-transform duration-500">
                {project.title}
              </h3>
            </div>
            <div className="flex flex-col md:items-end z-10 mix-blend-difference">
              <span className="text-sm font-mono text-gray-400 mb-1">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-600">
                {project.year}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
