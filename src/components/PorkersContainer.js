import React from 'react';

import PorkerCard from './PorkerCard';
import PorkersSort from './PorkersSort';
import PorkerGreasedSort from './PorkerGreasedSort';

// import PorkersData from '../porkers_data'

export default class PorkersContainer extends React.Component {
    
    // console.log(PorkersData);
    
    render() {
        const pigCards = this.props.hogs.map(porker => (<PorkerCard porker={porker} />))
        return (
            <div>
                <div>
                    <PorkersSort 
                        handleFilter={this.props.handleFilter}
                    />
                    <PorkerGreasedSort 
                        filterGreasedPorkers={this.props.filterGreasedPorkers}
                    />
                </div>
                <div>
                  {pigCards}  
                </div>
            </div>
        )
    }
}