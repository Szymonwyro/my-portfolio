import WorkInProgress from "@/app/components/WorkInProgress";
import { Link } from "lucide-react";

export default function EPQPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl font-bold mb-4 text-white-600">"To what extent has the rise of High-Frequency Trading transformed markets?"</h1>
        <p className="text-xl text-white-700 mb-6">A showcase of my research and work</p>
      <div className="mt-6 grid grid-cols-6 md:grid-cols-1 gap-6" style={{ maxWidth: '948px', width: '100%' }}>
        
        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Background</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <p>x</p>
          </ul>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Introduction</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <p>x</p>
          </ul>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Trading Strategy</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <p>x</p>
          </ul>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Market Efficiency</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <p>x</p>
          </ul>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Regulation</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <p>x</p>
          </ul>
        </div>

        <div className="flex-1 bg-black border border-gray-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Regulation</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2">
            <p>x</p>
          </ul>
        </div>
        
      </div>
    </main>
  );
}