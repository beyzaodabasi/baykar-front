import React from "react";

function Blog() {
  return (
    <section className="h-full" style={{ backgroundColor: "#0A142F" }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div>
            <div className="max-w-5xl mx-auto mb-10">
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-between sm:items-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <p className="text-4xl font-bold text-white w-full mb-4 sm:w-auto sm:mb-0">
                    Blog from insights
                  </p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="max-w-sm md:max-w-6xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-2">
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/image12.png")}
                          color={"#F3F5F6"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <div>
                      <button class="bg-white hover:bg-blue-200 text-black font-bold py-1 px-6 rounded-lg mt-2">
                        TECHNOLOGY
                      </button>
                      <h1 class="text-xl text-white mt-6 w-10/12">
                        John Doe • 19 Jan 2022
                      </h1>
                      <h1 class="text-3xl font-bold text-white w-12/12">
                        A small business is only as good as its tools and it is
                        totally true.
                      </h1>
                      <button class="bg-transparent text-white font-bold py-3 px-5 rounded-full inline-flex items-center mt-6 mb-10 border">
                        <p>Read More</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="fill-current w-4 h-4 ml-2"
                          style={{ color: "white" }}
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
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/image13.png")}
                          color={"#F3F5F6"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                    <div>
                      <button class="bg-white hover:bg-blue-200 text-black font-bold py-1 px-6 rounded-lg mt-2">
                        WEBINER
                      </button>
                      <h1 class="text-xl text-white mt-6 w-10/12">
                        John Doe • 19 Jan 2022
                      </h1>
                      <h1 class="text-3xl font-bold text-white w-12/12">
                        Colaboration with team members that will be grow to
                        business.
                      </h1>
                      <button class="bg-transparent text-white font-bold py-3 px-5 rounded-full inline-flex items-center mt-6 mb-10 border">
                        <p>Read More</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="fill-current w-4 h-4 ml-2"
                          style={{ color: "white" }}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
