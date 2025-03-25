import { LuRotateCw } from "react-icons/lu";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <div className="flex flex-col items-center gap-2">
        <LuRotateCw className="h-20 w-20 animate-spin text-blue-600" />
        <p className="text-gray-600 text-2xl">Loading data...</p>
      </div>
    </div>
  );
}