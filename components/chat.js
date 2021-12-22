import { useState } from "react";
import classNames from "classnames";

const Chat = () => {
  const [open, setOpen] = useState(false);

  const chatClasses = () =>
    classNames({
      "bg-gray-100 md:w-96 md:h-4/6 h-screen fixed bottom-0 md:bottom-24 w-screen md:right-6 flex flex-col":
        open,
      hidden: !open,
    });

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  // Create new date object
  const date = new Date();

  // Create a new date string
  const dateString = date.toLocaleString(undefined, options);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed flex justify-center items-center right-4 md:right-6 bottom-6 bg-white w-12 h-12 cursor-pointer transform uppercase hover:scale-105 duration-300"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 28 32"
            width="28"
            height="32"
            fill="#111827"
          >
            <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"></path>
          </svg>
        )}
      </div>
      {open && (
        <div className={chatClasses()} style={{ zIndex: `1000` }}>
          <div className="bg-lighter-gray h-64 absolute w-full z-0"></div>
          <div className="flex flex-col overflow-y-auto h-full p-4 space-y-4">
            <div className="flex flex-col z-10 ml-4 text-white">
              <div className="text-3xl my-2">Hi 👋</div>
              <div className="w-60 text-gray-200 text-sm mb-1">
                Want to get in touch? Send me a message here.
              </div>
            </div>
            <div className="border-0 border-t-4 border-gray-400 z-10 shadow-md text-sm">
              <div className="bg-white border border-t-0 rounded-t-none flex flex-col space-y-2">
                <div className="px-6 py-4 flex flex-col items-start gap-3">
                  <div className="font-semibold ">Start a conversation</div>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row -space-x-12">
                      <img
                        className="w-16 h-16 rounded-full border-2 border-white"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=facearea&w=256&h=256&facepad=2"
                      />
                      <img
                        className="w-16 h-16 rounded-full border-2 border-white"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=facearea&w=256&h=256&facepad=2"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-gray-400">My usual reply time</div>
                      <div className="flex flex-row items-center gap-1 font-semibold text-lighter-gray">
                        <svg
                          className="w-4 h-4 text-lighter-gray"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        A few minutes
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-lighter-gray hover:bg-hover-gray text-white flex flex-row gap-2 py-3 px-5 uppercase font-semibold tracking-wider text-xs items-center"
                  >
                    <svg
                      className="w-5 h-5 transform rotate-90"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                    Send me a message
                  </button>
                </div>
                <div className="border-t px-6 py-4">
                  <a
                    href="#"
                    className="text-sm text-lighter-gray hover:text-hover-gray"
                  >
                    See all your conversations
                  </a>
                </div>
              </div>
            </div>
            <div className="border-0 border-t-4 border-gray-300 z-10 shadow-md">
              <div className="bg-white border border-t-0 rounded-t-none p-6 flex flex-col space-y-2">
                <div className="font-semibold text-sm">Check out the blog</div>
                <div className="flex flex-row">
                  <input
                    type="text"
                    placeholder="Search for posts"
                    className="border flex-1 p-2 text-sm shadow-inner outline-none bg-gray-50 focus:bg-white"
                  />
                  <button type="button" className="bg-lighter-gray p-2">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white border-0 border-t-4 border-gray-300 flex p-8 shadow-md z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="flex flex-col ml-4">
                <p className="text-sm"> Status: All Systems Operational</p>
                <p className="text-sm text-gray-500"> Updated {dateString}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
