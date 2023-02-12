import React, { Component } from "react";

class GenInfo extends Component {
    constructor () {
        super()
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>Información Básica</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="name">Nombre y apellido</label>
                        <input type="text" 
                        placeholder="Pablo Marmol" 
                        id="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input type="email" 
                        placeholder="usuario@email.com" 
                        id="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">Ciudad</label>
                        <input type="text" 
                        placeholder="Montevideo, Uruguay" 
                        id="city"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Número telefónico</label>
                        <input type="number" 
                        placeholder="59899999999" 
                        id="phone"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="born">Fecha de nacimiento</label>
                        <input type="date" 
                        placeholder="11-11-1911" 
                        id="born"/>
                    </div>
                    <button className="sendBtn">Enviar</button>
                    <button className="editBtn">Editar</button>
                    <button className="delBtn">Borrar</button>
                </form>
            </div>
        
        )
    }
}


export default GenInfo;
/* const GenInfo = (props) => {
  const { names } = props;
  const { cities } = props;
  const { mails } = props;
  const { dborn } = props;
  const { phones } = props;  

  return (

    <div classNameName="generalInfo">
        { <div classNameName="name">
                {names.map((name) => {
                    return <li key={name.id}>{name.text}</li>;
                })}
        </div>
        <div classNameName="city">
                {cities.map((city) => {
                    return <li key={city.id}>{city.text}</li>;
                })}
        </div>
        <div classNameName="mail">
                {mails.map((mail) => {
                    return <li key={mail.id}>{mail.text}</li>;
                })}
        </div>            
        <div classNameName="born">
                {dborn.map((born) => {
                    return <li key={born.id}>{born.text}</li>;
                })}
        </div>

        <div classNameName="phone">
                {phones.map((phone) => {
                    return <li key={phone.id}>{phone.text}</li>;
                })}
        </div> }

        
    </div>  
  );
}; */

