import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';

import PorkersContainer from './PorkersContainer';


class App extends Component {

  state = { hogs }

  filterGreasedPorkers = (toggle) => {
    
    // const greasedHogs = this.state.hogs.map(porker => {
    //   if(porker.greased) {
    if (toggle === true) {
      const hogs =  this.state.hogs.filter(porker => porker.greased);
      this.setState({ hogs })
    } else {
      this.setState({ hogs })
    }
  }


  handleFilter = (event) => {
    console.log(event.target.value);
    if(event.target.value === 'weight') {
      const hogs = this.state.hogs.sort((porker1, porker2) => {
        const weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
        return porker1[weightKey] - porker2[weightKey];
      })
      this.setState({ hogs })
    } else if (event.target.value === 'name') {
      const hogs = this.state.hogs.sort((porker1, porker2) => {
        return porker1.name.localeCompare(porker2.name)
      })
      this.setState({ hogs })
    } else {
      return this.state.hogs;
    }
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <PorkersContainer
            hogs={this.state.hogs}
            handleFilter={this.handleFilter}
            filterGreasedPorkers={this.filterGreasedPorkers}
          />
      </div>
    )
  }
}

export default App;
