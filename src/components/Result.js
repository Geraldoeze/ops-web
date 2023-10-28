import React from "react";
import Barcode from "./barcode/Barcode";

export default function Result() {
  
  return (
    <div>
      <div
        id="static-modal"
        tabindex="-1"
        className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-100">
            <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900">Details</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="max-w-lg relative flex bg-[#fff8dc] h-[300px] border border-gray-300 rounded-lg shadow ">
                <div class="vertical w-[40px] h-[280px] py-5 pr-3 font-semibold">
                  SIKE OPS DIVISION
                </div>{" "}
                <div className="vertical w-[60px] bg-[#3d7410] py-5 pr-2 text-4xl font-semibold text-white">
                  NO ESCORT
                </div>
                <div className="flex-1 ml-2">
                  <div className="flex h-[200px] p-8 items-center gap-2 justify-between flex-1">
                    <div className="w-[50%] mt-5">
                      <h4 className="border-b rounded-t border-gray-600 w-full">Joseph Malik </h4>
                      <h4 className="w-full">Civil Servant</h4>
                    </div>
                    <div>
                      <img src="assets/image3.png" alt="i" width={180} height={180} />
                    </div>
                  </div>
                  <Barcode />
                </div>
              </div>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
