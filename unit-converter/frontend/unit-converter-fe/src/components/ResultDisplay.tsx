interface ResultDisplayProps {
  result: string;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200 text-center">
      <p className="text-gray-500 text-xs uppercase tracking-wide">Result</p>
      <p className="text-xl font-bold text-black">{result}</p>
    </div>
  );
}
