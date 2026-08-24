import React from "react";

const BlogItem = ({
  id,
  title,
  content,
  date,
  author,
  blogs,
  blog,
  setBlogs,
  setIsReadMoreActive,
  setBlogDetails,
}) => {
  const handleClick = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 p-4 my-4 rounded-2xl shadow-2xl shadow-black/30 bg-white/30 w-80 hover:shadow-3xl hover:scale-105 transition duration-600 ease-in-out h-full justify-between">
      <h1 className="text-xl font-bold text-gray-800 truncate">{title}</h1>
      <p className="line-clamp-4 text-justify text-gray-700 hover:text-gray-900 transition duration-300">
        {content}
      </p>
      <a
        href="#"
        className="text-green-600 font-medium hover:text-green-700 hover:underline transition duration-300"
        onClick={() => {
          setBlogDetails(blog);
          setIsReadMoreActive(true);
        }}
      >
        Read more...
      </a>
      <span className="text-sm text-gray-500">{date}</span>
      <span className="text-sm text-gray-500 italic">{author}</span>
      <button
        className="mx-auto bg-red-500/90 text-white px-3 py-1 rounded-lg hover:bg-red-600 hover:shadow-md transition duration-300 cursor-pointer"
        onClick={() => {
          handleClick(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogItem;
