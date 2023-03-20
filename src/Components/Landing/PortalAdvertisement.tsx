import PortalPic from '@images/Misc/Portal.jpeg';
function PortalAdvertisement() {
    return (
      <div className="relative isolate bg-white">
      <div className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%+60rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative overflow-hidden pt-12 sm:pt-14 lg:pt-20">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div>
          <h2 className="text-lg font-semibold text-indigo-600">
              Member Portal
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Not sure how to network? No problem.
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-600">
              Networking with industry professionals is difficult, time-consuming, and daunting. With KTP's alumni network and member portal, we make it easy.
            </p>
          </div>
          <div className="mt-12 -mb-10 lg:mb-[-5rem]">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src={PortalPic}
              alt=""
            />
          </div>
        </div>
      </div></div>
    );
}

export default PortalAdvertisement;
