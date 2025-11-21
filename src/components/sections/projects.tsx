import { ProjectList } from "../ui/projectList";

export const Projects = () => {
  return (
    <section id="work" className="py-20 relative z-10">
      <div className="px-6 md:px-12 mb-12 flex items-end justify-between">
        <h2 className="font-mono text-sm text-gray-500 tracking-widest uppercase">
          (001) Selected Works
        </h2>
        <span className="hidden md:block font-mono text-xs text-gray-600">
          HOVER TO PREVIEW
        </span>
      </div>
      <ProjectList />
    </section>
  );
};
