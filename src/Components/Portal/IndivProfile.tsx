import "animate.css";
import { MouseEventHandler } from "react";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

//visible cases:
//case 1: dir_vis false and not loading
//case 2: xl size and not loading
function IndivProfile(props: {
  tabs: { name: string; href: string; current: boolean }[];
  profile: any;
  dir_vis: boolean;
  handler: MouseEventHandler<HTMLElement>;
  loading: boolean;
}) {
  return (
    <div
      className={classNames(
        !props.dir_vis && !props.loading
          ? "order-first flex flex-col"
          : "hidden",
        props.loading ? "invisible" : "",
        "relative flex-1 focus:outline-none xl:order-last xl:flex xl:flex-col xl:order-first"
      )}
    >
      {/* Breadcrumb */}
      <nav
        className="cursor-pointer flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden shadow"
        aria-label="Breadcrumb"
        onClick={props.handler}
      >
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

      <main className="overflow-y-scroll mobileProfHeight">
        <article className="pb-32 sm:pb-0">
          {/* Profile header */}
          <div>
            <div>
              <img
                className="h-32 w-full object-cover lg:h-48"
                src={props.profile.coverImageUrl}
                alt=""
              />
            </div>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className="flex">
                  <img
                    className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 object-cover"
                    src={props.profile.largeProfilePic}
                    alt=""
                  />
                </div>
                <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                    <h1 className="truncate text-2xl font-bold text-gray-900">
                      {props.profile.name}
                    </h1>
                  </div>
                  <div className="justify-stretch mt-6 flex space-y-3 flex-row space-y-0 space-x-4">
                    <button
                      onClick={() => {
                        window.location.href = "mailto:" + props.profile.email;
                      }}
                      type="button"
                      className={classNames(
                        props.profile.email ? "" : "hidden",
                        "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <EnvelopeIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Email</span>
                    </button>
                    <a
                      target="_blank"
                      href={props.profile.resume_link}
                      className={classNames(
                        props.profile.resume_link ? "" : "hidden",
                        "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <DocumentTextIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Resume</span>
                    </a>
                    <div className="flex space-x-6 md:order-2 items-center">
                      {props.profile.social.map(
                        (item: { name: string; href: string; icon: any }) => (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {props.profile.name}
                </h1>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  {props.tabs.map((tab) => (
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
              {Object.keys(props.profile.fields).map((field) => (
                <div key={field} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">{field}</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {props.profile.fields[field]}
                  </dd>
                </div>
              ))}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd
                  className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: props.profile.about,
                  }}
                />
              </div>
            </dl>
          </div>
        </article>
      </main>
    </div>
  );
}

export default IndivProfile;
