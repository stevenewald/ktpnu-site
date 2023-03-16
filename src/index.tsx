import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemberPage from "@portal/AppContainer";
import MemberLogin from "@portal/GoogleRedirect";
import SignUp from "@portal/SignUp";
import NewUserCont from "@portal/NewUserCont";
import Maintenance from "@landing/Maintenance";

import Hero from "@landing/Hero";
import Header from "@landing/Header";
import Team from "@landing/Team";
import FAQs from "@landing/FAQs";
import Footer from "@landing/Footer";
import PortalAdvertisement from "@landing/PortalAdvertisement";
import Pillars from "@landing/Pillars";
import Greeting from "@landing/Greeting";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/functions";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import RushEvents from "@landing/RushEvents";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY_olTq-IJkQs1-VXTCgxIUzlD7_-3MXQ",
  authDomain: "www.ktpnu.com",
  projectId: "ktp-site",
  storageBucket: "ktp-site.appspot.com",
  messagingSenderId: "239929865580",
  appId: "1:239929865580:web:8871c4295a78dc93076f49",
  measurementId: "G-K67BS563H9",
  databaseURL: "https://ktp-site-default-rtdb.firebaseio.com/",
};

const app = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
var database: any;
var storage: any;

if (window.location.hostname === "localhost") {
  database = getDatabase();
  storage = getStorage();
  connectDatabaseEmulator(database, "localhost", 9000);
  connectStorageEmulator(storage, "localhost", 9199);
  firebase.functions().useEmulator("localhost", 5001);
  firebase.auth().useEmulator("http://localhost:9099");
  if (!sessionStorage.getItem("givenWarning")) {
    alert(
      "Initializing in emulator mode. If you aren't a developer, contact support@ktpnu.com immediately."
    );
    sessionStorage.setItem("givenWarning", "true");
  }
} else {
  storage = getStorage(app);
  database = getDatabase(app);
}

const maintenance = false;

class Full extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header firebase={firebase} maintenance={maintenance} />
                <Hero />
                <RushEvents />
                <Greeting />
                <Pillars />
                <PortalAdvertisement />
                <Team />
                <FAQs />
                <Footer />
              </div>
            }
          ></Route>
          <Route
            path="/member"
            element={
              <MemberPage
                firebase={firebase}
                database={database}
                storage={storage}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <MemberLogin
                firebase={firebase}
                provider={provider}
                database={database}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <SignUp
                firebase={firebase}
                database={database}
                provider={provider}
              />
            }
          ></Route>

          <Route
            path="/newuser"
            element={
              <NewUserCont
                firebase={firebase}
                provider={provider}
                database={database}
                storage={storage}
              />
            }
          ></Route>
          <Route path="/maintenance" element={<Maintenance />}></Route>
        </Routes>
      </Router>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Full />);