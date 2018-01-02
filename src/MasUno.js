import React, { Component } from 'react'
import Data from './PrincipalData'

class MasUno extends React.Component {
  render () { 
    return(
      <div>
        {/* Si quisieramos llamar a la función como Data.aumentarNumero tendríamos un error, ya que el método render
        crea un contexto para la ejecución, cuando ejecutamos el onclick ese contexto no existe */}    
        <div>
          <button onClick={function(){Data.aumentarNumero()}}>Aumentar</button>
        </div>
      </div>
    )
  }
}

export default MasUno
