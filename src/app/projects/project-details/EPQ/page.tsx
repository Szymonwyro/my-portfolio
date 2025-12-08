"use client";
import WorkInProgress from "@/app/components/WorkInProgress";
import { Link } from "lucide-react";
import { useState } from "react";

export default function EPQPage() {

  const [activeCard, setActiveCard] = useState<string | null>(null);
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-5xl text-center font-bold mb-4 text-white-600 ">"To what extent has the rise of High-Frequency Trading transformed markets?"</h1>
        <p className="text-xl text-white-700 mb-6">A showcase of my research and work</p>
      <div className="mt-6 grid grid-cols-6 md:grid-cols-1 gap-6" style={{ maxWidth: '948px', width: '100%' }}>
        
        <div 
          onClick={() => 
            setActiveCard(activeCard === 'background' ? null : 'background')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Background</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>How I arrived at my final title</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "background"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-sm leading-relaxed">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'introduction' ? null : 'introduction')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Introduction</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Abstract / Method</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "introduction"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-sm leading-relaxed">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'effect-on-trading-strategy' ? null : 'effect-on-trading-strategy')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Trading Strategy</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Investigating changes to trading strategy due to HFT activity</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "effect-on-trading-strategy"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-sm leading-relaxed">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'effect-on-market-efficiency' ? null : 'effect-on-market-efficiency')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Market Efficiency</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Defining efficient markets and how HFT impacts them</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "effect-on-market-efficiency"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-sm leading-relaxed">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'effect-on-regulation' ? null : 'effect-on-regulation')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Effect on Regulation</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Pre-HFT approaches vs. Post-HFT approaches</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "effect-on-regulation"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-sm leading-relaxed">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'conclusions' ? null : 'conclusions')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Conclusions and Future Outlook</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Evaluating the impact of HFT on different market aspects</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "conclusions"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-sm leading-relaxed">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </div>
          </div>
        </div>
        
      </div>
    </main>
  );
}