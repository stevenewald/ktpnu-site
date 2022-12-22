import React from "react";

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
    window.location.href = "/login";
  }
  render() {
    return (
      <header>
        <nav
          className="absolute right-2 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex w-full items-center justify-between py-6">
            <div></div>
            <div className="ml-10 space-x-4" id="firebaseui-auth-container">
              <a
                id="portalButton"
                onClick={() => {
                  this.googleSignIn();
                }}
                href="#"
                className="transition-all duration-100 inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Brother Portal
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
                className="transition-all duration-100 inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign Out
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
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
