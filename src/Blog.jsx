import React, { useEffect, useState, useContext } from "react";
import Write from "./Write";
import { AuthContext } from "./context/AuthContext";

const Blog = () => {
  const [posts, Setposts] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/`);
        const newData = await res.json();

        // Convert the date format
        const formattedData = newData.map((post) => {
          const date = new Date(post.date);
          post.date = date
            .toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })
            .replace(",", "");
          return post;
        });

        Setposts(formattedData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="text-center">Leave some comments for Andy!</div>
      <div className="bg-gray-100 p-6">
        <h2 className="text-lg font-bold mb-4">Comments</h2>

        <div className="flex flex-col space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-700 text-sm mb-2">{post.fullname_blog}</p>
              <p className="text-gray-700 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
      {currentUser ? <Write /> : <div></div>}
    </>
  );
};

export default Blog;
