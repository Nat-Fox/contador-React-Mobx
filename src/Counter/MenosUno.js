import React, { Component } from 'react'
import Data from '../logicCounter/logicCounter'
import { Button } from 'react-bootstrap'

class MenosUno extends React.Component {
  render () { 
    return(
      <div>
        <div>
          <Button className='btn-click' onClick={function(){Data.disminuirNumero()}}>Disminuir</Button>
        </div>
      </div>
    )
  }
}

export default MenosUno
