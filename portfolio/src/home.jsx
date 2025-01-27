import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "./assets/port.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold my-6">
          Hi, I'm <span className="text-indigo-500">Collins Njogu</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          I'm a <span className="text-indigo-400">Full-Stack Developer</span>{" "}
          passionate about building modern and user-friendly web applications.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold rounded-lg shadow-md transition"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-6 justify-center text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
