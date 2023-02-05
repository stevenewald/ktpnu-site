import React from "react";
import {
  FunnelIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//dir vis but not loading: visible
//no dir vis and not loading: invisible
//no dir vis and loading: invisible
//dir vis and loading: invisible

class MobileDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchVal: "", showType: "Everyone", results_amount: 0 };
    this.searchBarChange = this.searchBarChange.bind(this);
    this.elemMatches = this.elemMatches.bind(this);
    this.oneMatches = this.oneMatches.bind(this);
    this.funnelChange = this.funnelChange.bind(this);
    this.total_results = 0;
  }

  searchBarChange(val) {
    this.total_results = 0;
    this.setState({ searchVal: val.target.value.toLowerCase() }, () => {
      this.setState({ results_amount: this.total_results });
    });
  }

  funnelChange(val) {
    this.total_results = 0;
    this.setState({ showType: val }, () => {
      this.setState({ results_amount: this.total_results });
    });
  }

  profileIncludesSearch(profile, search_val) {
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
      if (profile[searches[i]] && profile[searches[i]].toLowerCase().includes(search_val)) {
        return true;
      }
    }
    return false;
  }

  elemMatches(elem, update_res) {
    if (this.state.searchVal === "" && this.state.showType === "Everyone") {
      if (update_res) {
        this.total_results += 1;
      }
      return true;
    } else {
      if (this.profileIncludesSearch(elem, this.state.searchVal)) {
        if (this.state.showType === "Everyone") {
          if (update_res) {
            this.total_results += 1;
          }
          return true;
        } else {
          if (
            elem["role"] &&  (elem["role"] === this.state.showType ||
            (this.state.showType === "Member" && elem["role"].includes("VP of")))
          ) {
            if (update_res) {
              this.total_results += 1;
            }
            return true;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  }

  oneMatches(letter) {
    for (var i = 0; i < this.props.directory[letter].length; i++) {
      if (
        this.elemMatches(this.props.directory[letter][i]["fullProfile"], false)
      ) {
        return true;
      }
    }
    return false;
  }
  render() {
    return (
      <aside
        className={classNames(
          this.props.dir_vis && !this.props.loading
            ? "order-first flex flex-col"
            : "hidden",
          this.props.loading ? "" : "xl:order-first xl:flex xl:flex-col",
          "w-full xl:w-96 flex-shrink-0 border-r border-gray-200"
        )}
      >
        {/* Breadcrumb */}
        <div
          className="cursor-pointer w-full flex bg-gray-50 shadow"
          onClick={this.props.handler}
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
          <h2 className="text-lg font-medium text-gray-900">
            Member Directory
          </h2>
          {this.state.searchVal === "" &&
            this.state.showType === "Everyone" && (
              <p className="mt-1 text-sm text-gray-600">
                Search directory of {this.props.directory_size} members
              </p>
            )}
          {!(
            this.state.searchVal === "" && this.state.showType === "Everyone"
          ) && (
            <p className="mt-1 text-sm text-gray-600">
              Showing {this.state.results_amount} search result
              {this.state.results_amount != 1 && "s"}
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
                  onChange={this.searchBarChange}
                  className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Search"
                  autocomplete="off"
                  spellcheck="false"
                  autocorrect="off"
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
                <Menu.Items className="z-[500] absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => {
                            this.funnelChange("Pledge");
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
                            this.funnelChange("Member");
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
                            this.funnelChange("Alumni");
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
                            this.funnelChange("Everyone");
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
              <FunnelIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {/* Directory list */}
        <nav className="min-h-0 flex-1 overflow-y-auto pb-[120px] sm:pb-[61px]" aria-label="Directory">
          {Object.keys(this.props.directory).map((letter) => (
            <div
              key={letter}
              className={classNames(
                this.oneMatches(letter) ? "" : "hidden",
                "relative"
              )}
            >
              <div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                <h3>{letter}</h3>
              </div>
              <ul role="list" className="relative z-0 divide-y divide-gray-200">
                {this.props.directory[letter].sort(function(a, b) {
                  if(a.name < b.name) {
                    return -1;
                  } else {
                    return 1;
                  }
                }).map((person) => (
                  <li
                    className={
                      this.elemMatches(person["fullProfile"], true)
                        ? ""
                        : "hidden"
                    }
                    key={"mob_" + person.id}
                    onClick={() => {
                      person["handler"](person["fullProfile"]);
                      this.props.changeActiveHandler("mob_" + person.id);
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
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
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
}

export default MobileDirectory;
