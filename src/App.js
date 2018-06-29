import React, { Component } from 'react';
import './App.css';
import HeaderBar from './componets/headerBar';
import BottomBar from './componets/bottomBar';
import CameraComponent from './componets/cameraComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 'selectedArea': '-', 'column': 1, 'text': '' }
  }


  render() {
    return (
      <div>
        <HeaderBar name="Dest.in" />
        <CameraComponent />
        <BottomBar />
      </div>
    );
  }
}

export default App;