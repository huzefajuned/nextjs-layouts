import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {/* Simulate loading title */}
      <div className="h-6 bg-gray-300 rounded w-1/3 animate-pulse"></div>

      {/* Simulate loading paragraph lines */}
      <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>

      {/* Simulate loading image or media */}
      <div className="h-40 bg-gray-300 rounded-md w-full animate-pulse"></div>
    </div>
  );
}
