import React from "react";
import BacktestWidget from "../../../components/backtest-widget";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-center mb-14">ML Strategy Backtester</h1>

      {/* Backtest section */}
      <BacktestWidget />
    </main>
  );
}