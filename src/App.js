import React, { Component } from 'react';
import logo from './horizontal-logo.png';
import './App.css';
import ButtonAppBar from './modules/nav-bar/button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
          <main>
              <h1 className="App-title">Creamos un ecosistema que apoya la trayectoria profesional de las mujeres</h1>
          </main>
      </div>
    );
  }
}

export default App;
