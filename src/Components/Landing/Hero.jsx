import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

class Hero extends React.Component {
  constructor() {
    super();
    this.downArrow = React.createRef();
  }
  render() {
    return (
      <section
        className="w-full min-h-screen bg-white bg-cover bg-full bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://ktpmichigan.com/assets/img/home/landing.png)",
          backgroundPosition: "0 25px",
        }}
        id="Home"
      >
        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
          <section className="flex items-center flex-1 mb-80 lg:mb-64">
            <div className="flex flex-col w-full ">
              <h1 className="text-7xl font-extrabold text-center lg:text-8xl">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
                  Rush &#8203;
                </span>
                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">
                  KTP
                </span>
              </h1>

              <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 md:text-xl">
                Join Northwestern's premiere co-ed technology fraternity
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSey8UlOw4GaKMlJj-W-ZvxwgZk7C47N3VJ8aJ2KlqK8sDqg0Q/viewform"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                  >
                    Rush Application
                    <ArrowTopRightOnSquareIcon
                      className="-mr-1 ml-3 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>

              <div
                className="hidden flex justify-center opacity-0 transition-opacity transition-all duration-1000 -translate-y-6 ease-in-out"
                ref={this.downArrow}
              >
                <svg
                  className="rotate-90 mt-12 scale-125 transform"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.downArrow.current.classList.remove("opacity-0");
      this.downArrow.current.classList.add("opacity-100");
      this.downArrow.current.classList.remove("-translate-y-6");
      this.downArrow.current.classList.add("translate-y-0");
    }, 1000);
  }
}
export default Hero;
