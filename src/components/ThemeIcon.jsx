import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/solid";
import ThemeContext from "../context/ThemeContext";
const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={changeDarkMode}
      className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-2 xl:right-10 shadow-lg ${
        darkMode ? "shadow-gray-800" : null
      } transition duration-300 hover:scale-125`}
    >
      <MoonIcon
        className={`h-5 w-5 cursor-pointer stroke-1 fill-none  ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
