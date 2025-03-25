import React from 'react'

type ErrorProps = {
  error: string | null;
  refetch: () => void;
}

export const ErrorComponent = ({error, refetch}: ErrorProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <div className="text-center p-6 max-w-md">
        <p className="text-red-500 mb-4 text-3xl">Error: {error}</p>
        <button 
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    </div>
  )
}