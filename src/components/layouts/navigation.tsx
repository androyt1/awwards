import { Mail } from "lucide-react";
import { MagneticButton } from "../ui/magneticButton";
import { cn } from "../../utils/cn";

export const Navigation = ({
  isMobileOpen,
  setIsMobileOpen,
  onNavigate,
}: {
  isMobileOpen: boolean;
  setIsMobileOpen: (v: boolean) => void;
  onNavigate: (id: string) => void;
}) => (
  <nav className="fixed top-0 left-0 right-0 z-60 p-6 md:p-8 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onNavigate("#top");
      }}
      className="pointer-events-auto relative z-70"
    >
      <span className="font-display font-bold text-xl tracking-tight">
        ANDREW.<span className="text-gray-400">DEV</span>
      </span>
    </a>
    <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md px-2 py-2 rounded-full border border-white/10 pointer-events-auto">
      {["Work", "Experience", "Stack", "Contact"].map((item) => (
        <MagneticButton
          key={item}
          onClick={() => onNavigate(`#${item.toLowerCase()}`)}
          className="px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
        >
          <span className="text-sm font-mono text-gray-200">{item}</span>
        </MagneticButton>
      ))}
      <MagneticButton
        onClick={() => (window.location.href = "mailto:androyt1@gmail.com")}
        className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Mail size={16} />
      </MagneticButton>
    </div>
    <div className="md:hidden pointer-events-auto">
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="relative z-70 w-12 h-12 flex items-center justify-center mix-blend-difference outline-none"
      >
        <div className="flex flex-col gap-1.5 items-end">
          <span
            className={cn(
              "h-0.5 bg-white transition-all duration-300 block",
              isMobileOpen ? "w-6 translate-y-2 -rotate-45" : "w-8"
            )}
          />
          <span
            className={cn(
              "h-0.5 bg-white transition-all duration-300 block",
              isMobileOpen ? "opacity-0" : "w-6"
            )}
          />
          <span
            className={cn(
              "h-0.5 bg-white transition-all duration-300 block",
              isMobileOpen ? "w-6 -translate-y-2 rotate-45" : "w-4"
            )}
          />
        </div>
      </button>
    </div>
  </nav>
);
