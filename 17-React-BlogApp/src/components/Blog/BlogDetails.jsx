import React from "react";

const BlogDetails = ({ blogDetails, setIsReadMoreActive }) => {
  return (
    <div className="max-w-3xl mx-auto my-20 p-8 bg-white/30 rounded-xl shadow-lg shadow-black/20 text-justify ">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {blogDetails.title}
      </h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        {blogDetails.content}
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mb-6">
        <span>{blogDetails.date}</span>
        <span>{blogDetails.author}</span>
      </div>
      <button
        onClick={() => setIsReadMoreActive(false)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
      >
        Back
      </button>
    </div>
  );
};

export default BlogDetails;
