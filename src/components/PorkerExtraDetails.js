import React from 'react';

export default class PorkerExtraDetails extends React.Component {
    
    handleDetailsEventClick = (event) => {

    }
    
    render () {
        return (
            <div>
                <p>specialty:</p>
                <p>{this.props.porker.specialty}</p>
                <p>greased? :</p>
                <p>{ this.props.porker.greased ? 'greased up' : 'smooth as a babys bottom' }</p>
            </div>
        )
    }
}