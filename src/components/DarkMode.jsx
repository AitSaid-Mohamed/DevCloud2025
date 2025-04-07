import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-black hover:scale-110 transition-all duration-300 ease-in-out shadow-md dark:shadow-gray-900"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <div className="transition-transform transform duration-300 ease-in-out">
        {darkMode ? (
          // Icône de mode clair (Soleil)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-yellow-500 hover:text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M12 3.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm0 14.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.964 6.964a.75.75 0 011.06 0l1.061 1.061a.75.75 0 11-1.061 1.061L6.964 8.025a.75.75 0 010-1.06zm9.193 9.193a.75.75 0 011.06 0l1.061 1.061a.75.75 0 11-1.06 1.06l-1.061-1.06a.75.75 0 010-1.061zM3.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 01-.75-.75zm14.5 0a.75.75 0 01.75-.75h1.5a.75.75 0 110 1.5h-1.5a.75.75 0 01-.75-.75zm-9.193 5.036a.75.75 0 010 1.06l-1.061 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.062 0zm9.193-9.193a.75.75 0 010 1.06l-1.061 1.061a.75.75 0 01-1.06-1.061l1.06-1.061a.75.75 0 011.061 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Icône de mode sombre (Lune)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-200 dark:text-gray-800 hover:text-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M21.75 15.002A9.718 9.718 0 0112 21c-5.523 0-10-4.477-10-10a9.72 9.72 0 018-9.752.75.75 0 01.903.904A8.252 8.252 0 1020.848 15.85a.75.75 0 01.903-.903c.136.03.27.066.403.103a9.68 9.68 0 01-.404-.048z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;
