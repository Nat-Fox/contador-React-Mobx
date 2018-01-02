import React, { Component } from 'react'
import Data from './PrincipalData'

class MenosUno extends React.Component {
  render () { 
    return(
      <div>
        <div>
          <button onClick={function(){Data.disminuirNumero()}}>Disminuir</button>
        </div>
      </div>
    )
  }
}

export default MenosUno
