

interface TempSectionProps {
  onValueChange: (val: string) => void;
  onFromUnitChange: (unit: string) => void;
  onToUnitChange: (unit: string) => void;
}

export function TempSection({
  onValueChange,
  onFromUnitChange,
  onToUnitChange,
}: TempSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Enter the temperature to convert
        </label>
        <input
          onChange={(e) => {
            onValueChange(e.target.value);
          }}
          type="number"
          name="temperature"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none"
          placeholder="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">
          Unit to convert from
        </label>
        <select
          onChange={(e) => {
            onFromUnitChange(e.target.value);
          }}
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
          onChange={(e) => {
            onToUnitChange(e.target.value);
          }}
          name="toUnit"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:border-black focus:outline-none bg-white"
        >
          <option value="fahrenheit">Fahrenheit</option>
          <option value="celsius">Celsius</option>
          <option value="kelvin">Kelvin</option>
        </select>
      </div>
    </div>
  );
}
