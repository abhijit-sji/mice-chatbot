import React from 'react';

const OutlinedButton = ({ children }) => {
  return (
    <button className="border-2 border-secondary text-black px-6 py-2 rounded-lg hover:bg-secondary hover:text-white transition duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default OutlinedButton;
