import PortalPic from '@images/Misc/Portal.jpeg';
function PortalAdvertisement() {
    return (
      <div className="relative overflow-hidden bg-gray-50 pt-12 sm:pt-14 lg:pt-20">
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
      </div>
    );
}

export default PortalAdvertisement;
