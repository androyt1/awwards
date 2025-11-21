import React from "react";

export const TransitionOverlay = React.forwardRef<HTMLDivElement>(
  (props, ref) => (
    <div
      ref={ref}
      className="fixed inset-0 z-100 bg-neutral-950 pointer-events-none flex items-center justify-center"
      style={{ transform: "scaleY(0)", transformOrigin: "bottom" }}
    >
      <span className="font-display font-bold text-white text-4xl animate-pulse">
        ANDREW.DEV
      </span>
    </div>
  )
);
