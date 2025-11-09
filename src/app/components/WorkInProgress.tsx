interface WorkInProgressProps {
  title?: string;
  message?: string;
}

export default function WorkInProgress({
  title = "Work in Progress...",
  message = "This page is still under construction. Check back soon!",
}: WorkInProgressProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-center p-8">
      <h1 className="text-5xl font-bold text-white mb-4 animate-pulse">
        🚧 {title}
      </h1>
      <p className="text-gray-400 text-lg mb-8 max-w-md">{message}</p>
      <a
        href="/projects"
        className="text-white border border-gray-700 px-6 py-2 rounded-xl hover:bg-gray-800 transition-all"
      >
        ← Back to Projects
      </a>
    </main>
  );
}