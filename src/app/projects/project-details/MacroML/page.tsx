import React from "react";
import BacktestWidget from "../../../components/backtest-widget";

export default function Page() {
  return (
    <main className="p-8 bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-14">ML Strategy Backtester</h1>

      {/* Backtest section */}
      <BacktestWidget />
    </main>
  );
}