import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" bg-custom text-white rounded-md px-3 py-2 text-sm font-medium">
              <p>Logo</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <button
                  className="border border-solid border-custom text-custom hover:bg-custom hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Start a Project
                </button>
                <a
                  href="#"
                  className="text-gray-400 hover:bg-custom hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Explore Project
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:bg-custom hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Stories
                </a>
              </div>
            </div>
          </div>
          <div className=" items absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 items-center">
            <div class="flex items-center">
              <input
                type="text"
                class="px-4 py-2 rounded-l w-3/4 input-search placeholder-transparent"
                placeholder=" "
              />
              <button class="px-4 py-2 rounded-r  text-gray-400">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                  ></path>
                </svg>
              </button>
            </div>
            <button className="hover:bg-custom hover:text-white text-custom font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <button
            href="#"
            className="border border-solid border-blue-400 text-blue-400 block hover:bg-custom hover:text-white rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Start a Project
          </button>
          <a
            href="#"
            className="text-gray-400 hover:bg-custom hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Explore Project
          </a>
          <a
            href="#"
            className="text-gray-400 hover:bg-custom hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Stories
          </a>
        </div>
      </div>
    </nav>
  );
}
