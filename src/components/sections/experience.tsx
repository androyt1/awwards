import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ExperienceList } from "../ui/experienceList";

export const Experience = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".experience-item", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: { trigger: listRef.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="experience" className="py-32 relative z-10 bg-neutral-900/30">
      <div className="px-6 md:px-12 mb-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-mono text-sm text-gray-500 tracking-widest uppercase mb-4">
            (002) Career History
          </h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-white">
            Professional <br /> <span className="text-gray-600">Journey</span>
          </h3>
        </div>
        <div className="flex items-end pb-2">
          <p className="text-gray-400 max-w-md">
            Over 7 years of experience architecting scalable frontend solutions,
            improving performance by up to 40%, and leading technical
            teams[cite: 4, 16].
          </p>
        </div>
      </div>
      <ExperienceList />
    </section>
  );
};
