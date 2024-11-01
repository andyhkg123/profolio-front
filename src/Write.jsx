import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";

const Write = () => {
  const { currentUser } = useContext(AuthContext);

  // Initialize state safely to avoid potential null/undefined errors
  const [comment, setComment] = useState({
    email_blog: currentUser?.email || "",
    uid: currentUser?.userid || "",
    fullname_blog: currentUser?.fullname || "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_BACKVER;
      const res = await axios.post(`${apiUrl}/api/posts/addpost`, comment, {
        withCredentials: true, // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div>
      <form className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-2">Add a comment</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="content"
          >
            Comment
          </label>
          <textarea
            name="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            rows="3"
            placeholder="Enter your comment"
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
