import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-amber-100 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Unit Converter
        </h2>

        {/* Unit Type Selector */}
        <div className="mb-6">
          <ul className="flex justify-center gap-4">
            <li className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition">
              Length
            </li>
            <li className="bg-white text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
              Weight
            </li>
            <li className="bg-white text-gray-700 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition">
              Temperature
            </li>
          </ul>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Enter the length to convert
            </label>
            <input
              type="number"
              name="length"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Unit to convert from
            </label>
            <select
              name="fromUnit"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-white"
            >
              <option value="meters">Meters</option>
              <option value="feet">Feet</option>
              <option value="inches">Inches</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Unit to convert to
            </label>
            <select
              name="toUnit"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-white"
            >
              <option value="feet">Feet</option>
              <option value="meters">Meters</option>
              <option value="inches">Inches</option>
            </select>
          </div>
        </div>

        {/* Convert Button */}
        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
          Convert
        </button>

        {/* Result Display */}
        <div className="mt-6 p-4 bg-white rounded-lg text-center">
          <p className="text-gray-600 text-sm">Result</p>
          <p className="text-2xl font-bold text-gray-800">0</p>
        </div>
      </div>
    </div>
  );
}

export default App;