export default function About() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      
      <h1 className="text-5xl font-bold mb-8 text-white">About</h1>

      <div className="text-lg text-white mb-4 max-w-3xl space-y-6">
        <h2>
          I completed my A-Levels in 2025 and will be studying Computer Systems Engineering at University of Warwick starting in October 2026.
        </h2>

        <p> I build performance oriented systems, focussing on correcteness, latency, and realistic evaluation.</p>
        <p> My interest is in the overlap of <strong>C++ systems programming, machine learning, and quantitative finance</strong>. Specifically, where model behaviour meets real-world constraints such as latency, slippage, and regime change. </p>
        <p> I prioritise simple, measurable designs over complexity - understanding how systems fail is what I believe to more important than performance in ideal conditions. </p>
        <p> I am currently developing a C++ event-driven backtesting engine as I prepare for university, with the aim of pursuing <strong>quantitative development or software engineering</strong> roles. </p>
      </div>

      {/* Skills Section */}
      <section className="w-full max-w-3xl">
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl mt-8">
      </section>
    </main>
  );
}