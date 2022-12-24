import React from "react";
import { FunnelIcon, MagnifyingGlassIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  //dir vis but not loading: invisible
  //no dir vis and not loading: invisible
  //no dir vis and loading: invisible
  //dir vis and loading: visible

class LoadingMobile extends React.Component {
  render() {
    return (
      <aside className={classNames(
        this.props.dir_vis && this.props.loading
          ? "order-first flex flex-col"
          : "hidden",
        "w-full flex-shrink-0 border-r border-gray-200 xl:hidden"
      )}>
        {/* Breadcrumb */}
        <div className="px-6 pt-6 pb-4">
          <h2 className="text-lg font-medium text-gray-900">
            Brother Directory
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Search directory of 47 brothers
          </p>
          <form className="mt-6 flex space-x-4" action="#">
            <div className="min-w-0 flex-1">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Search"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              <FunnelIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {/* Directory list */}
        <nav className="min-h-0 flex-1 overflow-y-auto" aria-label="Directory">
          {Object.keys(this.props.directory).map((letter) => (
            <div key={letter} className="relative">
              <ul role="list" className="relative z-0 divide-y divide-gray-200">
                {this.props.directory[letter].map((person) => (
                  <li key={person.id}>
                    <div
                      className={classNames(
                        person.active ? "bg-gray-100" : "hover:bg-gray-50",
                        "relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
                      )}
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <div className="loading loading01 text-sm font-medium text-gray-900">
                            <span>L</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                          </div>
                          <div className="truncate loading loading01 text-sm text-gray-500">
                            <span>L</span>
                            <span>o</span>
                            <span>a</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    );
  }
}

export default LoadingMobile;