import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ActiveProfileContext } from "@portal/Framework/ActiveProfileContext";
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
export default function MobileSidebar(props: {
  args: SideBarArgsType;
  sideBarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
}) {
  const args = props.args;
  const {_, setActiveProfile}:any = useContext(ActiveProfileContext);
  return (
    <>
      <Transition.Root show={props.sideBarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={props.setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => props.setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                  <div className="flex flex-shrink-0 items-center px-4">
                    <img
                      className="cursor-pointer h-8 w-auto"
                      src={args.Logo}
                      alt="Kappa Theta Pi"
                      onClick={() => {
                        window.location.href = "/";
                      }}
                    />
                  </div>
                  <nav aria-label="Sidebar" className="mt-5">
                    <div className="space-y-1 px-2">
                      {Object.keys(args.Navigation).map((NavKey: string) => {
                        const currNav = args.Navigation[NavKey];
                        if (!currNav.secondary) {
                          return (
                            <a
                              key={currNav.name}
                              onClick={() => {
                                args.onTabClick(NavKey);
                              }}
                              className={classNames(
                                currNav.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}
                              aria-current={
                                currNav.current ? "page" : undefined
                              }
                            >
                              <currNav.icon
                                className={classNames(
                                  currNav.current
                                    ? "text-gray-500"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-4 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              {currNav.name}
                            </a>
                          );
                        } else {
                          return <></>;
                        }
                      })}
                    </div>
                    <hr
                      className="my-5 border-t border-gray-200"
                      aria-hidden="true"
                    />
                    <div className="space-y-1 px-2">
                      {Object.keys(args.Navigation).map((NavKey: string) => {
                        const currNav = args.Navigation[NavKey];
                        if (currNav.secondary) {
                          return (
                            <a
                              key={currNav.name}
                              onClick={() => {
                                args.onTabClick(NavKey);
                              }}
                              className={classNames(
                                currNav.current
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                              )}
                            >
                              <currNav.icon
                                className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                              {currNav.name}
                            </a>
                          );
                        } else {
                          return <></>;
                        }
                      })}
                    </div>
                  </nav>
                </div>
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a
                    className="cursor-pointer group block flex-shrink-0"
                    onClick={() => {
                      //this.clickChild("none");
                      props.setSidebarOpen(false);
                      args.onTabClick("Members");
                      setActiveProfile(args.uid);
                    }}
                  >
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src={args.ImageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          {args.CurrentUserName}
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      ;
    </>
  );
}
