import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './modules/nav-bar/button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
        <header className="App-header">

        </header>
          <main>
              <h1 className="App-title">This is Spots app, where all great stories begin</h1>
          </main>
      </div>
    );
  }
}

export default App;
