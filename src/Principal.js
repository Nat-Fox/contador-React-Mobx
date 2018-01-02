import React, { Component } from 'react'
// importamos la instacia creada en principal data, para tener acceso a esta.
import Data from './PrincipalData'
import MasUno from './MasUno'
import { observer } from 'mobx-react'
import MenosUno from './MenosUno'

class Principal extends React.Component {
  render() {
    return(
      <div>
        Component Principal
        {/* Podemos renderizar desde otro componente sin el uso de props, ya que Mobx nos permite hacerlo de forma dinámica */}
        {/* Haremos que este estado se convierta en observador del estado número, esto se refiere a que cuando exista una
        modificación vuelve a ejecutar en el componente que lo esta renderizando (PrincipalData)*/}
        <div>{Data.numero}</div>
        <MasUno />
        <MenosUno />

      </div>
    )
  }
}

// Convierte al componente en un observador
export default observer(Principal)
