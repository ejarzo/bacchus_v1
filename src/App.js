import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import MainMenu from 'components/MainMenu';
import NewsScraper from 'components/NewsScraper';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={NewsScraper}/>
          <Route path='/ai' component={MainMenu}/>
        </Switch>
      </div>
    );
  }
}

export default App;
