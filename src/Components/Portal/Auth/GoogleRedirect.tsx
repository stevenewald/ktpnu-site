import React from "react";
import { ref, get, child } from "firebase/database";
import Swal from "sweetalert2";

class GoogleRedirect extends React.Component<{firebase:any,provider:any,database:any},{}> {
  willRefresh:boolean;
  constructor(props:{firebase:any,provider:any,database:any}) {
    super(props);
    this.willRefresh = false;
  }

  render() {
    return <h1 id="loadingtext">Loading...</h1>;
  }

  accRetFailure() {
    Swal.fire({
      icon: "error",
      title: "Account not in system",
      text: "If you are a brother, close this popup to be redirected to the sign up page, and sign-in with your northwestern email.",
    }).then(() => {
      this.props.firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.href = "/";
        });
    });
  }

  /*login cases:
  1. login failure
  2. login from non-nu email
  3. login from unauthorized nu email
  4. login from authorized nu email but not signed up
  5. login from authorized nu email and signed up (continue)
  */

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(async (user:any) => {
      if(this.willRefresh) {
        return;
      }
      if (user) {
        //case 2
        if (!user.email.includes("northwestern.edu")) {
          this.willRefresh = true;
          this.props.firebase.auth().signOut();
          Swal.fire({
            icon: "error",
            title: "Login from non-northwestern email",
            text: "Retry the signup with your northwestern email",
          }).then(() => {
            window.location.href = "/signup";
          });
          return;
          
        }
        document.getElementById("loadingtext")!.innerHTML =
          "Fetching user info...";
        const dbref = ref(this.props.database);
        get(child(dbref, "users/" + user.uid))
          .then((snapshot) => {
            if (!snapshot.exists()) {
              Swal.fire("What");
            }

            const data = snapshot.val();
            console.log(data);
            if (data.allowed === true) {
              if (data.signed_up===true) {
                document.getElementById("loadingtext")!.innerHTML =
                  "Redirecting to member page...";
                window.location.href = "/member";
              } else {
                sessionStorage.setItem("fullName", user.displayName);
                sessionStorage.setItem("emailAddress", user.email);
                sessionStorage.setItem("photoURL", user.photoURL);
                window.location.href = "/newuser";
              }
            } else {
              // this.props.firebase.auth().signOut();
              Swal.fire({
                icon: "error",
                title: "Account not in system",
                text: "Access to the KTP Brother portal is given to pledges, brothers, and alumni. Your account was not found in the system, if you belive this is an error, contact support@ktpnu.com.",
              }).then(() => {
                // window.location.href = "/";
              });
            }
          })
          .catch((err) => {
            //case 1
            if (String(err).includes("Permission")) {
              //case 3
              this.props.firebase.auth().signOut();
              Swal.fire({
                icon: "error",
                title: "Account not in system",
                text: "Access to the KTP Brother portal is given to pledges, brothers, and alumni. Your account was not found in the system, if you belive this is an error, contact support@ktpnu.com.",
              }).then(() => {
                window.location.href = "/";
              });
            }
          });
      } else {
        document.getElementById("loadingtext")!.innerHTML =
          "Redirecting to Google login...";
        this.props.firebase.auth().signInWithRedirect(this.props.provider);
      }
    });
  }
}

export default GoogleRedirect;
