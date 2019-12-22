import React from "react";
import beachWork from "../images/beach-work.jpg";
import logo from "../images/logo.svg";

function IndexPage() {
  return (
    <div className="w-full h-full bg-gray-300">
      <div className="flex bg-gray-100">
        <div className="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src={logo} alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src={beachWork}
              alt="Woman vocationing"
            />
            <h1 className="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="btn sm:text-base">
                Book your escape
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 object-cover object-center w-full h-full"
            src={beachWork}
            alt="Woman vocationing"
          />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
