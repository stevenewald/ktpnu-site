import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './hero';
import WhatIsKTP from './WhatIsKTP';
import Header from './Header';
//import firebase from 'firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberPage from './MemberPage2';
import MemberLogin from './GoogleRedirect';
import SignUp from './SignUp';
import NewUser from './NewUser';




import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/functions";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBY_olTq-IJkQs1-VXTCgxIUzlD7_-3MXQ",
  authDomain: "ktp-site.firebaseapp.com",
  projectId: "ktp-site",
  storageBucket: "ktp-site.appspot.com",
  messagingSenderId: "239929865580",
  appId: "1:239929865580:web:8871c4295a78dc93076f49",
  measurementId: "G-K67BS563H9",
  databaseURL:'https://ktp-site-default-rtdb.firebaseio.com/'
};

const app = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.functions().useEmulator("localhost", 5001);
const database = getDatabase(app);

class Full extends React.Component {
  constructor() {
    super();
    this.displayName = "";
  }
  render() {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Header firebase={firebase}/>
            <Hero />
            <WhatIsKTP />
          </div>
        }>
        </Route>
        <Route path="/member" element={
          <MemberPage firebase={firebase}/>
        }>
        </Route>
        <Route path="/login" element={
          <MemberLogin firebase={firebase} provider={provider} />
        }></Route>
        <Route path="/signup" element={
          <SignUp firebase={firebase} provider={provider} dn={this.displayName}/>
        }></Route>

        <Route path="/newuser" element={
          <NewUser firebase={firebase} provider={provider} database={database} dn={this.displayName}/>
        }></Route>
      </Routes>
    </Router>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Full />
);