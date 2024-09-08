import React from "react";

const Loading = () => {
  return (
    <div className="p-10">
      <div className="animate-pulse space-y-4">
        {/* Simulating a product card */}
        <div className="bg-gray-300 h-64 w-full rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default Loading;
