import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container fixed z-50 left-0 right-0 flex flex-row justify-between items-center px-3 py-4 bg-black md:bg-transparent shadow-xl md:absolute lg:px-1 md:py-6 md:h-24 md:border-b-2 md:border-gray-400 md:shadow-none md:from-transparent md:to-transparent lg:w-full">
      <div className="flex flex-row items-center ml-1.5 space-x-4">
        <Link href="/">
          <a>
            <div className="w-40 relative h-8">
              <Image layout="fill" src="/peyton.svg" alt="Peyton Logo" />
            </div>
          </a>
        </Link>
      </div>
      <button
        className="block mr-1 text-white
         lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className="lg:flex space-x-10 hidden">
        <Link href="/portfolio">
          <a className="text-gray-300 opacity-80 font-extrabold text-sm tracking-widest transform uppercase hover:scale-105 duration-300 hover:text-green-200 hover:opacity-70">
            Portfolio
          </a>
        </Link>
        <Link href="/about">
          <a className="text-gray-300 opacity-80 font-extrabold text-sm tracking-widest transform uppercase hover:scale-105 duration-300 hover:text-green-200 hover:opacity-70">
            About
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-gray-300 opacity-80 font-extrabold text-sm tracking-widest transform uppercase hover:scale-105 duration-300 hover:text-green-200 hover:opacity-70">
            BLOG
          </a>
        </Link>
      </div>
      <div className="hidden lg:flex flex-row">
        <a href="/clevelandResume.pdf" download>
          <button className="h-10 bg-deep-gray bg-opacity-70 hover:bg-deep-gray hover:bg-opacity-50 px-8 border-2 text-white flex justify-center items-center text-sm font-extrabold transform uppercase hover:scale-105 duration-300 tracking-widest">
            RESUMé{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 -mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </a>
        <Link href="/contact">
          <button className="ml-6 px-8 h-10 text-black text-sm font-extrabold tracking-widest bg-white hover:bg-gray-300 shadow-xl transform uppercase hover:scale-105 duration-300">
            CONTACT ME
          </button>
        </Link>
      </div>
      <div
        className={classNames(
          // Common classes
          "absolute inset-x-0 top-0 transform origin-top-right transition lg:hidden",
          {
            block: open === true,
          },
          {
            hidden: open === false,
          }
        )}
      >
        <div className="shadow-lg ring-black ring-opacity-5 ring-1 bg-black">
          <div
            style={{ paddingLeft: `18px`, paddingRight: `18px` }}
            className="pb-6 pt-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <Link href="/">
                  <a>
                    <div className="w-40 relative h-8">
                      <Image
                        layout="fill"
                        src="/peyton.svg"
                        alt="Peyton Logo"
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="inline-flex items-center justify-center p-2 text-deep-gray bg-white focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="#"
                  className="flex items-center -m-3 p-3 hover:bg-gray-50 rounded-md"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-200 text-base font-medium">
                    Analytics
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center -m-3 p-3 hover:bg-gray-50 rounded-md"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span className="ml-3 text-gray-200 text-base font-medium">
                    Engagement
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center -m-3 p-3 hover:bg-gray-50 rounded-md"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-200 text-base font-medium">
                    Security
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center -m-3 p-3 hover:bg-gray-50 rounded-md"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span className="ml-3 text-gray-200 text-base font-medium">
                    Integrations
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center -m-3 p-3 hover:bg-gray-50 rounded-md"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="ml-3 text-gray-200 text-base font-medium">
                    Automations
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <hr className="mx-4 border-primary" />
          <div className="px-5 py-6 space-y-6">
            <div className="grid gap-x-8 gap-y-4 grid-cols-2">
              <a
                href="#"
                className="hover:text-gray-700 text-primary text-base font-medium"
              >
                Pricing
              </a>

              <a
                href="#"
                className="hover:text-gray-700 text-primary text-base font-medium"
              >
                Docs
              </a>

              <a
                href="#"
                className="hover:text-gray-700 text-primary text-base font-medium"
              >
                Help Center
              </a>

              <a
                href="#"
                className="hover:text-gray-700 text-primary text-base font-medium"
              >
                Guides
              </a>

              <a
                href="#"
                className="hover:text-gray-700 text-primary text-base font-medium"
              >
                Events
              </a>

              <a
                href="#"
                className="hover:text-gray-700 text-primary text-base font-medium"
              >
                Security
              </a>
            </div>
            <div>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 w-full text-gray-900 text-base font-bold bg-gradient-to-br border-transparent from-green-400 to-green-500"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-gray-200 text-base font-medium">
                Existing customer?
                <a href="#" className="ml-2 text-primary">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
