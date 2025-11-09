export default function About() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      
      <h1 className="text-5xl font-bold mb-8 text-white">About Me</h1>

      <div className="text-lg text-white mb-4 max-w-3xl space-y-6">
        <p>
          I am applying to start university in the UK in 2026. I am applying to study 
          <ul className="list-disc list-inside">
            <li><strong> Engineering Mathematics (Bristol, BEng)</strong></li> 
            <li><strong> Computer Science and Mathematics (Durham, BSc)</strong></li>
            <li><strong> Computer Systems Engineering (Warwick, BEng)</strong></li>
            <li><strong> Electrical and Electronic Engineering (Bath, BEng)</strong></li>
            <li><strong> Electronics Engineering (KCL, BEng)</strong></li>
          </ul>
        </p>

        <p>
          I completed my A-Levels in 2025 and I am building projects before I begin my studies at university.
        </p>

        <p>
          My interests are in <strong>SWE</strong>, <strong>Quantitative Finance</strong>, and <strong>HFT Engineering</strong>.
        </p>
      </div>

      {/* Skills Section */}
      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">Skills</h2>
        <ul className="list-disc ml-6 text-white space-y-1">
          <li>TypeScript / JavaScript</li>
          <li>React / Next.js</li>
          <li>CSS / Tailwind</li>
          <li>Node.js / APIs</li>
          <li>Python</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
        <ul className="list-none text-white space-y-1">
          <li>Feel free to reach out!</li>
          <li>Email: <a href="mailto:sz.wyrozumski@gmail.com" className="underline hover:text-blue-400">sz.wyrozumski@gmail.com</a></li>
          <li>
            LinkedIn:&nbsp;
            <a 
              href="https://www.linkedin.com/in/szymon-wyrozumski" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-blue-400"
            >
              www.linkedin.com/in/szymon-wyrozumski
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}