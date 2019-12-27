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

      <nav className={`${isOpen ? "block" : "hidden"} sm:block`}>
        <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
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
          <div className="hidden sm:block sm:ml-6">
            <Dropdown />
          </div>
        </div>
        <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              alt="Your avatar"
              className="object-cover w-8 h-8 border-2 border-gray-600 rounded-full"
              onClick={() => setOpen(prev => !prev)}
            />
            <span className="ml-3 font-semibold text-white">Jane Doe</span>
          </div>
          <div className="mt-4">
            <a href="#" className="block text-gray-400 hover:text-white">
              Account settings
            </a>
            <a href="#" className="block mt-2 text-gray-400 hover:text-white">
              Support
            </a>
            <a href="#" className="block mt-2 text-gray-400 hover:text-white">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
