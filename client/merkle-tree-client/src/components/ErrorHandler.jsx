import React from "react";

const ErrorHandler = ({ errorText }) => {
  return (
    <div className="text-white text-center font-bold p-3 mb-3 rounded-md bg-red-600">
      <p>{errorText}</p>
    </div>
  );
};

export default ErrorHandler;
