import React from 'react';

export default class PorkerSort extends React.Component {



    render() {
        return (
            <div>
                <select name="porkers-sort" onChange={this.props.handleFilter}>
                    <option value="">Choose a sorter</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight (lowest to highest)</option>
                    <option value="greased">Greased?</option>
                </select>
            </div>
        )
    }
}