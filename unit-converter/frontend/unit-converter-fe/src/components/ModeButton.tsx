interface ModeButtonProps {
  mode: "length" | "weight" | "temperature";
  currentMode: "length" | "weight" | "temperature";
  onClick: () => void;
  children: React.ReactNode;
}

export function ModeButton({
  mode,
  currentMode,
  onClick,
  children,
}: ModeButtonProps) {
  const isActive = mode === currentMode;
  return (
    <button
      className={`px-4 py-2 rounded transition ${
        isActive
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-white text-black border border-gray-300 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
