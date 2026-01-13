"use client";
import WorkInProgress from "@/app/components/WorkInProgress";
import { Link } from "lucide-react";
import { useState } from "react";

export default function EPQPage() {

  const [activeCard, setActiveCard] = useState<string | null>(null);
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-4xl text-center font-bold mb-6 text-white-600">"To what extent has the rise of High-Frequency Trading transformed markets?"</h1>
        <p className="text-xl text-white-700 mb-6">An analysis of systems and market structure</p>
        <p className="text-xl text-white-700 mb-6">Research | Market Microstructure | Limit Order Book | Trading Systems | Strategy</p>
      <div className="mt-6 grid grid-cols-6 md:grid-cols-1 gap-6" style={{ maxWidth: '948px', width: '100%' }}>
        
        {/* Problem Section */}
        <div>
          <hr className="border-gray-700 mb-6" />
          <h1 className="text-2xl font-bold mb-4 text-white">Problem</h1>
          <p className="text-gray-300 text-s leading-relaxed">
            High-Frequency Trading (HFT) dominates modern financial markets, 
            leveraging infrastructure and algorithms to execute trades at unprecedented speeds. 
            This project investigates the extent to which HFT has transformed market dynamics, 
            liquidity, volatility, and overall efficiency. By analyzing various aspects of HFT's impact, 
            this study seeks to provide a comprehensive understanding of how HFT strategies 
            have reshaped financial markets.
          </p>
          <hr className="border-gray-700 mt-6" />
        </div>

        {/* Method Section */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-white">Method</h1>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'effect-on-trading-strategy' ? null : 'effect-on-trading-strategy')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Trading Strategy Evolution</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Investigating changes to trading strategy due to HFT activity</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "effect-on-trading-strategy"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-s leading-relaxed">
              <li>Investigating changes to market making strategies and incentives</li>
              <li>Examining the role of tick-size constraints</li>
              <li>The rise of unique HFT strategies</li>
              <li>Incorporation of Machine Learning into HFT</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'effect-on-market-efficiency' ? null : 'effect-on-market-efficiency')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Market Efficiency</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Defining efficient markets and how HFT impacts them</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "effect-on-market-efficiency"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-s leading-relaxed">
              <li>Using liquidity as a condition for market efficiency</li>
              <li>The impact of spoofing and adverse selection</li>
              <li>Using price discovery and costs as measures of market efficiency</li>
            </div>
          </div>
        </div>

        <div 
          onClick={() => 
            setActiveCard(activeCard === 'effect-on-regulation' ? null : 'effect-on-regulation')} 
          className="flex-1 bg-black border border-gray-900 rounded-2xl p-6 cursor-pointer">
          <h2 className="text-2xl font-semi-bold mb-4 text-white">Regulation as an influence on HFT</h2>
          <ul className="text-white list-disc list-outside pl-4 space-y-2"></ul>
          <p>Pre-HFT approaches vs. Post-HFT approaches</p>
          <div
            className={`overflow-hidden transition-all duration-400
            ${activeCard === "effect-on-regulation"
            ? "max-h-40 opacity-100 mt-4"
            : "max-h-0 opacity-0"
      }`}
          >
            <div className="text-gray-300 text-s leading-relaxed">
              <li>SEC vs. MiFID II</li>
              <li>The relationship between innovation and regulation</li>
              <li>Enforcement and unintended consequences</li>
            </div>
          </div>
        </div>

        {/* Findings Section */}
        <div>
          <hr className="border-gray-700 my-6" />
          <h1 className="text-2xl font-bold mb-4 text-white">Findings and Insights</h1>
          <p className="text-gray-300 text-s leading-relaxed">
            To be direct, yes - HFT has undeniably transformed markets. </p>
          <p><strong>1.</strong> HFT strategy has improved liquidity and tightened spreads through superior price discovery and market making.</p>
          <p><strong>2.</strong> HFT allows for the greatest level of information incorporation, indicating a more efficient market.</p>
          <p><strong>3.</strong> HFT regulation has revealed that restrictions often fail to deter undesirable behaviour, instead changing incentives.</p>
          <p>Perhaps it is the strong integration with modern market infrastructure that makes HFT so impactful.</p>
        </div>

        {/* Shortcomings Section */}
        <div>
          <hr className="border-gray-700 my-6" />
          <h1 className="text-2xl font-bold mb-4 text-white">Shortcomings</h1>
          <p className="text-gray-300 text-s leading-relaxed">
            Despite this project providing a comprehensive analysis of the available literature,
            several limitation must be recognised. </p>
            <p><strong>1.</strong> The reliance on secondary data limits the ability to draw causal inferences about HFT's impact.</p>
            <p><strong>2.</strong> The rapidly evolving nature of HFT means that some findings may become outdated as new technologies and strategies emerge.</p>
            <p><strong>3.</strong> The impact of HFT varies greatly across different markets and time periods.</p>
            <p><strong>Future research could address these limitations by incorporating primary data collection, 
            exploring emerging HFT technologies, and conducting cross-market analyses. </strong>
          </p>
          <hr className="border-gray-700 mt-10" />
        </div>
      </div>

      {/* Download Buttons */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 flex space-x-4">

        <a 
          href="/documents/EPQ_Szymon_Wyrozumski.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <Link className="mr-2" />
          View Full EPQ Document
        </a>

        <a
          href="/documents/EPQ_diary.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <Link className="mr-2" />
          View EPQ Diary
        </a>
      </div>
    </main>
  );
}