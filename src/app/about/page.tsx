export default function About() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4 text-white-600">About Me</h1>
      <p className="text-lg text-white-700 mb-4">
        Hi, I'm Szymon.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-white-600">About</h2>
      <p className="text-white-700 max-w-md">
      <h1>I am applying to start university in the UK in 2026.
        I am applying to study 
        Engineering Mathematics (Bristol), 
        Electrical Engineering (Bath, KCL), and 
        Computer Science / Systems Engineering (Durham, Warwick).</h1>
      <h1>&nbsp;</h1>
      <h1>I completed my A-Levels in 2025 and I am building projects before I begin my studies at university.</h1>
      <h1>&nbsp;</h1>
      <h1>My interests are in SWE, Quantitative Finance, HFT Engineering.</h1>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-white-600">Skills</h2>
      <ul className="list-disc ml-6 text-white-700">
        <li>TypeScript / JavaScript</li>
        <li>React / Next.js</li>
        <li>CSS / Tailwind</li>
        <li>Node.js / APIs</li>
        <li>Python</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-white-600">Contact</h2>
      <p className="text-white-700">
        <li>Feel free to reach out!</li>
        <li>Email: sz.wyrozumski@gmail.com</li>
        <li>LinkedIn:&nbsp;
            <a 
                href= "https://www.linkedin.com/in/szymon-wyrozumski" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-blue-400"

            >
            www.linkedin.com/in/szymon-wyrozumski
            </a></li>
      </p>
    </main>
  );
}
