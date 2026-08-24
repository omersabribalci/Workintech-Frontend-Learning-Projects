import React from "react";

const BlogInput = ({ label, type, placeholder, name, handleChange, value }) => {
  return (
    <label className="flex flex-col gap-2">
      {label}
      <input
        className="bg-white/30 rounded-xl p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </label>
  );
};

export default BlogInput;
