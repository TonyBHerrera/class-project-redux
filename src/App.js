import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './componets/navigaiton';
import Profile from './componets/profile'
import ProfileContainer from './componets/profile-container';
import NavBarBottom from './componets/narbar-bottom';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      profiles: []
    }
  }





  render() {
    return (
      <div>

        <NavBar />
        <div className="profile-contianer">
          <ProfileContainer />
        </div>
        <NavBarBottom />
      </div>
    )
  }
}

export default App;
