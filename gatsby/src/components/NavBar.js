import React, { useState } from "react";
import logo from "../images/logo-inverted.svg";

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img src={logo} alt="Workaction" className="h-8" />
        </div>
        <div>
          <button
            type="button"
            onClick={() => setOpen(prev => !prev)}
            className="block text-gray-500 focus:text-white focus:outline-none hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              {isOpen && (
                <path
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}

              {!isOpen && (
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} px-2 pt-2 pb-4`}>
        <a
          className="block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800"
          href="#"
        >
          List your property
        </a>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800"
          href="#"
        >
          Trips
        </a>
        <a
          className="block px-2 py-1 mt-1 font-semibold text-white rounded hover:bg-gray-800"
          href="#"
        >
          Messages
        </a>
      </div>
    </header>
  );
};
