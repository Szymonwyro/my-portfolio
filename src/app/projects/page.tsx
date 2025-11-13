import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4 text-white-600">Projects</h1>
        <p className="text-xl text-white-700 mb-6">A showcase of my work and projects.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-6" style={{ maxWidth: '1600px', width: '100%' }}>
        
        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <Link
            href="/projects/project-details/EPQ"
            className="flex-1 bg-black border-border-gray-900 rounded-2xl p-2 block hover:scale-[1.02] hover:border-gray-700 transition-transform duration-300"
          >
            <img
              src="/photos/epq_title.png"
              alt="EPQ Project"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-white">EPQ on HFT</h3>
          </Link>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <Link
            href="/projects/project-details/MacroML"
            className="flex-1 bg-black border-border-gray-900 rounded-2xl p-2 block hover:scale-[1.02] hover:border-gray-700 transition-transform duration-300"
          >
            <img
              src="/photos/ML_model.png"
              alt="ML Strategy Comparison in FX"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-white">ML Strategy Comparison in FX</h3>
          </Link>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <Link
            href="/projects/project-details/Backprop"
            className="flex-1 bg-black border-border-gray-900 rounded-2xl p-2 block hover:scale-[1.02] hover:border-gray-700 transition-transform duration-300"
          >
            <img
              src="/photos/backprop.png"
              alt="ML Digit Recogniser"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-white">ML Digit Recogniser</h3>
          </Link>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <Link
            href="/projects/project-details/CppBacktestingEngine"
            className="flex-1 bg-black border-border-gray-900 rounded-2xl p-2 block hover:scale-[1.02] hover:border-gray-700 transition-transform duration-300"
          >
            <img
              src="/photos/CppBacktest.png"
              alt="C++ Backtesting Engine"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
            <h3 className="mt-4 text-2xl font-semibold text-white">C++ Backtesting Engine</h3>
          </Link>
        </div>

      </div>
    </main>
  );
}