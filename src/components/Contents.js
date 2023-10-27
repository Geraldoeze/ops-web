import React from "react";

export default function Contents() {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="font-bold my-4 text-2xl md:text-3xl text-gray-900">
        SIKE OPS DIVISION
      </h2>

      <div className="flex flex-col justify-center h-[70vh]">
        <form>
          <h3 className="my-6 text-center text-xl md:text-2xl">
            Kindly Fill all Forms
          </h3>
          <div className="my-6 w-4/5 md:w-[450px] mx-auto">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Name"
              require
            />
          </div>
          <div className="my-6 w-4/5 md:w-[450px] mx-auto">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Occupation
            </label>
            <input
              type="text"
              id="first_name"
              class=" peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Occupation"
              require
            />
            <p class="invisible peer-invalid:visible text-red-700 font-light">
              Please enter your full name
            </p>
          </div>
          <div class="flex justify-center mt-8 w-4/5 md:w-[450px] mx-auto">
            <div class=" rounded-lg shadow-xl bg-gray-50 dark:bg-gray-200">
              <div class="m-4">
                <label class="inline-block mb-2 text-gray-500">
                  Kindly Upload an Image
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        Upload an Image
                      </p>
                    </div>
                    <input type="file" class="opacity-0" />
                  </label>
                </div>
              </div>
              {/* <div class="flex justify-center p-2">
                <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">
                  Create
                </button>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
