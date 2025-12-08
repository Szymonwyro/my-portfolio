export async function runBacktest(pair: string, windows: number[] = [1,5,10]) {
  const res = await fetch("http://127.0.0.1:8000/backtest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pair, windows }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Unknown error");
  }

  return res.json(); // Returns the backtest JSON
}