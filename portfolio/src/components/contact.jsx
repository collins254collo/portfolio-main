import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPopupMessage("Message Sent Successfully!");
      setPopup(true);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const closePopup = () => setPopup(false);

  return (
    <section id="contact" className="relative py-16 bg-gray-900  text-white">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={loadFull}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { speed: 1 },
            links: { enable: true, color: "#ffffff", opacity: 0.3 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-indigo-400 mb-8"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-lg mb-8"
        >
          Have a question or want to collaborate? Drop me a message below.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg p-6"
          >
            {["name", "email", "message"].map((field, index) => (
              <div className="mb-4" key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium mb-2"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    rows="4"
                    placeholder={`Your ${field}`}
                    value={formData[field]}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    placeholder={`Your ${field}`}
                    value={formData[field]}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition relative flex justify-center items-center cursor-pointer"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-lg font-medium mb-4">
              You can also reach me on:
            </p>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/collins254collo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/collinsnjogu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:wamiatucollins@gmail.com"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup Message */}
      {popup && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg">
          {popupMessage}
          <button
            onClick={closePopup}
            className="ml-3 text-gray-200 hover:text-white"
          >
            X
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
