import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2  dark:bg-gray-700 transition-colors duration-300  cursor-pointer"
    >
      {theme === "dark" ? (
        <FaSun className="text-gray-300 text-xl" />
      ) : (
        <FaMoon className="text-gray-100 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
