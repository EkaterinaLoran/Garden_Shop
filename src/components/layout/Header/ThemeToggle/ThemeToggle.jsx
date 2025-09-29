import React, { useState, useEffect } from "react";
import "./Header.css";
import App from "../DiscountBanner/DiscountBanner";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {" "}
      <span className={`toggle ${isDarkMode ? "on" : ""}`}></span>{" "}
    </button>
  );
};



export default App;
