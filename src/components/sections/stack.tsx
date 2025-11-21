export const Stack = () => {
  return (
    <section
      id="stack"
      className="py-32 px-6 md:px-12 border-b border-white/10 relative bg-neutral-900/50"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-6xl font-display font-bold mb-8">The Stack</h2>
          <p className="text-gray-400 text-lg max-w-md mb-6">
            My technical workflow is built for speed and scale. Currently
            specializing in RAG Architectures and Gemini Vision[cite: 9].
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[
            {
              title: "Frontend",
              items: [
                "React / Next.js",
                "TypeScript",
                "GSAP / Three.js",
                "Tailwind CSS",
              ],
            },
            {
              title: "AI & Backend",
              items: ["OpenAI API / RAG", "Supabase", "Node.js", "Python"],
            },
          ].map((cat, i) => (
            <div key={i}>
              <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-xl border-b border-white/5 pb-2 text-gray-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
