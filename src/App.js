import React, { Component } from 'react';
import './App.css';
import MainMenu from 'components/MainMenu';
import NewsScraper from 'components/NewsScraper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsScraper />
      </div>
    );
  }
}

export default App;
