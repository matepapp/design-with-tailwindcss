import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <div class="flex bg-gray-100">
        <div class="max-w-md px-8 py-12 mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
          <div class="xl:max-w-lg xl:ml-auto">
            <img class="h-10" src="../images/logo.svg" alt="Workcation" />
            <img
              class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="../images/beach-work.jpg"
              alt="Woman vocationing"
            />
            <h1 class="mt-6 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br class="hidden lg:inline" />
              <span class="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p class="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div class="mt-4 sm:mt-6">
              <a href="#" class="btn sm:text-base">
                Book your escape
              </a>
            </div>
          </div>
        </div>

        <div class="hidden lg:block lg:w-1/2 lg:relative">
          <img
            class="absolute inset-0 object-cover object-center w-full h-full"
            src="../images/beach-work.jpg"
            alt="Woman vocationing"
          />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
