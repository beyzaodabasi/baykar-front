import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#3B435A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-8 gap-8 py-8 md:py-10 items-center justify-center">
          <div
            className="sm:col-span-8 lg:col-span-4 rounded-[24px]"
            style={{
              backgroundColor: "#FFC93E",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="items-center justify-center mr-10  ml-10 mt-14 mb-14">
              <h6 className="text-gray-800 font-medium mb-4 ">
                Sign Up to Receive Product Updates and More
              </h6>
              <form>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <div className="relative flex items-center max-w-sm">
                      <input
                        id="newsletter"
                        type="email"
                        className="placeholder-black form-input bg-transparent w-full text-gray-800 px-3 py-2 pr-12 text-sm border-b-2 border-black focus:border-blue-600 focus:outline-none"
                        placeholder="youremail@gmail.com"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute inset-0 left-auto"
                        aria-label="Subscribe"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-4 h-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* 2. blok */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Office</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  545, Street 11, Block F
                </a>
              </li>
              <li className="mb-2">
                <a className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  California, USA
                </a>
              </li>
            </ul>
          </div>

          {/* 3. blok */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Contact</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  +92 302 300 3215
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  ouraddress@email.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="#"
                className="flex justify-center items-center hover:bg-white-100 rounded-full transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>

            <li className="ml-4">
              <a
                href="#"
                className="flex justify-center items-center hover:bg-white-100 rounded-full transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>

            <li className="ml-4">
              <a
                href="#"
                className="flex justify-center items-center hover:bg-white-100 rounded-full transition duration-150 ease-in-out"
                aria-label="Dribble"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 30 26"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#FFC93E"
                >
                  <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 18.535156 6 20.832031 6.953125 22.59375 8.5 C 22.40625 8.761719 22.152344 9.078125 21.75 9.46875 C 20.894531 10.296875 19.527344 11.292969 17.4375 12.0625 C 16.023438 9.449219 14.636719 7.484375 13.71875 6.25 C 14.449219 6.082031 15.214844 6 16 6 Z M 11.75 6.9375 C 12.570313 8.011719 14.03125 10.003906 15.5 12.65625 C 11.433594 13.734375 7.703125 13.871094 6.21875 13.875 C 6.882813 10.785156 8.960938 8.242188 11.75 6.9375 Z M 23.96875 9.96875 C 25.1875 11.582031 25.945313 13.578125 26 15.75 C 25.109375 15.550781 23.796875 15.355469 22.09375 15.34375 C 21.207031 15.339844 20.203125 15.402344 19.125 15.53125 C 18.875 14.960938 18.605469 14.410156 18.34375 13.875 C 20.585938 13.015625 22.113281 11.882813 23.125 10.90625 C 23.46875 10.570313 23.738281 10.261719 23.96875 9.96875 Z M 16.40625 14.46875 C 16.636719 14.933594 16.871094 15.410156 17.09375 15.90625 C 12.820313 17.089844 9.75 20.714844 8.4375 22.53125 C 6.925781 20.78125 6 18.5 6 16 C 6 15.957031 6 15.917969 6 15.875 C 7.351563 15.890625 11.648438 15.796875 16.40625 14.46875 Z M 22.09375 17.3125 C 23.878906 17.3125 25.113281 17.5625 25.84375 17.75 C 25.378906 20.414063 23.875 22.699219 21.75 24.1875 C 21.351563 21.796875 20.695313 19.523438 19.90625 17.4375 C 20.695313 17.359375 21.441406 17.3125 22.09375 17.3125 Z M 17.875 17.78125 C 18.773438 20.0625 19.527344 22.566406 19.90625 25.21875 C 18.710938 25.722656 17.382813 26 16 26 C 13.707031 26 11.589844 25.230469 9.90625 23.9375 C 10.933594 22.53125 13.953125 18.789063 17.875 17.78125 Z"></path>
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#"
                className="flex justify-center items-center hover:bg-white-100 rounded-full transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="text-sm text-white mr-4">
            2022. All Rights Reserved
          </div>
          <div className="text-sm text-white mr-4">
            Terms & Conditions Privacy
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
