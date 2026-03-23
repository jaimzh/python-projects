import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState<"length" | "weight" | "temperature">(
    "length",
  );
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Unit Converter
        </h2>

        {/* Unit Type Selector */}
        <div className="mb-6">
          <ul className="flex justify-center gap-2">
            <li
              className={
                mode === "length"
                  ? "bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800 transition"
                  : "bg-white text-black px-4 py-2 rounded border border-gray-300 cursor-pointer hover:bg-gray-100 transition"
              }
              onClick={()=>{setMode("length")}}
            >
              Weight
            </li>
            <li
              className={
                mode === "weight"
                  ? "bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800 transition"
                  : "bg-white text-black px-4 py-2 rounded border border-gray-300 cursor-pointer hover:bg-gray-100 transition"
              }
              onClick={()=>{setMode("weight")}}
            >
              Length
            </li>
            <li
              className={
                mode === "temperature"
                  ? "bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800 transition"
                  : "bg-white text-black px-4 py-2 rounded border border-gray-300 cursor-pointer hover:bg-gray-100 transition"
              }
              onClick={()=>{setMode("temperature")}}
            >
              Temperature 
            </li>
          </ul>
        </div>


        {/* Input Section */}


        {mode=== "length" && LengthSection()}
        {mode=== "weight" && WeightSection()}
        {mode=== "temperature" && TempSection()}
      

    
        {/* Convert Button */}
        <button className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition duration-200">
          Convert
        </button>

        {/* Result Display */}
        <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-wide">
            Result
          </p>
          <p className="text-xl font-bold text-black">0</p>
        </div>
      </div>
    </div>
  );
}




export default App;
function TempSection() {
  return <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Enter the temperature to convert
      </label>
      <input
        type="number"
        name="temperature"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none"
        placeholder="0" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Unit to convert from
      </label>
      <select
        name="fromUnit"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
      >
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Unit to convert to
      </label>
      <select
        name="toUnit"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
      >
        <option value="fahrenheit">Fahrenheit</option>
        <option value="celsius">Celsius</option>
        <option value="kelvin">Kelvin</option>
      </select>
    </div>
  </div>;
}

function WeightSection() {
  return <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Enter the weight to convert
      </label>
      <input
        type="number"
        name="weight"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none"
        placeholder="0" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Unit to convert from
      </label>
      <select
        name="fromUnit"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
      >
        <option value="kilograms">Kilograms</option>
        <option value="grams">Grams</option>
        <option value="pounds">Pounds</option>
        <option value="ounces">Ounces</option>
        <option value="stones">Stones</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Unit to convert to
      </label>
      <select
        name="toUnit"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
      >
        <option value="grams">Grams</option>
        <option value="kilograms">Kilograms</option>
        <option value="pounds">Pounds</option>
        <option value="ounces">Ounces</option>
        <option value="stones">Stones</option>
      </select>
    </div>
  </div>;
}

function LengthSection() {
  return <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Enter the length to convert
      </label>
      <input
        type="number"
        name="length"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none"
        placeholder="0" />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Unit to convert from
      </label>
      <select
        name="fromUnit"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
      >
        <option value="meters">Meters</option>
        <option value="feet">Feet</option>
        <option value="inches">Inches</option>
        <option value="centimeters">Centimeters</option>
        <option value="kilometers">Kilometers</option>
        <option value="miles">Miles</option>
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        Unit to convert to
      </label>
      <select
        name="toUnit"
        className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
      >
        <option value="feet">Feet</option>
        <option value="meters">Meters</option>
        <option value="inches">Inches</option>
        <option value="centimeters">Centimeters</option>
        <option value="kilometers">Kilometers</option>
        <option value="miles">Miles</option>
      </select>
    </div>
  </div>;
}

