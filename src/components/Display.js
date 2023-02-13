import { Component } from 'react';

class Display extends Component {
  /* constructor(props){
    super()
  } */
    render() {      
      return(
       <>
          <div className="datosPersonales">Datos Personales
            <div className="name">{this.props.name}</div>
            <div className="sobreMi">Pienso luego existo</div>
            <div className="ciudad">{this.props.city}</div>
            <div className="born">{this.props.born}</div>
            <div className="phone">{this.props.phone}</div>
            <div className="mail">{this.props.email}</div>
          </div>
          <div className="educacion"> Formacion
            <div className="fechaIS">2006 </div>
            <div className="fechaES">2006</div>
            <div className="grado">achillerato</div>
            <div className="orientacion">Derecho</div>
            <div className="institucion">iceo Nº3 Dámaso Antonio Larrañaga</div>
          </div>
          <div className="expLaboral"> Experiencia Laboral
            <div className="fechaIT">Julio 2011</div>
            <div className="fechaTT">Enero 2022</div>
            <div className="empresa">{this.props.company}</div>
            <div className="cargo">Telefonista</div>
            <div className="tareas">Atención de clientes, gestión de turnos de empleados, gestión de contabilidad diaria en la caja</div>
          </div>
       
       </>
      )
    } 
}

export default Display; 