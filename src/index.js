import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './hero';
import WhatIsKTP from './WhatIsKTP';
import Header from './Header';
//import firebase from 'firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberPage from './MemberPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div>
            <Header/>
            <Hero />
            <WhatIsKTP />
          </div>
        }>
        </Route>
        <Route path="/member" element={
          <MemberPage />
        }>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);