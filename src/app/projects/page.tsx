export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4 text-white-600">Projects</h1>
        <p className="text-xl text-white-700 mb-6">A showcase of my work and projects.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '1600px', width: '100%' }}>
        
        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <img 
            src="/photos/epq_title.png"
            alt="EPQ on HFT"
            className="w-full h-75 object-cover rounded-2xl" />
            
          <h2 className="mt-6 text-2xl font-semi-bold mb-2 text-white">EPQ on HFT</h2>
          
          
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <img
          src="/photos/ML_model.png"
          alt="ML Strategy Comparison for FX"
          className="w-full h-75 object-cover rounded-2xl" />
          <h2 className="mt-6 text-2xl font-semi-bold mb-4 text-white">ML Strategy Comparison for FX</h2>
          
        </div>

      </div>
    </main>
  );
}