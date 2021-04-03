// GENERAL IMPORTS
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// PAGE IMPORTS
import Home from './components/home.js';
import Header from './components/header.js';

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <div>
          <Header />
          <Route exact path="/" exact component={Home} />

          </div>
        </Switch>
      </BrowserRouter>
      );
  }

}

