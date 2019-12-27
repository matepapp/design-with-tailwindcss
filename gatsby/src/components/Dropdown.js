import React, { useEffect, useState } from "react";
import { useKeyPress } from "../hooks/useKeyPress";

export const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const isEscapePressed = useKeyPress("Escape");
  useEffect(() => {
    isEscapePressed && setOpen(false);
  }, [isEscapePressed]);

  return (
    <div className="relative">
      <button className="relative z-20 block w-8 h-8 overflow-hidden border-2 border-gray-600 rounded-full focus:outline-none focus:border-white">
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
          className="object-cover w-full h-full"
          onClick={() => setOpen(prev => !prev)}
        />
      </button>
      {isOpen && (
        <button
          tabIndex="-1"
          className="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default"
          onClick={() => setOpen(false)}
        />
      )}
      {isOpen && (
        <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Account settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Support
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Sign out
          </a>
        </div>
      )}
    </div>
  );
};
