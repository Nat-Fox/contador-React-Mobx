import React, { Component } from 'react'
import Data from '../logicCounter/logicCounter'
import { Button } from 'react-bootstrap'
import './Counter.css'

class MasUno extends React.Component {
  render () { 
    return(
      <div>
        {/* Si quisieramos llamar a la función como Data.aumentarNumero tendríamos un error, ya que el método render
        crea un contexto para la ejecución, cuando ejecutamos el onclick ese contexto no existe */}    
        <div>
          <Button className='btn-click' onClick={function(){Data.aumentarNumero()}}>Aumentar</Button>
        </div>
      </div>
    )
  }
}

export default MasUno
