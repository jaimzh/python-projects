import React, { useState } from "react";
import {
  ModeButton,
  LengthSection,
  WeightSection,
  TempSection,
  ResultDisplay,
} from "./components";

function App() {
  const [mode, setMode] = useState<"length" | "weight" | "temperature">(
    "length",
  );

  const [inputValue, setInputValue] = useState<string>();
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");

  const handleConvert = () => {
    console.log("converting", {
      inputValue,
      fromUnit,
      toUnit,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Unit Converter
        </h2>

        {/* Unit Type Selector */}
        <div className="mb-6 flex justify-center gap-2">
          <ModeButton
            mode="length"
            currentMode={mode}
            onClick={() => setMode("length")}
          >
            Length
          </ModeButton>
          <ModeButton
            mode="weight"
            currentMode={mode}
            onClick={() => setMode("weight")}
          >
            Weight
          </ModeButton>
          <ModeButton
            mode="temperature"
            currentMode={mode}
            onClick={() => setMode("temperature")}
          >
            Temperature
          </ModeButton>
        </div>

        {/* Sections */}
        {mode === "length" && (
          <LengthSection
            onValueChange={(value) => setInputValue(value)}
            onFromUnitChange={(unit) => setFromUnit(unit)}
            onToUnitChange={(unit) => setToUnit(unit)}
          />
        )}
        {mode === "weight" && (
          <WeightSection
            onValueChange={(value) => setInputValue(value)}
            onFromUnitChange={(unit) => setFromUnit(unit)}
            onToUnitChange={(unit) => setToUnit(unit)}
          />
        )}
        {mode === "temperature" && (
          <TempSection
            onValueChange={(value) => {
              setInputValue(value);
            }}
            onFromUnitChange={(unit) => {
              setFromUnit(unit);
            }}
            onToUnitChange={(unit) => setToUnit(unit)}
          />
        )}

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition duration-200"
        >
          Convert
        </button>

        {/* Result */}
        <ResultDisplay result="0" />
      </div>
    </div>
  );
}

export default App;
