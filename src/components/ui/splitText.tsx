export default function SplitText({ text }: { text: string }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <span key={i} className="hero-char inline-block origin-bottom-left">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
