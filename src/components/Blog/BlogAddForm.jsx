import React, { useState } from "react";
import BlogInput from "./BlogInput";

import { nanoid } from "nanoid";
import { blogInputs } from "../../data/blogInputs";
import Modal from "../UI/Modal";
import { format } from "date-fns";

const initialFormData = {
  title: "",
  content: "",
  date: "",
  author: "",
};

const BlogAddForm = ({ blogs, setBlogs }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every(
      (data) => data.trim() !== "",
    );
    if (isFormValid) {
      const formattedDate = format(new Date(formData.date), "dd.MM.yyyy");
      setBlogs([{ ...formData, id: nanoid(), date: formattedDate }, ...blogs]);
      setFormData(initialFormData);
    } else {
      setIsShowModal(true);
    }
  };

  return (
    <div className="flex flex-col">
      <form
        className="flex flex-col rounded-2xl shadow-2xl shadow-black/30 bg-white/30 p-4 mt-15 gap-2 mx-auto min-w-80"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row gap-8">
          <div className="flex flex-col justify-between">
            {blogInputs.map((input) => (
              <BlogInput
                key={input.name}
                {...input}
                handleChange={handleChange}
                value={formData[input.name]}
              />
            ))}
          </div>

          <div>
            <label className="flex flex-col gap-2">
              Content
              <textarea
                rows="10"
                cols="54"
                className="bg-white/30 rounded-xl p-2 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 w-full"
                type="text"
                placeholder="Blog yazısı giriniz!"
                onChange={handleChange}
                name="content"
                value={formData.content}
              ></textarea>
            </label>
          </div>
        </div>

        <button
          className="mt-2 mx-auto cursor-pointer w-fit bg-blue-400/50 p-2 rounded-xl hover:bg-blue-500/80 hover:scale-105 hover:shadow-lg 
         transition duration-300 ease-in-out"
        >
          Add Blog
        </button>
      </form>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          title={"Input Error"}
          message={"Please fill all inputs!"}
        />
      )}
    </div>
  );
};

export default BlogAddForm;
