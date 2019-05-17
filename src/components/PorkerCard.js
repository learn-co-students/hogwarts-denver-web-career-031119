import React from 'react';

import PorkerExtraDetails from './PorkerExtraDetails';

export default class PorkerCard extends React.Component {
   state = {
       hasBeenClicked: false
   }

   getPorkerPicture = (porkerName) => {
       let newName = porkerName.toLowerCase().split(' ').join("_");
       let specificPic = require(`../hog-imgs/${newName}.jpg`);
       return specificPic
   }

   handleDescriptionClick = (event) => {
       this.setState({ hasBeenClicked: (!this.state.hasBeenClicked) })
   }

   handleGreasedPorkerSort = (event) => {
       
   }
   
    render() {
        return (
            <div className="pigTile" onClick={this.handleDescription}>
            <h3>{this.props.porker.name}</h3>
                <img src={this.getPorkerPicture(this.props.porker.name)}  alt={this.props.porker.name}/>
                <div>
                    {this.state.hasBeenClicked ? <PorkerExtraDetails porker={this.props.porker}/> : false}
                </div>
                <button onClick={this.handleDescriptionClick}>{this.state.hasBeenClicked ? "collapse extra info" : "show extra info"}</button>
            </div>
        )
    }
}