import React, {Fragment} from 'react';
import AppHeader from './components/Header';
import AppFooter from './components/Footer';
import HomeComponent from './components/HomeComponent';
import GalleryComponent from './components/GalleryComponent';
import LoginComponent from './components/LoginComponent';
import ContactsComponent from './components/ContactsComponent';
import DecorationsComponent from './components/DecorationsComponent';
import MehendiComponent from './components/MehendiComponent';
import DressesComponent from './components/DressesComponent';
import CourcesComponent from './components/CourcesComponent'; 
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
/* import './components/Header.css';*/

function App() {
  return (
    <div className= "content">
      <Fragment>
    
          <Router>
          <AppHeader/>
          <Route exact path="/">
            <HomeComponent/>
          </Route>
          <Route path="/Login">
            <LoginComponent/>
          </Route>
          <Route path="/Gallery">
            <GalleryComponent/>
          </Route>
          <Route path="/Contacts">
            <ContactsComponent/>
          </Route>
          <Route path="/Decorations">
            <DecorationsComponent />
          </Route>
          <Route path="/Mehendi">
            <MehendiComponent/>
          </Route>
          <Route path="/Dresses">
            <DressesComponent/>
          </Route>
          <Route path="/Cources">
            <CourcesComponent/>
          </Route>
          </Router>
          
          <AppFooter />
      </Fragment>
    </div>
    
  );
}

export default App;

