import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Project = () => {
  const [project, setProject] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const cat = useLocation().pathname;
  const id = cat.split("/")[2];

  useEffect(() => {
    async function fetchData() {
      const apiUrl = import.meta.env.VITE_BACKVER;
      try {
        const res = await axios.get(`/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false); // Set loading to false after fetch
      }
    }
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>; // Render loading indicator
  }

  return (
    <>
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {project.name}
      </h1>
      <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        {project.desc}
      </p>
      <br />
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-center items-center h-screen">
          <img
            className="text-center"
            src={project.display_one}
            alt="Project Display"
          />
        </div>

        <div className="flex justify-center items-center h-screen">
          <img
            className="text-center"
            src={project.display_two}
            alt="Project Display"
          />
        </div>
        {project.display_three && (
          <div className="flex justify-center items-center h-screen">
            <img
              className="text-center"
              src={project.display_three}
              alt="Project Display"
            />
          </div>
        )}

        {project.display_four && (
          <div className="flex justify-center items-center h-screen">
            <img
              className="text-center"
              src={project.display_four}
              alt="Project Display"
            />
          </div>
        )}

        {project.video_link && (
          <div className="flex justify-center items-center h-screen">
            <video src={project.video_link} width="720" height="680" controls />
          </div>
        )}
      </div>

      {project.git_link && (
        <div className="flex justify-center">
          <a
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            href={project.git_link}
          >
            Click this link to Github
          </a>
        </div>
      )}
      <br />
      {project.git_back_link && (
        <div className="flex justify-center">
          <a
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            href={project.git_back_link}
          >
            Click this link to Github (backend)
          </a>
        </div>
      )}
      <br />

      {project.deployment && (
        <div className="flex justify-center">
          <a
            className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
            href={project.deployment}
          >
            Click this link to deployment
          </a>
        </div>
      )}
    </>
  );
};

export default Project;
