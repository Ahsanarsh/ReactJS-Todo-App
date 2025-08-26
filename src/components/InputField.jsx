import React from "react";

const InputField = ({ type, onChange, value, placeHolder }) => {
  return (
    <>
      <input
        type={type}
        className="flex-1 text-[#D97706] h-12 px-3 text-2xl md:text-2xl font-normal border-2 
                     border-[#D97706] rounded-md focus:outline-none focus:bg-[#D97706]/60 
                     focus:text-[#111827] w-full"
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
      />
    </>
  );
};

export default InputField;
