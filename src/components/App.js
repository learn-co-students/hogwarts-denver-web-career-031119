import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs
  }

  render() {
    return (
      <div className="App">
          < Nav />{console.log(this.state.hogs)}
      </div>
    )
  }
}

export default App;
