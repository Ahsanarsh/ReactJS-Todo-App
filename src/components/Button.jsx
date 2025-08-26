import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-lg sm:text-xl md:text-2xl text-[#D97706] font-medium 
                 border-2 border-[#D97706] rounded-md h-11 sm:h-12 px-4 
                 cursor-pointer hover:bg-[#D97706]/60 hover:text-[#111827] 
                 transition-all duration-300 ease-in-out"
    >
      {title}
    </button>
  );
};

export default Button;
