import React from "react";

function Service() {
  return (
    <section className="relative" style={{ backgroundColor: "#0A142F" }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div
              className="relative w-11/12 flex flex-col p-6 shadow-xl rounded-tl-[36px]"
              style={{ backgroundColor: "#353F5B" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
                color="#FFC93E"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <div className="h-6"></div>
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">
                Content Writing
              </h4>
              <div className="h-8"></div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
                bibendum luctus viverra. Eu pellentesque sem sed platea diam
                dignissim duis purus.
              </p>
              <div className="h-8"></div>
              <button class="hover:bg-amber-400 text-white py-2 px-4 w-36 h-12 rounded-full inline-flex items-center border border-white">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="fill-current w-4 h-4 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>

            {/* 2nd item */}
            <div
              className="relative w-11/12 flex flex-col p-6 rounded shadow-xl rounded-tr-[36px] mt-10 mb-4"
              style={{ backgroundColor: "#353F5B" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
                color="#FFC93E"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <div className="h-6"></div>
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">
                UX Research
              </h4>
              <div className="h-8"></div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                consequat nunc id purus pretium sagittis diam quis massa. Nulla
                ridiculus nullam bibendum luctus viverra. Eu pellentesque sem
                sed platea diam dignissim duis purus.
              </p>
              <div className="h-8"></div>
              <button class=" bg-amber-400 hover:bg-white text-black py-2 px-4 w-36 h-12 rounded-full inline-flex items-center">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="fill-current w-4 h-4 ml-2"
                  color="black"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>

            {/* 3rd item */}
            <div
              className="relative w-11/12 flex flex-col p-6 shadow-xl rounded-bl-[36px] -mt-10"
              style={{ backgroundColor: "#353F5B" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
                color="#FFC93E"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <div className="h-6"></div>
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">
                Branding
              </h4>
              <div className="h-8"></div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
                bibendum luctus viverra. Eu pellentesque sem sed platea diam
                dignissim duis purus.
              </p>
              <div className="h-8"></div>
              <button class="hover:bg-amber-400 text-white py-2 px-4 w-36 h-12 rounded-full inline-flex items-center border border-white">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="fill-current w-4 h-4 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>

            {/* 4th item */}
            <div
              className="relative w-11/12 flex flex-col p-6 shadow-xl rounded-br-[36px]"
              style={{ backgroundColor: "#353F5B" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10"
                color="#FFC93E"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
              <div className="h-6"></div>
              <h4 className="text-xl text-white font-bold leading-snug tracking-tight mb-1">
                Web Design
              </h4>
              <div className="h-8"></div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
                bibendum luctus viverra. Eu pellentesque sem sed platea diam
                dignissim duis purus.
              </p>
              <div className="h-8"></div>
              <button class="hover:bg-amber-400 text-white py-2 px-4 w-36 h-12 rounded-full inline-flex items-center border border-white">
                <p>Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="fill-current w-4 h-4 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
