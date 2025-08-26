import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-[#fec857]"></div>
    </div>
  );
};

export default Spinner;
