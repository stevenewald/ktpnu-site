import React from "react";
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Why KTP', href: '#' },
  { name: 'Pillars', href: '#' },
  { name: 'Leadership', href: '#' },
  { name: 'FAQ', href: '#' },
]

class Header extends React.Component {
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

  googleSignIn() {
    /*const user = firebase.auth().currentUser;
    if (user) {
      window.location.href="/member";
    }*/
    window.location.href = "/signup";
  }

  render() {
      return (
        <header id="navbar" className="bg-white shadow transition-opacity duration-300 fixed z-50 w-full opacity-100">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="flex w-full items-center justify-between border-b border-gray-500 py-4 lg:border-none">
              <div className="flex items-center">
                <a href="#">
                  <span className="sr-only">Kappa Theta Pi</span>
                  <img className="h-10 w-auto" src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/9b/6e/f39b6e96-766a-39cd-184b-2f5286f40c81/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp" alt="" />
                </a>
                <div className="ml-10 hidden space-x-8 lg:block">
                  {navigation.map((link) => (
                    <a key={link.name} href={link.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="ml-10 space-x-4" id="firebaseui-auth-container">
              <a
                id="portalButton"
                onClick={() => {
                  this.googleSignIn();
                }}
                href="#"
                className="transition-all duration-100 inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700 shadow-sm"
              >
                <p>Brother Portal&nbsp;&nbsp;<svg className="align-middle inline-block transform -translate-y-[3px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" fill="#fff" width="18px"><path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"/></svg></p>
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
                className="hidden md:inline-block transition-all duration-100 inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign Out (for testing)
              </a>
              </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </header>
      )
  }

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
