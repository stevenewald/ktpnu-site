import React from "react";
import Swal from "sweetalert2";
import { ref, child, get } from "firebase/database";
import PCGroup from "@images/Branding/groupPC-min.jpg";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        const dbRef = ref(this.props.database);
        get(child(dbRef, "users/" + user.uid)).then((snapshot) => {
          if(snapshot.val()["allowed"] === true && snapshot.val()["signed_up"]) {
            window.location.href = "/member";
          } else if(snapshot.val()["allowed"] === false) {
            alert("Incorrect sign out");
            this.props.firebase.auth().signOut();
          }
        })
      }
    })
  }

  completeSignin(result) {
    var user = result.user;
    if (!user.email.includes("northwestern.edu")) {
      this.props.firebase.auth().signOut();
      Swal.fire({
        icon: "error",
        title: "Login from non-northwestern email",
        text: "Close this popup to signup with your northwestern email",
      }).then(() => {
        window.location.reload();
      });
      return;
    }
    var credential = result.credential;
    //var token = credential.accessToken;

    let timerInterval;
    sessionStorage.setItem("fullName", user.displayName);
    sessionStorage.setItem("emailAddress", user.email);
    sessionStorage.setItem("photoURL", user.photoURL);

    /*
    cases:
    1. login from authorized nu email that has already been signed up
    2. login from authorized nu email that has not been signed up (continue)
    */
    const dbRef = ref(this.props.database);
    get(child(dbRef, "users/" + user.uid))
      .then((user_snapshot) => {
        if (!user_snapshot.exists()) {
          Swal.fire({
            icon: "error",
            title: "UID not in database",
            text: "Developer error: this shouldn't happen",
          });
        } else if (user_snapshot.val()["authorized"] === false) {
          this.props.firebase.auth().signOut();
          Swal.fire({
            title: "Invalid email",
            icon: "error",
            text: "We have not added your account to our system (you are not a ktp member, pledge, or alumni). If you believe this is an error, please contact support@ktpnu.com",
          }).then(() => {
            window.location.reload();
          });
        } else if (user_snapshot.val()["signed_up"]) {
          //already_signed_up
          Swal.fire({
            title: "You are already signed up, " + user.displayName + ".",
            icon: "success",
            text: "Redirecting you to the member portal...",
            timer: 2000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then(() => {
            window.location.href = "/member";
          });
        } else {
          //needs_signup
          Swal.fire({
            title: "Welcome to KTP, " + user.displayName,
            icon: "success",
            text: "We've verified your information, redirecting to account creation",
            timer: 4000,
            timerProgressBar: true,
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            window.location.href = "/newuser";
          });
        }
      })
      .catch((err) => {
        if (String(err).includes("Permission") || String(err).includes("PERMISSION")) {
          this.props.firebase.auth().signOut();
          Swal.fire({
            title: "Invalid email",
            icon: "error",
            text: "We have not added your account to our system (you are not a ktp member, pledge, or alumni). If you believe this is an error, please contact support@ktpnu.com",
          }).then(() => {
            window.location.reload();
          });
        }
      });
  }

  render() {
    return (
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://is5-ssl.mzstatic.com/image/thumb/Purple122/v4/f3/9b/6e/f39b6e96-766a-39cd-184b-2f5286f40c81/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp"
                alt="Kappa Theta Pi"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Welcome to Kappa Theta Pi!
              </h2>
              <p className="mt-2 text-sm text-gray-600 font-medium">
                Northwestern's premiere co-ed technological fraternity
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Sign up with
                  </p>

                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <div>
                      <button
                        onClick={() => {
                          this.props.firebase
                            .auth()
                            .signInWithPopup(this.props.provider)
                            .then((data) => {
                              console.log("Done with sign in");
                              this.completeSignin(data);
                            })
                            .catch((error) => {
                              const errorMessage = error.message;
                              if(String(errorMessage).includes("popup-closed")) {
                                console.log("Tell steve that there's an issue with the popup. Reverting to redirect fallback...");
                                window.location.href = "/login"
                              } else if (String(errorMessage.includes("PERMISSION"))) {
                                this.props.firebase.auth().signOut();
                                Swal.fire({
                                  title: "Invalid email",
                                  icon: "error",
                                  text: "We have not added your account to our system (you are not a ktp member, pledge, or alumni). If you believe this is an error, please contact support@ktpnu.com",
                                }).then(() => {
                                  window.location.reload();
                                });
                              }
                            });
                        }}
                        className="cursor-pointer inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 50 50"
                        >
                          <path
                            fillRule="evenodd"
                            d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        onClick={() => {
                          alert("Nonfunctional, sorry!");
                        }}
                      >
                        <span className="sr-only">Sign in with GitHub</span>
                        <svg
                          className="h-5 w-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      If you already have an account
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <a
                    href="/login"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-screen w-full object-cover"
            src={PCGroup}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default SignUp;