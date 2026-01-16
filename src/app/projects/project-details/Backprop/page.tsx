import WorkInProgress from "@/app/components/WorkInProgress";
import { Main } from "next/document";
import DigitRecognizer from "@/app/components/digit-widget";
import errorMessage from "@/app/components/digit-widget";
const isNNApiAvailable = false; // Replace with actual API health check if needed

export default function BackpropPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
      <h1 className="text-4xl text-center font-bold mb-6 text-white-600">ML Digit Recogniser</h1>
        <p className="text-xl text-white-700 mb-6">An interactive tool implementing backpropagation for digit recognition in Python.</p>
        <p className="text-xl text-white-700 mb-6">Machine Learning | Backpropagation | Python | FastAPI</p>
      
      <DigitRecognizer />
      {!isNNApiAvailable && (
        <div style={{ marginTop: 8 }}>
           <p style={{ color: "white", marginTop: 8 }}>
              Server status: Offline
            </p>
        </div>
      )}

    </main>
  );
}