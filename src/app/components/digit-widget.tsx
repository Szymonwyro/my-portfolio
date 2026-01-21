"use client";
import React, { useRef, useState, useEffect } from 'react';


const CANVAS_SIZE = 200;
const MNIST_SIZE = 28;
// const [error, setError] = useState<string | null>(null);

const DigitRecognizer: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [prediction, setPrediction] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Function to start drawing
    const startDrawing = (e: React.MouseEvent) => {
        setIsDrawing(true);
        draw(e);
    };

    // Function to stop drawing
    const stopDrawing = () => {
        setIsDrawing(false);
        const ctx = canvasRef.current?.getContext('2d');
        ctx?.beginPath();
    };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  // ---------- Clear ----------
  const clearCanvas = () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    setPrediction(null);
    setErrorMessage(null);
  };

  // ---------- Preprocessing ----------
  const getPixels = (): number[] => {
    const canvas = canvasRef.current!;
    const smallCanvas = document.createElement("canvas");
    smallCanvas.width = MNIST_SIZE;
    smallCanvas.height = MNIST_SIZE;

    const ctx = smallCanvas.getContext("2d")!;
    ctx.drawImage(canvas, 0, 0, MNIST_SIZE, MNIST_SIZE);

    const imageData = ctx.getImageData(0, 0, MNIST_SIZE, MNIST_SIZE).data;
    const pixels: number[] = [];

    for (let i = 0; i < imageData.length; i += 4) {
      const grayscale = imageData[i]; // R channel
      pixels.push(grayscale / 255);
    }

    return pixels;
  };

  // ---------- Predict ----------
  const predictDigit = async () => {
  setLoading(true);
  setPrediction(null);
  setErrorMessage(null);

  const pixels = getPixels();

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pixels }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.detail || "Prediction failed");
    }

    const data = await response.json();
    setPrediction(data.prediction);
  } catch (err: any) {
        setErrorMessage("Prediction failed.");

    if (err.name === "AbortError") {
      setErrorMessage("Server timeout — prediction unavailable.");
    } else {
      setErrorMessage("Server offline — prediction unavailable.");
    }
  } finally {
    setLoading(false);
  }
};

  // ---------- Init Canvas ----------
  React.useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div style={{ 
        width: 320,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",}}>

      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onMouseMove={draw}
        style={{
          border: "2px solid #063052",
          borderRadius: 8,
          backgroundColor: "black",
          cursor: "crosshair",
        }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={predictDigit} disabled={loading} style={{ marginLeft: 10 }}>
          Predict
        </button>
      </div>

      <div style={{ marginTop: 15 }}>
        {loading && <p>Predicting...</p>}

        {prediction !== null && (
          <p>
            <strong>Prediction:</strong> {prediction}
          </p>
        )}

        {errorMessage && (
            <p style={{ color: "red" }}>{errorMessage}</p>
        )}
        </div>
    </div>
  );
};

export default DigitRecognizer;
function setError(arg0: null) {
    throw new Error('Function not implemented.');
}

