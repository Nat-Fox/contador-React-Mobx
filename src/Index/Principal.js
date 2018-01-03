import React, { Component } from 'react'
// importamos la instacia creada en principal data, para tener acceso a esta.
import Data from '../logicCounter/logicCounter'
import { observer } from 'mobx-react'
import MenosUno from '../Counter/MenosUno'
import MasUno from '../Counter/MasUno'
import { Grid, Row, Col } from 'react-bootstrap'
import './Principal.css'

class Principal extends React.Component {
  render() {
    return(
      <div>

        <Grid>
          <Row>
            <Col xs={8} xsPush={2} md={8} mdPush={2} className='container-counter'>
              <div className='title-counter'>Counter</div>
              {/* Podemos renderizar desde otro componente sin el uso de props, ya que Mobx nos permite hacerlo de forma dinámica */}
              {/* Haremos que este estado se convierta en observador del estado número, esto se refiere a que cuando exista una
              modificación vuelve a ejecutar en el componente que lo esta renderizando (PrincipalData)*/}
              <div className='number-counter'>{Data.numero}</div>              
              <Row className='content-buttons'>
                <Col xs={6} md={6}><MasUno /></Col>
                <Col xs={6} md={6}><MenosUno /></Col>
              </Row>              
            </Col>
          </Row>          
        </Grid>
      </div>
    )
  }
}

// Convierte al componente en un observador
export default observer(Principal)
