export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">Szymon Wyrozumski</h1>
      <p className="text-xl text-gray-700 mb-6">Welcome to my portfolio website.</p>
      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          About Me
        </a>
      </div>
    </main>
  );
}
