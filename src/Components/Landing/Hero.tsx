import Illustration from "@images/Branding/KTPIllustration.jpeg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <section
      className="hero-bg w-full min-h-screen bg-white bg-cover bg-no-repeat mx-auto"
      style={{
        backgroundImage: "url(" + Illustration + ")",
      }}
      id="Home"
    >
      <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
        <section className="mt-[4rem] flex flex-1 mb-48 lg:mb-64">
          <div className="flex flex-col w-full ">
            <div className="relative top-[30px] text-[12vw] whitespace-nowrap w-full md:text-8xl font-extrabold text-center">
              <span className="hero-text text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
                Kappa Theta Pi
              </span>
            </div>

            <div className="relative top-[5px] md:top-[30px] max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 md:text-xl">
              Northwestern's premiere co-ed technology fraternity
            </div>
            <div className="hidden relative bottom-[25px] mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSey8UlOw4GaKMlJj-W-ZvxwgZk7C47N3VJ8aJ2KlqK8sDqg0Q/viewform"
                  target="_blank"
                  className="transition-colors duration-300 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Rush Application
                  <ArrowTopRightOnSquareIcon
                    className="-mr-1 ml-3 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
export default Hero;
