import { Component } from 'react'

export default class Contador extends Component{

  render(){
    return (
      <div className='Contador'> 
        <span className='Valor'>00</span>
        <div className='Botonera'>
          
          <span className='Boton'>-</span>
          <span className='Boton'>+</span>
           </div>
      </div>
      
    )
  }

}


