// GENERAL IMPORTS
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// PAGE IMPORTS
import Home from './components/home.js';
import Header from './components/header.js';
import About from './components/About.js';
import Analysis from './components/Analysis.js';
import Collaboration from './components/Collaboration.js';
import Contact from './components/Contact.js';
import Footer from './components/footer.js';

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <div>
          <Header />
          <Route exact path="/" exact component={Home} />
          <Route exact path="/about" exact component={About} />
          <Route exact path="/analysis" exact component={Analysis} />
          <Route exact path="/collaboration" exact component={Collaboration} />
          <Route exact path="/contact" exact component={Contact} />
          <Footer />
          </div>
        </Switch>
      </BrowserRouter>
      );
  }

}

