import React, { useEffect } from "react";
import {
  FunnelIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

//dir vis but not loading: visible
//no dir vis and not loading: invisible
//no dir vis and loading: invisible
//dir vis and loading: invisible

function MobileDirectory(props: any) {
  const [searchVal, setSearchVal] = React.useState("");
  const [showType, setShowType] = React.useState("Everyone");
  const [results_amount, setResultsAmount] = React.useState(0);
  const [shownDirectory, setShownDirectory]: any = React.useState({});

  function searchBarChange(val: string) {
    setSearchVal(val.toLowerCase());
  }

  function funnelChange(val: string) {
    setShowType(val);
  }

  function profileIncludesSearch(profile: any, search_val: string) {
    const searches = [
      "about",
      "email",
      "internships",
      "linkedin",
      "instagram",
      "major",
      "name",
      "role",
      "year",
    ];
    for (var i = 0; i < searches.length; i++) {
      if (
        profile[searches[i]] &&
        profile[searches[i]].toLowerCase().includes(search_val)
      ) {
        return true;
      }
    }
    return false;
  }

  function profMatchesShowType(elem: any): boolean {
    if (showType === "Everyone") {
      return true;
    } else {
      return (
        elem["role"] &&
        (elem["role"] === showType ||
          (showType === "Member" && elem["role"].includes("VP of")))
      );
    }
  }

  function profileMatches(profile: any): boolean {
    if (searchVal === "" && showType === "Everyone") {
      return true;
    } else {
      return (
        profMatchesShowType(profile) &&
        profileIncludesSearch(profile, searchVal)
      );
    }
  }

  function makeVisibleDirectory(): void {
    var newDir: any = {};
    var total_results = 0;
    for (var letter in props.directory) {
      for (var i = 0; i < props.directory[letter].length; i++) {
        if (profileMatches(props.directory[letter][i]["fullProfile"])) {
          if (!(letter in newDir)) {
            newDir[letter] = [];
          }
          newDir[letter].push(props.directory[letter][i]);
          total_results++;
        }
      }
    }
    for (var letter in newDir) {
      newDir[letter].sort(function (a: any, b: any) {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    setShownDirectory(newDir);
    setResultsAmount(total_results);
  }

  useEffect(() => {
    makeVisibleDirectory();
  });

  return (
    <aside
      className={classNames(
        props.dir_vis && !props.loading
          ? "order-first flex flex-col"
          : "hidden",
        props.loading ? "" : "xl:order-first xl:flex xl:flex-col",
        "w-full xl:w-96 flex-shrink-0 border-r border-gray-200"
      )}
    >
      {/* Breadcrumb */}
      <div
        className="cursor-pointer w-full flex bg-gray-50 shadow"
        onClick={props.handler}
      >
        <nav
          className="ml-auto flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
          aria-label="Breadcrumb"
        >
          <a className="cursor-pointer inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
            <span className="select-none">Profile</span>
            <ChevronRightIcon
              className="-ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </a>
        </nav>
      </div>
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-lg font-medium text-gray-900">Member Directory</h2>
        {searchVal === "" && showType === "Everyone" && (
          <p className="mt-1 text-sm text-gray-600">
            Search directory of {props.directory_size} members
          </p>
        )}
        {!(searchVal === "" && showType === "Everyone") && (
          <p className="mt-1 text-sm text-gray-600">
            Showing {results_amount} search result
            {results_amount != 1 && "s"}
          </p>
        )}
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
                onChange={(type) => {
                  searchBarChange(type.target.value);
                }}
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Search"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
              />
            </div>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                <FunnelIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="z-[500] absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => {
                          funnelChange("Pledge");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Pledges
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => {
                          funnelChange("Member");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Members
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => {
                          funnelChange("Alumni");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Alumni
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={() => {
                          funnelChange("Everyone");
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Everyone
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <button
            type="submit"
            className="hidden inline-flex justify-center rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      {/* Directory list */}
      <nav
        className="min-h-0 flex-1 overflow-y-auto pb-[120px] sm:pb-[61px]"
        aria-label="Directory"
      >
        {Object.keys(shownDirectory).map((letter) => (
          <div key={letter} className={"relative"}>
            <div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3>{letter}</h3>
            </div>
            <ul role="list" className="relative z-0 divide-y divide-gray-200">
              {shownDirectory[letter].map((person: any) => (
                <li
                  key={"mob_" + person.id}
                  onClick={() => {
                    person["handler"](person["fullProfile"]);
                    props.changeActiveHandler("mob_" + person.id);
                  }}
                >
                  <div
                    className={classNames(
                      person.active ? "bg-gray-100" : "hover:bg-gray-50",
                      "relative flex items-center space-x-3 px-6 py-5"
                    )}
                    id={"mob_" + person.id}
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={person.smallProfilePic}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <a className="cursor-pointer focus:outline-none">
                        {/* Extend touch target to entire panel */}
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
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default MobileDirectory;
