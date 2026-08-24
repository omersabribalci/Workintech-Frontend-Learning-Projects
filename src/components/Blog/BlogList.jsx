import BlogItem from "./BlogItem";

const BlogList = ({ blogs, setBlogs, setIsReadMoreActive, setBlogDetails }) => {
  return (
    <div className="px-10 py-5 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] place-items-center gap-10">
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          blog={blog}
          {...blog}
          blogs={blogs}
          setBlogs={setBlogs}
          setIsReadMoreActive={setIsReadMoreActive}
          setBlogDetails={setBlogDetails}
        />
      ))}
    </div>
  );
};

export default BlogList;
