import React from "react";
import { motion } from "framer-motion";
import portfolio from "../assets/port.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-center px-6 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="md:w-1/2 max-w-3xl"
      >
        <h1 className="text-3xl md:text-6xl font-bold my-6">
          Hy, I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Collins Njogu
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-800 dark:text-gray-300 font-medium leading-relaxed">
          {" "}
          <span className="text-indigo-600 dark:text-indigo-400 text-2xl">
            Full-Stack Developer
          </span>{" "}
        </p>

        <p className="text-xl font-medium mb-8 text-gray-700 dark:text-gray-400 leading-relaxed">
          I’m a Frontend Developer with a strong focus on building modern,
          responsive, and user-friendly interfaces. I also have foundational
          experience in backend technologies using Node.js and databases,
          allowing me to contribute to full-stack solutions.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-semibold rounded-lg shadow-md transition duration-300"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
      >
        <img
          className="w-80 md:w-96 rounded-xl shadow-lg border-4 border-indigo-200 dark:border-indigo-400"
          src={portfolio}
          alt="Collins Njogu"
        />
      </motion.div>
    </section>
  );
};

export default Home;
