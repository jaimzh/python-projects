import { useState } from "react";
import {
  ModeButton,
  LengthSection,
  WeightSection,
  TempSection,
  ResultDisplay,
} from "./components";

import {
  convertLength,
  convertWeight,
  convertTemperature,
  type ConversionResponse,
} from "./api/converter";

const modeDefaults = {
  length: { from: "meter", to: "meter" },
  weight: { from: "kilogram", to: "kilogram" },
  temperature: { from: "celsius", to: "fahrenheit" },
};

type Mode = "length" | "weight" | "temperature";

function App() {
  const [mode, setMode] = useState<Mode>("length");

  const [inputValue, setInputValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>(modeDefaults.length.from);
  const [toUnit, setToUnit] = useState<string>(modeDefaults.length.to);

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setFromUnit(modeDefaults[newMode].from);
    setToUnit(modeDefaults[newMode].to);
    setInputValue("");
    setResult(null);
    setError(null);
  };

  const handleConvert = async () => {
    if (!inputValue) return;

    try {
      let res: ConversionResponse;
      if (mode == "length") {
        res = await convertLength({
          value: Number(inputValue),
          from_unit: fromUnit,
          to_unit: toUnit,
        });
        setResult(res.result);
      } else if (mode == "weight") {
        res = await convertWeight({
          value: Number(inputValue),
          from_unit: fromUnit,
          to_unit: toUnit,
        });
        setResult(res.result);
      } else if (mode == "temperature") {
        res = await convertTemperature({
          value: Number(inputValue),
          from_unit: fromUnit,
          to_unit: toUnit,
        });
        setResult(res.result);
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Conversion failed";
      setError(errorMessage);
      setResult(null);
      console.error("Conversion failed:", error);
    }
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
            onClick={() => handleModeChange("length")}
          >
            Length
          </ModeButton>
          <ModeButton
            mode="weight"
            currentMode={mode}
            onClick={() => handleModeChange("weight")}
          >
            Weight
          </ModeButton>
          <ModeButton
            mode="temperature"
            currentMode={mode}
            onClick={() => handleModeChange("temperature")}
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
        <ResultDisplay result={result?.toString() ?? "0"} />

        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
