import React from "react";
import logo from "../images/logo-inverted.svg";

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-800">
      <div>
        <img src={logo} alt="Workaction" className="h-8" />
      </div>
      <div>
        <button
          type="button"
          className="block text-gray-500 focus:text-white focus:outline-none hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
