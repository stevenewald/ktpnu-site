import React, { useState, useEffect } from "react";
const navigation = [
  { name: 'Rush Events', href: '#rush-events' },
  { name: 'About KTP', href: '#greeting' },
  { name: 'Our Pillars', href: '#pillars' },
  { name: 'Our Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
]
 function Header() {
  /*testingFeature() {
    const addLogin = firebase.functions().httpsCallable('loginAuth');
    addLogin({
      text:'testing12345'
    }).then(() => {
      console.log("done");
    }).catch((error) => {
      console.log(error);
    });
  }*/

  // function googleSignIn() {
  //   /*const user = firebase.auth().currentUser;
  //   if (user) {
  //     window.location.href="/member";
  //   }*/
  //   window.location.href = "/signup";
  // };

  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    console.log(burgerMenu)
  })

  return (
    <header id="navbar" className="navbar bg-white shadow transition-opacity duration-300 fixed z-40 w-full opacity-100">

      {/* Mobile Navbar */}
      <nav className={`${burgerMenu ? "is-active" : "null" } navscreen:hidden mobile-nav flex py-3 border shadow-xl`}>
        <div className="w-full h-[1px] bg-gray-200 my-0"></div>
        {navigation.map((link) => (
          <a onClick={() => setBurgerMenu(!burgerMenu)} key={link.name} href={link.href} className="text-3xl font-semibold hover:text-indigo-700 ">
            {link.name}
          </a>
        ))}
        <p className="absolute text-lg font-semibold text-gray-500 bottom-[20px] left-[20px]">&copy; 2022 Kappa Theta Pi</p>
      </nav>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3" aria-label="Top">
        <div className="flex w-full items-center justify-between">
          <div className="hidden navscreen:flex items-center">
            <a href="#">
              <div className="bg-indigo-600 w-fill px-3 h-10 flex items-center border rounded-lg">
                <span className="font-medium text-white">Home</span>
              </div>
            </a>
            <div className="ml-8 pr-2 hidden space-x-8 navscreen:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden navscreen:flex space-x-4" id="firebaseui-auth-container">
          <a
            id="portalButton"
            onClick={() => {
              this.googleSignIn();
            }}
            href="#"
            className="transition h-10 flex items-center duration-100 inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 shadow-sm"
          >
            <p>Brother Portal&nbsp;&nbsp;<svg className="align-middle inline-block transform -translate-y-[3px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="#fff" width="15px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"/></svg></p>
          </a>
          <a
            id="signoutButton"
            onClick={() => {
              this.props.firebase
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
        <div className="flex items-center">
          <button className={`is-${burgerMenu ? "active" : "inactive"} z-50 burger-menu block navscreen:hidden relative w-[30px] h-[35px] cursor-pointer`} onClick={() => setBurgerMenu(!burgerMenu)}>
            <div className="bar rounded-sm"></div>
            <div className="bar rounded-sm"></div>
            <div className="bar rounded-sm"></div>
          </button>
          <div className="navscreen:hidden w-full text-center text-lg font-semibold text-gray-500">
              <p><a className="content-fill" href="#">Kappa Theta Pi</a></p>
          </div>

          {/* Invisible hamburger button for middle alignment */}
          <button className="invisible navscreen:hidden relative w-[30px] h-[35px] cursor-pointer">
            <div className="block w-full h-[5px] my-[4px] bg-indigo-600 rounded-sm block"></div>
            <div className="block w-full h-[5px] my-[4px] bg-indigo-600 rounded-sm block"></div>
            <div className="block w-full h-[5px] my-[4px] bg-indigo-600 rounded-sm block"></div>
          </button>
        </div>
      </nav>
    </header>
  )

  /*componentDidMount() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.portalButton.current.classList.remove('hidden');
      this.signoutButton.current.classList.remove('hidden');
    } else {
      this.loginButton.current.classList.remove('hidden');
    }*/
  /*firebase.auth().onAuthStateChanged(function(user) {
      document.getElementById("portalButton").classList.remove('hidden');
        document.getElementById("signoutButton").classList.remove('hidden');
        document.getElementById("signinButton").classList.remove('hidden');
      if (user) {
        document.getElementById("portalButton").classList.remove('hidden');
        document.getElementById("signoutButton").classList.remove('hidden');
        document.getElementById("signinButton").classList.add('hidden');
      } else {
        document.getElementById("portalButton").classList.add('hidden');
        document.getElementById("signoutButton").classList.add('hidden');
        document.getElementById("signinButton").classList.remove('hidden');
      }
    });
  }*/

  /*componentDidMount() {
    if(window.location.hash === "redirecting") {
      alert("is redirecting");
      window.location.hash = "";
      firebase.auth().getRedirectResult().then((result) => {
        alert("good");
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        const addLogin = firebase.functions().httpsCallable('loginAuth');
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
          addLogin({
            idToken:idToken
          });
        }).catch(function(error) {
          alert("err2");
        });

      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(errorCode);
        alert(errorMessage);
      });
    }
  }*/
}

export default Header;
