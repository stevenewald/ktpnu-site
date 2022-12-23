import React from "react";
import { ref, get, child } from "firebase/database";
import Swal from "sweetalert2";

class GoogleRedirect extends React.Component {
  render() {
    return <h1 id="loadingtext">Loading...</h1>;
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        document.getElementById("loadingtext").innerHTML =
          "Fetching user info...";
          const dbref = ref(this.props.database);
          get(child(dbref, 'users/' + user.uid + '/allowed')).then((snapshot) => {
            if(!snapshot.exists()) {
              Swal.fire({
                icon:'error',
                title:'Account not in system. If you are a brother, sign up with the link emailed to you.'
              }).then(() => {
                this.props.firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      window.location.href = "/";
                    });
              })
            }
            const data = snapshot.val();
            if(data===true) {
              document.getElementById("loadingtext").innerHTML =
                "Redirecting to member page...";
              window.location.href = "/member";
            } else {
              Swal.fire({
                icon:'error',
                title:'Account not in system. If you are a brother, sign up with the link emailed to you.'
              }).then(() => {
                this.props.firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      window.location.href = "/";
                    });
              })
            }
          }).catch((err) => {
            Swal.fire({
              icon:'error',
              title:'Account not in system. If you are a brother, sign up with the link emailed to you.'
            }).then(() => {
              this.props.firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    window.location.href = "/";
                  });
            })
          })

      } else {
        document.getElementById("loadingtext").innerHTML =
          "Redirecting to Google login...";
        this.props.firebase.auth().signInWithRedirect(this.props.provider);
      }
    });
  }
}

export default GoogleRedirect;
