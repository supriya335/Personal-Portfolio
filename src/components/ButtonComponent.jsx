import React from 'react';

const ButtonComponent = ({ onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-500 text-white w-36 h-14 text-4xl rounded-lg ${className}`} // Use default blue color
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
