import React, { Component } from 'react'
import { HousesList } from './Components/HousesList'
import NavBar from './Components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HousesList  />
      </div>
    )
  }
}

export default App