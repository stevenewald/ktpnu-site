import React from "react";

class PortalAdvertisement extends React.Component {
  render() {
    return (
      <div className="relative overflow-hidden bg-gray-100 pt-12 sm:pt-14 lg:pt-20">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Not sure how to network? No problem.
            </p>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-600">
              Networking with industry professionals is difficult, time-consuming and daunting. With KTP's alumni network and brother portal, we make it easy.
            </p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src={this.props.ig}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PortalAdvertisement;