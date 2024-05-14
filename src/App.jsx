import { Component } from 'react'
import Contador from './componentes/Contador'
import Formulario from './componentes/Formulario'
import './App.css'

// const contadores = ["Alumnos" , "Profesores" , "Aulas" , "Etc" , "Etc"]

export default class App extends Component{
  constructor (props){
super(props);
this.state = {
  contadores: []
}
  }

  guardar(nombre){
   let nuevosContadores = this.state.contadores;
   nuevosContadores.push(nombre);
   this.setState({contadores: nuevosContadores});
  }
  
  render() {
    return(
      
      <div className='Contenedor'>
        <Formulario 
        guardar={(nombre) => this.guardar(nombre)}
        />
        <div className='ListaContadores'>
          { this.state.contadores.map((cont,index) => 
                  <Contador key={index}
                  eliminar={()=> {}}
                  >{cont}</Contador>
                )}
        </div>
      </div>
    )
  }

}