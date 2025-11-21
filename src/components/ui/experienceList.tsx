import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { EXPERIENCE } from "../../data";
import { MapPin } from "lucide-react";
import { cn } from "../../utils/cn";

export const ExperienceList = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
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
    <div ref={listRef} className="flex flex-col border-t border-white/10">
      {EXPERIENCE.map((job) => (
        <div
          key={job.id}
          className="experience-item group relative border-b border-white/10 hover:bg-white/5 transition-colors duration-500"
          onMouseEnter={() => setActiveId(job.id)}
          onMouseLeave={() => setActiveId(null)}
        >
          <div className="py-8 px-4 md:px-8 grid md:grid-cols-[1fr_2fr] gap-6 cursor-default">
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-primary mb-2 block">
                  / {job.period}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {job.company}
                </h3>
                <span className="text-sm font-mono text-gray-500 mt-1 block">
                  {job.role}
                </span>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-gray-600 uppercase">
                <MapPin size={10} /> {job.location}
              </div>
            </div>
            <div className="relative overflow-hidden">
              <p className="text-gray-400 text-lg leading-relaxed transition-all duration-500 group-hover:text-white group-hover:translate-y-[-10px] group-hover:opacity-0 h-auto">
                {job.description}
              </p>
              <div
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500 ease-out",
                  activeId === job.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                )}
              >
                <ul className="space-y-2">
                  {job.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
