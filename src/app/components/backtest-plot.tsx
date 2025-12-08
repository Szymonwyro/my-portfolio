"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { runBacktest } from "../utils/api";

interface WindowData {
  window: number;
  dates: string[];
  prices: number[];
  predicted_prices: number[];
  cumulative_pnl: number[];
}

interface BacktestProps {
  data: WindowData[];
}

export default function Backtest({ data }: BacktestProps) {
  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="space-y-8">
      {data.map((windowData, idx) => {
        if (!windowData?.dates) return null;

        const chartData = windowData.dates.map((d, i) => ({
          date: d,
          Price: windowData.prices?.[i] ?? 0,
          Predicted: windowData.predicted_prices?.[i] ?? 0,
          CumulativePnL: windowData.cumulative_pnl?.[i] ?? 0,
        }));

        return (
          <div key={windowData.window ?? idx}>
            <h2 className="font-bold mb-2">Window: {windowData.window}d</h2>

            <LineChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Price" stroke="#8884d8" />
              <Line type="monotone" dataKey="Predicted" stroke="#82ca9d" />
              <Line type="monotone" dataKey="CumulativePnL" stroke="#ff7300" />
            </LineChart>
          </div>
        );
      })}
    </div>
  );
}