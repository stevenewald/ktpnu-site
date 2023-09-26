import Meta from "@vectors/meta.svg";
import Amazon from "@vectors/amazon.svg";
import Google from "@vectors/google.svg";
import Intel from "@vectors/intel.svg";
import Uber from "@vectors/uber.svg";
export default function LogoCloud() {
    return (
      <div id="logocloud" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Our members work at many of the largest tech companies
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={Meta}
              alt="Meta"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={Amazon}
              alt="Amazon"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
              src={Google}
              alt="Google"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              src={Intel}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-28 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Uber}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
