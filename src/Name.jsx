import React from "react";
import apple from "../src/assets/apple.jpeg";
import { motion } from "framer-motion";
import "./css/Name.css";
import profile from "../src/assets/Profile.jpeg";

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="flex-col mb-4 lg:mb-0 lg:mr-10 text-center">
          <div
            grid
            place-content-center
            gap-2
            bg-green-300
            px-8
            py-24
            text-black
          >
            <FlipLink href="#">Andy</FlipLink>
            <br />
            <FlipLink href="#">Wong</FlipLink>
          </div>

          <br />
          <div>
            <span className="typewriter bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Full Stack Developer
            </span>
          </div>
          <br />
          <div>
            Detail-oriented and analytical engineering professional with a
            strong foundation in construction project management and site
            supervision. Driven by a longstanding passion for coding since
            university, I have self-taught myself Python, Java, JavaScript,
            React, MongoDB, MySQL, Bootstrap, Tailwind, HTML, and CSS. Currently
            advancing my skills through a comprehensive front-end bootcamp
            focused on React, Node.js, and MongoDB. Eager to leverage my diverse
            technical expertise and problem-solving abilities in a developer
            role.
          </div>
        </div>
        <br />
        <div className=" flex items-center justify-center">
          <img src={profile} className="w-1/3"></img>
        </div>
        <br />
      </div>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Home;
