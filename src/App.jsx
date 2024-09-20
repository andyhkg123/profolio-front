import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./Home.jsx";
import Blog from "./Blog";
import Contact from "./Contact";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Project from "./Project.jsx";
import Particles from "../src/component/Particles.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* This will render the div 123 inside the layout */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projectspage/:id" element={<Project />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <Particles />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
