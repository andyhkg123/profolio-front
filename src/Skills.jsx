import React from "react";
import ReactIcon from "./assets/ReactIcon.svg";
import TailwindIcon from "./assets/TailwindIcon.svg";
import nodeJSIcon from "./assets/nodeJSIcon.svg";
import MySQLIcon from "./assets/MySQLIcon.svg";
import MongoDBIcon from "./assets/MongoDBIcon.svg";
import JavascriptIcon from "./assets/JavascriptIcon.svg";
import JavaIcon from "./assets/JavaIcon.svg";
import htmlIcon from "./assets/htmlIcon.svg";
import cssIcon from "./assets/cssIcon.svg";
import bootstrapIcon from "./assets/bootstrapIcon.svg";
import "./css/Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="text-center item-center justify-center ">
        <span className="typewriter bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Skills
        </span>
      </div>

      <div className="flex flex-wrap justify-center ">
        <div className="m-3">
          <img className="zoom m-3" src={ReactIcon}></img>
          <div className="text-center">React</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={TailwindIcon}></img>
          <div className="text-center">Tailwind</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={JavascriptIcon}></img>
          <div className="text-center">Javascript</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={JavaIcon}></img>
          <div className="text-center">Java</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={nodeJSIcon}></img>
          <div className="text-center">NodeJS</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={MySQLIcon}></img>
          <div className="text-center">MySQL</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={MongoDBIcon}></img>
          <div className="text-center">MongoDB</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={htmlIcon}></img>
          <div className="text-center">HTML5</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={cssIcon}></img>
          <div className="text-center">CSS</div>
        </div>
        <div className="m-3">
          <img className="zoom m-3" src={bootstrapIcon}></img>
          <div className="text-center">Bootstrap</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
