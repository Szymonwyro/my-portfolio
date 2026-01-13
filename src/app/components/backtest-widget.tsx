"use client"
import React, { useState } from "react";
import Plot from "react-plotly.js";

const fxPairs = ["EURUSD", "GBPUSD", "USDJPY"];
const windows = ["1d", "5d", "10d"];

export default function BacktestWidget() {
  const [selectedPair, setSelectedPair] = useState(fxPairs[0]);
  const [selectedWindow, setSelectedWindow] = useState(windows[0]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [resultsPair, setResultsPair] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleBacktest = async () => {
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/backtest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pair: selectedPair }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Backtest failed");
      }

      const data = await response.json();
      setResults(data);
      setResultsPair(selectedPair);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderCharts = () => {
    if (!results) return null;

    const windowData = results[selectedWindow];
    if (!windowData) return <p className="text-red-500">No data for this window.</p>;

    return (
      <div className="mt-4 space-y-6">
        {/* Price vs Prediction */}
        <Plot
          data={[
            { x: windowData.dates, y: windowData.price, type: "scatter", mode: "lines", name: "Price" },
            { x: windowData.dates, y: windowData.prediction, type: "scatter", mode: "lines", name: "Prediction" },
          ]}
          layout={{
            title: {text: `${resultsPair} Price & Prediction (${selectedWindow})`},
            xaxis: { title: "Date" },
            yaxis: { title: "Price" } }}
          style={{ width: "100%", height: "400px" }}
        />

        {/* Cumulative PnL */}
        <Plot
          data={[
            { x: windowData.dates, y: windowData.pnl, type: "scatter", mode: "lines", name: "Cumulative PnL" },
          ]}
          layout={{
            title: {text: `${resultsPair} Cumulative PnL (${selectedWindow})`},
            xaxis: { title: "Date" },
            yaxis: { title: "PnL (%)" } }}
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    );
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-3xl mx-auto">
      <h2 className="text-lg font-bold mb-2">FX Backtest</h2>

      <div className="mb-2 flex gap-4 items-center">
        <label>
          Pair:
          <select
            value={selectedPair}
            onChange={(e) => setSelectedPair(e.target.value)}
            className="ml-2 p-1 border rounded "
          >
            {fxPairs.map((pair) => (
              <option key={pair} value={pair}>{pair}</option>
            ))}
          </select>
        </label>

        <label>
          Rolling Window:
          <select
            value={selectedWindow}
            onChange={(e) => setSelectedWindow(e.target.value)}
            className="ml-2 p-1 border rounded"
          >
            {windows.map((w) => (
              <option key={w} value={w}>{w}</option>
            ))}
          </select>
        </label>

        <button
          onClick={handleBacktest}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Running..." : "Backtest"}
        </button>
      </div>

      {loading && <p className="text-gray-500">Backtesting {selectedPair} with {selectedWindow} window...</p>}

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {results && resultsPair && resultsPair !== selectedPair && (
        <p className="text-yellow-600 mt-2">
          ⚠ The charts are showing results for <strong>{resultsPair}</strong>. 
            Select "Backtest" to update for <strong>{selectedPair}</strong>.
        </p>
      )}
    
    {renderCharts()}

    </div>

      

  );
}