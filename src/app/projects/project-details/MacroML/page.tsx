"use client";

import { useState } from "react";
import Backtest from "../../../components/backtest-plot"; // adjust path if needed
import { runBacktest } from "../../../utils/api";

export default function MacroML() {
  const [pair, setPair] = useState("EURUSD");
  const [data, setData] = useState<any[]>([]); // must be an array
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      const result = await runBacktest(pair);

      console.log("Backtest result:", result);

      // Convert object to array if needed
      const windowsArray = Array.isArray(result)
        ? result
        : Object.values(result || {});

      // Filter out undefined/null entries
      setData(windowsArray.filter(Boolean));
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Macro ML Backtest</h1>

      <div className="flex space-x-2">
        <input
          className="border p-2 rounded"
          value={pair}
          onChange={(e) => setPair(e.target.value.toUpperCase())}
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handleRun}
          disabled={loading}
        >
          {loading ? "Running..." : "Run Backtest"}
        </button>
      </div>

      {data.length > 0 && <Backtest data={data} />}
    </div>
  );
}