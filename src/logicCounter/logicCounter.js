import { extendObservable } from 'mobx'

// Principal Data no es un componente, es una clase de JS, para integrar uno de los primeros elementos de Mobx.
// Mobx nos permite crear elementos que sean observables por nuestras vistas, y que cuando se modifiquen la vista
// se renderice automáticamente

class PrincipalData {
  constructor () {    
    extendObservable(this, {
      numero: 0
    })
  }

  aumentarNumero () {
    this.numero = this.numero + 1
  }

  disminuirNumero () {
    this.numero = this.numero - 1
  }
}


// Creamos una instancia de la clase
var Data = new PrincipalData()

export default Data
