import React from "react";
import useTheme from "../contexts/ThemeContext";

const ThemeButton = () => {
   const { themeMode, darkMode, lightMode } = useTheme();

  const handleCheckboxChange = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          value=""
          checked={themeMode == "dark"}
          onChange={handleCheckboxChange}
          className="sr-only"
        />

        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            themeMode == "dark" ? "bg-[#374151]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              themeMode == "dark" ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default ThemeButton;
