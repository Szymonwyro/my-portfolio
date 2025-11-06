export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4 text-white-600">Resume Viewer</h1>
      <object
        data="/Szymon Wyrozumski CV 2025.pdf"
        type="application/pdf"
        className="w-full h-[80vh] border-2 border-white-600 rounded"
      ></object>
      <a
        href="/Szymon Wyrozumski CV 2025.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mt-4"
      >
        Download CV (PDF)
        </a>

    
    </main>
  );
}