import React, { useRef } from "react";

function Solution() {
  const tabs = useRef(null);

  return (
    <section className=" py-12 h-full" style={{backgroundColor: "#0A142F"}}>
      <div className="mx-auto">
        <div className="md:grid md:grid-cols-12 justify-center">
          {/* Left */}

          <div className="max-w-xl md:max-w-full md:w-full mx-auto md:col-span-7 lg:col-span-5 bg-amber-400 items-center justify-center">
            <div className="mb-8 items-center justify-center">
              <div className="w-4/6 bottom-1">
                <img
                  className="absolute left-1/3"
                  src={require("../assets/images/circle.png")}
                  alt="Element"
                  width={100}
                />
                <img
                  className="right-0 transform animate-float row-span-2 mt-10 ml-40"
                  src={require("../assets/images/image7.png")}
                  width="500"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 mb-8 md:mb-0 md:order-1 bg-gray-700 items-center justify-center">
            <div className="relative md:mt-6 items-center justify-center ml-20">
              <div className=" xl:pr-16 mb-8 items-center justify-center">
                <p className="text-4xl font-bold text-white mb-3">
                  Our Solution Approach
                </p>
                {/* px-5 soldan boşluk atıyor */}
                <div className="rounded-full inline-flex items-center">
                  <svg
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="text-xl font-bold text-white ml-4">
                    Data Analysis with problem factor
                  </p>
                </div>
                <p className="text-m text-white ml-10">
                  Delivering the spatial expertise of the largest, most
                  sophisticated performance marketing agencies, while providing
                  intimate, boutique-like support.
                </p>
                <div className="rounded-full inline-flex items-center mt-8">
                  <svg
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="text-xl font-bold text-white ml-4">
                    Functionality solution for users
                  </p>
                </div>
                <p className="text-m text-white ml-10">
                  Delivering the spatial expertise of the largest, most
                  sophisticated performance marketing agencies.
                </p>
                <div className="rounded-full inline-flex items-center mt-8">
                  <svg
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="text-xl font-bold text-white ml-4">
                    Latest technology enabled
                  </p>
                </div>
                <p className="text-m text-white ml-10">
                  Technology the spatial expertise of the largest, most
                  sophisticated performance marketing agencies, while providing
                  intimate, boutique-like support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
