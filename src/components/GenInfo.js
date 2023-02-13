import React, { Component } from "react";
import Display from "./Display";

class GenInfo extends Component {
    constructor () {
        super()
        this.state = {
            name: "Pablo Marmol",
            email: "unmail@mail.com",
            city: "Montevideo, Uruguay",
            phone: "099999999",
            born: "11-02-1956"
        }
        
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id] : e.target.value 
        });
      };

    render() {
         const { name, 
                email,
                city,
                phone,
                born } = this.state; 
        
        return (
            <div className="container">
                <div className="header">
                    <h2>Información Básica</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="name">Nombre y apellido</label>
                        <input type="text" 
                        onChange={this.handleChange}
                        value={this.name}
                        placeholder="Pablo Marmol" 
                        id="name" />
                        <p>{this.state.name}</p>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input type="text" 
                        onChange={this.handleChange}
                        value={this.email}
                        placeholder="usuario@email.com" 
                        id="email" />
                        <p>{this.state.email}</p>
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">Ciudad</label>
                        <input type="text" 
                        onChange={this.handleChange}
                        value={this.city}
                        placeholder="Montevideo, Uruguay" 
                        id="city"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Número telefónico</label>
                        <input type="number" 
                        value={this.phone}
                        onChange={this.handleChange}
                        placeholder="59899999999" 
                        id="phone"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="born">Fecha de nacimiento</label>
                        <input type="date" 
                        value={this.born}
                        onChange={this.handleChange}
                        placeholder="11-11-1911" 
                        id="born"/>
                    </div>
                    <button className="sendBtn">Enviar</button>
                    <button className="editBtn">Editar</button>
                    <button className="delBtn">Borrar</button>
                </form>
                <Display 
                    name={name} 
                    email={email} 
                    city={city} 
                    phone={phone} 
                    born={born}
                />
            </div>        
        )
    }
}

export default GenInfo;