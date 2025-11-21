export const MenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="relative z-70 w-12 h-12 flex items-center justify-center mix-blend-difference outline-none"
  >
    <div className="flex flex-col gap-1.5 items-end">
      <span
        className={`h-0.5 bg-white transition-all duration-300 block ${
          isOpen ? "w-6 translate-y-2 -rotate-45" : "w-8"
        }`}
      />
      <span
        className={`h-0.5 bg-white transition-all duration-300 block ${
          isOpen ? "opacity-0" : "w-6"
        }`}
      />
      <span
        className={`h-0.5 bg-white transition-all duration-300 block ${
          isOpen ? "w-6 -translate-y-2 rotate-45" : "w-4"
        }`}
      />
    </div>
  </button>
);
