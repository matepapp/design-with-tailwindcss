import React, { useState } from "react";
import logo from "../images/logo-inverted.svg";
import { Dropdown } from "./Dropdown";

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img src={logo} alt="Workaction" className="h-8" />
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setOpen(prev => !prev)}
            className="block text-gray-500 focus:text-white focus:outline-none hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}

              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <a
          className="block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          href="#"
        >
          List your property
        </a>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          href="#"
        >
          Trips
        </a>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
          href="#"
        >
          Messages
        </a>
        <div className="ml-6">
          <Dropdown />
        </div>
      </nav>
    </header>
  );
};
