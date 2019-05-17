import React from 'react';

export default class PorkerSort extends React.Component {

    state = {
        hasBeenClicked: false
    }

    handleGreasedClick = (event) => {
        this.setState({ hasBeenClicked: !this.state.hasBeenClicked });
        this.props.filterGreasedPorkers(this.state.hasBeenClicked)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGreasedClick}>{ this.state.hasBeenClicked ? "show all porkers" : "show greased porkers"}</button>
            </div>
        )
    }
}