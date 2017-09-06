import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Watch from './Watch';
import Characters from './Characters';

import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />  
      	<BrowserRouter>
      		<Switch>
      			<Route path="/Watch" component={ Watch } />
      			<Route path="/Characters" component={ Characters } />
      		</Switch>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
