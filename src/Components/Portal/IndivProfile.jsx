import React from "react";

import { ChevronLeftIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//visible cases:
//case 1: dir_vis false and not loading
//case 2: xl size and not loading
class IndivProfile extends React.Component {
  render() {
    return (
      <main className={classNames(
        !this.props.dir_vis && !this.props.loading
          ? "order-first flex flex-col"
          : "",
        this.props.loading
        ? "invisible"
        :"",
        "h-screen relative z-0 flex-1 overflow-hidden focus:outline-none xl:order-last"
      )}>
        {/* Breadcrumb */}
        <nav
          className="cursor-pointer flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
          aria-label="Breadcrumb"
        onClick={this.props.handler}>
          <a
            href="#"
            className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
          >
            <ChevronLeftIcon
              className="-ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <span className="select-none">Directory</span>
          </a>
        </nav>

        <article>
          {/* Profile header */}
          <div>
            <div>
              <img
                className="h-32 w-full object-cover lg:h-48"
                src={this.props.profile.coverImageUrl}
                alt=""
              />
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover"
                    src={this.props.profile.imageUrl}
                    alt=""
                  />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                    <h1 className="truncate text-2xl font-bold text-gray-900">
                      {this.props.profile.name}
                    </h1>
                  </div>
                  <div className="justify-stretch mt-6 flex space-y-3 flex-row space-y-0 space-x-4">
                    <button onClick={() => {window.location.href="mailto:" + this.props.profile.email}}
                      type="button"
                      className={classNames(this.props.profile.email ? "" : "hidden", "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2")}
                    >
                      <EnvelopeIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Email</span>
                    </button>
                    <div className="flex space-x-6 md:order-2 items-center">
                      {this.props.profile.social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {this.props.profile.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {this.props.tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={classNames(
                        tab.current
                          ? "border-indigo-600 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Description list */}
          <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {Object.keys(this.props.profile.fields).map((field) => (
                <div key={field} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">{field}</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {this.props.profile.fields[field]}
                  </dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd
                  className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                  dangerouslySetInnerHTML={{ __html: this.props.profile.about }}
                />
              </div>
            </dl>
          </div>

          {/* Team member list */}
          <div className="hidden mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
            <h2 className="text-sm font-medium text-gray-500">Team members</h2>
            <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {this.props.team.map((person) => (
                <div
                  key={person.handle}
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400"
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
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {person.role}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
    );
  }
}

export default IndivProfile;
