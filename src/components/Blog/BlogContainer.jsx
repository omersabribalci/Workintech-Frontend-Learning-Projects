import React, { useState } from "react";
import BlogList from "./BlogList";
import BlogAddForm from "./BlogAddForm";
import blogData from "../../data/blogData";
import BlogDetails from "./BlogDetails";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [isReadMoreActive, setIsReadMoreActive] = useState(false);
  const [blogDetails, setBlogDetails] = useState({});

  return isReadMoreActive ? (
    <BlogDetails
      blogDetails={blogDetails}
      setIsReadMoreActive={setIsReadMoreActive}
    />
  ) : (
    <div className="flex flex-col gap-10">
      <BlogAddForm blogs={blogs} setBlogs={setBlogs} />
      {blogs.length === 0 ? (
        <p className="my-0 mx-auto">There is no blog post...</p>
      ) : (
        <BlogList
          blogs={blogs}
          setBlogs={setBlogs}
          setIsReadMoreActive={setIsReadMoreActive}
          setBlogDetails={setBlogDetails}
        />
      )}
    </div>
  );
};

export default BlogContainer;
