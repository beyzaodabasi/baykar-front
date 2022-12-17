import React, { useRef } from "react";

function About() {
  const tabs = useRef(null);

  return (
    <section
      className="py-12 h-full items-center justify-center"
      style={{ backgroundColor: "#0A142F" }}
    >
      <div className="container mx-auto">
        <div className="grid items-center justify-center">
          <div className="text-8xl font-bold text-white grid grid-cols-3 items-center">
            <img
              class="md:w-44"
              src={require("../assets/images/sketch.png")}
              alt="sketch"
            />
            <h1>Digital</h1>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-2">
              <p></p>
              <img src={require("../assets/images/star.png")} alt="sketch" />
            </div>
            <div>
              <img
                className="md:max-w-none absolute right-0 transform animate-float -mt-28"
                src={require("../assets/images/vector1.png")}
                alt="Element"
                style={{ right: "10%" }}
              />
            </div>
          </div>
        </div>
        <h1 className="text-8xl font-bold text-center mr-28 text-white transform">
          Agency
        </h1>
        <div className="justify-center items-center flex flex-1">
          <div className="w-1/6 mt-24">
            <img
              class="md:w-52"
              src={require("../assets/images/image2.png")}
              alt="image2"
            />
          </div>
          <div className="items-center mt-10 justify-center columns-2 inset-x-0 bottom-0">
            <p className="max-w-md bottom-44 text-white">
              Full-service design support that growing B2B companies need. World
              leading agency.
            </p>
            <button class="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-5 rounded-full inline-flex items-center mt-10">
              <p>Our Projects</p>
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
            <div className="w-4/6 bottom-1 transform">
              <img
                src={require("../assets/images/heroimage.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 md:pt-20">
            <div className="md:grid md:grid-cols-12 md:gap-6">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                  <h1 className="text-4xl font-bold text-white">
                    We are a creative digital agency
                  </h1>{" "}
                  <p className="text-l text-white mt-10">
                    Dalio started with a vision for building an agency to solve
                    the business problems of the future, and that requires a
                    different model. We’re not a branding agency that dabbles in
                    tech, and we’re not a development shop that leaves you
                    hanging when it’s time to go to market.
                  </p>
                  <p className="text-l text-white mt-10">
                    We start with human experience and layer in technology and
                    marketing to deliver truly integrated digital solutions.
                    This unique set of capabilities sets us apart from other
                    agencies and positions DIG to help you attack your goals.
                  </p>
                </div>
                <button class="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-5 rounded-full inline-flex items-center mb-10">
                  <p>Contact us</p>
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
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="zoom-y-out"
                ref={tabs}
              >
                <div className="relative flex flex-col">
                  <div className="grid grid-flow-col gap-4">
                    <img
                      className="mx-auto row-span-3"
                      src={require("../assets/images/image3.png")}
                      width="600"
                      height="462"
                      alt="image"
                    />
                    <img
                      className="left-0 transform animate-float row-span-2 p-5"
                      src={require("../assets/images/image4.png")}
                      alt="image"
                      style={{ top: "30%" }}
                    />
                  </div>
                  <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <img
                      className="mx-auto row-span-3 p-5"
                      src={require("../assets/images/image5.png")}
                      alt="image"
                    />
                    <img
                      className="md:max-w-none absolute right-0 transform animate-float mt-60"
                      src={require("../assets/images/circle.png")}
                      alt="Element"
                      style={{ top: "30%", marginRight: -50 }}
                    />
                    <img
                      className="left-0 transform animate-float row-span-2"
                      src={require("../assets/images/image6.png")}
                      width="500"
                      height="44"
                      alt="image"
                      style={{ top: "30%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4 mb-10">
              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto relative flex-col">
                <h1 className="text-5xl font-bold text-white">4.8k</h1>
                <h4 className="text-xl text-white mt-2">Job Completed</h4>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto relative flex-col">
                <h1 className="text-5xl font-bold text-white">12+</h1>
                <h4 className="text-xl text-white mt-2">Industry Experience</h4>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto relative flex-col">
                <h1 className="text-5xl font-bold text-white">2.5k+</h1>
                <h4 className="text-xl text-white mt-2">World wide clients</h4>
              </div>

              {/* Item */}
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto relative flex-col">
                <h1 className="text-5xl font-bold text-white">120+</h1>
                <h4 className="text-xl text-white mt-2">Won Awards</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
