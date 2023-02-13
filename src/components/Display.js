import { Component } from 'react';
import GenInfoPreview from './GenInfoPreview';

class Display extends Component {
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
         </>
          
     
      )
    } 
}

export default Display; 