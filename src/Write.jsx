import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

const Write = () => {
  const { currentUser } = useContext(AuthContext);
  const [comment, Setcomment] = useState({
    email_blog: currentUser.email,
    uid: currentUser.userid,
    fullname_blog: currentUser.fullname,
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    Setcomment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(comment);
    console.log(currentUser);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/posts/addpost", comment);
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-bold mb-2">Add a comment</h3>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Title
          </label>
          <input
            name="title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="comment">
            Comment
          </label>
          <textarea
            name="content"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            rows="3"
            placeholder="Enter your comment"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Write;
