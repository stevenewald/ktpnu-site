import { useState } from "react";
import Logo from "@images/Branding/Logo.png";

const navigation: { name: string; href: string }[] = [
  { name: "About KTP", href: "#greeting" },
  { name: "Rush", href: "#rush-events" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

function Header(props: { maintenance: boolean; firebase: any }) {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <header
      id="navbar"
      className="navbar bg-white shadow transition-opacity duration-300 fixed z-40 w-full opacity-100"
    >
      {/* Mobile Navbar */}
      <nav
        className={`${
          burgerMenu ? "is-active" : "null"
        } navscreen:hidden mobile-nav flex py-3 border shadow-xl`}
      >
        <div className="w-full h-[1px] bg-gray-200 my-0"></div>
        {navigation.map((link) => (
          <a
            onClick={() => setBurgerMenu(!burgerMenu)}
            key={link.name}
            href={link.href}
            className="text-3xl font-semibold hover:text-indigo-700 "
          >
            {link.name}
          </a>
        ))}

        <p className="absolute text-lg font-semibold text-gray-500 bottom-[20px] left-[20px]">
          &copy; 2023 Kappa Theta Pi
        </p>
      </nav>

      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3"
        aria-label="Top"
      >
        <div className="flex w-full items-center justify-between">
          <div className="hidden navscreen:flex pl-4 items-center">
            <a href="#" className="pr-4">
              <img className="w-8 transform scale-[200%] mt-2" src={Logo}></img>
            </a>
            <div className="ml-8 pr-2 hidden space-x-8 navscreen:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div
            className="hidden navscreen:flex space-x-4"
            id="firebaseui-auth-container"
          >
            <a
              id="portalButton"
              href={props.maintenance ? "/maintenance" : "/signup"}
              className="transition h-10 flex items-center duration-100 inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 shadow-sm"
            >
              Member Portal
            </a>
            <a
              id="signoutButton"
              onClick={() => {
                props.firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    alert("Success");
                  });
              }}
              href="#"
              className="hidden h-[31px] flex items-center transition-all duration-100 rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign Out (for testing)
            </a>
          </div>
        </div>

        {/* Hamburger Navbar */}
        <div className="flex items-center justify-between">
          <button
            className={`is-${
              burgerMenu ? "active" : "inactive"
            } z-50 burger-menu block navscreen:hidden relative w-[30px] h-[35px] cursor-pointer`}
            onClick={() => setBurgerMenu(!burgerMenu)}
          >
            <div className="bar rounded-sm"></div>
            <div className="bar rounded-sm"></div>
            <div className="bar rounded-sm"></div>
          </button>
          <div className="hidden navscreen:hidden text-center text-lg font-semibold text-gray-500">
            <p>
              <a className="content-fill" href="#">
                Kappa Theta Pi
              </a>
            </p>
          </div>

          {/* Invisible hamburger button for middle alignment */}
          <a
            id="portalButton2"
            href={props.maintenance ? "/maintenance" : "/signup"}
            className="whitespace-nowrap navscreen:hidden transition h-10 flex items-center duration-100 inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 shadow-sm"
          >
            Member Portal
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
