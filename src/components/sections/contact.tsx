import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "../ui/magneticButton";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col justify-between py-20 px-6 md:px-12 bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div>
        <h2 className="font-mono text-sm text-gray-500 mb-8">(004) CONTACT</h2>
        <a
          href="mailto:androyt1@gmail.com"
          className="block text-[8vw] font-display font-bold leading-none hover:text-gray-400 transition-colors"
        >
          LET'S BUILD <br /> THE FUTURE
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
        <div className="flex gap-4">
          <MagneticButton
            onClick={() => window.open("https://github.com", "_blank")}
            className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <Github size={24} />
          </MagneticButton>
          <MagneticButton
            onClick={() => window.open("https://linkedin.com", "_blank")}
            className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <Linkedin size={24} />
          </MagneticButton>
          <MagneticButton
            onClick={() => (window.location.href = "mailto:androyt1@gmail.com")}
            className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
            <Mail size={24} />
          </MagneticButton>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-gray-500 font-mono text-xs uppercase mb-2">
            <MapPin size={12} /> Carshalton, UK
          </div>
          <p className="font-mono text-xs text-gray-500 uppercase">
            © 2025 Andrew Aghoghovwia
          </p>
        </div>
      </div>
    </section>
  );
};
