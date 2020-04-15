import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componets/navigaiton';
import Profile from './componets/profile'


class App extends React.Component {
  render() {
    return (
      <div>

        <NavBar />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    )
  }
}

export default App;
