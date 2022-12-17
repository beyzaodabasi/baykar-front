import React, { useRef } from "react";

function Service() {
  const tabs = useRef(null);
  const navigation = [
    { name: "All", href: "#", current: false },
    { name: "UI/UX", href: "#", current: false },
    { name: "Web Design", href: "#", current: false },
    { name: "Branding", href: "#", current: false },
    { name: "Interaction", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <section className="h-full" style={{ backgroundColor: "#0A142F" }}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="text-4xl font-bold text-white">
                Our latest Projects
              </h2>
              <div className="mt-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-amber-400",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-2">
              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <div>
                  <img
                    src={require("../assets/images/image8.png")}
                    width={450}
                  />
                  <h1 class="text-xl text-white font-bold mt-6 w-10/12">
                    Talent.com - Logo, Full Redesign and Branding
                  </h1>
                  <h1 class="text-sm text-white w-12/12">
                    Talent.com a new brand identity using their core values of
                    optimism, transparency and approachability as inspiration.
                    As a result, we were able to create the most streamlined
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
                <div>
                  <img
                    src={require("../assets/images/image9.png")}
                    width={450}
                  />
                  <h1 class="text-xl text-white font-bold mt-6 w-10/12">
                    Bonfire - Landing Page Design Webby Awards Nomination
                  </h1>
                  <h1 class="text-sm text-white w-12/12">
                    Pretty excited to announce that we just got nominated at the
                    Webby Awards! easy to understand and to use should be
                    essential for every business owner who uses their website.
                  </h1>
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start">
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <button class=" bg-amber-400 hover:bg-amber-500 font-bold text-black py-3 px-6 rounded-full inline-flex items-center">
                      <p className="text-sm">Load More</p>
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
            <div className="max-w-5xl mx-auto mb-10">
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-between sm:items-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <p className="text-4xl font-bold text-white w-full mb-4 sm:w-auto sm:mb-0">
                    What say happy clients
                  </p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="max-w-sm md:max-w-6xl mx-auto grid gap-2 grid-cols-2 md:grid-cols-2">
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/vector.png")}
                          width={34}
                          color={"#F3F5F6"}
                        />
                        <p className="text-gray-300 text-sm mb-6 mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sit semper consequat in dolor mattis
                          pellentesque suspendisse vulputate nec. Scelerisque
                          elementum, consequat pharetra lectus eget vivamus ut.
                          Magna aliquam tellus at volutpat cras aliquet facilisi
                          quis adipiscing. Proin egestas et pellentesque augue
                          pretium, amet. Natoque blandit augue integer maecenas
                          mattis amet, nec.
                        </p>
                        <form className="w-full lg:w-auto">
                          <div className="flex flex-col sm:flex-row justify-center items-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                            <div className="w-full flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                              {" "}
                              <img
                                src={require("../assets/images/image10.png")}
                                width={34}
                                style={{ marginRight: 6 }}
                                color={"#F3F5F6"}
                              />
                              <div>
                                <p className="text-sm text-white">
                                  Brooklyn Simmons
                                </p>
                                <p className="text-sm text-amber-400">
                                  Pendron.Inc, CEO
                                </p>
                              </div>
                            </div>
                            <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  {/* CTA box */}
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/vector.png")}
                          width={34}
                          color={"#F3F5F6"}
                        />
                        <p className="text-gray-300 text-sm mb-6 mt-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sit semper consequat in dolor mattis
                          pellentesque suspendisse vulputate nec. Scelerisque
                          elementum, consequat pharetra lectus eget vivamus ut.
                          Magna aliquam tellus at volutpat cras aliquet facilisi
                          quis adipiscing. Proin egestas et pellentesque augue
                          pretium, amet. Natoque blandit augue integer maecenas
                          mattis amet, nec.
                        </p>

                        <form className="w-full lg:w-auto">
                          <div className="flex flex-col sm:flex-row justify-center items-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                            <div className="w-full flex flex-col sm:flex-row items-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                              {" "}
                              <img
                                src={require("../assets/images/image11.png")}
                                width={34}
                                style={{ marginRight: 6 }}
                                color={"#F3F5F6"}
                              />
                              <div>
                                <p className="text-sm text-white">
                                  Jenny Wilson
                                </p>
                                <p className="text-sm text-amber-400">
                                  Bettero.Inc, CEO
                                </p>
                              </div>
                            </div>
                            <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                                color="white"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </form>
                      </div>
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

export default Service;
