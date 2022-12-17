import React, { useRef } from "react";

function Categories() {
  const tabs = useRef(null);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
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
                    Categories
                  </p>
                </div>
                <div></div>
              </div>
            </div>
            <div className="max-w-sm md:max-w-6xl mx-auto grid gap-4 grid-cols-4 md:grid-cols-4">
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle5.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4">
                          <a href="#">Games</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between ml:items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle6.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 items-center">
                          <a href="#">Sports</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle7.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4">
                          <a href="#">Metaverse</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between ml:items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle8.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 items-center">
                          <a href="#">Art</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between ml:items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle5.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 items-center">
                          <a href="#">Games</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between ml:items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle6.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 items-center">
                          <a href="#">Sports</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between ml:items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle7.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 items-center">
                          <a href="#">Metaverse</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">
                  <div
                    className="relative bg-slate-600 rounded-[50px] py-3 px-3 shadow-2xl overflow-hidden"
                    data-aos="zoom-y-out"
                  >
                    <div className="relative flex flex-col lg:flex-row justify-between ml:items-center">
                      <div className="text-center lg:text-left lg:max-w-xl">
                        <img
                          src={require("../assets/images/rectangle8.png")}
                          color={"#F3F5F6"}
                        />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 items-center">
                          <a href="#">Art</a>
                        </h3>
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

export default Categories;
