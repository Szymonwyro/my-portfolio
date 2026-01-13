import React from "react";
import BacktestWidget from "../../../components/backtest-widget";
const isApiAvailable = false; // Replace with actual API health check if needed

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-4xl text-center font-bold mb-6 text-white-600">Machine Learning Rolling Window Backtester</h1>
        <p className="text-xl text-white-700 mb-6">Interactive evaluation of a TensorFlow neural network predicting FX returns using rolling-window features.</p>
        <p className="text-xl text-white-700 mb-6">Machine Learning | Time Series | Backtesting | TensorFlow | Python</p>
      <div className="mt-6 grid grid-center grid-cols-6 md:grid-cols-1 gap-6" style={{ maxWidth: '948px', width: '100%' }}>

        {/* Backtest section */}
        <BacktestWidget />

        <p className="text-xl text-white-700 mb-6 text-center">Server status: {isApiAvailable ? "Online" : "Offline, backtest unavailable"}</p>
      </div>
    </main>
  );
}