import React from 'react'
import PigTile from './PigTile'

const Container = props => {

  const pigTiles = props.pigs.map((pig, i) => <PigTile {...pig} key={Date.now() + i} />)

  return(
    <div>
      {pigTiles}
    </div>
  )
}

export default Container
