import { ActiveProfileContext } from "@portal/Framework/ActiveProfileContext";
import { useContext } from "react";
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props: { args: SideBarArgsType }) {
  const args = props.args;
  const { _, setActiveProfile }: any = useContext(ActiveProfileContext);
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-64 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="cursor-pointer h-12 w-auto"
                src={args.Logo}
                alt="Kappa Theta Pi"
                onClick={() => {
                  window.location.href = "/";
                }}
              />
            </div>
            <nav className="mt-5 flex-1" aria-label="Sidebar">
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
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                        aria-current={currNav.current ? "page" : undefined}
                      >
                        <currNav.icon
                          className={classNames(
                            currNav.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
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
              <div className="flex-1 space-y-1 px-2">
                {Object.keys(args.Navigation).map((NavKey: string) => {
                  const currNav = args.Navigation[NavKey];
                  if (currNav.secondary && (args.Admin || !currNav.adminonly)) {
                    return (
                      <a
                        key={currNav.name}
                        onClick={() => {
                          args.onTabClick(NavKey);
                        }}
                        className={classNames(
                          currNav.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "cursor-pointer group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <currNav.icon
                          className={classNames(
                            currNav.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
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
            </nav>
          </div>
          <div className="fixed bottom-0">
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <a
                className="cursor-pointer group block w-full flex-shrink-0"
                onClick={() => {
                  args.onTabClick("Members");
                  setActiveProfile(args.uid);
                }} //() => this.clickChild("none")}
              >
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src={args.ImageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {args.CurrentUserName}
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
