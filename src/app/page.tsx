export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4 text-white-600">Szymon Wyrozumski</h1>
      <p className="text-xl text-white-700 mb-6">Aspiring SWE / Quant | Python, C++, React</p>

      <div className="mt-6 grid grid-cols-3 gap-6 items-center">

        <div className="w-[300px] h-[300px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/photos/photo1.jpg"
            alt="Profile 1"
            className="w-full h-full object-cover object-top scale-110 translate-y-[-10px] transition-transform duration-300 hover:scale-135 hover:translate-y-0"
          />
        </div>

        <div className="w-[300px] h-[300px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/photos/photo3.jpg"
            alt="Profile 3"
            className="w-full h-full object-cover scale-230 translate-x-[10px] transition-transform duration-300 hover:scale-300 hover:translate-x-[10px]"
            style={{ objectPosition: '50% 0%', transformOrigin: 'center center' }}
          />
        </div>
        
        <div className="w-[300px] h-[300px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/photos/photo2.jpg"
            alt="Profile 2"
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-125 hover:translate-y-0"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '948px', width: '100%' }}>

        <div className="flex-1 bg-black border border-white rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Education</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <li>BEng Engineering Mathematics, Bristol University </li>
            <li>A-Levels: <strong>A*AAA + A*</strong><br />
              Maths, Further Maths, Economics, Latin + EPQ </li>
            <li>GCSEs: 999999888</li>
          </ul>
        </div>
      

        <div className="flex-1 bg-black border border-white rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Contact</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <li>Email: sz.wyrozumski@gmail.com</li>
            <li>LinkedIn: Szymon Wyrozumski</li>
            <li>Github: Szymonwyro</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
