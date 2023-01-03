import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  EnvelopeIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Messaging from "./Messaging";

const user = {
  name: "Steve Ewald",
  imageUrl:
    "https://media-exp1.licdn.com/dms/image/C4D03AQHPxYjOagRJig/profile-displayphoto-shrink_400_400/0/1649132175326?e=1675900800&v=beta&t=jsUaFv0Zp9zUnywJvvQTvDl_70PxLiuNSmjhf68srIs",
};
const navigation = [
  { name: "Summary", href: "#", icon: HomeIcon, current: false },
  { name: "Events", href: "#", icon: CalendarIcon, current: false },
  {
    name: "Brothers",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
    current: true,
  },
  { name: "Rush process", href: "#", icon: MapIcon, current: false },
  { name: "Announcements", href: "#", icon: MegaphoneIcon, current: false },
];
const secondaryNavigation = [
  { name: "Edit Profile", href: "#", icon: CogIcon },
];
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];
const profile = {
  name: "Damien Koh",
  imageUrl:
    "https://media.licdn.com/dms/image/C5603AQGjHa8RFpDKhA/profile-displayphoto-shrink_400_400/0/1656946309926?e=1677110400&v=beta&t=mSIRjcaPvxGM6SNV6HUxntnDc-tfJGJsKe3zvtARVfU",
  coverImageUrl:
    "https://media.licdn.com/dms/image/C4E16AQGFJSoP2FlSpQ/profile-displaybackgroundimage-shrink_350_1400/0/1620110492095?e=1677110400&v=beta&t=Mm3tilVD1hw3S7qtnXVRNhSuS4CkTmqTrrxFPM_TlPU",
  about: `
    <p>I am currently enrolled as a sophomore in the McCormick School of Engineering at Northwestern University. Through Northwestern's BSMS Program, I am currently pursuing a Bachelor's degree in Computer Engineering along with a Master's in Mechanical Engineering Specializing in Robotics and Control. I am interested in control systems, computer vision, and machine learning, but am still constantly exploring different Robotics subfields of potential interest.</p>
  `,
  fields: {
    "Graduation date": "2025 (Sophomore)",
    Major: "Computer Engineering",
    "Notable internships": "Robotics Intern at Weston Robot",
    Position: "Executive Board, VP of Member Recruitment",
  },
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
const directory = {
  A: [
    {
      id: 1,
      name: "Alexis Robles",
      role: "VP of Technology",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E03AQHxKbf9gRhDYw/profile-displayphoto-shrink_100_100/0/1660923581630?e=1677110400&v=beta&t=WFQuedtnE9aUVQ_m1-AVqpGX2xNMmHfa-tIBuqWJ9AI",
    },
    {
      id: 3,
      name: "A Freshman",
      role: "Pledge",
      imageUrl:
        "https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png",
    },
  ],
  D: [
    {
      id: 4,
      name: "Damien Koh",
      role: "VP of Recruitment",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQGjHa8RFpDKhA/profile-displayphoto-shrink_400_400/0/1656946309926?e=1677110400&v=beta&t=mSIRjcaPvxGM6SNV6HUxntnDc-tfJGJsKe3zvtARVfU",
      active: true,
    },
  ],
  E: [
    {
      id: 5,
      name: "Eagan Notokusumo",
      role: "VP of Finance",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQEX-pJelYP9lQ/profile-displayphoto-shrink_400_400/0/1642469910535?e=1677110400&v=beta&t=xO4xs2sjT6Owexmbp2-Wg7mgAFk8WyC3eKhCC0HQixQ",
    },
  ],
  J: [
    {
      id: 6,
      name: "Julie Park",
      role: "VP of Marketing",
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQHdZPGTHWZKJQ/profile-displayphoto-shrink_400_400/0/1669337453128?e=1677110400&v=beta&t=AmhLbaajCtLz8OaWrFpGFzZcgHuk-J43gRZMLMbiSbY",
    },
  ],
  N: [
    {
      id: 7,
      name: "Nam Nguyen",
      role: "VP of Internal Affairs",
      imageUrl:
        "https://media.licdn.com/dms/image/C5603AQEtz1wN1PeAmw/profile-displayphoto-shrink_400_400/0/1624822282607?e=1677110400&v=beta&t=IaigaQP4cMDmA0QquIeT8UzH21zT9Eaow7krp38JWtk",
    },
  ],
  S: [
    {
      id: 8,
      name: "Samar Saleem",
      role: "President/Founder",
      imageUrl:
        "https://media.licdn.com/dms/image/C4E03AQEhnMuPtE0eGw/profile-displayphoto-shrink_400_400/0/1657907779939?e=1677110400&v=beta&t=7CxrhEz1WD-lLP4oGe3Xjl6WngS6c24H3yqfESR87ig",
    },
    {
      id: 9,
      name: "Sneh Deshpande",
      role: "VP of Internal Affairs",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQEVH1jm84ax0A/profile-displayphoto-shrink_400_400/0/1649042616875?e=1677110400&v=beta&t=VxBCPGOWUAlXGvk0bSi8n1flSEy6IBRccQhKVGtkYO0",
    },
    {
      id: 10,
      name: "Steve Ewald",
      role: "VP of Technology",
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQHPxYjOagRJig/profile-displayphoto-shrink_400_400/0/1649132175326?e=1677110400&v=beta&t=4_IxWqZY2o5GECcPwGyIfVQX0w8tX5mp1kFUvZPyCjQ",
    },
  ],
};
const team = [
  {
    name: "Josh Brice",
    role: "VP of Member Recruitment",
    imageUrl:
      "https://media.licdn.com/dms/image/C5603AQE7b12wJDGvtg/profile-displayphoto-shrink_400_400/0/1648564209595?e=1677110400&v=beta&t=SFPXEed0FNCB9CXnbu-cNba95eiJ9SPVht1gWpSDyM4",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class MemberPage extends React.Component {
  constructor() {
    super();
    this.state = { sidebarOpen: false };
    this.setSidebarOpen = this.setSidebarOpen.bind(this);
  }

  setSidebarOpen(val) {
    this.setState({ sidebarOpen: val });
  }

  render() {
    return (
      <div className="flex h-screen">
        <Messaging />
        <Transition.Root show={this.state.sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={this.setSidebarOpen}
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
                        onClick={() => this.setSidebarOpen(false)}
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
                        className="h-8 w-auto"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/9b/6e/f39b6e96-766a-39cd-184b-2f5286f40c81/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                        alt="Kappa Theta Pi"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-4 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <hr
                        className="my-5 border-t border-gray-200"
                        aria-hidden="true"
                      />
                      <div className="space-y-1 px-2">
                        {secondaryNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <item.icon
                              className="mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            {user.name}
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

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
              <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-12 w-auto rounded-full"
                    src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/9b/6e/f39b6e96-766a-39cd-184b-2f5286f40c81/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                    alt="Your Company"
                  />
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <hr
                    className="my-5 border-t border-gray-200"
                    aria-hidden="true"
                  />
                  <div className="flex-1 space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon
                          className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="fixed bottom-0">
                <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {user.name}
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
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/9b/6e/f39b6e96-766a-39cd-184b-2f5286f40c81/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                  onClick={() => this.setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative z-0 flex flex-1 overflow-hidden">
            <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
              {/* Breadcrumb */}
              <nav
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                aria-label="Breadcrumb"
              >
                <a
                  href="#"
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                >
                  <ChevronLeftIcon
                    className="-ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Directory</span>
                </a>
              </nav>

              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      className="h-32 w-full object-cover lg:h-48"
                      src={profile.coverImageUrl}
                      alt=""
                    />
                  </div>
                  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex">
                        <img
                          className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                          src={profile.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                          <h1 className="truncate text-2xl font-bold text-gray-900">
                            {profile.name}
                          </h1>
                        </div>
                        <div className="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                          >
                            <EnvelopeIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Email</span>
                          </button>
                          <div className="flex space-x-6 md:order-2 items-center">
                            {profile.social.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <h1 className="truncate text-2xl font-bold text-gray-900">
                        {profile.name}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="border-b border-gray-200">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
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
                    {Object.keys(profile.fields).map((field) => (
                      <div key={field} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          {field}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {profile.fields[field]}
                        </dd>
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        About
                      </dt>
                      <dd
                        className="mt-1 max-w-prose space-y-5 text-sm text-gray-900"
                        dangerouslySetInnerHTML={{ __html: profile.about }}
                      />
                    </div>
                  </dl>
                </div>

                {/* Team member list */}
                <div className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
                  <h2 className="text-sm font-medium text-gray-500">
                    Team members
                  </h2>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {team.map((person) => (
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
                    ))}
                  </div>
                </div>
              </article>
            </main>
            <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex xl:flex-col">
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Brother Directory
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Search directory of 8 brothers
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
              <nav
                className="min-h-0 flex-1 overflow-y-auto"
                aria-label="Directory"
              >
                {Object.keys(directory).map((letter) => (
                  <div key={letter} className="relative">
                    <div className="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                      <h3>{letter}</h3>
                    </div>
                    <ul
                      role="list"
                      className="relative z-0 divide-y divide-gray-200"
                    >
                      {directory[letter].map((person) => (
                        <li key={person.id}>
                          <div
                            className={classNames(
                              person.active
                                ? "bg-gray-100"
                                : "hover:bg-gray-50",
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
          </div>
        </div>
      </div>
    );
  }
}
export default MemberPage;

/*export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      }
      
    </>
  )
}*/
