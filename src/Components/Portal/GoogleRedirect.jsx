import React from "react";

class GoogleRedirect extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1 id="loadingtext">Loading...</h1>;
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        document.getElementById("loadingtext").innerHTML =
          "Redirecting to member page...";
        window.location.href = "/member";
      } else {
        document.getElementById("loadingtext").innerHTML =
          "Redirecting to Google login...";
        this.props.firebase.auth().signInWithRedirect(this.props.provider);
      }
    });
  }
}

export default GoogleRedirect;
